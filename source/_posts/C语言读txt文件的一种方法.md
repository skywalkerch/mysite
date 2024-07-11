---
title: C语言按行读文件的一种方法
tags:
  - C++
categories:
  - 编程
abbrlink: 58983
date: 2024-07-11 22:31:01
---
在阅读《C++新经典》一书中学习到了一种按行读取文件的方法，在结合我自己的思考后，写下了这篇博客仔细分析这段代码。
<!--more-->
## 完整代码
```c
#include <cstdio>
#include <cstring>
int main() {
  FILE *fp = fopen("config.txt", "r");
  if (!fp) {
    printf("文件打开失败");
  } else {
    char LineBuf[1024];
    while (!feof(fp)) {
      LineBuf[0] = 0;// 将初始状态的LineBuf有效长度清零
      if (fgets(LineBuf, sizeof(LineBuf) - 1, fp) == NULL) {
        continue;
      }
      
      //一般情况下不会发生，但为了严谨，还是加上----------------
      if (LineBuf[0] == '\0') {
        continue;
      }
      //--------------------------------------------------

      //去除LF或者CRLF标记----------------------------------
      if (strlen(LineBuf) > 0) {
        while (LineBuf[strlen(LineBuf) - 1] == 0x0A ||
               LineBuf[strlen(LineBuf) - 1] == 0x0D) {
          LineBuf[strlen(LineBuf) - 1] = '\0';
        }
      }
      //--------------------------------------------------
      
      //如果经过上一步处理后为一个空行，则抛弃------------------
      if (strlen(LineBuf) <= 0) {
        continue;
      }
      //---------------------------------------------------

      //此处为处理每行内容的操作---------
      printf("%s\n", LineBuf);
      //------------------------------
    
    }
    fclose(fp);
  }
}
```
## 分析
### 循环控制
该代码用`feof(fp)`函数来判断是否读到文件末尾。由于`EOF`的的十六进制值为`0xFF`，不能排除在文件内容中会存在`0xFF`这个数据，如果`while(fgets(fp)!=EOF)`来判断是否到达文件末尾，就会出现问题，用`feof()`函数则可以避免这个问题。
当读到文件末尾时`feof()`会返回非零值,否则返回0。
### 按行读取
```c
LineBuf[0] = 0;// 将初始状态的LineBuf有效长度清零
if (fgets(LineBuf, sizeof(LineBuf) - 1, fp) == NULL) {
        continue;
}
```
首先将`LineBuf`的有效长度设置为0，因为后面有很多地方需要用到有效长度。
另外`fgets()`函数第二个参数注意到有个-1,这是因为定义`LineBuf`长度为1024，而最后为了正确计算`LineBuf`字符串的有效长度，必须要有一个`'\0'`在字符串末尾，如果没有这个-1来预留一字节空间存放`\0`，那么当读取的内容刚好为1024字节时，无法正确计算`strlen(LineBuf)`。

### 去除换行标识符
```c
//去除LF或者CRLF标记----------------------------------
if (strlen(LineBuf) > 0) {
  while (LineBuf[strlen(LineBuf) - 1] == 0x0A ||
         LineBuf[strlen(LineBuf) - 1] == 0x0D) {
    LineBuf[strlen(LineBuf) - 1] = '\0';
  }
}
//--------------------------------------------------
      
//如果经过上一步处理后为一个空行，则抛弃------------------
if (strlen(LineBuf) <= 0) {
    continue;
}
//---------------------------------------------------
```

- 类Unix系统一般用LF换行: `'\n'`
- windows系统一般用CRLF换行: `'\r\n'`
> 现在的编辑器一般能自己设置换行符的类型。

- `0x0A`对应的ascii符号为`'\n'`,`0x0D`对应的ascii符号为`'\r'`。
- 换行符对于按行读取的每一行内容本身没有意义，因此这段代码将其设置成`'\0'`用于标识字符串的末尾。
- 这里用while循环重复检测换行符，原书中是用goto语句重复检测。当换行符前面还存在`'\n'`或者`'\r'`时，应该将其清理掉，故需要在此处多次重复检测。
```c
//原书代码
lblprocstring:
if (strlen(LineBuf) > 0) {
  if (LineBuf[strlen(LineBuf) - 1] == 0x0A ||
         LineBuf[strlen(LineBuf) - 1] == 0x0D) {
    LineBuf[strlen(LineBuf) - 1] = '\0';
    goto lblprocstring;
  }
}
```
