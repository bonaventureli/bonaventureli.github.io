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

提交了不想提交的测试代码或commit写错

git reset (想回退的位置)

git reset fc423ded67a726cc6886926c23d43ff861914fbf

git checkout .

git pull

merge 本地和云端分支，然后提交

ssh-keygen
---------------------   -

git config --global user.name "xb12369"

git config --global user.email "1234@qq.com"

ssh-keygen -t rsa -C "1234@qq.com"


或 git revert fc423ded67a726cc6886926c23d43ff861914fbf

https://www.jianshu.com/p/5c562c0790fd

撤销操作

https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%92%A4%E6%B6%88%E6%93%8D%E4%BD%9C


Signing up for a new GitHub account
---------------------------------------------

https://docs.github.com/en/github/getting-started-with-github/signing-up-for-a-new-github-account

git 查看远程仓库地址
----------------------------

git remote -v


