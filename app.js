/* ==========================================================================
   APP.JS - APPLICATION CORE LOGIC FOR "老机复活"
   Routing, LocalStorage State, Blog Engine, Guestbook, Calculator, Theme
   ========================================================================== */

// --- 1. MOCK BLOG POSTS DATA ---
const BLOG_POSTS = [
    {
        id: "thinkpad-x220-revival",
        title: "ThinkPad X220 复活记：换上固态硬盘与 Linux Mint 的重生之路",
        summary: "老将不死，只是需要一点温和的改造。本文记录了如何为一台 2011 年的经典 ThinkPad X220 笔记本清灰换硅脂、将机械硬盘升级为 SATA SSD、并安装极其易用的 Linux Mint 系统的全过程。让 15 年前的老电脑重新成为流畅流畅工作的文字工作站！",
        category: "notebook",
        categoryName: "笔记本",
        date: "2026-05-18",
        readTime: "6 分钟阅读",
        views: 142,
        likes: 38,
        tags: ["ThinkPad", "固态硬盘", "Linux Mint", "清灰保养"],
        bannerGradient: "linear-gradient(135deg, #1e4620 0%, #388e3c 100%)",
        content: `
            <p>在数码发烧友心中，ThinkPad X220 绝对算得上一代神机。经典的 7 行键盘、标志性的红点（小红帽）、坚固的镁合金防滚架，无一不彰显着那个属于 IBM/Lenovo 交接时代的工业美学。然而，时间来到了 2026 年，这台搭载了第二代 Intel Core i5 处理器（双核四线程）的机器，在原装 Windows 7 或者臃肿的 Windows 10 下，开机需要 2 分钟，动辄风扇狂飙，卡顿无比，逐渐沦为抽屉里吃灰的铁板。</p>
            
            <p>上周，我决定把它翻出来，展开一次<strong>“老机医生”式的拯救行动</strong>。本次复活目标是：成为一台无干扰的清爽文字输入与代码练习工具。</p>

            <h2>第一步：物理复苏（清灰、换硅脂）</h2>
            <p>老电脑风扇狂飙、降频卡顿的主要元凶是<strong>散热失效</strong>。十多年的硅脂早已干涸成了水泥块，散热片里积满了毛絮。</p>
            <blockquote>
                警告：拆解老机器前，请务必关机、拔掉电源，并**取下外部电池**！防止静电或误触短路。
            </blockquote>
            <p>好在 ThinkPad X220 的可维护性极佳，官方提供了详细的 HMM（硬件维护手册）。拧下背部键盘和掌托对应的螺丝，轻轻推出掌托，拆下键盘，便能看到内部结构。清理出风口的灰尘后，擦除芯片上水泥般的干硅脂，涂上全新的信越 7921 散热硅脂。重新装回，开机，风扇声音瞬间温柔了许多。</p>

            <h2>第二步：突破木桶短板（机械硬盘换 SSD）</h2>
            <p>老机器卡顿的最大瓶颈往往不是 CPU，而是读写速度仅有 50-80MB/s 且老化严重的 5400转 机械硬盘。只要把系统盘换成固态硬盘（SSD），哪怕是 SATA 接口的，其随机读写性能也是机械硬盘的数百倍。</p>
            <p>我选购了一块 256GB 的高性价比 SATA 3.0 SSD。拆下 X220 侧面的硬盘槽单颗螺丝，抽出原装机械硬盘，换上固态，插回拧紧，搞定！整个过程不超过 2 分钟。</p>

            <h2>第三步：系统灵魂重塑（选择 Linux Mint Cinnamon）</h2>
            <p>对于这台老双核、8G 内存的电脑，Windows 10/11 的后台服务、自动更新、以及防病毒软件会吃满 CPU，导致日常卡顿。而 <strong>Linux Mint</strong> 作为一个对新手极其友好、界面布局高度类似 Windows 的系统，成为了首选。</p>
            <p>我们下载了 Linux Mint 21.3 Cinnamon Edition。使用 Rufus 工具将 ISO 镜像写入 U 盘。插入 X220，开机狂按 F12 选择 U 盘启动，一路点击下一步进行安装。由于 SSD 的加持，整个安装过程仅仅用了 8 分钟。</p>

            <h2>复活成果展示与体检</h2>
            <p>安装完成后，进行简单优化，这台老机展现出了令人惊叹的活力：</p>
            <ul>
                <li><strong>开机速度</strong>：从之前的 2 分钟缩短至 <strong>16 秒</strong>。</li>
                <li><strong>空载内存占用</strong>：仅为 <strong>850 MB</strong>，对比 Windows 10 开机动辄 3G 内存，优势巨大。</li>
                <li><strong>日常体验</strong>：使用系统自带的 Firefox 浏览器浏览技术文档、B站观看 1080P 视频，CPU 占用率在 30%-50% 之间，卡顿感完全消失。</li>
                <li><strong>文字编辑</strong>：配合经典的 7 行键盘，使用 VS Code 写 Markdown，手感爽得飞起。</li>
            </ul>
            <p><strong>总结：</strong> 仅花费了一块百元固态硬盘的费用，我们就让这台 15 年前的经典键盘神机成功重生。如果你手头也有一台吃灰的 ThinkPad 笔记本，不妨也动手试试吧！</p>
        `
    },
    {
        id: "macbook-pro-2012-upgrade",
        title: "2012 款 MacBook Pro 升级指南：如何战到 2026 年？",
        summary: "2012款非视网膜版 MacBook Pro (A1278) 是苹果历史上最后一代允许用户自行升级内存和双硬盘的笔记本。本文详细介绍如何通过升级 16G 双通道内存、双 SATA SSD 组建 Raid，以及利用 OCLP (OpenCore Legacy Patcher) 跨版本安装 macOS Ventura/Sonoma，让老Mac再战数年。",
        category: "notebook",
        categoryName: "笔记本",
        date: "2026-05-15",
        readTime: "8 分钟阅读",
        views: 289,
        likes: 67,
        tags: ["MacBook Pro", "OCLP", "macOS Sonoma", "硬件升级"],
        bannerGradient: "linear-gradient(135deg, #37474f 0%, #263238 100%)",
        content: `
            <p>苹果在 2012 年中发布的 MacBook Pro 13 英寸（非 Retina 屏，型号 A1278），被称为**“一代钉子户”**。它是苹果最后一款带有内置光驱、RJ45 网口、千兆网卡，且允许用户不破坏保修地自由更换电池、升级物理内存、更换双硬盘的笔记本。可以说，这是“最不苹果”的一代苹果电脑。</p>
            
            <p>如果你手里有一台吃灰的 A1278，先别急着低价变卖，今天我就带大家来一次**全套武装大升级**，让它无缝运行较新的 macOS 系统。</p>

            <h2>一、 硬件升级方案（榨干最后一点扩展性）</h2>
            <p>原装机器一般只有 4GB 内存和 500GB 慢速机械硬盘。我们需要采购以下升级配件：</p>
            <ul>
                <li><strong>内存</strong>：采购两条 DDR3L 1600MHz 8GB 笔记本内存，组成 <strong>16GB 双通道</strong>（虽然官方声称最大支持 8G，但 Intel 三代 i5/i7 实际完全支持 16G）。</li>
                <li><strong>主硬盘</strong>：采购一块 500GB 的 SATA 3.0 SSD，安装在原装硬盘位，作为系统盘。</li>
                <li><strong>副硬盘（可选）</strong>：买一个 9.5mm 的笔记本光驱位硬盘托架，拆掉老旧不用的 DVD 光驱，将换下来的旧机械硬盘（或买个小 SSD）塞进托架，组装成双硬盘系统。</li>
            </ul>
            <p>升级完毕后，启动硬件检测，16G 内存一次性点亮，硬件基础大功告成！</p>

            <h2>二、 系统破壁：利用 OpenCore Legacy Patcher 安装新系统</h2>
            <p>2012 款 MacBook 官方支持的最先进系统止步于 macOS 10.15 Catalina。许多现在的软件（如最新版 Office、Xcode、Adobe 等）已经要求 macOS 12 甚至 13 以上。</p>
            <p>好在开源社区有大名鼎鼎的 <strong>OpenCore Legacy Patcher (OCLP)</strong>。它能让老旧的、不受官方支持的 Mac 电脑顺利安装并运行 macOS Big Sur、Monterey、Ventura 甚至 Sonoma。</p>

            <h3>核心安装步骤：</h3>
            <ol>
                <li>在老 Mac 上下载并运行最新版 <a href="https://dortania.github.io/OpenCore-Legacy-Patcher/" target="_blank" class="inline-link">OCLP 软件</a>。</li>
                <li>在软件内点击“Create macOS Installer”，选择你想下载的系统版本（推荐安装 Ventura 13，对老机器核显支持最稳定）。</li>
                <li>下载完成后，插入一个 16G 以上的 U 盘，写入系统镜像并构建 OpenCore 引导程序到该 U 盘中。</li>
                <li>重启电脑，按住 Option 键，选择 EFI Boot 引导，进入 macOS 恢复模式，格式化 SSD，开始安装新系统。</li>
                <li>安装完毕进入桌面后，打开 OCLP，点击“Install OpenCore to target disk”将引导写入本地 SSD，并安装 Root Patches 注入老旧显卡和网卡的硬件驱动。</li>
            </ol>

            <h2>三、 使用体验与性能报告</h2>
            <p>升级到 16G 内存 + 固态硬盘，并在 OCLP 辅助下运行 macOS Ventura 的 A1278，体验如下：</p>
            <blockquote>
                由于苹果在系统底层引入了 Metal 图形加速，OCLP 在注入补丁后，HD4000 核显的硬件加速完全正常。系统的窗口缩放、台前调度（Stage Manager）动效十分顺滑。
            </blockquote>
            <p>打开 Safari 网页，多开数十个标签页也毫无压力（这多亏了 16G 内存的功劳）。播放 Youtube 1080P 60帧 视频完全不丢帧。作为一个文字录入、简易 Python 开发、播放网页音视频的备用工具，它的体验绝对可以媲美 2018 年前后的非视网膜机型。</p>
            <p>老机复活的乐趣，不仅在于拯救了一件物品，更在于我们通过技术手段，打破了厂商设下的“计划性报废”壁垒。</p>
        `
    },
    {
        id: "ipad3-second-screen",
        title: "拯救吃灰的 iPad 3：将其改造成桌面副屏与电子时钟",
        summary: "手头有退役的初代/2代/3代旧 iPad，既装不了现代 App，系统又卡得要死？千万别扔！由于旧 iPad 依然拥有一块高素质的屏幕，我们可以通过配置，将其改造成无延迟的桌面副屏、精美的电子时钟或智能家居中控板。",
        category: "others",
        categoryName: "其他改造",
        date: "2026-05-10",
        readTime: "4 分钟阅读",
        views: 98,
        likes: 22,
        tags: ["iPad 3", "副屏", "电子时钟", "旧物利用"],
        bannerGradient: "linear-gradient(135deg, #1565c0 0%, #1e88e5 100%)",
        content: `
            <p>iPad 3（第三代 iPad，发布于 2012 年）是苹果第一款搭载 Retina 视网膜屏幕的 iPad。虽然它的处理器以现在的标准来看极其落后，系统也永久停留在了 iOS 9.3.5，但那块 9.7 英寸、2048 x 1536 分辨率、像素密度达 264 ppi 的屏幕，即使在今天看依然极其细腻、色彩艳丽。</p>
            
            <p>现在的它，App Store 基本无法下载软件，网页打开也极其卡顿。该怎么复活它？这里有两个超实用且低成本的方案。</p>

            <h2>方案一：改造成无线桌面副屏</h2>
            <p>我们可以利用第三方软件，让 iPad 3 变成电脑（Windows/Mac）的第二块显示器，用来显示电脑上的微信窗口、网盘下载进度、甚至网页文档。</p>
            
            <h3>使用 Weylus 或 Splashtop Wired XDisplay</h3>
            <p>由于旧版 iOS 限制，许多现代副屏软件（如 Duet Display、Spacedesk）的最新客户端已经无法在 iOS 9 上运行。我们可以使用以下兼容旧系统的方案：</p>
            <ul>
                <li><strong>Splashtop Wired XDisplay</strong>：通过 USB 数据线连接，支持 iOS 9。你只需要在电脑端下载 Host，并在 iPad 3 上安装旧版 Client（可以使用同 Apple ID 的老账号购买记录下载，或者使用爱思助手导入免签 IPA 历史版本）。由于是线连，延迟极低，看视频或刷网页体验极佳。</li>
                <li><strong>Weylus (开源)</strong>：这是一个开源项目，可以将任何有浏览器的设备变成电脑副屏。在电脑运行 Weylus，iPad 3 只需要打开内置的 Safari 浏览器，输入电脑的局域网 IP 地址，就能瞬间投屏，甚至还支持 iPad 的触摸和手写笔迹反向控制电脑！</li>
            </ul>

            <h2>方案二：变身颜值极高的“桌面太空舱”电子时钟与天气看板</h2>
            <p>如果你不需要副屏，可以直接买个十几块钱的木质桌面支架，让 iPad 3 长期插电，放在书桌旁作为桌搭组件。</p>
            <p>在 iPad 3 上的 Safari 浏览器中，访问专门的时钟网页（如一些极简的 HTML5 翻页时钟、或者我们小站的特效时钟页面），设置 iPad 为“永不息屏”，一个极具科技感、超大字体的桌面翻页时钟就诞生了！配合温润的木质支架，颜值瞬间拉满，丝毫不亚于市面上几百元的智能天气时钟。</p>

            <p><strong>防鼓包安全提示：</strong> 如果作为固定桌面摆件长期插电使用，请选用**带智能断电的插座**或质量过硬的慢充充电头，最好定期给电池放放电，防止老旧锂电池因为长期过充而膨胀鼓包。</p>
        `
    },
    {
        id: "raspberry-pi-nas",
        title: "树莓派与旧机械硬盘：零成本搭建家用低功耗 NAS 指南",
        summary: "升级电脑换下来的旧 3.5 寸或 2.5 寸机械硬盘无处安置？配合一个树莓派（或任意低功耗小主机）与开源的 OMV (OpenMediaVault) 系统，就能在局域网内搭建一台 7x24 小时在线的私人云盘，备份照片、下载电影、共享文件！",
        category: "system",
        categoryName: "系统/优化",
        date: "2026-05-05",
        readTime: "7 分钟阅读",
        views: 187,
        likes: 51,
        tags: ["树莓派", "OMV", "NAS", "旧硬盘"],
        bannerGradient: "linear-gradient(135deg, #e65100 0%, #f57c00 100%)",
        content: `
            <p>随着固态硬盘的价格逐年走低，许多人家里的主力电脑都已经换上了全固态。那些替换下来的 500GB、1TB 旧机械硬盘，卖二手值不了几块钱，放在抽屉里又觉得可惜。</p>
            <p>今天我们就来用一台闲置的树莓派（Raspberry Pi 3B+ 或 4B），搭配易用的易驱线，低成本搭建一台<strong>家用微型 NAS (网络附加存储)</strong>，满足日常照片备份和多端文件共享的需求。</p>

            <h2>准备工作</h2>
            <ul>
                <li><strong>闲置板卡</strong>：树莓派 3B/3B+/4B 或 5（甚至其他带有千兆网口的闲置小主机）。</li>
                <li><strong>老硬盘 + 易驱线</strong>：旧 2.5 寸笔记本机械硬盘（如果是 3.5 寸大硬盘，需要购买带独立 12V 供电的 SATA 转 USB 易驱线，因为树莓派的 USB 接口供电不足以启动 3.5 寸硬盘）。</li>
                <li><strong>存储卡</strong>：一张 16G 以上的 MicroSD 卡（用于安装树莓派系统）。</li>
                <li><strong>网线</strong>：千兆网线一条，连接至路由器。</li>
            </ul>

            <h2>第一步：系统烧录与基础配置</h2>
            <p>推荐安装官方的 <strong>Raspberry Pi OS Lite</strong>（64位，无桌面环境版），因为 NAS 不需要图形界面，无桌面版可以节省大量 CPU 和内存资源。</p>
            <p>使用官方的 Raspberry Pi Imager 工具将 Lite 系统烧录至 SD 卡，在烧录设置里提前开启 SSH、设置好 WiFi 密码和用户名。烧录完成后插卡开机，在路由器后台找到树莓派的 IP 地址。</p>

            <h2>第二步：安装 OpenMediaVault (OMV)</h2>
            <p>OpenMediaVault 是一个基于 Debian 的极佳开源 NAS 操作系统，拥有非常强大的网页管理后台，省去了我们在终端手动配置 Samba / NFS 的繁琐步骤。</p>
            <p>通过 SSH 登录树莓派，输入以下一键安装脚本（需要稳定的网络环境）：</p>
            <code>wget -O - https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/install | sudo bash</code>
            <p>脚本运行大约需要 15-20 分钟。安装完成后，树莓派会自动重启。</p>

            <h2>第三步：挂载硬盘与创建共享文件夹</h2>
            <ol>
                <li>在电脑浏览器输入树莓派的 IP 地址，进入 OMV 网页控制台（默认用户名 <code>admin</code>，密码 <code>openmediavault</code>）。</li>
                <li>将装有老硬盘的易驱线插入树莓派的 USB 3.0 接口（蓝色接口）。</li>
                <li>在 OMV 后台的“存储器” -> “磁盘”中，能看到我们的旧硬盘。点击“挂载”并应用更改。</li>
                <li>在“服务” -> “SMB/CIFS”中启用文件共享服务。</li>
                <li>在“共享文件夹”中，添加硬盘上的文件夹，设置读写权限（如允许 Guest 匿名读取，或设置账号密码访问）。</li>
            </ol>

            <h2>第四步：尽情享用你的私人微型云</h2>
            <p>在 Windows 电脑上打开“此电脑”，点击上方“映射网络驱动器”，输入 <code>\\\\树莓派IP\\共享文件夹名</code>，输入账号密码后，就能像本地硬盘一样拖拽读写文件了！</p>
            <p>在手机上，可以使用 <strong>FE文件管理器</strong> 或 <strong>nPlayer</strong> 连上这个网络驱动器，直接流畅播放 NAS 硬盘里的 1080P 电影，照片备份也变得无比简单。</p>
            <blockquote>
                **能耗优势：** 这台树莓派 NAS 的日常运行功耗仅为 <strong>3W - 5W</strong> 左右，一年不关机电费也不过十几元，比用旧台式机改造成的 NAS 省电百倍，极其适合作为轻量级家庭文件中心。
            </blockquote>
        `
    }
];

