---
title: 计算机组成原理总结
abbrlink: 39738
date: 2023-11-02 00:00:00
---
计算机组成原理的一些总结
<!--more-->
## 数据的机器级表示
### 浮点数
IEEE 754 格式
- float 阶码占8bit，偏移量=127，阶码全0表示0，阶码全1表示无穷大。
- double 阶码占11bit，偏移量=1023，阶码全0表示0，阶码全1表示无穷大。

对阶
- 小阶码向大阶码看齐（右归）

舍入（仅仅发生在右归操作之后考虑舍入问题）
- 0舍1入：被抛弃的最高位为1，则尾数加1[^1]
- 恒置1：只要被抛弃含有1，则尾数末位置1
- 直接截断：顾名思义

溢出判断
- **溢出判断**根据指数是否溢出来判断
- float 指数范围为（-126，127）；阶码有效范围（1，254）；
- double指数范围为（-1022，1023）；阶码有效范围（1，2046）；
- 右归和（0舍1入法[^2]）可能导致指数上溢；
- 左归可能导致指数下溢；
- **对阶**操作不会导致阶码上溢或者下溢[^3]；

## 存储系统
### 低位交叉存储

> 在涉及到低位交叉存储器通过总线传输一批数据时，可将传输过程视为流水线，每传输一个字的数据的时候，下一个字就处于准备过程当中，并行。但最后一个字在传输的时候，没有下一个字准备，因此最后一个字的数据传输单独算。![](https://skywalkerch-1303839378.cos.ap-nanjing.myqcloud.com/202310310005515.svg)

## 指令系统
### 寻址方式
![](https://skywalkerch-1303839378.cos.ap-nanjing.myqcloud.com/202310292330544.svg)
#### 这里需要辨析一下
- 寄存器间接寻址--寄存器里面存放操作数的实际地址
- 间接寻址--操作数字段给出的是操作数地址的地址
- 基址寻址：一般用于多道程序设计，常用为程序或数据分配存储空间
- 变址寻址：一般用于访问数组的访问，或编制循环程序
- 相对寻址：常用于程序转移


- **变址寻址**：形式地址固定不变，一般设置为数组的首地址，用户通过改变变址寄存器的内容来改变偏移量，即$ Effective Address = $ 变址寄存器内容（变）$ + $ 形式地址A（不变）
- **基址寻址**：基址寄存器的内容一般由操作系统来改变，程序员不可改（但是汇编程序员对于基址寄存器
是可见的）形式地址是变化的（与变址寻址相反）$Effective Address = $ 基址寄存器内容（不变）$+$ 形式地址A（变）


## 中央处理器
### 关于寄存器位数的总结
- MAR：直接与总线进行交换，因此MAR位数与总线地址线根数相等，或者等于物理地址位数
- MDR：直接与总线进行交换，因此MDR位数与总线数据线根数相等[^4]
- ALU：ALU的位数通常与字长相等[^5]
- IR：位数与指令字长相等
- PC：位数与虚拟地址位数相等


[^1]: 此操作可能会导致尾数上溢，上溢发生时需要右归，阶码+1，**可能**导致阶码上溢。
[^2]: 0舍1入可能导致尾数溢出，从而需要进行右归，右归时阶码需要+1，从而可能导致指数上溢。
[^3]: 因为对阶是小阶码向大阶码看齐，尾数右归，阶码+1，而大阶码始终是有效阶码，所以不会产生阶码溢出。
[^4]: 这里有易错点，有时候一个存储字大于总线数据线位数，这个时候要传送多次。MDR位数还是以总线数据线为准，当题目没有明确总线数据线时，以存储字为准。
[^5]: 字长的定义是一次整数运算的最大长度。这个过程当然涉及ALU。