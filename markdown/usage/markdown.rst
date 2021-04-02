markdown
============

在html中引入和显示markdown文件

在用markdown写开发文档时，由于markdown不支持页面间锚点跳转，于是想到把文档加载到html里来实现

1.ajax请求加载md
将请求到的文件添加到 <div id="content"> 中

::

    $(function(){
            $.ajax({
                type:"get",
                url:"./test.md",
                dataType:"html",
                success:function(res){
                $("#content").append(marked(res));
                }
            })
        })

2.解析 xxx.md

解析需使用marked库，将md文本转化为html DOM，框架Github地址—— marked_

.. _marked: https://github.com/markedjs/marked/tree/master


引入marked.js<script src="./marked.js"></script>

3.编写css

由于转化后的md没有了基本的css样式，需要自行编写，其中代码高亮可使用Highlight插件，使用方法可参考highlight.js代码高亮使用

highlight.js官网地址：https://highlightjs.org/

点击Get Version

进入后选择你需要高亮的语言，一般Common里的足够，选择完点击下面download即可

按照官网所述，可通过本地文件引入或cdn方式
cdn引入

::

    <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/default.min.css">
    <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/highlight.min.js"></script>

本地引入
本地引入时，可根据自己需求引入相应的css

::

    <script src="./highlight/highlight.pack.js"></script>
    <link rel="stylesheet" href="./highlight/styles/atom-one-light.css">

主要需要在页面加载时初始化hljs.initHighlightingOnLoad(),更多使用规则可进官网了解

::

    <link rel="stylesheet" href="/path/to/styles/default.css">
    <script src="/path/to/highlight.pack.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>

代码需包含在<pre><code class="html">...</code></pre>结构标签中

转化后的md 中代码高亮
由于ajax请求默认是异步的，所以在页面加载完md前，可能highlight已经初始化完导致代码没有高亮，解决办法就是让ajax请求改为同步，请求成功后调用初始化。

::

    $(function(){
            $.ajax({
                type:"get",
                url:"./test.md",
                async:false,
                dataType:'html',
                success:function(res){
                 $("#content").append(marked(res));
                 hljs.initHighlightingOnLoad();
                }
            }) 
        })

