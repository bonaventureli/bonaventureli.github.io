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
	
github.io无法显示html
------------------------------------------

在根目录下加入.nojekyll空文件。

使用 Nuxt 的过程中，发现在 generate 生成的 dist 文件夹下会有一个名为 .nojekyll 的空白文件，它是干什么用的呢？

Github Pages 默认是基于 Jekyll 构建，Jekyll 是一个将纯文本转换为静态网站的工具，它构建的网站下各种目录都是特定的以下划线开头命名的文件夹，例如 _layouts、_posts ，它会忽略掉其它的以下划线开头的文件夹和文件。

.nojekyll 就是告诉 Github Pages 当前网站不是基于 Jekyll 构建的，不要忽略掉下划线开头的文件和文件夹。

可见 .nojekyll 主要就是用于 Github Pages 这种有默认规则的网站部署平台，如果是部署在自己的服务器上，可以把它删掉。

反之，如果你的网站不是 Jekyll 构建的，要部署到 Github Pages ，并且包含下划线开头的文件或文件夹，那么你就需要在根目录添加一个 .nojekyll 空文件。


参考：https://www.jianshu.com/p/ac9b54176dbe