// --- 2. CUSTOM RETRO AVATARS (SVG strings) ---
const RETRO_AVATARS = [
    // 0. Retro Computer Monitor
    `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="50" r="46" fill="#edf4ec" stroke="#2e7d32" stroke-width="4"/>
        <rect x="25" y="25" width="50" height="36" rx="4" fill="#ffffff" stroke="#2e7d32" stroke-width="5"/>
        <path d="M40,61 L35,80 L65,80 L60,61 Z" fill="#ffffff" stroke="#2e7d32" stroke-width="5"/>
        <line x1="32" y1="43" x2="48" y2="43" stroke="#2e7d32" stroke-width="4"/>
        <circle cx="60" cy="43" r="3" fill="#ff9800" stroke="none"/>
    </svg>`,
    // 1. Floppy Disk (Retro floppy)
    `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="50" r="46" fill="#fff3e0" stroke="#f57c00" stroke-width="4"/>
        <path d="M26,26 L66,26 L74,34 L74,74 L26,74 Z" fill="#ffffff" stroke="#f57c00" stroke-width="5"/>
        <rect x="36" y="52" width="28" height="22" fill="#fff" stroke="#f57c00" stroke-width="4"/>
        <rect x="38" y="26" width="20" height="16" fill="#f57c00" stroke="none"/>
    </svg>`,
    // 2. Circuit Board/Chip
    `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="50" r="46" fill="#e3f2fd" stroke="#1e88e5" stroke-width="4"/>
        <rect x="28" y="28" width="44" height="44" rx="6" fill="#ffffff" stroke="#1e88e5" stroke-width="5"/>
        <circle cx="50" cy="50" r="10" fill="#1e88e5" stroke="none"/>
        <line x1="50" y1="16" x2="50" y2="28" stroke="#1e88e5" stroke-width="5"/>
        <line x1="50" y1="72" x2="50" y2="84" stroke="#1e88e5" stroke-width="5"/>
        <line x1="16" y1="50" x2="28" y2="50" stroke="#1e88e5" stroke-width="5"/>
        <line x1="72" y1="50" x2="84" y2="50" stroke="#1e88e5" stroke-width="5"/>
    </svg>`,
    // 3. Game Controller
    `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="50" r="46" fill="#fce4ec" stroke="#e91e63" stroke-width="4"/>
        <rect x="24" y="34" width="52" height="32" rx="16" fill="#ffffff" stroke="#e91e63" stroke-width="5"/>
        <path d="M32,50 L42,50 M37,45 L37,55" stroke="#e91e63" stroke-width="5"/>
        <circle cx="60" cy="50" r="4" fill="#e91e63" stroke="none"/>
        <circle cx="68" cy="50" r="4" fill="#e91e63" stroke="none"/>
    </svg>`,
    // 4. Linux Tux Mascot (simplified cute icon)
    `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="50" r="46" fill="#eceff1" stroke="#37474f" stroke-width="4"/>
        <ellipse cx="50" cy="53" rx="20" ry="24" fill="#ffffff" stroke="#37474f" stroke-width="5"/>
        <circle cx="43" cy="38" r="3" fill="#37474f" stroke="none"/>
        <circle cx="57" cy="38" r="3" fill="#37474f" stroke="none"/>
        <path d="M46,45 Q50,52 54,45 Z" fill="#ffb74d" stroke="#37474f" stroke-width="3"/>
        <path d="M28,68 Q18,65 24,52" stroke="#37474f" stroke-width="5"/>
        <path d="M72,68 Q82,65 76,52" stroke="#37474f" stroke-width="5"/>
    </svg>`,
    // 5. Gear/Screwdriver (Eco DIY)
    `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="50" cy="50" r="46" fill="#f1f8e9" stroke="#558b2f" stroke-width="4"/>
        <circle cx="50" cy="50" r="14" fill="#ffffff" stroke="#558b2f" stroke-width="5"/>
        <path d="M50,18 L50,28 M50,72 L50,82 M18,50 L28,50 M72,50 L82,50 M28,28 L36,36 M64,64 L72,72 M72,28 L64,36 M36,64 L28,72" stroke="#558b2f" stroke-width="5"/>
    </svg>`
];

