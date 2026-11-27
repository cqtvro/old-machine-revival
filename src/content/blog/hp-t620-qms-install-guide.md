---
title: "HP T620 / T620 Plus 安装 QMS Audio OS 指南"
summary: "HP T620 / T620 Plus 主板早期 UEFI 固件与新版 Linux 内核存在引导交接死锁，UEFI 模式会卡在“正在加载…”或重启黑屏。安装与运行都需把 BIOS 切换为传统引导（Legacy）模式，本篇按 BIOS 设置、U 盘引导安装、拔盘重启三步讲清。"
category: "qms"
categoryName: "七木数播 QMS"
date: "2026-11-27"
readTime: "5 分钟阅读"
views: 1
likes: 0
tags: ["七木数播", "QMS Audio OS", "HP T620", "瘦客户机", "Legacy 引导", "UEFI", "数播安装教程"]
bannerGradient: "linear-gradient(135deg, #091528 0%, #102a45 50%, #050b14 100%)"
---

# HP T620 / T620 Plus 安装 QMS Audio OS 指南

> **说明**：HP T620 / T620 Plus 主板自带的早期 UEFI 固件与新版本 Linux 内核存在引导交接死锁问题（UEFI 模式下会卡在“正在加载…”或重启黑屏），安装与运行均需将 BIOS 切换为 **传统引导（Legacy）** 模式。

## 镜像下载

*   **系统官方镜像（GitHub，最新版安装 ISO）**：
    👉 **[点击前往 GitHub 下载安装 ISO](https://github.com/cqtvro/qms-download/releases/latest)**
*   **系统官方镜像（百度网盘，最新版安装 ISO）**：
    👉 **[百度网盘下载最新安装 ISO](https://pan.baidu.com/s/1j445htW_LeFTTpcvyGT-cQ?pwd=qmsb)**（提取码：`qmsb`）

> U 盘制作方法（Rufus 写盘）见完整安装教程：[七木数播操作系统 QMS Audio OS 官方完整安装与激活保姆级教程](/blog/qms-audio-os-install-guide)

---

## 一、BIOS 设置（安装前必做）

1. 插上写好 QMS 镜像的 U 盘与网线，开机后连续按 **`F10`** 进入 BIOS 设置界面（中文/英文菜单位置一致）：
2. **开启旧支持（Legacy）**：
   - 方向键切到 **`安全 (Security)`** -> 选择 **`安全引导配置 (Secure Boot Configuration)`**；
   - 将 **`旧支持 (Legacy Support)`** 改为 **`启用 (Enabled)`**；
   - 确保 **`安全引导 (Secure Boot)`** 为 **`禁用 (Disabled)`**；
   - 将 **`快速引导 (Fast Boot)`** 改为 **`禁用 (Disabled)`**；
   - 按 **`F10`** 接受设置。
3. **固化引导顺序（防止装完重启黑屏）**：
   - 方向键切到 **`存储 (Storage)`** -> 选择 **`引导顺序 (Boot Order)`**；
   - 将 **`传统引导源 (Legacy Boot Sources)`** 调整到 **`UEFI 引导源 (UEFI Boot Sources)`** 上方（或按界面提示直接禁用 `UEFI 引导源`）。
4. **保存退出**：
   - 切到 **`文件 (File)`** -> 选择 **`保存更改并退出 (Save Changes and Exit)`**。
   - *注：HP 主板首次启用“旧支持”重启时，黑屏画面会提示输入屏幕上的 4 位数字验证码，照着输入并按回车即可。*

---

## 二、U 盘引导并安装到内置硬盘

1. 机器重启时连续按 **`F9`** 调出启动菜单；
2. 在列表中选择 **`传统引导源 (Legacy)` 下面的 U 盘**（**切勿选择带 `UEFI` 字样的 U 盘**）；
3. 看到英文 `QMS` 引导菜单后直接回车（或等待几秒自动进入系统）；
4. 启动完成后，在屏幕提示或路由器后台查看设备获取到的局域网 IP（例如 `192.168.x.x`）；
5. 用同局域网的电脑或手机浏览器打开该 IP，在 QMS 界面中选择 **安装到内置硬盘**，等待进度完成。

---

## 三、拔盘重启与升级

1. 安装完成后**拔掉 U 盘**并重启设备；
2. 机器会按第一部分设好的 **传统引导源** 自动从内置硬盘启动 QMS 系统（约 30–50 秒后即可通过浏览器访问控制界面）；
   - *如忘记调整“引导顺序”导致重启黑屏，开机按 `F9` 手动选择“传统引导源 -> 内置硬盘”进入后，再回 BIOS 把传统引导源调到首位即可。*
3. 进入硬盘系统后，可在网页控制台直接执行 **在线 OTA 升级** 获取最新固件功能。
