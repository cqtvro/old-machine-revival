---
title: "旧台式机复活：用 PVE 零成本搭建家用 All in One 服务器（软路由 + 轻量 NAS + 家用实验室）"
summary: "家里退役的旧台式机只能堆在角落吃灰？通过免费开源的 Proxmox VE (PVE) 虚拟化系统，你可以轻松将它改造成 7x24 运行的“家庭超级服务器”：同时运行爱快/iStoreOS 软路由、Samba 文件共享、Docker 轻量服务和个人网站，让老硬件发挥出超越千元商业设备的价值！"
category: "desktop"
categoryName: "台式机/服务器"
date: "2026-05-22"
readTime: "9 分钟阅读"
views: 189
likes: 62
tags: ["PVE", "All in One", "家用服务器", "软路由", "NAS", "旧电脑复活"]
bannerGradient: "linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)"
---

很多人在升级了主力电脑后，家里都会闲置下来一台旧台式机（比如四代、六代酷睿 i5，或者老款的联想/戴尔办公整机）。挂在闲鱼上卖二三百块钱还要搭上邮费，放在家里又占地方。

最近几年，以 Celeron N100、N5105 为代表的低功耗小主机非常火爆。但实际上，**老旧台式机才是搭建家用服务器的“黄金硬件”**。它们的 CPU 单核性能依然能打，更拥有小主机无法比拟的优势：拥有多个 SATA 接口、PCIe 扩展插槽、宽敞的散热空间以及能塞下多块 3.5 寸大容量机械硬盘的机箱。

今天我们就从零开始，使用开源、企业级的虚拟化系统 **Proxmox VE (PVE)**，把闲置老电脑改造成一台万能的 **All in One 家庭服务器**。

---

## 为什么选择 Proxmox VE (PVE)？

在 Windows 系统里用 VMware Workstation 或 VirtualBox 跑虚拟机，系统本身的开销（约 2GB-3GB 内存）和图形界面的损耗非常高。而 PVE 是一款基于 Debian Linux 的**裸金属虚拟化系统（Type-1 Hypervisor）**。

PVE 的优势在于：
1. **极低开销**：系统本身仅占用不到 1GB 内存，CPU 占用几乎为零，最大化将资源留给虚拟机。
2. **LXC 容器支持**：除了常规 VM 虚拟机，PVE 原生支持超轻量的 Linux 容器（LXC），运行 Docker 服务效率极高。
3. **企业级控制台**：全中文网页管理控制台，支持虚拟机备份、快照、硬件直通（GPU/网卡/USB）等高级功能，完全免费。

---

## 一、准备工作

- **老电脑硬件**：建议至少有 8GB 内存（16GB 最佳），以及一块 128G 以上的旧固态硬盘（装 PVE 系统和虚拟机系统），外加一到两块旧机械硬盘（存储数据）。
- **U 盘**：一个 8G 以上的 U 盘用于制作启动盘。
- **镜像工具**：下载并安装 Rufus 或 Ventoy 软件。
- **PVE 系统镜像**：去 PVE 官网下载最新的 Proxmox VE ISO 镜像文件。

---

## 二、BIOS 设置与系统安装

在开机时按下快捷键（通常为 Del, F2 或 F12）进入 BIOS 设置，修改以下三项（极为关键）：

1. **启用虚拟化技术**：找到 `Intel Virtualization Technology` (或 `Intel VT-x`) 和 `VT-d`（如果是 AMD 平台则是 `SVM` 和 `IOMMU`），全部设置为 **Enabled**。
2. **开启电源管理优化**：将 `CPU C-States` 设为 **Enabled** 或 **Auto**，这关系到整机闲置时的功耗。
3. **设置通电自启**：在 Power 选项中找到 `Restore on AC Power Loss`（或类似断电通电配置），修改为 **Power On**（通电自动开机），这样一旦家里停电后恢复，服务器会自动重启。

保存 BIOS 设置，插入制作好的 U 盘启动盘，选择 U 盘启动，按照屏幕提示一步步安装。在设置网络时，为 PVE 分配一个静态 IP 地址（例如 `192.168.1.100`），网关填写你当前路由器的 IP。

安装完成后，拔掉 U 盘重启。在同局域网的另一台电脑上，打开浏览器访问：
`https://192.168.1.100:8006` （注意必须是 **https**，且带 **8006** 端口）

---

## 三、旧电脑的“省电调优”（功耗立减 50%）

很多玩家抗拒用老台式机当服务器，主要是担心功耗太大，7x24 小时运行电费吃不消。实际上，办公台式机的 CPU 在空载（Idle）状态下是非常省电的，主要是默认的 Linux 调度策略没有优化。

我们可以通过以下几步将老电脑的闲置功耗压榨到极限：

### 1. 更换国内源与移除企业订阅警告
进入 PVE 节点的 Shell 终端，输入以下命令更换为中科大或清华的免费社区源，并移除每次登录时的“无企业订阅”弹窗：

```bash
# 移除企业源
rm -f /etc/apt/sources.list.d/pve-enterprise.list

# 添加社区源
echo "deb https://mirrors.ustc.edu.cn/proxmox/debian/pve bookworm pve-no-subscription" > /etc/apt/sources.list.d/pve-no-subscription.list

# 屏蔽订阅弹窗
sed -Ezi.bak "s/(Ext.Msg.show\(\{\s+title: gettext\('No valid sub)/void\(\{\/\/\1/g" /usr/share/javascript/proxmox-widget-toolkit/proxmoxlib.js && systemctl restart pveproxy.service
```

