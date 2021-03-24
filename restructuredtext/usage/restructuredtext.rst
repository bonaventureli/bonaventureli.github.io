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


列表表格
********

列表表格是通过创建一组嵌套的列表来渲染成表格。

父级列表是行，每一行的子列表是列，每行的列数必须一致（不支持合并单元格），看例\
子：

::

    .. list-table::

        * - 1
          - 2
          - 3
          - 4
        * - 5
          - 6
          - 7
          - 8
        * -
          -
          - 9
          -

效果：

.. list-table::

    * - 1
      - 2
      - 3
      - 4
    * - 5
      - 6
      - 7
      - 8
    * -
      -
      -
      - 9

参考：

http://www.bary.com/doc/a/228277572381775842/#150074c2

reStructuredText入门_

`reStructuredText Markup Specification`_


.. _reStructuredText入门: http://www.pythondoc.com/sphinx/rest.html#rst-tables

.. _reStructuredText Markup Specification: https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#grid-tables
