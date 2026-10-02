---
title: 安装与授权
description: 下载 Shizuku、按品牌完成前置设置、配对 Shizuku 并授权 MaaMeow 的完整流程。
sidebar:
  order: 2
---

MaaMeow 通过 Shizuku 获得运行所需的权限。整个流程分四步：下载 Shizuku、完成前置设置、配对并启动 Shizuku、给 MaaMeow 授权。MaaMeow 本体的下载方式见[入门须知](/faq/getting-started/#下载-maameow)。

## 下载 Shizuku

- **MaaMeow 自带**（推荐）：装好 MaaMeow 后会附带 Shizuku 安装包。
- **官方渠道**：Shizuku 官网或 GitHub Releases。
- **群文件**：交流群的群文件里有多个版本。

:::caution[特殊设备]
- **天玑系列处理器** 需要在群文件下载专用的 Shizuku 版本。
- **Android 11 以下或安卓鸿蒙** 无法使用无线调试，需要连接电脑，用电脑上的 adb 工具输入命令来获取 adb 权限。
:::

## 前置权限与设置

配对之前先把下面的设置做完，否则后面的配对和启动很容易失败。开发者选项的打开方式请自行在 B 站搜索对应品牌的教程。

### 所有品牌都要做

1. 在「开发者选项」中打开「停用 adb 授权超时功能」。
2. 打开 Shizuku 的通知权限，确认全部开启，包括弹窗权限。
3. 在最近任务里下拉锁住 Shizuku 和 MaaMeow 的后台，并打开两者的后台高耗电设置。MaaMeow 还需要打开自启动权限。
4. 关闭省电模式、护眼模式等任何会改变系统分辨率和画面的设置。MAA 靠捕获画面来识别，这些设置会影响识别准确性。

### 按品牌设置

| 品牌 | 设置 |
| --- | --- |
| 小米 / 红米（MIUI、HyperOS） | 1. 打开「USB 调试（安全设置）」。注意这和「USB 调试」是两个分开的选项，必须插入 SIM 卡并登录小米账号才能打开。<br />2. 系统设置 → 通知管理 → 通知显示设置，把通知样式切换为「原生样式」。澎湃 OS 3 可以不做这一步。<br />3. 不要使用「手机管家」的扫描功能，它会禁用开发者选项。 |
| OPPO / 一加（ColorOS）、真我（realme UI） | 1. 在「开发者选项」中打开「禁止权限监控」。<br />2. ColorOS 16.0.7 及以上，该项改名为「禁用系统优化」且开关被隐藏，操作方法见下方。 |
| 华为（EMUI、安卓鸿蒙） | 在「开发者选项」中开启「"仅充电"模式下允许 ADB 调试」。不支持原生鸿蒙（HarmonyOS NEXT）。 |
| 魅族（Flyme） | 在「开发者选项」中关闭「Flyme 支付保护」。 |
| 荣耀 | 在分辨率设置中关闭「智能分辨率」。 |

<details class="faq">
<summary>小米 / 红米：USB 调试（安全设置）在哪</summary>

设置 → 更多设置 → 开发者选项，找到「USB 调试（安全设置）」并打开。

![小米开发者选项路径](../../../assets/faq/ts-miui-usb.jpg)

</details>

<details class="faq">
<summary>小米 / 红米：切换原生通知样式</summary>

设置 → 通知与状态栏 → 通知样式设置，选择「原生样式」。

![小米通知样式设置](../../../assets/faq/ts-miui-notify.jpg)

</details>

<details class="faq">
<summary>OPPO / 一加 / 真我：禁止权限监控在哪</summary>

设置 → 系统与更新 → 开发者选项，拉到接近最底部找到「禁止权限监控」并打开。

![OPPO 开发者选项路径](../../../assets/faq/ts-oppo.jpg)

</details>

<details class="faq">
<summary>ColorOS 16.0.7 及以上：找不到禁止权限监控</summary>

新系统把这一项改名为「禁用系统优化」，并且隐藏了开关：

1. 把系统语言切换到英文。
2. 打开 Developer options，拉到最下面，在 Autofill 上方找到 **Disable system optimization** 并打开。
3. 弹窗里点最下面的 **Turn on anyway**，不要点上面的 Not now。

之后可以把系统语言切回中文，不影响已经打开的开关。

</details>

## 配对 Shizuku 并授权

### 第一步：进入无线调试

打开 Shizuku，点击「配对」，按提示打开开发者选项并进入「无线调试」页面。

无线调试需要连接 WiFi。没有 WiFi 的话，连另一台设备开的热点也可以，热点不需要能上网。

### 第二步：输入配对码

点击「使用配对码配对设备」。通常会出现一个弹窗，长按它就能输入配对码。如果没有弹窗，下拉通知栏找到 Shizuku 的通知，长按后输入配对码。

<details class="faq">
<summary>没有弹出配对码输入框</summary>

- **小米澎湃 OS 3**：可能不弹输入框，需要长按通知栏里的 Shizuku 通知来输入配对码。
- **ColorOS / realme UI**：既没有弹窗，通知栏里也没有通知，大概率是 Shizuku 被系统后台管理了。把 Shizuku 挂成小窗，回到 Shizuku 最开始的界面重新点「配对」，就会弹出配对框。
- **其他设备**：同样可以试试把 Shizuku 挂成小窗后重新点「配对」。

</details>

### 第三步：启动 Shizuku

输入配对码后点确定。显示配对成功后点击通知回到 Shizuku，再点「启动」。

看到下面这行字就是启动成功：

```text
Service started, this window will be automatically closed in 3 seconds
```

:::caution[启动时不要切走]
必须停留在启动界面等待，直到出现 Service started 再离开。提前返回会导致 Shizuku 显示未运行，见[故障排查](/faq/troubleshooting/#shizuku-问题)。
:::

### 第四步：给 MaaMeow 授权

在 Shizuku 主界面点击「已授权 0 个应用」，给 MaaMeow 打开授权。

回到 MaaMeow，首页的服务状态正常就可以开始使用了。服务状态异常时按[故障排查](/faq/troubleshooting/#服务状态异常)处理。
