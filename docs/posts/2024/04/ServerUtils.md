---
post: true
title: ServerUtils
titleTemplate: Plugman 理念的继承与延展
date: 2024-04-29
cover: https://doc.mcbbs.top/logo.svg
categories:
    - 服务端插件
tags:
    - 搬运插件
    - 免费
description: Plugman 理念的继承与延展
---

## ServerUtils -- Plugman 理念的继承与延展

**Bukkit & Bungee & Velocity | 开源 | 免费 | 开发者：FrankHeijden**

* 支持版本：![Bukkit](https://img.shields.io/spiget/tested-versions/79599?label=Bukkit) Bungee  Velocity (3.0及以上)
* 社区评价：![Spiget 评分](https://img.shields.io/spiget/rating/79599?label=Spigot%20%E8%AF%84%E5%88%86&style=flat-square) ![GitHub stars](https://img.shields.io/github/stars/FrankHeijden/ServerUtils?label=GitHub%20stars&style=flat-square)

### 链接：

[Spigot](https://www.spigotmc.org/resources/79599/) | [Github](https://github.com/FrankHeijden/ServerUtils)

### 简介：

&emsp;&emsp;这是一个在运行时加载/卸载/监听您插件文件夹的插件，相较于我们熟知的 Plugman，它支持更多的平台，具有诸如热重载 Bukkit.yml command.yml 等功能，它还为 Bungee 系添加了一个简单又实用的插件列表。

&emsp;&emsp;更强大的是，它的设计决定着它对插件的管理更为彻底，当您重载那些引入新合成的插件时，SU 能帮助您同时甄别配方表的归属并重新应用它们(仅在 1.12 以上生效)，而监听功能允许您时时监听插件文件夹变动，当您往插件文件夹添加 Jar 文件时，它会根据您的设置来决定是否自动加载它们，或者使用带有 TAB 补全的命令来手动加载(支持文件名补全哦)。

&emsp;&emsp;它也能重新加载自己，如果您想那么做的话。
