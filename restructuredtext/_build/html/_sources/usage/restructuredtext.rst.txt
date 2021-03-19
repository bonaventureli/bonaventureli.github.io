restructuredtext使用说明
===============================


代码块
---------

".. code-block:: c "


或

“::”

    void main()
    { print();
    }

效果如下：

.. code-block:: c 

    void main()
    {
        print();
    }

--------------------------------------------------------------------------------

超链接
-----------------

::

    `hello baidu`_
    .. _'hello baidu': https://www.baidu.com


分割线
-------------

"---------------------------------------------------------------------------------"


参考：

reStructuredText入门_

`reStructuredText Markup Specification`_


.. _reStructuredText入门: http://www.pythondoc.com/sphinx/rest.html#rst-tables

.. _reStructuredText Markup Specification: https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#grid-tables
