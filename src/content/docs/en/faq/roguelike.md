---
title: Auto I.S.
description: Settings, recommended starts and caveats for farming Integrated Strategies automatically.
sidebar:
  order: 5
---

:::caution[04:00 daily refresh]
Arknights briefly disconnects for its daily refresh at 04:00, which makes Auto I.S. fail. Plan your unattended runs around it, or add a [scheduled task](/en/faq/schedule/) that runs **Startup** + **Auto I.S.**
:::

## General settings

![Auto I.S. general settings](../../../../assets/faq/image16.jpg)

You can switch Integrated Strategies (I.S.) themes, recommended squads, difficulty, strategy, and starting class group.

- **Difficulty max** defaults to the highest difficulty. MAA switches the difficulty automatically every time it starts an I.S. run.
- **Monthly Squad** is the squad featured on the Integrated Strategies main screen. The image below uses the Garden theme as an example.

![Monthly Squad example](../../../../assets/faq/image17.jpg)

<details class="faq">
<summary>The task stops by itself and MAA never taps anything</summary>

First check whether you have dismissed the I.S. tutorial by hand. MAA can't skip the tutorial. If the game is sitting on a tutorial screen, MAA fails to recognize it and stops the task. Go into the game yourself, tap through the whole tutorial, get back to a screen where you can play normally, and then let MAA take over.

If MAA is stuck on one screen, set **Background mode resolution** to 1080P in settings and try again.

</details>

## Advanced settings

![Auto I.S. advanced settings](../../../../assets/faq/image18.png)

<details class="faq">
<summary>With "Invest ingots" checked, the run can't push higher difficulties</summary>

When it is checked, MAA ignores the selected strategy and always invests Originium Ingots, which can leave the squad too weak to push the difficulty.

</details>

## Recommended configuration

These configurations were fairly stable when tested on well-developed accounts. The recommended difficulties weigh enemy difficulty, Hope cost, score multiplier and other factors. Adjust them freely to your own situation.

| Theme | Difficulty | Squad | Starting class group | Operator |
| --- | --- | --- | --- | --- |
| Phantom | Formal Investigation · 2 | Leader Squad / Tactical Assault Squad | Overcoming Your Weaknesses | Togawa Sakiko / Thorns |
| Mizuki | Surging Waves · 3 to 10 | People-Oriented Squad / Mind Over Matter Squad | Slow and Steady Wins the Race | Wiš'adel |
| Sami | Braving Nature · 4 to 10 | Special Training Squad / Tactical Ranged Squad | Slow and Steady Wins the Race | Wiš'adel |
| Sarkaz | Facing Souls · 4 to 10 | Blueprint Mapping Squad / Tactical Ranged Squad | Slow and Steady Wins the Race | Wiš'adel |
| Garden | Guided Tour · 3 to 10 | Leader Squad / Tactical Ranged Squad | Slow and Steady Wins the Race | Wiš'adel |
| 黑流树海 | None yet | Special Squad / Tactical Fortification Squad | Slow and Steady Wins the Race / Indestructible | Mechanic (Elite 2) |

<details class="faq">
<summary>Notes for each theme</summary>

- **Phantom**: On Formal Investigation 3 and higher, you may start with a Hope-reducing collectible, which prevents recruiting a 6★ operator at the start.
- **Mizuki**: On Surging Waves 4 and higher difficulties, recruiting 6★ operators costs +1 Hope. Starting with Mind Over Matter Squad may make it impossible to recruit a 6★ operator. People-Oriented Squad suits well-developed accounts, while Mind Over Matter Squad needs luck.
- **Sami**: On Braving Nature 6 and higher difficulties, recruiting 6★ operators costs +1 Hope. Starting with Special Training Squad may make it impossible to recruit a 6★ operator.
- **Sarkaz**: On Facing Souls 15 and higher difficulties, recruiting 6★ operators costs +1 Hope. If you haven't upgraded Blueprint Mapping Squad Enhancement II in Historical Reconstruction, starting with Blueprint Mapping Squad may make it impossible to recruit a 6★ operator. With Blueprint Mapping Squad, MAA uses a combat-avoidance strategy that collects Soul Bookmarks quickly but almost never reaches an ending. With the ingot farming strategy and Ingots Squad as the starting squad, MAA uses a shop-refresh strategy to speed things up.
- **Garden**: On Guided Tour 15 and higher difficulties, recruiting 6★ operators costs +1 Hope. Starting with Leader Squad may make it impossible to recruit a 6★ operator. On Guided Tour 3 and higher, with the ingot farming strategy and Leader Squad as the starting squad, MAA uses the End of Time stage-skip strategy to speed things up.
- **黑流树海**: Dedicated combat strategies are still being written, so battles are handled by the generic strategy. See the next section for the starting requirements.

</details>

## 黑流树海

黑流树海 has no dedicated combat strategy yet; battles are decided automatically from recruitment scores. The ingot farming and level farming strategies are both built around flying with an Elite 2 Mechanic. This theme has a lot of mechanics. If you don't start with the configuration below, MAA falls back to default pathfinding and combat and will most likely fail.

| Item | Requirement |
| --- | --- |
| Starting operator | Mechanic, must be Elite 2 |
| Starting squad | Special Squad / Tactical Fortification Squad |
| Starting class group | Slow and Steady Wins the Race / Indestructible |

- Getting Mechanic to Elite 2 only takes one clear of N1, which is fairly easy.
- After Elite 2, unlock Effect Improvement II of Recruitment Mastery II. You then start each run with Structural Principle, which lets you fly anywhere on the map 3 times. It unlocks after selling 10 parts in total at Elite 2 and is strongly recommended. Without it you can only fly 3 times to the 8 surrounding tiles; farming still works, but much less efficiently.
- For level farming, an Elite 2 Mechanic with the squad and class group above, plus a Defender voucher, flies through three floors quickly.
- With level farming and Invest ingots unchecked, shops are skipped.
- If your Mechanic is not Elite 2, don't pick Mechanic. Start with another strong operator that has no summons. Ingot farming still works that way, but battles will most likely fail; other strategies are waiting for future improvements.

These requirements apply to 黑流树海 only. Phantom, Mizuki, Sami, Sarkaz and Garden don't need this setup.

<details class="faq">
<summary>Level farming fails, stuck on the second floor at the "Loss and Virtue" or "One Step Ahead" node</summary>

First make sure the start matches the requirements above: Mechanic is Elite 2 and the talent is unlocked.

If everything is set up correctly and the run still gets stuck on the second floor, check whether Invest ingots is checked. With it checked, MAA may fly to a bird's-eye node by mistake and the task fails.

</details>