### 2. 启用 CPU 节能调度器
默认情况下，PVE（Debian）的 CPU 调度模式为 `performance`（高性能），这会让 CPU 长期保持在高频，白白浪费电量。我们将其修改为 `powersave`（节能模式）或 `ondemand`（按需响应）：

```bash
# 安装 cpufrequtils 工具
apt update && apt install -y cpufrequtils

# 将所有 CPU 核心的调度模式修改为节能
for i in $(seq 0 $(($(nproc)-1))); do cpufreq-set -c $i -g ondemand; done
```
*调优后，一台四代 i5 台式机在只挂载单盘且空载时，整机功耗可以从 **38W** 降至 **18W-22W** 左右，一个月电费仅需 7-9 元！*

---

## 四、部署第一虚拟机：iStoreOS 软路由

iStoreOS 是一款基于 OpenWrt 的极其易用的路由系统，内置应用商店，可以一键安装各种插件。

1. **下载镜像**：去 iStoreOS 官网下载标准的 x86_64 固件（`.img.gz` 格式），解压出 `.img` 镜像。
2. **创建虚拟机**：在 PVE 网页后台点击“创建虚拟机”，ID 填 `101`，名称填 `iStoreOS`。OS 选“不使用任何介质”，系统和磁盘保持默认，CPU 给 2 核，内存给 1GB-2GB 即可。
3. **导入磁盘**：将下载的 `.img` 文件上传到 PVE 节点的 `/var/lib/vz/template/iso/` 目录，并在 Shell 终端输入以下命令将其导入到虚拟机：
   ```bash
   qm importdisk 101 /var/lib/vz/template/iso/istoreos.img local-lvm
   ```
4. **绑定网卡**：在控制台中为虚拟机添加刚才导入的未启用磁盘。如果你的老电脑有双网口，可以将其中一个网卡直接直通或桥接给 iStoreOS 作为 WAN 口接光猫，另一个网卡做 LAN 口接交换机/AP。

---

## 五、部署第二虚拟机：极简 NAS 系统（Samba + 硬盘直通）

对于家庭网络而言，使用笨重的全套 NAS 系统（如黑群晖）会占用较多系统资源。我们可以直接创建一款极简的 Debian 虚拟机，直接挂载物理硬盘，通过 Samba 服务进行极速局域网共享。

### 1. 物理硬盘直通（Passthrough）
为了保证数据安全和硬盘休眠机制，我们需要把老台式机上的 3.5 寸机械硬盘直接“直通”给 NAS 虚拟机。

在 PVE 的 Shell 中输入以下命令查看硬盘的唯一 ID：
```bash
ls /dev/disk/by-id/
```
找到你的机械硬盘（例如 `ata-WDC_WD20EZAZ-00GGJB0_WD-WCC7K5LXXXXX`），输入以下命令直通给 ID 为 `102` 的 NAS 虚拟机：
```bash
qm set 102 -scsi1 /dev/disk/by-id/ata-WDC_WD20EZAZ-00GGJB0_WD-WCC7K5LXXXXX
```
直通后，虚拟机内将获得完整的硬盘控制权，可以读取 S.M.A.R.T 信息，并完美支持硬盘自动休眠节能。

### 2. 共享文件配置
在 NAS 虚拟机（Debian）中安装 Samba 服务：
```bash
apt install -y samba
```
编辑 `/etc/samba/smb.conf`，添加共享配置：
```ini
[Share]
   comment = Home NAS Share
   path = /mnt/data
   browseable = yes
   read only = no
   guest ok = no
   create mask = 0775
   directory mask = 0775
```
这样，局域网内的 Windows、Mac、电视盒子就能以接近千兆网卡的极限速度（110MB/s）无延迟读写老硬盘里的数据了。

---

## 六、部署 Docker 基地：家用智能娱乐中心

有了软路由和 NAS 基础，我们可以再开一个 LXC 容器（或者在 Debian 虚拟机里安装 Docker），运行以下精选服务：

| 容器名称 | 服务功能 | 优势 |
| :--- | :--- | :--- |
| **qBittorrent** | 7x24 小时下载机 | 配合老机械硬盘，晚上低谷电下电影 |
| **Jellyfin** | 私人家庭影院媒体库 | 老电脑 CPU 通常自带核显，直通核显后可支持 4K 电影实时硬件解码 |
| **Home Assistant** | 智能家居控制中心 | 将家里不同品牌的智能设备（米家、涂鸦、HomeKit）串联在一起 |
| **Nginx Proxy Manager** | 简易外网反向代理 | 方便配合申请的域名，在公司也能安全访问家里的 NAS 和监控 |

---

## 结语

通过 Proxmox VE 的合理规划，这台原本要被废弃的老台式机，不仅获得了“All in One”的复活，而且在性能上秒杀市面上那些售价数千元的商业双核 NAS。

更重要的是，老硬件在虚拟化系统的加持下，变成了一个安全、可随时恢复快照的**家用网络实验室**。你可以在里面随意折腾各种 Linux 系统、测试代码、搭建私有云，而不用担心把家里的主力电脑搞崩溃。

拔掉显示器和鼠标键盘，把它扔到鞋柜或储藏室的角落，插上网线，开始享受你的极简低成本服务器之旅吧！
