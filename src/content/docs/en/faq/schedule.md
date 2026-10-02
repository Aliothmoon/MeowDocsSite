---
title: Scheduled Tasks
description: Troubleshooting scheduled tasks not running, lock screen wakeup methods, screen-off idle mode, and keep-alive.
sidebar:
  order: 4
---

Whether a scheduled task runs on time depends on three things: MaaMeow itself is working correctly, the system doesn't kill the background process, and the device can unlock automatically when locked. Check these in order below.

:::caution[4 AM refresh]
Arknights refreshes data every day at 04:00, which interrupts any running task. If you're leaving the app idle for a long time (for example, farming Integrated Strategies), add a scheduled task after 04:00 to restart the task.
:::

## Scheduled task not running

First, check the trigger log: tap the circular arrow in the top right, then the second button in the top right (settings). The trigger log is there.

- **Nothing in the log**: the task didn't trigger at all. Follow the three steps below.
- **Execution record in the log**: the error reason appears below the record. Take it to the QQ group and ask for help.

### Three troubleshooting steps

1. **Foreground with screen on**: set a scheduled task 3 minutes from now and leave MaaMeow in the foreground to observe. If it runs normally, MaaMeow itself is fine. If not, something is wrong with MaaMeow itself; ask in the QQ group.
2. **Background with screen on**: if step 1 passes, set another scheduled task 3 minutes from now and switch to the background to observe. If it runs normally, keep-alive is working. If not, the system killed MaaMeow. Check whether you enabled high background power usage and autostart permissions. See [Prerequisite settings](/en/faq/setup/#prerequisite-settings).
3. **Lock screen**: if the device can't unlock when locked, the permissions from step 2 are probably not enabled, or you haven't set up an unlock method.

## Waking from the lock screen

Open **Settings → Other settings**. Three unlock methods are available:

| Method | Requirement |
| --- | --- |
| Swipe unlock | Phone has no password, only swipe unlock. |
| Gesture recording (strongly recommended) | Record one complete unlock sequence by entering your password normally. You must type the password. If you unlock with fingerprint or face during recording, you have to record again. |
| PIN | Enter your phone password. The phone may have face unlock enrolled, but no fingerprint. |

Gesture recording mainly avoids the case where the fingerprint unlock screen blocks the password input field.

<details class="faq">
<summary>Xiaomi / Redmi: doesn't unlock or start at scheduled time</summary>

Applies to HyperOS 1, 2, 3, and MIUI. When the system hasn't granted MaaMeow lock screen and display pop-up permissions, it blocks scheduled wakeup and lock screen autostart.

Go to **System Settings → App Settings → App Management → MaaMeow → Permissions**, and set both of these to Allow:

- Show on Lock screen
- Display pop-up windows while running in the background

</details>

## Screen-off idle

Phones with strong keep-alive can run in the background with the screen truly off after enabling high background power usage and locking the app in the recent apps list.

Other phones can use MaaMeow's built-in screen-off idle mode: in the background task running screen, tap the three-dot menu in the bottom right and select **Screen-off idle**. It only turns the screen black; the system is not actually locked or asleep. This saves power and prevents accidental touches, without the interrupted tasks or black screenshots that a real system lock causes.

<details class="faq">
<summary>Can I lock the screen while farming or clear the background?</summary>

- On any phone, don't swipe away MaaMeow's card in the recent apps list. Once the process is killed, autostart can't bring it back.
- Phones whose background restrictions are fully sorted out can farm while locked, and phones with 16 GB of RAM usually can. Phones that kill apps aggressively or have little RAM cannot. Overall, farming while locked is not recommended.

</details>
