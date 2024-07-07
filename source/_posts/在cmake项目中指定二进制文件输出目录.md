---
title: 在cmake项目中指定二进制文件输出目录
tags:
  - C++
  - cmake
categories:
  - 编程
abbrlink: 21446
date: 2024-07-02 00:09:58
---
最近想用cmake构建一个数据结构和基本算法的[库](https://github.com/skywalkerch/ds_alg)，为了更好地管理输出结果，遂产生此文的问题。
<!--more-->
{%note info%}
首先强调，下文的命令声明必须在`add_executable()`和`add_library()`命令之前！！！！！我就是在这里踩了坑。
{%endnote%}

```cmake
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/lib) #动态库文件存放路径
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/lib) #静态库文件存放路径
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${PROJECT_SOURCE_DIR}/bin) #可执行文件存放路径
...
add_executable()
add_library()
```