// --- 3. STATE MANAGER & STORAGE ---
const Store = {
    // Likes mapping: { postId: boolean }
    getLikes() {
        return JSON.parse(localStorage.getItem("omr_likes") || "{}");
    },
    saveLike(postId, status) {
        const likes = this.getLikes();
        if (status) {
            likes[postId] = true;
        } else {
            delete likes[postId];
        }
        localStorage.setItem("omr_likes", JSON.stringify(likes));
    },

    // Comments mapping: { postId: [ {id, nickname, avatarIdx, text, date} ] }
    getComments(postId) {
        const allComments = JSON.parse(localStorage.getItem("omr_comments") || "{}");
        return allComments[postId] || [];
    },
    saveComment(postId, comment) {
        const allComments = JSON.parse(localStorage.getItem("omr_comments") || "{}");
        if (!allComments[postId]) {
            allComments[postId] = [];
        }
        allComments[postId].push(comment);
        localStorage.setItem("omr_comments", JSON.stringify(allComments));
        
        // Update stats
        this.updateProfileStats();
    },

    // Guestbook messages: [ {id, nickname, avatarIdx, text, date, likes} ]
    getGuestbookMessages() {
        const defaultMessages = [
            {
                id: "init-1",
                nickname: "垃圾佬陈叔",
                avatarIdx: 0,
                text: "用螺丝刀和 Linux Mint 救活了我的老古董戴尔 D630，现在摆在修车店放歌和记录账单，非常流畅！支持站长！",
                date: "2026-05-19 14:32",
                likes: 8
            },
            {
                id: "init-2",
                nickname: "Geek_Ada",
                avatarIdx: 2,
                text: "正好手里有一块吃灰的 500G 固态，准备按照站长的文章把那台 A1278 MacBook 拿出来装个 macOS Sonoma 试试看，希望能成功启动！",
                date: "2026-05-19 18:05",
                likes: 5
            },
            {
                id: "init-3",
                nickname: "小新新",
                avatarIdx: 4,
                text: "留言板的设计很清新啊，那个电脑加嫩芽的小 Logo 真的太有寓意了。希望小站越办越好，少点电子垃圾，多点折腾的快乐！",
                date: "2026-05-20 09:12",
                likes: 12
            }
        ];
        
        const stored = localStorage.getItem("omr_guestbook");
        if (!stored) {
            localStorage.setItem("omr_guestbook", JSON.stringify(defaultMessages));
            return defaultMessages;
        }
        return JSON.parse(stored);
    },
    saveGuestbookMessage(msg) {
        const msgs = this.getGuestbookMessages();
        msgs.unshift(msg); // Add to the top of the wall
        localStorage.setItem("omr_guestbook", JSON.stringify(msgs));
        
        // Update stats
        this.updateProfileStats();
    },
    deleteGuestbookMessage(id) {
        let msgs = this.getGuestbookMessages();
        msgs = msgs.filter(m => m.id !== id);
        localStorage.setItem("omr_guestbook", JSON.stringify(msgs));
        
        // Update stats
        this.updateProfileStats();
    },
    likeGuestbookMessage(id) {
        const msgs = this.getGuestbookMessages();
        const msg = msgs.find(m => m.id === id);
        if (msg) {
            msg.likes = (msg.likes || 0) + 1;
            localStorage.setItem("omr_guestbook", JSON.stringify(msgs));
        }
    },

    // Total stats count helper
    updateProfileStats() {
        const totalPosts = BLOG_POSTS.length;
        const postNumEl = document.getElementById("stat-post-count");
        const commentNumEl = document.getElementById("stat-comments-count");
        
        if (postNumEl) postNumEl.innerText = totalPosts;
        if (commentNumEl) commentNumEl.innerText = "云端";
    }
};

