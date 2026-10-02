---
title: 故障排查
description: 服务异常、截图失败、黑屏中断、画面遮挡、触控异常、Shizuku 启动失败、游戏没声音等问题的解决办法。
sidebar:
  order: 8
---

遇到问题先做三件事：更新到最新版本、完整重启一次 MaaMeow、按[正确的提问方式](/faq/getting-started/#关于提问的正确方式)收集日志。下面是群里最常见的几类问题。

## 服务状态异常

进入 MaaMeow 后先看首页的服务状态。

<details class="faq" open>
<summary>服务状态显示「服务异常」</summary>

服务异常通常是 Shizuku 的问题，极少数情况才是 MaaMeow 本身的问题。

**先去 Shizuku 里重新授权一次。** 大约六成的情况都是授权掉了。手机刚重启过的话，本来就需要重新授权，这是正常现象。

授权后还不行，继续往下查：

- **用 root 方式启动的 Shizuku**：root 方式在 Android 12、13、14 上存在问题，请换成无线调试，或者直接使用 MaaMeow 自带的 root 模式。
- **Android 10 的 root 模式**：存在兼容问题，短期内无法修复，请使用无线调试的 Shizuku 模式。
- **一直显示「服务连接中」**：换成群文件里的 Shizuku 安装包，有时就是版本的问题。
- **还是不行**：在首页点「关闭所有服务」再试。最后的兜底办法是更换 Shizuku 版本并重启手机。

</details>

<details class="faq">
<summary>服务状态显示「资源加载失败」</summary>

在首页点「关闭所有服务」，再重新加载服务。

</details>

<details class="faq">
<summary>服务状态显示「任务异常」</summary>

这是偶发的状态显示问题，后台任务可以正常使用，忽略即可。

</details>

## 截图失败

<details class="faq" open>
<summary>提示截图失败，任务跑不起来</summary>

大部分是因为没有唤醒游戏。把「开始唤醒」勾上，再点「开始任务」即可。注意只有点了开始任务才会真正唤醒游戏。

「客户端类型」也在这个界面切换，可选官服、B 服、国际服（YoStarEN）、日服（YoStarJP）、韩服（YoStarKR）、繁中服（txwy），请确认选的是你实际在玩的服务器。

![勾选开始唤醒并点击开始任务](../../../assets/faq/ts-wake.jpg)

</details>

## 黑屏、任务中途停止

<details class="faq" open>
<summary>跑着跑着黑屏，任务变回「待执行」，或者一进战斗就暂停、退出</summary>

大部分时候不是 MaaMeow 挂了，而是明日方舟被系统杀后台了。黑屏时听一下游戏声音还在不在，声音也没了就是游戏本体被系统杀掉了。

最有效的办法是 **把明日方舟锁在后台**：在最近任务列表里找到明日方舟，下拉任务卡片或点锁图标。不同手机的位置不太一样，但基本都有。

建议顺手做：

1. 去 Shizuku 重新授权一次。
2. 退出 MaaMeow 重新进入。某些机型偶发卡住，退出重进就能恢复。

如果日志里出现 `binder died` 之类的报错，就不是简单的配置问题了，请按[正确的提问方式](/faq/getting-started/#关于提问的正确方式)导出日志求助。

</details>

<details class="faq">
<summary>进关卡不动、提示「打开客户端失败」</summary>

多半是启动顺序不对，见自动战斗页的[启动顺序](/faq/copilot/#启动顺序)。

</details>

## 导航到页面后卡住并报错

<details class="faq">
<summary>基建、理智作战能导航到对应页面，但不进行下一步，直接报错</summary>

通常是分辨率变了，导致画面无法正常匹配：

- 检查是否开了游戏模式、护眼模式等会降低分辨率的功能，关闭后再试。
- 后台模式下，在设置中把「后台模式分辨率」改为 1080P 再试。

</details>

## 画面显示问题

<details class="faq" open>
<summary>MAA 顶部的游戏画面上多了一条窗口标题栏</summary>

出现下图这样的横条，是系统开发者选项里的「桌面模式」把辅助显示屏当成了自由窗口。

![遮挡横条示例](../../../assets/faq/ts-bar-before.jpg)

进入系统「开发者选项」，找到 **「在辅助显示屏上启用可自由调整的窗口」**，把它关闭。

![关闭对应开关](../../../assets/faq/ts-bar-dev.jpg)

</details>

<details class="faq">
<summary>后台模式的小窗只显示半截</summary>

进入系统「开发者选项」，找到「强制使用桌面模式」，把它关闭。

</details>

## 触控出问题

不同品牌手机对后台触控和 ADB 的限制不同，请先按[前置权限与设置](/faq/setup/#前置权限与设置)把所有品牌都要做的设置和自己品牌的设置做完。

<details class="faq">
<summary>运行时断触、点击失效，老手机卡顿</summary>

太老的处理器容易出现断触，比如骁龙 870、888 以及骁龙 8 Gen 1 之前的型号，其中 870 尤其明显。偶发的断触通常不影响任务进行，可以忽略，或者换一台设备。

不需要调低游戏画质，调低画质对性能和断触都没有改善。

</details>

## Shizuku 问题

:::tip[先看官方视频]
在 B 站搜索 **BV1reLp6GEeF**，这是 MAA 官方的「原生安卓手机端使用教程」，Shizuku 的完整配对流程都在里面。文字版流程见[安装与授权](/faq/setup/#配对-shizuku-并授权)。
:::

<details class="faq" open>
<summary>Shizuku 显示「已在后台启动」，但界面仍是「未运行」，无法给 MAA 授权</summary>

![Shizuku 未运行但提示已在后台启动](../../../assets/faq/ts-shizuku-notrun.jpg)

绝大多数情况是输入完配对码、点击启动后，**还没等 Shizuku 运行完毕就切出了界面**，比如在显示 `Waiting for service. This may take up to 1 minute...` 时就返回了。可以看官方视频的 46 至 55 秒。

解决办法：把 Shizuku 从后台划掉，重新打开后再启动。启动时 **必须停留在启动界面等待**，直到出现「Service started」字样再切回 MAA。还是不行就卸载重装，重新配对一遍。

![启动日志前后对比](../../../assets/faq/ts-shizuku-log.jpg)

</details>

<details class="faq">
<summary>一直停在 Waiting for service，长时间没有反应</summary>

很可能是前置设置没做对。把[前置权限与设置](/faq/setup/#前置权限与设置)全部重新确认一遍，然后杀掉 Shizuku 后台，重新打开再启动。

</details>

<details class="faq">
<summary>启动日志报 TimeoutException</summary>

日志里出现下面这种内容：

```text
Waiting for service. This may take up to 1 minute...
java.util.concurrent.TimeoutException: Failed to receive binder within 1 minute
    at rikka.shizuku.Uv.a(SourceFile:95)
    ...
```

可以按顺序尝试：

1. 把[前置权限与设置](/faq/setup/#前置权限与设置)重新做一遍，再重新配对启动。
2. 换一个 Shizuku 版本，群文件里有不同版本。
3. 重启手机后再试。
4. 在 B 站搜索「shizuku 解决错误」相关视频，对照排查。
5. 把截图发给 AI（豆包、DeepSeek 等），询问出现了什么情况。
6. 问群友，请态度好一些。群友解决不了的再找管理，不保证能解决。

</details>

## 游戏没有声音

<details class="faq">
<summary>在 MAA 里关掉游戏声音后，自己打开游戏也没声音</summary>

在 MaaMeow 里关闭游戏声音后，退出 MaaMeow 手动打开明日方舟，游戏依然没有声音。这是音频静音状态残留导致的，有两种办法。

**办法一：重装 Shizuku。** 把 Shizuku 卸载，重新安装并重新配对启动一次，声音就会恢复。

**办法二：用 ADB 命令解除静音。** 需要电脑上的 adb，或者手机上的 ADB 终端应用。先解除全局主静音：

```bash
adb shell cmd audio set-master-mute false
```

如果提示没有 `cmd audio`，改用旧版接口：

```bash
adb shell service call audio 21 i32 0
```

还是没声音的话，重启系统的音频服务进程，不需要重启整机：

```bash
adb shell killall audioserver
```

</details>

## 无法刷生息演算

这个问题单独整理在[生息演算](/faq/reclamation/#无法刷生息演算一直在界面进进出出)页面，核心是不要停留在主界面开始任务，要先手动跳转到对应关卡。

## 以上都试了还是不行

到这一步，最有效的办法是把日志带出来：

1. 打开设置里的调试模式。
2. 复现一次问题。
3. 在设置里导出日志压缩包。

然后带着日志和录屏到群里求助，详见[正确的提问方式](/faq/getting-started/#关于提问的正确方式)。
