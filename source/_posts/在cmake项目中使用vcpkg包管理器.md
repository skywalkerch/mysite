---
title: 在cmake项目中使用vcpkg包管理器
tags:
  - C++
  - cmake
categories:
  - C++
abbrlink: 55889
date: 2024-06-29 22:38:36
---

## 引言

> 最近在学习C++，需要用vcpkg来下载第三方库，众所周知vcpkg可以用`vcpkg integrate install`在visual studio中很好的集成，但是我不太喜欢visual studio的sln工程的文件结构和UI，相比之下我更喜欢在能够自由设置UI的vscode中编程。于是乎就需要cmake工程中引入vcpkg。

## cmake手动指定vcpkg工具链

vcpkg的官方文档中指出在cmake项目中可以用通过
```bash
cmake -B [build directory] -S . "-DCMAKE_TOOLCHAIN_FILE=[path to vcpkg]/scripts/buildsystems/vcpkg.cmake"
```
这个命令手动指定vcpkg的工具链文件
## 在vscode中结合cmake-tools插件设置

>vscode的cmake-tools插件能自动完成很多cmake项目的操作，例如设置编译器、编译、运行，打包、测试等功能。

首先在vscode中针对workspace来定义设置
![](../resources/%E5%9C%A8cmake%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%BF%E7%94%A8vcpkg%E5%8C%85%E7%AE%A1%E7%90%86%E5%99%A8/cmake-1719672271704-1.png)
在这里添加`-DCMAKE_TOOLCHAIN_FILE=[path to vcpkg]/scripts/buildsystems/vcpkg`。之后vscode每次保存CmakeLists.txt都会自动带上这个编译参数。

## CmakeLists.txt中引入第三方库

cmake在集成vcpkg后引入vcpkg下载的第三方库很简单，只需要两条命令即可。以fmt库为例

```cmake
cmake_minimum_required(VERSION 3.28)
project(test)
add_executable(test main.cpp)

find_package(fmt REQUIRED) #cmake自动查找fmt库
target_link_libraries(test PRIVATE fmt::fmt ) #自动链接fmt的静态库\动态库
```
然后`ctrl+s`保存CmakeLists.txt后vscode会自动生成cmake的build文件，之后就可以顺利进行开发了。