// --- 4. HARDWARE CALCULATOR RULES ---
function getCalculatorAdvice(cpu, ram, disk) {
    let advice = {
        hardware: "",
        os: "",
        usage: ""
    };

    if (cpu <= 2) {
        // Low CPU (Single or Dual Core)
        if (ram <= 2) {
            // Very low specs
            advice.hardware = disk === "hdd" 
                ? "💡 极其建议升级一块 120G SATA 固态硬盘（仅需几十元），并尽量加内存至 4GB。否则系统读写会是毁灭性的瓶颈。"
                : "💡 固态硬盘已到位，CPU和内存是瓶颈，无需购买昂贵配件，不建议加装高规格硬件。";
            advice.os = "🐧 推荐极轻量级 Linux 方案：**AntiX Linux**、**Puppy Linux** 或 **Tiny Core**。切勿安装 Windows 10/11。";
            advice.usage = "📺 **轻量化场景**：老歌播放机、命令行Linux练手、单机红白机模拟器、轻量软路由（如 OpenWrt）。";
        } else {
            // Dual core, 3G - 16G RAM
            advice.hardware = disk === "hdd"
                ? "💡 必须升级固态硬盘 (SSD) 作为系统盘。当前内存 (" + ram + "G) 尚可，但机械硬盘会拖垮整个体验。"
                : "💡 当前配置 (" + ram + "G 内存 + 固态硬盘) 较为均衡。可考虑给风扇清灰并重涂硅脂。";
            
            if (ram < 8) {
                advice.os = "🐧 推荐轻量级图形系统：**Linux Mint (XFCE Edition)**、**ChromeOS Flex** 或 **Debian + LXDE**。";
                advice.usage = "✍️ **文字工作站/影音机**：轻度网页浏览、文档输入 (Markdown/WPS)、老游戏模拟器 (PPSSPP/RetroArch)。";
            } else {
                advice.os = "🐧 推荐主流 Linux：**Linux Mint (Cinnamon)** 或轻量化定制版 Windows 10 LTSC 2021。";
                advice.usage = "💻 **日常备用机**：上网课、儿童编程学习、文档码字、作为家庭旁路由/简易文件共享服务器。";
            }
        }
    } else {
        // Quad Core or more (Modern/Semi-modern CPU)
        if (ram < 8) {
            advice.hardware = "💡 强烈建议将内存升级到 **8GB 或 16GB** 双通道，这能大幅提升多任务切换流畅度。另外必须确保系统安装在固态硬盘 (SSD) 上。";
            advice.os = "🐧 **Linux Mint (Cinnamon)**、**Ubuntu LTS**，或 **ChromeOS Flex**；Windows 用户推荐 **Windows 10 LTSC**。";
            advice.usage = "🖥️ **轻度办公与编程**：网页浏览、Office 办公三件套、VS Code 代码编写、运行简易 Docker 容器。";
        } else {
            // Excellent specs for retro revival
            advice.hardware = disk === "hdd"
                ? "💡 系统万事俱备，唯一短板是机械硬盘。**请务必换上固态硬盘 (SSD)**，你会感觉电脑速度瞬间翻倍！"
                : "🌟 硬件配置完美！对于老机复活而言，当前性能完全溢出。仅需做日常清灰保养即可。";
            advice.os = "💻 **Windows 10 22H2 / LTSC**，或主流 Linux 发行版（如 **Ubuntu**、**Manjaro**）；老Mac可通过 OCLP 安装 **macOS Ventura**。";
            advice.usage = "🏠 **高性能用途**：家庭 7x24 小时低功耗 NAS 服务器、家用影音多媒体中心 (Kodi/Plex)、Linux 编程学习机、智能家居 Home Assistant 控制中心。";
        }
    }

    return advice;
}

