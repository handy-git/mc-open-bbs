---
post: true
title: Vault
date: 2024-04-23
cover: https://www.spigotmc.org/data/resource_icons/34/34315.jpg?1483592228
categories:
    - 服务端插件
tags:
    - 搬运插件
description: Vault 是一个权限、聊天和经济 API，可让插件轻松连接到这些系统中
---

## 简介

Vault 是一个权限、聊天和经济 API，它让插件可以轻松地连接到这些系统中，而无需钩住或依赖每个单独的插件本身。它的诞生源于对 Register 和当前 Permissions API 的运行方式的厌恶，以及它们缺乏功能或过于复杂的实现。Vault试图通过直观地为插件提供对他们可能使用的任何系统的支持来解决这些问题

### 配置

- 更新检查
    - 打开/关闭更新检查器

### 权限

- vault.admin
    - 允许访问 Vault 信息和转换命令
    - defaults to OP 默认为 OP
- vault.update
    - 当保险柜有更新时，任何拥有此权限的人都会收到通知
    - defaults to OP 默认为 OP
    - **在permissions.yml中设置为 false 将禁用控制台的版本检查消息**

## Vault目前支持

- 权限: Permissions 3, [bPermissions](http://dev.bukkit.org/server-mods/bpermissions/), [PEX](http://dev.bukkit.org/server-mods/permissionsex), [GroupManager](http://dev.bukkit.org/server-mods/groupmanager), [PermissionsBukkit](http://dev.bukkit.org/server-mods/permbukkit), [zPermission](http://dev.bukkit.org/server-mods/zpermissions), SimplyPerms, [Privileges](http://dev.bukkit.org/server-mods/Privileges), [DroxPerms](http://dev.bukkit.org/server-mods/DroxPerms), xPerms
- 经济: [iConomy](http://dev.bukkit.org/server-mods/iconomy) 4,5,6, [BOSEconomy](http://dev.bukkit.org/server-mods/boseconomy) 6 & 7, EssentialsEcon, 3Co, [MultiCurrency](http://dev.bukkit.org/server-mods/multicurrency), [MineConomy](http://dev.bukkit.org/server-mods/mineconomy), [eWallet](http://dev.bukkit.org/server-mods/ewallet), [EconXP](http://dev.bukkit.org/server-mods/econxp/), [CurrencyCore](http://dev.bukkit.org/server-mods/currency/), [CraftConomy](http://dev.bukkit.org/server-mods/craftconomy/), AEco, [Gringotts](http://dev.bukkit.org/server-mods/gringotts/)
    - 仅支持 CraftConomy、CurrencyCore、BOSE 和 iCo6 的银行
    - iCo6/CurrencyCore 使用合并的玩家/银行账户。建议将 BOSE 用于功能齐全的银行
    - iCo6 flatfile 存在严重错误，使用风险自负
- 聊天: [Herochat](https://www.spigotmc.org/resources/herochat-multi-server-chat-channels-and-more-75-off.34305/), [mChat](http://dev.bukkit.org/server-mods/mchat), iChat, [bPermissions](http://dev.bukkit.org/server-mods/bpermissions/), [PEX](http://dev.bukkit.org/server-mods/permissionsex), P3, [DroxPerms](http://dev.bukkit.org/server-mods/DroxPerms)
- 其他经济/权限系统可能内置了对保险柜的支持，请与检查以确保是否支持

- JavaDocs: [http://milkbowl.github.io/VaultAPI](https://dev.bukkit.org/linkout?remoteUrl=http%253a%252f%252fmilkbowl.github.io%252fVaultAPI)
- GitHub（源代码）：[https://github.com/MilkBowl/Vault/](https://github.com/MilkBowl/Vault/)
- GitHub（源代码）：[https://github.com/MilkBowl/VaultAPI/](https://github.com/MilkBowl/VaultAPI/)

该插件利用 bstats 插件指标系统。除非选择退出，否则将收集以下信息并将其发送给 bstats.org

唯一标识符

- 服务器的 Java 版本
- 服务器是处于脱机模式还是联机模式
- 插件版本
- 服务器版本
- 操作系统版本/名称和体系结构
- CPU 的核心数量
- 在线玩家数量
- 指标版本
- 正在使用哪个聊天、经济和权限挂钩

Opting out of this service can be done by editing plugins/bstats/config.yml and changing opt-out to true.
可以通过编辑 plugins/bstats/config.yml 并将 opt-out 更改为 true 来选择退出此服务。

### Linking Vault 链接 Vault

有关实现或链接到 Vault 的信息，请参阅：[https://github.com/MilkBowl/VaultAPI](https://github.com/MilkBowl/VaultAPI)

### 帮助支持保险柜的开发：[点此捐赠](https://paypal.me/sleaker)
