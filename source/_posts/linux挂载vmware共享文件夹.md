---
title: 在linux里面挂载vmware共享文件夹的方法
tags:
  - 虚拟化
  - linux
categories:
  - 操作系统
abbrlink: 62603
date: 2024-06-27 22:38:36
---
vmware虚拟机挺好用的，windows客户机可以用网络驱动器挂载共享文件夹，但是linux客户机不行，需要专门的方案挂载共享文件夹。
<!--more-->
# 关于如何在linux里面挂载vmware共享文件夹的问题

- 首先Linux客户机需要安装open-vm-tools
- 然后用`whereis vmhgfs-fuse`命令检查`vmhgfs-fuse`程序
- 用`id`命令查看当前用户的uid和gid
- 用`umask`命令查看当前用户的umask
- 临时挂载命令

```bash
/usr/bin/vmhgfs-fuse .host:/ /home/username/yourfolder -o allow_other -o uid=xxx -o gid=xxx -o umask=xxx 
```

- 永久挂载

```bash
.host:/  /home/username/yourfolder fuse.vmhgfs-fuse allow_other,uid=xxx,gid=xxx,umask=xxx 0 0
```