// --- 5. APP CONTROLLER & ROUTING ---
const App = {
    // Current Active Route View
    currentViewId: "home-view",

    init() {
        // Start Theme
        this.initTheme();
        
        // Start Router
        this.initRouter();
        
        // Register Event Listeners
        this.registerEvents();
        
        // Render initial view elements
        this.renderFeaturedPosts();
        this.renderBlogGrid();
        
        // Update stats
        Store.updateProfileStats();
    },

    // Theme Management
    initTheme() {
        const themeToggle = document.getElementById("theme-toggle");
        if (!themeToggle) return;

        const moonIcon = themeToggle.querySelector(".moon-icon");
        const sunIcon = themeToggle.querySelector(".sun-icon");

        const setSourceTheme = (theme) => {
            if (theme === "dark") {
                document.documentElement.setAttribute("data-theme", "dark");
                moonIcon.style.display = "none";
                sunIcon.style.display = "block";
            } else {
                document.documentElement.removeAttribute("data-theme");
                moonIcon.style.display = "block";
                sunIcon.style.display = "none";
            }
            localStorage.setItem("omr_theme", theme);
            this.updateCusdisTheme();
        };

        // Check stored theme or preferred media
        const storedTheme = localStorage.getItem("omr_theme");
        if (storedTheme) {
            setSourceTheme(storedTheme);
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setSourceTheme(prefersDark ? "dark" : "light");
        }

        themeToggle.addEventListener("click", () => {
            const isDark = document.documentElement.getAttribute("data-theme") === "dark";
            setSourceTheme(isDark ? "light" : "dark");
        });
    },

    // Cusdis Dynamic Helpers
    updateCusdisTheme() {
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        const cusdisThread = document.getElementById("cusdis_thread");
        if (cusdisThread) {
            cusdisThread.setAttribute("data-theme", isDark ? "dark" : "light");
            if (window.CUSDIS && typeof window.CUSDIS.setTheme === "function") {
                window.CUSDIS.setTheme(isDark ? "dark" : "light");
            }
            // Sync style injection
            const iframe = cusdisThread.querySelector("iframe");
            if (iframe) {
                this.applyCustomIframeStyles(iframe);
            }
        }
    },

    applyCustomIframeStyles(iframe) {
        const injectStyles = () => {
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            if (!doc) return;

            // Remove existing style block if any
            const existing = doc.getElementById("omr-custom-cusdis-style");
            if (existing) existing.remove();

            const isDark = document.documentElement.getAttribute("data-theme") === "dark";
            const style = doc.createElement("style");
            style.id = "omr-custom-cusdis-style";
            
            // Define light / dark CSS variables inside the iframe matching our main site exactly
            const variables = isDark ? `
                --primary: #81c784;
                --primary-light: #1b261d;
                --primary-medium: #388e3c;
                --primary-hover: #a5d6a7;
                --bg-base: #111612;
                --bg-card: #18201a;
                --text-main: #edf4ec;
                --text-muted: #b0bec5;
                --text-light: #78909c;
                --border: rgba(129, 199, 132, 0.12);
                --border-strong: #37474f;
            ` : `
                --primary: #2e7d32;
                --primary-light: #e8f5e9;
                --primary-medium: #a5d6a7;
                --primary-hover: #1b5e20;
                --bg-base: #f7f9f6;
                --bg-card: #ffffff;
                --text-main: #2c3e50;
                --text-muted: #546e7a;
                --text-light: #90a4ae;
                --border: rgba(46, 125, 50, 0.09);
                --border-strong: #cfd8dc;
            `;

            style.textContent = `
                :root {
                    ${variables}
                }
                
                /* Reset backgrounds & fonts to match site */
                html, body {
                    background-color: transparent !important;
                    font-family: 'Nunito', 'Noto Sans SC', system-ui, -apple-system, sans-serif !important;
                    color: var(--text-main) !important;
                    font-size: 15px !important;
                }

                /* Inputs styling */
                input, textarea {
                    background-color: var(--bg-card) !important;
                    border: 1px solid var(--border-strong) !important;
                    border-radius: 8px !important;
                    color: var(--text-main) !important;
                    padding: 0.65rem 0.85rem !important;
                    font-size: 0.95rem !important;
                    outline: none !important;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
                    font-family: inherit !important;
                }

                input:focus, textarea:focus {
                    border-color: var(--primary) !important;
                    box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.15) !important;
                }

                /* Submit Button styling */
                button[type="submit"], .bg-blue-500 {
                    background-color: var(--primary) !important;
                    color: #ffffff !important;
                    font-weight: 700 !important;
                    font-size: 0.9rem !important;
                    padding: 0.6rem 1.4rem !important;
                    border-radius: 50px !important;
                    border: none !important;
                    cursor: pointer !important;
                    transition: all 0.2s ease !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    font-family: inherit !important;
                }

                button[type="submit"]:hover, .bg-blue-500:hover {
                    background-color: var(--primary-hover) !important;
                    transform: translateY(-1px) !important;
                    opacity: 0.95;
                }

                /* Meta labels & headers */
                .text-xs, .text-sm, .text-gray-500 {
                    color: var(--text-muted) !important;
                }

                /* Comment layout */
                .border, .border-gray-200 {
                    border-color: var(--border) !important;
                }

                /* Text inside comments */
                .text-gray-900 {
                    color: var(--text-main) !important;
                }

                /* Reply box borders */
                .my-2 {
                    margin-top: 0.5rem !important;
                    margin-bottom: 0.5rem !important;
                }

                /* Customize Cusdis layout padding */
                #root {
                    padding: 0 !important;
                }
            `;
            doc.head.appendChild(style);

            // Direct dynamic resizer setup
            const syncHeight = () => {
                try {
                    const scrollHeight = doc.body.scrollHeight;
                    if (scrollHeight > 0) {
                        iframe.style.height = (scrollHeight + 20) + "px";
                    }
                } catch (e) {}
            };

            // Run once immediately
            syncHeight();

            // Set up MutationObserver to auto-sync height whenever comments or DOM changes inside the iframe
            if (window.MutationObserver) {
                const observer = new MutationObserver(syncHeight);
                observer.observe(doc.body, { childList: true, subtree: true, attributes: true });
            } else {
                // Fallback interval
                setInterval(syncHeight, 500);
            }
        };

        // Inject when loaded
        iframe.addEventListener("load", injectStyles);
        // Run immediately if already loaded
        injectStyles();
    },

    renderCusdis(containerId, pageId, title, urlPath) {
        const container = document.getElementById(containerId);
        const cusdisThread = document.getElementById("cusdis_thread");
        if (!container || !cusdisThread) return;

        // Move the element
        container.appendChild(cusdisThread);

        // Update attributes
        cusdisThread.setAttribute("data-page-id", pageId);
        cusdisThread.setAttribute("data-page-title", title);
        
        // Formulate correct URL
        const fullUrl = window.location.origin + window.location.pathname + urlPath;
        cusdisThread.setAttribute("data-page-url", fullUrl);

        // Set theme
        const isDark = document.documentElement.getAttribute("data-theme") === "dark";
        cusdisThread.setAttribute("data-theme", isDark ? "dark" : "light");

        // Render
        if (window.CUSDIS && typeof window.CUSDIS.renderTo === "function") {
            window.CUSDIS.renderTo(cusdisThread);
            
            // Periodically check/apply custom iframe styles to handle load delay
            let checkCount = 0;
            const checkIframeInterval = setInterval(() => {
                const iframe = cusdisThread.querySelector("iframe");
                if (iframe) {
                    this.applyCustomIframeStyles(iframe);
                    clearInterval(checkIframeInterval);
                }
                checkCount++;
                if (checkCount > 20) clearInterval(checkIframeInterval); // stop checking after 2 seconds
            }, 100);
        }
    },

    // Router handling based on hash changes
    initRouter() {
        const handleRoute = () => {
            const hash = window.location.hash || "#home";
            let viewId = "home-view";
            let postId = null;

            // Simple route parser
            if (hash.startsWith("#blog/")) {
                viewId = "post-detail-view";
                postId = hash.replace("#blog/", "");
            } else if (hash === "#blog") {
                viewId = "blog-view";
            } else if (hash === "#guestbook") {
                viewId = "guestbook-view";
            } else if (hash === "#about") {
                viewId = "about-view";
            } else if (hash === "#home" || hash.startsWith("#calculator")) {
                viewId = "home-view";
            }

            this.switchView(viewId, postId);
            this.updateNavHighlight(hash);

            // Handle anchor scrolling for calculator on home page
            if (hash === "#calculator" || hash === "#calculator-anchor") {
                setTimeout(() => {
                    const calcEl = document.getElementById("calculator-widget");
                    if (calcEl) {
                        calcEl.scrollIntoView({ behavior: "smooth" });
                        calcEl.classList.add("calc-widget-pulse");
                        setTimeout(() => calcEl.classList.remove("calc-widget-pulse"), 1500);
                    }
                }, 200);
            } else {
                // Scroll to top for other page views
                window.scrollTo({ top: 0, behavior: "instant" });
            }
        };

        window.addEventListener("hashchange", handleRoute);
        // Fire once on load
        handleRoute();
    },

    // Switch visible sections with page bar animation
    switchView(targetViewId, postId = null) {
        const progressBar = document.getElementById("page-progress");
        
        // Simulated progress bar animation
        if (progressBar) {
            progressBar.style.width = "30%";
            setTimeout(() => { progressBar.style.width = "70%"; }, 80);
        }

        // Deactivate all views
        document.querySelectorAll(".page-view").forEach(view => {
            view.classList.remove("active");
        });

        // Specific view preparation
        if (targetViewId === "post-detail-view" && postId) {
            this.renderPostDetail(postId);
        } else if (targetViewId === "guestbook-view") {
            this.renderCusdis("guestbook-cusdis-container", "guestbook", "公共留言板", "#guestbook");
        }

        // Activate target view
        const targetView = document.getElementById(targetViewId);
        if (targetView) {
            targetView.classList.add("active");
        }

        if (progressBar) {
            setTimeout(() => {
                progressBar.style.width = "100%";
                setTimeout(() => { progressBar.style.width = "0"; }, 150);
            }, 180);
        }

        this.currentViewId = targetViewId;
        
        // Close mobile nav drawer if open
        const mobileNav = document.getElementById("mobile-nav");
        const hamburger = document.querySelector(".mobile-nav-toggle");
        if (mobileNav && mobileNav.style.display === "block") {
            mobileNav.style.display = "none";
            if (hamburger) {
                hamburger.classList.remove("open");
                hamburger.setAttribute("aria-expanded", "false");
            }
        }
    },

    // Update active nav button colors
    updateNavHighlight(hash) {
        // Clear active class from all links
        document.querySelectorAll(".nav-item, .mobile-nav-item").forEach(item => {
            item.classList.remove("active");
        });

        let targetId = "nav-home";
        if (hash.startsWith("#blog")) {
            targetId = "nav-blog";
        } else if (hash === "#guestbook") {
            targetId = "nav-guestbook";
        } else if (hash === "#about") {
            targetId = "nav-about";
        }

        // Highlight Desktop & Mobile nav items
        const desktopBtn = document.getElementById(targetId);
        if (desktopBtn) desktopBtn.classList.add("active");

        const mobileBtns = document.querySelectorAll(".mobile-nav-item");
        mobileBtns.forEach(btn => {
            const btnHash = btn.getAttribute("href");
            if (hash.startsWith(btnHash)) {
                btn.classList.add("active");
            }
        });
    },

    // --- EVENT LISTENERS REGISTRATION ---
    registerEvents() {
        // Mobile Toggle Menu
        const mobileToggle = document.querySelector(".mobile-nav-toggle");
        const mobileNav = document.getElementById("mobile-nav");
        if (mobileToggle && mobileNav) {
            mobileToggle.addEventListener("click", () => {
                const isOpen = mobileToggle.classList.toggle("open");
                mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
                mobileNav.style.display = isOpen ? "block" : "none";
            });
        }

        // Calculator Inputs Hook
        const cpuSlider = document.getElementById("calc-cpu");
        const ramSlider = document.getElementById("calc-ram");
        const btnCalc = document.getElementById("btn-calculate");
        const btnResetCalc = document.getElementById("btn-reset-calc");

        if (cpuSlider) {
            cpuSlider.addEventListener("input", (e) => {
                const val = parseInt(e.target.value);
                const labels = ["单核 (1 Core)", "双核 (2 Cores)", "三核 (3 Cores)", "四核 (4 Cores)", "五核 (5 Cores)", "六核 (6 Cores)", "七核 (7 Cores)", "八核 (8 Cores)"];
                document.getElementById("cpu-value").innerText = labels[val - 1] || `${val} Cores`;
            });
        }

        if (ramSlider) {
            ramSlider.addEventListener("input", (e) => {
                document.getElementById("ram-value").innerText = `${e.target.value} GB`;
            });
        }

        if (btnCalc) {
            btnCalc.addEventListener("click", () => {
                const cpuVal = parseInt(document.getElementById("calc-cpu").value);
                const ramVal = parseInt(document.getElementById("calc-ram").value);
                const diskVal = document.querySelector('input[name="calc-disk"]:checked').value;

                const advice = getCalculatorAdvice(cpuVal, ramVal, diskVal);

                document.getElementById("result-hardware").innerText = advice.hardware;
                document.getElementById("result-os").innerHTML = advice.os;
                document.getElementById("result-usage").innerText = advice.usage;

                document.getElementById("calc-result").style.display = "block";
                
                // Track visual view scrolling to result
                document.getElementById("calc-result").scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
        }

        if (btnResetCalc) {
            btnResetCalc.addEventListener("click", () => {
                document.getElementById("calc-result").style.display = "none";
                // Reset inputs to default
                document.getElementById("calc-cpu").value = 2;
                document.getElementById("calc-cpu").dispatchEvent(new Event("input"));
                document.getElementById("calc-ram").value = 4;
                document.getElementById("calc-ram").dispatchEvent(new Event("input"));
                document.querySelector('input[name="calc-disk"][value="hdd"]').checked = true;
            });
        }

        // Blog Search Hook
        const searchInput = document.getElementById("blog-search");
        if (searchInput) {
            searchInput.addEventListener("input", () => {
                this.renderBlogGrid();
            });
        }

        // Category Filter Buttons Hook
        document.querySelectorAll(".category-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
                e.target.classList.add("active");
                this.renderBlogGrid();
            });
        });

        // Clear Search Helper Button
        const btnClearSearch = document.getElementById("btn-clear-search");
        if (btnClearSearch) {
            btnClearSearch.addEventListener("click", () => {
                searchInput.value = "";
                this.renderBlogGrid();
            });
        }



        // Share button helper
        const btnShare = document.getElementById("btn-share-post");
        if (btnShare) {
            btnShare.addEventListener("click", () => {
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                    alert("文章链接已成功复制到剪贴板！快分享给小伙伴吧 🚀");
                }).catch(err => {
                    alert("链接复制失败，请手动复制当前浏览器地址栏。");
                });
            });
        }
    },

    // --- RENDERERS ---

    // 1. Featured posts list on Home Page
    renderFeaturedPosts() {
        const container = document.getElementById("featured-posts-list");
        if (!container) return;

        // Take first 3 posts as featured
        const featured = BLOG_POSTS.slice(0, 3);
        let html = "";

        featured.forEach(post => {
            html += `
                <article class="post-card-simple">
                    <div class="card-meta-row">
                        <span class="card-tag">${post.categoryName}</span>
                        <span class="card-date">${post.date}</span>
                    </div>
                    <h3><a href="#blog/${post.id}">${post.title}</a></h3>
                    <p>${post.summary}</p>
                    <div class="card-bottom-row">
                        <a href="#blog/${post.id}" class="card-readmore">阅读全文 &rarr;</a>
                        <div class="card-stats">
                            <span class="card-stat-item">💬 评论</span>
                            <span class="card-stat-item">👍 ${post.likes} 赞</span>
                        </div>
                    </div>
                </article>
            `;
        });

        container.innerHTML = html;
    },

    // 2. Full Blog Posts Grid with Search & Filters
    renderBlogGrid() {
        const container = document.getElementById("posts-grid");
        const emptyState = document.getElementById("search-empty-state");
        if (!container) return;

        const searchQuery = document.getElementById("blog-search").value.trim().toLowerCase();
        const activeCategoryBtn = document.querySelector(".category-btn.active");
        const activeCategory = activeCategoryBtn ? activeCategoryBtn.dataset.category : "all";

        // Filter algorithm
        const filteredPosts = BLOG_POSTS.filter(post => {
            const matchesCategory = activeCategory === "all" || post.category === activeCategory;
            const matchesSearch = post.title.toLowerCase().includes(searchQuery) || 
                                  post.summary.toLowerCase().includes(searchQuery) ||
                                  post.content.toLowerCase().includes(searchQuery);
            return matchesCategory && matchesSearch;
        });

        if (filteredPosts.length === 0) {
            container.innerHTML = "";
            emptyState.style.display = "block";
            return;
        }

        emptyState.style.display = "none";
        let html = "";

        filteredPosts.forEach(post => {
            html += `
                <article class="post-card">
                    <div class="post-card-banner" style="background: ${post.bannerGradient};">
                        <div class="card-banner-overlay"></div>
                        <div class="card-meta-row">
                            <span class="card-tag">${post.categoryName}</span>
                            <span class="card-date">${post.date}</span>
                        </div>
                    </div>
                    <div class="post-card-body">
                        <h2><a href="#blog/${post.id}">${post.title}</a></h2>
                        <p>${post.summary}</p>
                        <div class="post-card-footer">
                            <a href="#blog/${post.id}" class="card-readmore">阅读详情 &rarr;</a>
                            <div class="card-stats">
                                <span>💬 评论</span>
                                <span>👍 ${post.likes} 赞</span>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        });

        container.innerHTML = html;
    },

    // 3. Render Post Details
    renderPostDetail(postId) {
        const post = BLOG_POSTS.find(p => p.id === postId);
        if (!post) {
            // Redirect to home if post not found
            window.location.hash = "#home";
            return;
        }

        // Fill detail attributes
        document.getElementById("detail-category").innerText = post.categoryName;
        document.getElementById("detail-date").innerText = post.date;
        document.getElementById("detail-title").innerText = post.title;
        document.getElementById("detail-readtime").innerText = `📖 ${post.readTime}`;
        document.getElementById("detail-banner").style.background = post.bannerGradient;
        document.getElementById("detail-content").innerHTML = post.content;
        
        // Likes Render
        const likesCountEl = document.getElementById("detail-likes-count");
        likesCountEl.innerText = post.likes;
        
        const btnLike = document.getElementById("btn-like-post");
        const userLikes = Store.getLikes();
        
        if (userLikes[postId]) {
            btnLike.classList.add("liked");
        } else {
            btnLike.classList.remove("liked");
        }

        // Wire post likes event (remove existing listener to prevent stacking)
        btnLike.onclick = () => {
            const liked = btnLike.classList.toggle("liked");
            let count = post.likes;
            if (liked) {
                count += 1;
                Store.saveLike(postId, true);
            } else {
                Store.saveLike(postId, false);
            }
            likesCountEl.innerText = count;
        };

        // Tags List render
        const tagsContainer = document.getElementById("detail-tags");
        tagsContainer.innerHTML = post.tags.map(t => `<span class="tag-badge"># ${t}</span>`).join("");

        // Render Cusdis comments inside the article detail view
        this.renderCusdis("article-cusdis-container", postId, post.title, "#blog/" + postId);
    },

};

// Expose App to window object
window.App = App;

// Bootstrap Application on window loaded
window.addEventListener("DOMContentLoaded", () => {
    App.init();
});
