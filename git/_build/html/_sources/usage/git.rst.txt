git 常用指令
==================

merge develop分支的指定文件替换当前分支指定文件

git checkout develop app/component/component.c

显示提交摘要信息

git log --stat

找到项目所在目录下的 .git/文件夹，进入.git/文件夹，然后执行如下命令分别设置用户名和邮箱：

::

    git config user.name "abc"
    git config user.email "d@qq.com"

