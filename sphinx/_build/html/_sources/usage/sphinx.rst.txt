Sphinx 用法
================

windows安装sphinx
------------------------------------------


https://www.sphinx-doc.org/en/master/usage/installation.html

vscode 安装sphinx方法
------------------------------------------

首先下载windows版本的python。安装的时候勾选把python加入到PATH

https://www.python.org/downloads

vscode重启
------------------------------------------

python --version

pip install -U sphinx

vscode启动sphinx
------------------------------------------

https://www.sphinx-doc.org/en/master/usage/quickstart.html

$sphinx-quickstart

windows编译sphinx
------------------------------------------

$./make.bat html

编译输出的文件


把分享的文章放进去一起共享

界面显示的第一个文件是index.rst

vscode安装reStructuredText插件编辑index.rst

:maxdepth: 2表示标题等级，可以改成4

编辑html文件借助于HBuilder X

https://dcloud.io/

注意：
------------------------------------------

_build下面的文件在上传到github.io上，html文件无法查看

cp -r _build docs

凡是带有"_"开头的在github.io上都打不开

配置conf.py,Makefile文件

生成单个html
------------------------------------------

./make.bat singlehtml
		