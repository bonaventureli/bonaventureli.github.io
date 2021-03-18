python
=========

Python 面向对象
--------------------

Python从设计之初就已经是一门面向对象的语言，正因为如此，在Python中创建一个类和对象是很容易的。本章节我们将详细介绍Python的面向对象编程。 
如果你以前没有接触过面向对象的编程语言，那你可能需要先了解一些面向对象语言的一些基本特征，在头脑里头形成一个基本的面向对象的概念，这样有助于你更容易的学习Python的面向对象编程。 
接下来我们先来简单的了解下面向对象的一些基本特征。 

面向对象技术简介
------------------------

类(Class): 用来描述具有相同的属性和方法的对象的集合。它定义了该集合中每个对象所共有的属性和方法。对象是类的实例。
类变量：类变量在整个实例化的对象中是公用的。类变量定义在类中且在函数体之外。类变量通常不作为实例变量使用。
数据成员：类变量或者实例变量, 用于处理类及其实例对象的相关的数据。
方法重写：如果从父类继承的方法不能满足子类的需求，可以对其进行改写，这个过程叫方法的覆盖（override），也称为方法的重写。
局部变量：定义在方法中的变量，只作用于当前实例的类。
实例变量：在类的声明中，属性是用变量来表示的。这种变量就称为实例变量，是在类声明的内部但是在类的其他成员方法之外声明的。
继承：即一个派生类（derived class）继承基类（base class）的字段和方法。继承也允许把一个派生类的对象作为一个基类对象对待。例如，有这样一个设计：一个Dog类型的对象派生自Animal类，这是模拟"是一个（is-a）"关系（例图，Dog是一个Animal）。
实例化：创建一个类的实例，类的具体对象。
方法：类中定义的函数。
对象：通过类定义的数据结构实例。对象包括两个数据成员（类变量和实例变量）和方法。

创建类
---------

使用 class 语句来创建一个新类，class 之后为类的名称并以冒号结尾:
::

    class ClassName:
       '类的帮助信息'   #类文档字符串
       class_suite  #类体

类的帮助信息可以通过ClassName.__doc__查看。
class_suite 由类成员，方法，数据属性组成。

实例

以下是一个简单的 Python 类的例子:
实例

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    class Employee:
       '所有员工的基类'
       empCount = 0
    
       def __init__(self, name, salary):
          self.name = name
          self.salary = salary
          Employee.empCount += 1
    
       def displayCount(self):
         print "Total Employee %d" % Employee.empCount
    
       def displayEmployee(self):
          print "Name : ", self.name,  ", Salary: ", self.salary


empCount 变量是一个类变量，它的值将在这个类的所有实例之间共享。你可以在内部类或外部类使用 Employee.empCount 访问。

__init__
---------------

第一种方法__init__()方法是一种特殊的方法，被称为类的构造函数或初始化方法，当创建了这个类的实例时就会调用该方法

self
-------------

self 代表类的实例，self 在定义类的方法时是必须有的，虽然在调用时不必传入相应的参数。
self代表类的实例，而非类
类的方法与普通的函数只有一个特别的区别——它们必须有一个额外的第一个参数名称, 按照惯例它的名称是 self。

::

    class Test:
        def prt(self):
            print(self)
            print(self.__class__)
    
    t = Test()
    t.prt()

以上实例执行结果为：
::

    <__main__.Test instance at 0x10d066878>
    __main__.Test

从执行结果可以很明显的看出，self 代表的是类的实例，代表当前对象的地址，而 self.__class__ 则指向类。
**self不是python 关键字，我们把他换成 runoob 也是可以正常执行的**
实例

::

    class Test:
        def prt(runoob):
            print(runoob)
            print(runoob.__class__)
    
    t = Test()
    t.prt()

以上实例执行结果为：

::

    <__main__.Test instance at 0x10d066878>
    __main__.Test

创建实例对象
---------------

实例化类其他编程语言中一般用关键字new，但是在Python中并没有这个关键字，类的实例化类似函数调用方式。
以下使用类的名称 Employee 来实例化，并通过 __init__ 方法接收参数。

::

    "创建 Employee 类的第一个对象"
    emp1 = Employee("Zara", 2000)
    "创建 Employee 类的第二个对象"
    emp2 = Employee("Manni", 5000)

访问属性
----------

您可以使用点号 . 来访问对象的属性。使用如下类的名称访问类变量:

::

    emp1.displayEmployee()
    emp2.displayEmployee()
    print "Total Employee %d" % Employee.empCount

完整实例：
实例

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    class Employee:
       '所有员工的基类'
       empCount = 0
    
       def __init__(self, name, salary):
          self.name = name
          self.salary = salary
          Employee.empCount += 1
    
       def displayCount(self):
         print "Total Employee %d" % Employee.empCount
    
       def displayEmployee(self):
          print "Name : ", self.name,  ", Salary: ", self.salary
 
    "创建 Employee 类的第一个对象"
    emp1 = Employee("Zara", 2000)
    "创建 Employee 类的第二个对象"
    emp2 = Employee("Manni", 5000)
    emp1.displayEmployee()
    emp2.displayEmployee()
    print "Total Employee %d" % Employee.empCount

执行以上代码输出结果如下：
::

    Name :  Zara ,Salary:  2000
    Name :  Manni ,Salary:  5000
    Total Employee 2

你可以添加，删除，修改类的属性，如下所示：
::

    emp1.age = 7  # 添加一个 'age' 属性
    emp1.age = 8  # 修改 'age' 属性
    del emp1.age  # 删除 'age' 属性
    你也可以使用以下函数的方式来访问属性：
    getattr(obj, name[, default]) : 访问对象的属性。
    hasattr(obj,name) : 检查是否存在一个属性。
    setattr(obj,name,value) : 设置一个属性。如果属性不存在，会创建一个新属性。
    delattr(obj, name) : 删除属性。
    hasattr(emp1, 'age')    # 如果存在 'age' 属性返回 True。
    getattr(emp1, 'age')    # 返回 'age' 属性的值
    setattr(emp1, 'age', 8) # 添加属性 'age' 值为 8
    delattr(emp1, 'age')    # 删除属性 'age'

Python内置类属性
---------------------

__dict__ : 类的属性（包含一个字典，由类的数据属性组成） 
__doc__ :类的文档字符串 
__name__: 类名 
__module__: 类定义所在的模块（类的全名是'__main__.className'，如果类位于一个导入模块mymod中，那么className.__module__ 等于 mymod） 
__bases__ : 类的所有父类构成元素（包含了一个由所有父类组成的元组） 

Python内置类属性调用实例如下：

实例

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    class Employee:
       '所有员工的基类'
       empCount = 0
    
       def __init__(self, name, salary):
          self.name = name
          self.salary = salary
          Employee.empCount += 1
    
       def displayCount(self):
         print "Total Employee %d" % Employee.empCount
    
       def displayEmployee(self):
          print "Name : ", self.name,  ", Salary: ", self.salary
    
    print "Employee.__doc__:", Employee.__doc__
    print "Employee.__name__:", Employee.__name__
    print "Employee.__module__:", Employee.__module__
    print "Employee.__bases__:", Employee.__bases__
    print "Employee.__dict__:", Employee.__dict__

执行以上代码输出结果如下：
::

    Employee.__doc__: 所有员工的基类
    Employee.__name__: Employee
    Employee.__module__: __main__
    Employee.__bases__: ()
    Employee.__dict__: {'__module__': '__main__', 'displayCount': <function displayCount at 0x10a939c80>, 'empCount': 0, 'displayEmployee': <function displayEmployee at 0x10a93caa0>, '__doc__': '\xe6\x89\x80\xe6\x9c\x89\xe5\x91\x98\xe5\xb7\xa5\xe7\x9a\x84\xe5\x9f\xba\xe7\xb1\xbb', '__init__': <function __init__ at 0x10a939578>}

python对象销毁(垃圾回收)
-----------------------------

Python 使用了引用计数这一简单技术来跟踪和回收垃圾。
在 Python 内部记录着所有使用中的对象各有多少引用。

一个内部跟踪变量，称为一个引用计数器。
当对象被创建时， 就创建了一个引用计数， 当这个对象不再需要时， 也就是说， 这个对象的引用计数变为0 时， 它被垃圾回收。但是回收不是"立即"的， 由解释器在适当的时机，将垃圾对象占用的内存空间回收。

a = 40      # 创建对象  <40>
b = a       # 增加引用， <40> 的计数
c = [b]     # 增加引用.  <40> 的计数

del a       # 减少引用 <40> 的计数
b = 100     # 减少引用 <40> 的计数
c[0] = -1   # 减少引用 <40> 的计数

垃圾回收机制不仅针对引用计数为0的对象，同样也可以处理循环引用的情况。循环引用指的是，两个对象相互引用，但是没有其他变量引用他们。这种情况下，仅使用引用计数是不够的。Python 的垃圾收集器实际上是一个引用计数器和一个循环垃圾收集器。作为引用计数的补充， 垃圾收集器也会留心被分配的总量很大（及未通过引用计数销毁的那些）的对象。 在这种情况下， 解释器会暂停下来， 试图清理所有未引用的循环。 
实例

__del__
-------------

析构函数 __del__ ，__del__在对象销毁的时候被调用，当对象不再被使用时，__del__方法运行： 

实例

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    class Point:
       def __init__( self, x=0, y=0):
          self.x = x
          self.y = y
       def __del__(self):
          class_name = self.__class__.__name__
          print class_name, "销毁"
    
    pt1 = Point()
    pt2 = pt1
    pt3 = pt1
    print id(pt1), id(pt2), id(pt3) # 打印对象的id
    del pt1
    del pt2
    del pt3

以上实例运行结果如下：

3083401324 3083401324 3083401324

Point 销毁

注意：通常你需要在单独的文件中定义一个类， 

类的继承
-------------

面向对象的编程带来的主要好处之一是代码的重用，实现这种重用的方法之一是通过继承机制。
通过继承创建的新类称为子类或派生类，被继承的类称为基类、父类或超类。

继承语法 

class 派生类名(基类名)
    ...

在python中继承中的一些特点：

1. 如果在子类中需要父类的构造方法就需要显示的调用父类的构造方法，或者不重写父类的构造方法。详细说明可查看：python 子类继承父类构造函数说明。 
2. 在调用基类的方法时，需要加上基类的类名前缀，且需要带上 self 参数变量。区别在于类中调用普通函数时并不需要带上 self 参数
3. Python 总是首先查找对应类型的方法，如果它不能在派生类中找到对应的方法，它才开始到基类中逐个查找。（先在本类中查找调用的方法，找不到才去基类中找）。

如果在继承元组中列了一个以上的类，那么它就被称作"多重继承" 。

语法：

派生类的声明，与他们的父类类似，继承的基类列表跟在类名之后，如下所示：

class SubClassName (ParentClass1[, ParentClass2, ...]):
    ...

实例

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    class Parent:        # 定义父类
       parentAttr = 100
       def __init__(self):
          print "调用父类构造函数"
    
       def parentMethod(self):
          print '调用父类方法'
    
       def setAttr(self, attr):
          Parent.parentAttr = attr
    
       def getAttr(self):
          print "父类属性 :", Parent.parentAttr
    
    class Child(Parent): # 定义子类
       def __init__(self):
          print "调用子类构造方法"
    
       def childMethod(self):
          print '调用子类方法'
 
    c = Child()          # 实例化子类
    c.childMethod()      # 调用子类的方法
    c.parentMethod()     # 调用父类方法
    c.setAttr(200)       # 再次调用父类的方法 - 设置属性值
    c.getAttr()          # 再次调用父类的方法 - 获取属性值

以上代码执行结果如下：
* 调用子类构造方法
* 调用子类方法
* 调用父类方法
* 父类属性 : 200

你可以继承多个类
::

    class A:        # 定义类 A
    .....

    class B:         # 定义类 B
    .....

    class C(A, B):   # 继承类 A 和 B
    .....

你可以使用issubclass()或者isinstance()方法来检测。
issubclass() - 布尔函数判断一个类是另一个类的子类或者子孙类，语法：issubclass(sub,sup)
isinstance(obj, Class) 布尔函数如果obj是Class类的实例对象或者是一个Class子类的实例对象则返回true。

方法重写
-----------

如果你的父类方法的功能不能满足你的需求，你可以在子类重写你父类的方法：
实例：

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    class Parent:        # 定义父类
       def myMethod(self):
          print '调用父类方法'
    
    class Child(Parent): # 定义子类
       def myMethod(self):
          print '调用子类方法'
    
    c = Child()          # 子类实例
    c.myMethod()         # 子类调用重写方法


执行以上代码输出结果如下：
::

    调用子类方法
    基础重载方法

下表列出了一些通用的功能，你可以在自己的类重写：
序号
方法, 描述 & 简单的调用

1
__init__ ( self [,args...] )
构造函数
简单的调用方法: obj = className(args)

2
__del__( self )
析构方法, 删除一个对象
简单的调用方法 : del obj

3
__repr__( self )
转化为供解释器读取的形式
简单的调用方法 : repr(obj)

4
__str__( self )
用于将值转化为适于人阅读的形式
简单的调用方法 : str(obj)

5
__cmp__ ( self, x )
对象比较
简单的调用方法 : cmp(obj, x)

运算符重载
--------------

Python同样支持运算符重载，实例如下：
实例

.. code-block:: python

    #!/usr/bin/python
    
    class Vector:
       def __init__(self, a, b):
          self.a = a
          self.b = b
    
       def __str__(self):
          return 'Vector (%d, %d)' % (self.a, self.b)
    
       def __add__(self,other):
          return Vector(self.a + other.a, self.b + other.b)
    
    v1 = Vector(2,10)
    v2 = Vector(5,-2)
    print v1 + v2

以上代码执行结果如下所示:
Vector(7,8)

类属性与方法
---------------

类的私有属性
^^^^^^^^^^^^^^^^^

__private_attrs：两个下划线开头，声明该属性为私有，不能在类的外部被使用或直接访问。在类内部的方法中使用时 self.__private_attrs。

类的方法
^^^^^^^^^^^^

在类的内部，使用def关键字可以为类定义一个方法，与一般函数定义不同，类方法必须包含参数 self,且为第一个参数

类的私有方法
^^^^^^^^^^^^^^^^^

__private_method：两个下划线开头，声明该方法为私有方法，不能在类的外部调用。在类的内部调用 self.__private_methods 

实例

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    class JustCounter:
        __secretCount = 0  # 私有变量
        publicCount = 0    # 公开变量
    
        def count(self):
            self.__secretCount += 1
            self.publicCount += 1
            print self.__secretCount
    
    counter = JustCounter()
    counter.count()
    counter.count()
    print counter.publicCount
    print counter.__secretCount  # 报错，实例不能访问私有变量

Python 通过改变名称来包含类名:

::

    Traceback (most recent call last):
      File "test.py", line 17, in <module>
        print counter.__secretCount  # 报错，实例不能访问私有变量
    AttributeError: JustCounter instance has no attribute '__secretCount'

Python不允许实例化的类访问私有数据，但你可以使用 object._className__attrName（ 对象名._类名__私有属性名 ）访问属性，参考以下实例：

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    class Runoob:
        __site = "www.runoob.com"

    runoob = Runoob()
    print runoob._Runoob__site

执行以上代码，执行结果如下：
www.runoob.com

单下划线、双下划线、头尾双下划线说明：
------------------------------------------

* __foo__: 定义的是特殊方法，一般是系统定义名字 ，类似 __init__() 之类的。
* _foo: 以单下划线开头的表示的是 protected 类型的变量，即保护类型只能允许其本身与子类进行访问，不能用于 from module import *
* __foo: 双下划线的表示的是私有类型(private)的变量, 只能是允许这个类本身进行访问了。



Python 文件I/O
--------------------

本章只讲述所有基本的 I/O 函数，更多函数请参考Python标准文档。

打印到屏幕

最简单的输出方法是用print语句，你可以给它传递零个或多个用逗号隔开的表达式。
此函数把你传递的表达式转换成一个字符串表达式，并将结果写到标准输出如下：

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*- 

    print "Python 是一个非常棒的语言，不是吗？"

你的标准屏幕上会产生以下结果：
::

    Python 是一个非常棒的语言，不是吗？

读取键盘输入
^^^^^^^^^^^^^^^^^

Python提供了两个内置函数从标准输入读入一行文本，默认的标准输入是键盘。
如下：

raw_input

input

raw_input函数

raw_input([prompt]) 函数从标准输入读取一个行，并返回一个字符串
（去掉结尾的换行符）：

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*- 
    
    str = raw_input("请输入：")
    print "你输入的内容是: ", str

这将提示你输入任意字符串，然后在屏幕上显示相同的字符串。
当我输入"Hello Python！"，它的输出如下： 

::

    请输入：Hello Python！
    你输入的内容是:  Hello Python！

input函数
^^^^^^^^^^^^^

input([prompt]) 函数和 raw_input([prompt]) 函数基本类似，
但是 input 可以接收一个Python表达式作为输入，并将运算结果返回。

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*- 
    
    str = input("请输入：")
    print "你输入的内容是: ", str

这会产生如下的对应着输入的结果： 
::

    请输入：[x*5 for x in range(2,10,2)]
    你输入的内容是:  [10, 20, 30, 40]

打开和关闭文件 
^^^^^^^^^^^^^^^^^^^

现在，您已经可以向标准输入和输出进行读写。现在，来看看怎么读写实际的数据文件。 

Python 提供了必要的函数和方法进行默认情况下的文件基本操作。你可以用file对象做大部分的文件操作。 

open 函数 
^^^^^^^^^^^^

你必须先用Python内置的open()函数打开一个文件，创建一个file对象，相关的方法才可以调用它进行读写。 

语法： 

file object = open(file_name [, access_mode][, buffering])

各个参数的细节如下： 

* file_name：file_name变量是一个包含了你要访问的文件名称的字符串值。
* access_mode：access_mode决定了打开文件的模式：只读，写入，追加等。所有可取值见如下的完全列表。这个参数是非强制的，默认文件访问模式为只读(r)。
* buffering:如果buffering的值被设为0，就不会有寄存。如果buffering的值取1，访问文件时会寄存行。如果将buffering的值设为大于1的整数，表明了这就是的寄存区的缓冲大小。如果取负值，寄存区的缓冲大小则为系统默认。

不同模式打开文件的完全列表：

::

    模式
    描述
    t
    文本模式 (默认)。
    x
    写模式，新建一个文件，如果该文件已存在则会报错。
    b
    二进制模式。
    +
    打开一个文件进行更新(可读可写)。
    U
    通用换行模式（不推荐）。
    r
    以只读方式打开文件。文件的指针将会放在文件的开头。这是默认模式。
    rb
    以二进制格式打开一个文件用于只读。文件指针将会放在文件的开头。这是默认模式。一般用于非文本文件如图片等。
    r+
    打开一个文件用于读写。文件指针将会放在文件的开头。
    rb+
    以二进制格式打开一个文件用于读写。文件指针将会放在文件的开头。一般用于非文本文件如图片等。
    w
    打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。
    wb
    以二进制格式打开一个文件只用于写入。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。
    w+
    打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。
    wb+
    以二进制格式打开一个文件用于读写。如果该文件已存在则打开文件，并从开头开始编辑，即原有内容会被删除。如果该文件不存在，创建新文件。一般用于非文本文件如图片等。
    a
    打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。
    ab
    以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。也就是说，新的内容将会被写入到已有内容之后。如果该文件不存在，创建新文件进行写入。
    a+
    打开一个文件用于读写。如果该文件已存在，文件指针将会放在文件的结尾。文件打开时会是追加模式。如果该文件不存在，创建新文件用于读写。
    ab+
    以二进制格式打开一个文件用于追加。如果该文件已存在，文件指针将会放在文件的结尾。如果该文件不存在，创建新文件用于读写。
    下图很好的总结了这几种模式：

File对象的属性
^^^^^^^^^^^^^^^^^^^^^

一个文件被打开后，你有一个file对象，你可以得到有关该文件的各种信息。 
以下是和file对象相关的所有属性的列表： 

属性
描述

file.closed
返回true如果文件已被关闭，否则返回false。

file.mode
返回被打开文件的访问模式。

file.name
返回文件的名称。

file.softspace
如果用print输出后，必须跟一个空格符，则返回false。否则返回true。

如下实例： 

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    # 打开一个文件
    fo = open("foo.txt", "w")
    print "文件名: ", fo.name
    print "是否已关闭 : ", fo.closed
    print "访问模式 : ", fo.mode
    print "末尾是否强制加空格 : ", fo.softspace

以上实例输出结果： 

::

    文件名:  foo.txt
    是否已关闭 :  False
    访问模式 :  w
    末尾是否强制加空格 :  0

close()方法
^^^^^^^^^^^^^^^^^^^^

File 对象的 close（）方法刷新缓冲区里任何还没写入的信息，并关闭该文件，这之后便不能再进行写入。 
当一个文件对象的引用被重新指定给另一个文件时，Python会关闭之前的文件。用 close（）方法关闭文件是一个很好的习惯。 

语法： 

fileObject.close()

例子： 

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    # 打开一个文件
    fo = open("foo.txt", "w")
    print "文件名: ", fo.name
    
    # 关闭打开的文件
    fo.close()

以上实例输出结果： 

::

    文件名:  foo.txt

读写文件： 

file对象提供了一系列方法，能让我们的文件访问更轻松。来看看如何使用read()和write()方法来读取和写入文件。 

write()方法 
^^^^^^^^^^^^^^^^

write()方法可将任何字符串写入一个打开的文件。需要重点注意的是，Python字符串可以是二进制数据，而不是仅仅是文字。 

write()方法不会在字符串的结尾添加换行符('\n')： 

语法： 

**fileObject.write(string)**

在这里，被传递的参数是要写入到已打开文件的内容。 

例子： 

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    # 打开一个文件
    fo = open("foo.txt", "w")
    fo.write( "www.runoob.com!\nVery good site!\n")
    
    # 关闭打开的文件
    fo.close()

上述方法会创建foo.txt文件，并将收到的内容写入该文件，并最终关闭文件。如果你打开这个文件，将看到以下内容: 

::

    $ cat foo.txt 
    www.runoob.com!
    Very good site!

read()方法 
^^^^^^^^^^^^^^^

read（）方法从一个打开的文件中读取一个字符串。需要重点注意的是，Python字符串可以是二进制数据，而不是仅仅是文字。 

语法： 

**fileObject.read([count])**

在这里，被传递的参数是要从已打开文件中读取的字节计数。该方法从文件的开头开始读入，如果没有传入count，它会尝试尽可能多地读取更多的内容，很可能是直到文件的末尾。 

例子： 

这里我们用到以上创建的 foo.txt 文件。 

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    # 打开一个文件
    fo = open("foo.txt", "r+")
    str = fo.read(10)
    print "读取的字符串是 : ", str
    # 关闭打开的文件
    fo.close()

以上实例输出结果： 

::

    读取的字符串是 :  www.runoob

文件位置： 
------------

文件定位
^^^^^^^^^^^

tell()方法告诉你文件内的当前位置, 换句话说，下一次的读写会发生在文件开头这么多字节之后。 
seek（offset [,from]）方法改变当前文件的位置。Offset变量表示要移动的字节数。From变量指定开始移动字节的参考位置。 

如果from被设为0，这意味着将文件的开头作为移动字节的参考位置。如果设为1，则使用当前的位置作为参考位置。如果它被设为2，那么该文件的末尾将作为参考位置。 

例子： 

就用我们上面创建的文件foo.txt。 

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    # 打开一个文件
    fo = open("foo.txt", "r+")
    str = fo.read(10)
    print "读取的字符串是 : ", str
    
    # 查找当前位置
    position = fo.tell()
    print "当前文件位置 : ", position
    
    # 把指针再次重新定位到文件开头
    position = fo.seek(0, 0)
    str = fo.read(10)
    print "重新读取字符串 : ", str
    # 关闭打开的文件
    fo.close()

以上实例输出结果： 
::

    读取的字符串是 :  www.runoob
    当前文件位置 :  10
    重新读取字符串 :  www.runoob

重命名和删除文件
^^^^^^^^^^^^^^^^^^

Python的os模块提供了帮你执行文件处理操作的方法，比如重命名和删除文件。 
要使用这个模块，你必须先导入它，然后才可以调用相关的各种功能。 

**rename()方法:**

rename()方法需要两个参数，当前的文件名和新文件名。 

语法： 

os.rename(current_file_name, new_file_name)

例子： 

下例将重命名一个已经存在的文件test1.txt。 

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    import os
    
    # 重命名文件test1.txt到test2.txt。
    os.rename( "test1.txt", "test2.txt" )

**remove()方法**

你可以用remove()方法删除文件，需要提供要删除的文件名作为参数。 

语法： 

os.remove(file_name)

例子： 

下例将删除一个已经存在的文件test2.txt。 

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    import os
    
    # 删除一个已经存在的文件test2.txt
    os.remove("test2.txt")

Python里的目录： 
^^^^^^^^^^^^^^^^^

所有文件都包含在各个不同的目录下，不过Python也能轻松处理。os模块有许多方法能帮你创建，删除和更改目录。 

**mkdir()方法**

可以使用os模块的mkdir()方法在当前目录下创建新的目录们。你需要提供一个包含了要创建的目录名称的参数。 

语法： 

os.mkdir("newdir")

例子： 

下例将在当前目录下创建一个新目录test。 

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    import os
    
    # 创建目录test
    os.mkdir("test")

**chdir()方法**

可以用chdir()方法来改变当前的目录。chdir()方法需要的一个参数是你想设成当前目录的目录名称。 

语法：

os.chdir("newdir")

例子： 

下例将进入"/home/newdir"目录。 

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    import os
    
    # 将当前目录改为"/home/newdir"
    os.chdir("/home/newdir")

**getcwd()方法:**

getcwd()方法显示当前的工作目录。 

语法： 

os.getcwd()

例子： 
下例给出当前目录： 

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    import os
    
    # 给出当前的目录
    print os.getcwd()

**rmdir()方法**

rmdir()方法删除目录，目录名称以参数传递。 
在删除这个目录之前，它的所有内容应该先被清除。 

语法： 

os.rmdir('dirname')

例子： 
以下是删除" /tmp/test"目录的例子。目录的完全合规的名称必须被给出，否则会在当前目录下搜索该目录。 

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    import os
    
    # 删除”/tmp/test”目录
    os.rmdir( "/tmp/test"  )

**文件、目录相关的方法**

File 对象和 OS 对象提供了很多文件与目录的操作方法，可以通过点击下面链接查看详情： 

File 对象方法: file 对象提供了操作文件的一系列方法。

OS 对象方法: 提供了处理文件及目录的一系列方法。

把Hello world写入sample.txt
------------------------------------

.. code-block:: python

    s = 'Hello world\n文本文件的读取方法、文本文件的写入方法\n'
    with open('sample.txt', 'w', encoding='gbk') as fp:  # 使用gbk编码
        fp.write(s * 5)
    # 生成的文件放在.py文件所在文件夹

    with open('sample.txt') as fp:
        print(fp.read())


gbk文件转UTF-8
------------------

.. code-block:: python

    # 将一个gbk编码格式的文本文件中的内容全部复制到另一个使用UTF-8编码的文本文件中
    def filecopy(srcc, dstt, srccEncoding, dsttEncoding):
        with open(srcc, 'r', encoding=srccEncoding) as srcfp:
            with open(dstt, 'w', encoding=dsttEncoding) as dstfp:
                dstfp.write(srcfp.read())


    filecopy('sample.txt', 'sample_new.txt', 'gbk', 'utf8')

    # 读取这两个文件
    with open('sample.txt') as fp:  # 默认为CP936编码
        print(fp.read())
    print()
    with open('sample_new.txt', encoding='utf-8') as fp:  # 如果是其他编码需要有(encoding = )
        print(fp.read())

遍历simple.txt中的所有行
----------------------------

.. code-block:: python

    with open('sample.txt') as fp:
        for line in fp:
            print(line,end='')

split()对字符串切片
--------------------------

语法:

**str.split(str="", num=string.count(str)).**

如果参数 num 有指定值，则分隔 num+1 个子字符串

参数:

* str -- 分隔符，默认为所有的空字符，包括空格、换行(\n)、制表符(\t)等。
* num -- 分割次数。默认为 -1, 即分隔所有。

返回值:

返回分割后的字符串列表。

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    str = "Line1-abcdef \nLine2-abc \nLine4-abcd";
    print (str.split());  # 以空格为分隔符，包含 \n
    print (str.split(' ', 1));  # 以空格为分隔符，分隔成两个

输出：

::

    ['Line1-abcdef', 'Line2-abc', 'Line4-abcd']
    ['Line1-abcdef', '\nLine2-abc \nLine4-abcd']

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    txt = "Google#Runoob#Taobao#Facebook"
    
    # 第二个参数为 1，返回两个参数列表
    x = txt.split("#", 1)
    
    print (x)

输出：

::

    ['Google', 'Runoob#Taobao#Facebook']


list()元组转换列表
--------------------------

**描述**

list() 方法用于将元组转换为列表。

注：元组与列表是非常类似的，区别在于元组的元素值不能修改，元组是放在括号中，列表是放于方括号中。

**语法**

list()方法语法：

list( tup )

**参数**

tup -- 要转换为列表的元组。

**返回值**

返回列表。


.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    aTuple = (123, 'xyz', 'zara', 'abc');
    aList = list(aTuple)

    print("列表元素 : ", aList)

结果：

::

    列表元素 :  [123, 'xyz', 'zara', 'abc']


打开显示每一行

.. code-block:: python

    L = list(open('A01 CAN communication DBC_OBC_Release_V1.7_20170606.dbc')) #文件中的每一行都是列表的一个元素

    for s in L:
        print(s)

结果：

::

    VAL_ 1036 BCM_SleepCommand 1 "Active" 0 "Inactive" ;


每行以空格切片显示

.. code-block:: python

    L = list(open('A01 CAN communication DBC_OBC_Release_V1.7_20170606.dbc')) #文件中的每一行都是列表的一个元素

    for s in L:
        x=s.split()
        print(x)

结果：

::

    ['VAL_', '1036', 'BCM_SleepCommand', '1', '"Active"', '0', '"Inactive"', ';']

检索文件中BO行，导入到level_dbc.txt文件中
------------------------------------------------

.. code-block:: python

    L = list(open('A01 CAN communication DBC_OBC_Release_V1.7_20170606.dbc')) #文件中的每一行都是列表的一个元素
    f = open('level_dbc.txt','w')   #新建level文件写入

    for s in L:
        x = s.split() #当前行切片
        for i in range(len(x)): #当前行切片数
            if "BO_" in x[0]: #判断字符串中是否有BO_
                # print(x)
                f.write(s)
                break
    f.close()
    f=open('level_dbc.txt')
    print(f.read())

结果：

::

            BO_TX_BU_
            BU_BO_REL_
    BO_ 1036 BCM_NM: 8 BCM
    BO_ 1050 OBC_NM: 8 OBC
    BO_ 1562 OBC_Diagnosis: 8 OBC
    BO_ 2003 TEST_OBC_DiagReq: 8 TESTER
    BO_ 2011 OBC_DiagResp: 8 OBC
    BO_ 2015 TEST_Func_DiagReq: 8 TESTER
    BO_ 530 BCM_LightStatus: 8 BCM
    BO_ 784 VCU_DisplayInfo: 8 VCU
    BO_ 791 BCU_ChargeControl: 8 BCU
    BO_ 796 BCU_StatusIndication: 8 BCU
    BO_ 852 OBC_CurrentStatus: 8 OBC


https://www.cnblogs.com/jiaxinwei/p/11624265.html

https://www.runoob.com/python/python-files-io.html

https://www.runoob.com/python/att-string-split.html


https://www.runoob.com/python/att-list-list.html

https://www.runoob.com/python3/python3-check-string.html

https://blog.csdn.net/liagn/article/details/80449313

https://www.cnblogs.com/gaoyuanyuan/p/10065218.html

https://blog.csdn.net/weixin_42342968/article/details/84879071

https://www.cnblogs.com/jiyongjia/p/9539024.html

https://www.runoob.com/python/python-strings.html

https://www.jb51.net/article/152413.htm

https://blog.csdn.net/qq_24833271/article/details/90711297

https://bbs.csdn.net/topics/392364068?page=1


解析BO
========

.. code-block:: python 


    L = list(open('A01 CAN communication DBC_OBC_Release_V1.7_20170606.dbc')) #文件中的每一行都是列表的一个元素
    f = open('level_dbc.txt','w')   #新建level文件写入

    for s in L:
        x = s.split() #当前行切片
        for i in range(len(x)): #当前行切片数
            if "BO_" == x[0]: #判断字符串中是否有BO_
                f.write(s)
                break
    f.close()
    f=open('level_dbc.txt')
    print(f.read())


Python strip()方法
--------------------------

描述
^^^^^^^^

Python strip() 方法用于移除字符串头尾指定的字符（默认为空格或换行符）或字符序列。
注意：该方法只能删除开头或是结尾的字符，不能删除中间部分的字符。

语法
^^^^^^^^^^^^^

strip()方法语法：
str.strip([chars]);

参数
^^^^^^^^^^^^

chars -- 移除字符串头尾指定的字符序列。

返回值
^^^^^^^^^^^^

返回移除字符串头尾指定的字符生成的新字符串。

实例
^^^^^^^^^^

以下实例展示了strip()函数的使用方法：
实例(Python 2.0+)

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    str = "00000003210Runoob01230000000"; 
    print str.strip( '0' );  # 去除首尾字符 0
    
    
    str2 = "   Runoob      ";   # 去除首尾空格
    print str2.strip();

以上实例输出结果如下：
::

    3210Runoob0123
    Runoob

从结果上看，可以注意到中间部分的字符并未删除。
以上下例演示了只要头尾包含有指定字符序列中的字符就删除：

实例
^^^^^^^^^^^^

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    str = "123abcrunoob321"
    print (str.strip( '12' ))  # 字符序列为 12

以上实例输出结果如下：

::

    3abcrunoob3


Python int() 函数
-----------------------

**描述**

int() 函数用于将一个字符串或数字转换为整型。

**语法**

以下是 int() 方法的语法:
class int(x, base=10)

**参数**

x -- 字符串或数字。
base -- 进制数，默认十进制。

**返回值**

返回整型数据。

**实例**

以下展示了使用 int() 方法的实例： 

::

    >>>int()               # 不传入参数时，得到结果0
    0
    >>> int(3)
    3
    >>> int(3.6)
    3
    >>> int('12',16)        # 如果是带参数base的话，12要以字符串的形式进行输入，12 为 16进制
    18
    >>> int('0xa',16)  
    10  
    >>> int('10',8)  
    8


Python 字符串
-----------------------

字符串是 Python 中最常用的数据类型。我们可以使用引号('或")来创建字符串。
创建字符串很简单，只要为变量分配一个值即可。例如：

var1 = 'Hello World!'
var2 = "Python Runoob"

Python 访问字符串中的值
----------------------------

Python 不支持单字符类型，单字符在 Python 中也是作为一个字符串使用。
Python 访问子字符串，可以使用方括号来截取字符串，如下实例：

实例(Python 2.0+)

.. code-block:: python

    #!/usr/bin/python
    
    var1 = 'Hello World!'
    var2 = "Python Runoob"
    
    print "var1[0]: ", var1[0]
    print "var2[1:5]: ", var2[1:5]

以上实例执行结果：
::

    var1[0]:  H
    var2[1:5]:  ytho

Python 字符串连接
----------------------

我们可以对字符串进行截取并与其他字符串进行连接，如下实例：

实例(Python 2.0+)

.. code-block:: python

    #!/usr/bin/python
    # -*- coding: UTF-8 -*-
    
    var1 = 'Hello World!'
    
    print "输出 :- ", var1[:6] + 'Runoob!'

以上实例执行结果

输出 :-  Hello Runoob!

Python3 bytes 函数
-------------------------

**描述**

bytes 函数返回一个新的 bytes 对象，该对象是一个 0 <= x < 256 区间内的整数不可变序列。它是 bytearray 的不可变版本。

**语法**

以下是 bytes 的语法:

class bytes([source[, encoding[, errors]]])

**参数**

* 如果 source 为整数，则返回一个长度为 source 的初始化数组；
* 如果 source 为字符串，则按照指定的 encoding 将字符串转换为字节序列；
* 如果 source 为可迭代类型，则元素必须为[0 ,255] 中的整数；
* 如果 source 为与 buffer 接口一致的对象，则此对象也可以被用于初始化 bytearray。
* 如果没有输入任何参数，默认就是初始化数组为0个元素。

**返回值**

返回一个新的 bytes 对象。

**实例**

以下展示了使用 bytes 的实例： 

实例

::

    >>>a = bytes([1,2,3,4])
    >>> a
    b'\x01\x02\x03\x04'
    >>> type(a)
    <class 'bytes'>
    >>>
    >>> a = bytes('hello','ascii')
    >>>
    >>> a
    b'hello'
    >>> type(a)
    <class 'bytes'>
    >>>

Python List insert()方法
---------------------------------

 Python 列表

**描述**

insert() 函数用于将指定对象插入列表的指定位置。

**语法**

insert()方法语法：

list.insert(index, obj)

**参数**

index -- 对象 obj 需要插入的索引位置。

obj -- 要插入列表中的对象。

**返回值**

该方法没有返回值，但会在列表指定位置插入对象。

**实例**

以下实例展示了 insert()函数的使用方法：

**实例**

.. code-block:: python

    #!/usr/bin/python
    
    aList = [123, 'xyz', 'zara', 'abc']
    
    aList.insert( 3, 2009)
    
    print "Final List : ", aList

以上实例输出结果如下：

::

    Final List : [123, 'xyz', 'zara', 2009, 'abc']


Python 列表(List)
序列是Python中最基本的数据结构。序列中的每个元素都分配一个数字 - 它的位置，或索引，第一个索引是0，第二个索引是1，依此类推。
Python有6个序列的内置类型，但最常见的是列表和元组。
序列都可以进行的操作包括索引，切片，加，乘，检查成员。
此外，Python已经内置确定序列的长度以及确定最大和最小的元素的方法。
列表是最常用的Python数据类型，它可以作为一个方括号内的逗号分隔值出现。
列表的数据项不需要具有相同的类型
创建一个列表，只要把逗号分隔的不同的数据项使用方括号括起来即可。如下所示：
list1 = ['physics', 'chemistry', 1997, 2000]
list2 = [1, 2, 3, 4, 5 ]
list3 = ["a", "b", "c", "d"]
与字符串的索引一样，列表索引从0开始。列表可以进行截取、组合等。

访问列表中的值
使用下标索引来访问列表中的值，同样你也可以使用方括号的形式截取字符，如下所示：
实例(Python 2.0+)
#!/usr/bin/python
 
list1 = ['physics', 'chemistry', 1997, 2000]
list2 = [1, 2, 3, 4, 5, 6, 7 ]
 
print "list1[0]: ", list1[0]
print "list2[1:5]: ", list2[1:5]
以上实例输出结果：
list1[0]:  physics
list2[1:5]:  [2, 3, 4, 5]

更新列表
你可以对列表的数据项进行修改或更新，你也可以使用append()方法来添加列表项，如下所示：
实例(Python 2.0+)
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
list = []          ## 空列表
list.append('Google')   ## 使用 append() 添加元素
list.append('Runoob')
print list
注意：我们会在接下来的章节讨论append()方法的使用
以上实例输出结果：
['Google', 'Runoob']

删除列表元素
可以使用 del 语句来删除列表的元素，如下实例：
实例(Python 2.0+)
#!/usr/bin/python
 
list1 = ['physics', 'chemistry', 1997, 2000]
 
print list1
del list1[2]
print "After deleting value at index 2 : "
print list1
以上实例输出结果：
['physics', 'chemistry', 1997, 2000]
After deleting value at index 2 :
['physics', 'chemistry', 2000]
注意：我们会在接下来的章节讨论remove()方法的使用


Python 变量类型
变量存储在内存中的值。这就意味着在创建变量时会在内存中开辟一个空间。
基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中。
因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符。


变量赋值
Python 中的变量赋值不需要类型声明。
每个变量在内存中创建，都包括变量的标识，名称和数据这些信息。
每个变量在使用前都必须赋值，变量赋值以后该变量才会被创建。
等号（=）用来给变量赋值。
等号（=）运算符左边是一个变量名,等号（=）运算符右边是存储在变量中的值。例如：
实例(Python 2.0+)
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
counter = 100 # 赋值整型变量
miles = 1000.0 # 浮点型
name = "John" # 字符串
 
print counter
print miles
print name

运行实例 » 
以上实例中，100，1000.0和"John"分别赋值给counter，miles，name变量。
执行以上程序会输出如下结果：
100
1000.0
John


多个变量赋值
Python允许你同时为多个变量赋值。例如：
a = b = c = 1 
以上实例，创建一个整型对象，值为1，三个变量被分配到相同的内存空间上。
您也可以为多个对象指定多个变量。例如：
a, b, c = 1, 2, "john" 
以上实例，两个整型对象 1 和 2 分别分配给变量 a 和 b，字符串对象 "john" 分配给变量 c。


标准数据类型
在内存中存储的数据可以有多种类型。
例如，一个人的年龄可以用数字来存储，他的名字可以用字符来存储。
Python 定义了一些标准类型，用于存储各种类型的数据。
Python有五个标准的数据类型：
Numbers（数字）
String（字符串）
List（列表）
Tuple（元组）
Dictionary（字典）


Python数字
数字数据类型用于存储数值。
他们是不可改变的数据类型，这意味着改变数字数据类型会分配一个新的对象。
当你指定一个值时，Number对象就会被创建：
var1 = 1
var2 = 10 
您也可以使用del语句删除一些对象的引用。
del语句的语法是：
del var1[,var2[,var3[....,varN]]]] 
您可以通过使用del语句删除单个或多个对象的引用。例如：
del var
del var_a, var_b 
Python支持四种不同的数字类型：
int（有符号整型）
long（长整型[也可以代表八进制和十六进制]） 
float（浮点型） 
complex（复数） 


Python字符串
字符串或串(String)是由数字、字母、下划线组成的一串字符。
一般记为 :
s="a1a2···an"(n>=0)
它是编程语言中表示文本的数据类型。 
python的字串列表有2种取值顺序:
从左到右索引默认0开始的，最大范围是字符串长度少1
从右到左索引默认-1开始的，最大范围是字符串开头

如果你要实现从字符串中获取一段子字符串的话，可以使用 [头下标:尾下标] 来截取相应的字符串，其中下标是从 0 开始算起，可以是正数或负数，下标可以为空表示取到头或尾。
[头下标:尾下标] 获取的子字符串包含头下标的字符，但不包含尾下标的字符。
比如:
>>> s = 'abcdef'
>>> s[1:5]
'bcde'
当使用以冒号分隔的字符串，python 返回一个新的对象，结果包含了以这对偏移标识的连续的内容，左边的开始是包含了下边界。
上面的结果包含了 s[1] 的值 b，而取到的最大范围不包括尾下标，就是 s[5] 的值 f。

加号（+）是字符串连接运算符，星号（*）是重复操作。如下实例：
实例(Python 2.0+)
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
str = 'Hello World!'
 
print str           # 输出完整字符串
print str[0]        # 输出字符串中的第一个字符
print str[2:5]      # 输出字符串中第三个至第六个之间的字符串
print str[2:]       # 输出从第三个字符开始的字符串
print str * 2       # 输出字符串两次
print str + "TEST"  # 输出连接的字符串
以上实例输出结果：
Hello World!
H
llo
llo World!
Hello World!Hello World!
Hello World!TEST
Python 列表截取可以接收第三个参数，参数作用是截取的步长，以下实例在索引 1 到索引 4 的位置并设置为步长为 2（间隔一个位置）来截取字符串：



Python列表
List（列表） 是 Python 中使用最频繁的数据类型。
列表可以完成大多数集合类的数据结构实现。它支持字符，数字，字符串甚至可以包含列表（即嵌套）。
列表用 [ ] 标识，是 python 最通用的复合数据类型。
列表中值的切割也可以用到变量 [头下标:尾下标] ，就可以截取相应的列表，从左到右索引默认 0 开始，从右到左索引默认 -1 开始，下标可以为空表示取到头或尾。

加号 + 是列表连接运算符，星号 * 是重复操作。如下实例：
实例(Python 2.0+)
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
tinylist = [123, 'john']
 
print list               # 输出完整列表
print list[0]            # 输出列表的第一个元素
print list[1:3]          # 输出第二个至第三个元素 
print list[2:]           # 输出从第三个开始至列表末尾的所有元素
print tinylist * 2       # 输出列表两次
print list + tinylist    # 打印组合的列表
以上实例输出结果：

['runoob', 786, 2.23, 'john', 70.2]
runoob
[786, 2.23]
[2.23, 'john', 70.2]
[123, 'john', 123, 'john']
['runoob', 786, 2.23, 'john', 70.2, 123, 'john']


Python 元组
元组是另一个数据类型，类似于 List（列表）。
元组用 () 标识。内部元素用逗号隔开。但是元组不能二次赋值，相当于只读列表。
实例(Python 2.0+)
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
tuple = ( 'runoob', 786 , 2.23, 'john', 70.2 )
tinytuple = (123, 'john')
 
print tuple               # 输出完整元组
print tuple[0]            # 输出元组的第一个元素
print tuple[1:3]          # 输出第二个至第四个（不包含）的元素 
print tuple[2:]           # 输出从第三个开始至列表末尾的所有元素
print tinytuple * 2       # 输出元组两次
print tuple + tinytuple   # 打印组合的元组
以上实例输出结果：
('runoob', 786, 2.23, 'john', 70.2)
runoob
(786, 2.23)
(2.23, 'john', 70.2)
(123, 'john', 123, 'john')
('runoob', 786, 2.23, 'john', 70.2, 123, 'john')
以下是元组无效的，因为元组是不允许更新的。而列表是允许更新的：
实例(Python 2.0+)
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
tuple = ( 'runoob', 786 , 2.23, 'john', 70.2 )
list = [ 'runoob', 786 , 2.23, 'john', 70.2 ]
tuple[2] = 1000    # 元组中是非法应用
list[2] = 1000     # 列表中是合法应用


Python 字典
字典(dictionary)是除列表以外python之中最灵活的内置数据结构类型。列表是有序的对象集合，字典是无序的对象集合。 
两者之间的区别在于：字典当中的元素是通过键来存取的，而不是通过偏移存取。 
字典用"{ }"标识。字典由索引(key)和它对应的值value组成。
实例(Python 2.0+)
#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"
 
tinydict = {'name': 'john','code':6734, 'dept': 'sales'}
 
 
print dict['one']          # 输出键为'one' 的值
print dict[2]              # 输出键为 2 的值
print tinydict             # 输出完整的字典
print tinydict.keys()      # 输出所有键
print tinydict.values()    # 输出所有值
输出结果为：
This is one
This is two
{'dept': 'sales', 'code': 6734, 'name': 'john'}
['dept', 'code', 'name']
['sales', 6734, 'john']


Python数据类型转换
有时候，我们需要对数据内置的类型进行转换，数据类型的转换，你只需要将数据类型作为函数名即可。
以下几个内置的函数可以执行数据类型之间的转换。这些函数返回一个新的对象，表示转换的值。
函数
描述
int(x [,base])
将x转换为一个整数
long(x [,base] )
将x转换为一个长整数
float(x)
将x转换到一个浮点数
complex(real [,imag])
创建一个复数
str(x)
将对象 x 转换为字符串
repr(x)
将对象 x 转换为表达式字符串
eval(str)
用来计算在字符串中的有效Python表达式,并返回一个对象
tuple(s)
将序列 s 转换为一个元组
list(s)
将序列 s 转换为一个列表
set(s)
转换为可变集合
dict(d)
创建一个字典。d 必须是一个序列 (key,value)元组。
frozenset(s)
转换为不可变集合
chr(x)
将一个整数转换为一个字符
unichr(x)
将一个整数转换为Unicode字符
ord(x)
将一个字符转换为它的整数值
hex(x)
将一个整数转换为一个十六进制字符串
oct(x)
将一个整数转换为一个八进制字符串


Python replace()方法
 Python 字符串

描述
Python replace() 方法把字符串中的 old（旧字符串） 替换成 new(新字符串)，如果指定第三个参数max，则替换不超过 max 次。
语法
replace()方法语法：
str.replace(old, new[, max])
参数
old -- 将被替换的子字符串。
new -- 新字符串，用于替换old子字符串。
max -- 可选字符串, 替换不超过 max 次
返回值
返回字符串中的 old（旧字符串） 替换成 new(新字符串)后生成的新字符串，如果指定第三个参数max，则替换不超过 max 次。
实例
以下实例展示了replace()函数的使用方法：
实例
#!/usr/bin/python
 
str = "this is string example....wow!!! this is really string";
print str.replace("is", "was");
print str.replace("is", "was", 3);
以上实例输出结果如下：
thwas was string example....wow!!! thwas was really string
thwas was string example....wow!!! thwas is really string

Python format 格式化函数
 Python 字符串

Python2.6 开始，新增了一种格式化字符串的函数 str.format()，它增强了字符串格式化的功能。
基本语法是通过 {} 和 : 来代替以前的 % 。
format 函数可以接受不限个参数，位置可以不按顺序。
实例
>>>"{} {}".format("hello", "world")    # 不设置指定位置，按默认顺序
'hello world'
 
>>> "{0} {1}".format("hello", "world")  # 设置指定位置
'hello world'
 
>>> "{1} {0} {1}".format("hello", "world")  # 设置指定位置
'world hello world'
也可以设置参数：
实例

::

 #!/usr/bin/python
 # -*- coding: UTF-8 -*-
  
 print("网站名：{name}, 地址 {url}".format(name="菜鸟教程", url="www.runoob.com"))
  
 # 通过字典设置参数
 site = {"name": "菜鸟教程", "url": "www.runoob.com"}
 print("网站名：{name}, 地址 {url}".format(**site))
  
 # 通过列表索引设置参数
 my_list = ['菜鸟教程', 'www.runoob.com']
 print("网站名：{0[0]}, 地址 {0[1]}".format(my_list))  # "0" 是必须的
 输出结果为：
 网站名：菜鸟教程, 地址 www.runoob.com
 网站名：菜鸟教程, 地址 www.runoob.com
 网站名：菜鸟教程, 地址 www.runoob.com
 也可以向 str.format() 传入对象：

实例

::

 #!/usr/bin/python
 # -*- coding: UTF-8 -*-
  
 class AssignValue(object):
     def __init__(self, value):
         self.value = value
 my_value = AssignValue(6)
 print('value 为: {0.value}'.format(my_value))  # "0" 是可选的
 输出结果为：
 value 为: 6
 数字格式化
 下表展示了 str.format() 格式化数字的多种方法：
 >>> print("{:.2f}".format(3.1415926));
 3.14


https://blog.csdn.net/SoaringLee_fighting/article/details/80456036

https://www.jb51.net/article/143445.htm

https://www.cnblogs.com/xueweisuoyong/p/11841132.html

http://www.pyinstaller.org/

https://www.jianshu.com/p/e6fd7b7abf90

https://blog.csdn.net/haoxiuzhao/article/details/89606080

https://blog.csdn.net/zhengnz/article/details/6388748

去掉字符串中的空格
----------------------

str.strip() 取消最左和最右边的空格

去掉字符串中间的空格
-------------------------

str.replace(' ', '')

hex不足两位补0
-------------------

str.zfill(2)

python 全局变量的使用
-----------------------------

在class里定义
flag
在def函数里调用self.flag，一定要加上self

python print bytes类型数据乱码问题
--------------------------------------------

x = bytes(a)
print(x)
print(x.hex)

python字符串后面追加字符
------------------------------

直接使用+号

Python清除字符串中间空格的方法
------------------------------------

a.replace(' ', '')

Python 自动给数字前面补0
-------------------------------

python hex()不足两位补0
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
::

    n = "123"
    s = n.zfill(5)
    assert s == '00123'

Python hex() 函数
-------------------

描述

hex() 函数用于将10进制整数转换成16进制，以字符串形式表示。

语法

hex 语法：

hex(x)

参数说明：

x -- 10进制整数

返回值

返回16进制数，以字符串形式表示。


pyqt的textedit如何追加显示
--------------------------------

str.append('a')

Python中获取两数相除的商和余数
------------------------------------

div = a//b
mod = a%b

python取消str中的所有0x
-------------------------------
...

python中list和str互相转换
-----------------------------

https://www.cnblogs.com/wutaotaosin/p/9753562.html

list->str

a = ['w','x','z']
b = "".join(a)

str->list

stra = '12345678'
lista = list(stra)

https://blog.csdn.net/weixin_38819889/article/details/93849621


16进制字符串、列表、字符串之间的转换
----------------------------------------

https://www.jianshu.com/p/7136b47fdd33


如何在Python中延迟时间？
--------------------------------

time.sleep(5) #5s
time.sleep(0.1) # 100ms

https://includestdio.com/1369.html

python中，获取字符串的长度
----------------------------

len(str)


python str与bytes之间的转换
---------------------------------


# str to bytes  
sb = str.encode(s)  
#sb = bytes(s, encoding = "utf8")  

# bytes to str  
#bs = str(b, encoding = "utf8")  
sb = bytes.decode(s) 

实际正确方法是

sb = str(b.hex)

https://blog.csdn.net/xiaosongbk/article/details/80919268


Python字节数组【bytes/bytearray】
--------------------------------------

https://www.cnblogs.com/fieldtianye/p/8276552.html

https://www.jianshu.com/p/ed8f3d021a45



字符串中有0如何自动补齐成00
---------------------------------


补齐问题
-----------

0x0补齐后是00x0

.zfill(4)补齐的方法是左边补齐
应该先把0x取消，然后.zfill(2)补齐数据




python HMAC算法
----------------------

参考：

https://blog.csdn.net/whatday/article/details/100173806

https://www.cnblogs.com/shengulong/p/7474621.html

https://www.cnblogs.com/lilyxiaoyy/p/10942922.html



字符串转十六进制
----------------------------

 data = "47454D414C544FFFFFFFFFFFFFFFFF00"
 data_hex = "".join(data).replace('0x', '').zfill(2)

十六进制转bytes
-----------------------

bytes.fromhex(data_hex)


hmac算法
------------------

self.var_hmac_algorithm = "SHA256"
self.var_vmpk = hmac.new(self.var_gmpk, self.var_se_vendor_id, digestmod=self.var_hmac_algorithm).hexdigest()

https://blog.csdn.net/mxj588love/article/details/80692964



hash算法
---------------

::

    self.var_hash_algorithm = hashlib.sha256()
    data = self.lineEdit_iccidstr.text()
    self.var_hash_algorithm.update(data.encode('utf-8'))
    self.iccid_str = self.var_hash_algorithm.hexdigest()



ascii字符串转十六进制
-------------------------
::

    import binascii

    e = 0
    for i in iccid_str:
        d = ord(i)
        e = e*256 + d
    print("e:", hex(e))


结果：

000000000000001
0x303030303030303030303030303031


https://www.cnblogs.com/abdm-989/p/11329122.html

https://www.cnblogs.com/ncuhwxiong/p/8124940.html

https://blog.csdn.net/qq_14997473/article/details/81085186

https://blog.csdn.net/qq_38161040/article/details/103963756



AES算法
---------------

::

        cryptos = AES.new(key, self.var_aes_algorithm, self.var_iv)
        cipher_text = cryptos.encrypt(text)


hex2bin.py
-----------------

.. code-block:: python

 #!/usr/bin/env python3
 # -*- coding: utf-8 -*-
 # File Name : hex2bin.py
 # Version : V1.0.0001
 # Date : 2019/03/06
 # Author : qipeng_jiang
 import os
 import time
 import six
 from functools import reduce
  
 # get '.hex' file name from current path
 def getFileNamebyEX(path):
  f_list = os.listdir(path)
  for i in f_list:
   filename = os.path.splitext(i)[0]
   extname = os.path.splitext(i)[1]
   if extname == '.hex':
    return i
     
 bin_buf = []# raw data of binary is to be stored here
  
 def hex2bin(hex_file_name,bin_file_name):
  with open(hex_file_name,'r') as frd:
   print('Hex file \''+hex_file_name+'\''+' is opened')
   byte_num = 0
   for line in frd.readlines():
    #line.strip();#cut off CR
    if(line[0] == ':'):
     if(line[7:9] == '04'):#Extended Linear Address Record
      #print('Extended Linear Address Record');
      line = char2hex(line)
      if checksum(line) == 0:#checksum passed
       addr_h = (line[4]<<24) +(line[5]<<16)
      else:
       print('checksum failed!'+str(list(map(hex,line))))
     elif (line[7:9] == '00'):#Data Record
      line = char2hex(line)
      if checksum(line) == 0:
       addr_l = (line[1]<<8) + line[2]
       LL = line[0]
       byte_num = byte_num + LL
       for data in line[4:-1]:
        bin_buf.append(data)
       if LL!=0x10:
        addr_end = addr_h + addr_l + LL - 1
       else:
        pass
      else:
       print('checksum failed!'+str(list(map(hex,line))))
     elif(line[7:9] == '05'):
      #print('Extended Segment Address Record');
      line = char2hex(line)
      if checksum(line) == 0:
       pass
      else:
       print('checksum failed!'+str(list(map(hex,line))))
     elif(line[7:9] == '01'):#End of FileRecord
      #print('End of FileRecord');
      line = char2hex(line)
      if checksum(line) == 0:
       print('*********Hex file successed resolved**********')
       print('\taddr_start : %08X' %(addr_end + 1 - len(bin_buf)))
       print('\taddr_end : %08X' %addr_end)
       print('\tTotal : %d Bytes'%len(bin_buf))
      else:
       print('checksum failed!'+str(list(map(hex,line))))
     else:
      pass#don't care
    else:
     print('illegal format!')
      
 # write data in bin_buf to '*.bin' file
 def wr_bin(bin_buf):
  bin_buf_byte = list(map(six.int2byte,bin_buf))
  with open(bin_file_name,'wb') as fwrb:
   print('Bin file \''+bin_file_name+'\''+' is opened for write')
   for data in bin_buf_byte:
    fwrb.write(data)
   print('Bin file is successfully written!')
    
 #one line string to hex-8 list,except ':' and CR
 def char2hex(line):
  line=list(map(ord,list(line)))
  for num in range(len(line)):
   if line[num]>=0x30 and line[num]<=0x39:
    line[num] = line[num] - 0x30
   elif line[num]>=0x41 and line[num]<=0x5A:
    line[num] = line[num] - 55
   else:
    pass
  line=line[1:-1]#delete CR and ':', in terms of byte
  for i in range(0,len(line),2):
   line[i] = line[i]*16 + line[i+1]
   newline = line[::2]
  return newline
   
 #checksum calculation of every line
 def checksum(line):
  #considering if the checksum calculation result is 0x100
  sum = (0x100 - (reduce(lambda x,y:x+y,line[:-1]) % 256)) % 256
  if sum == line[-1]:#check if sum calculated is equal to checksum byte in hex file
   return 0
  else:
   return 1
  
 starttime = time.clock()
 hex_file_name = getFileNamebyEX('.')
 bin_file_name = hex_file_name[:-4]+'.bin'
 hex2bin(hex_file_name,bin_file_name)
 wr_bin(bin_buf)
 endtime = time.clock()
  
 print('Time elapsed:' + str(endtime-starttime))


python 实现CMAC
----------------------

https://blog.csdn.net/qq_30754565/article/details/83868069



python列出文件加下所有文件,筛选hex文件
---------------------------------------

::

 f_list = os.listdir(path)
 print("f_list", f_list)
  for i in f_list:
   filename = os.path.splitext(i)[0]
   extname = os.path.splitext(i)[1]
   print("filename", filename)
   print("extern name", extname)
   if extname == '.hex':
    return i


hex固件转bin
-------------------


hex文件打开看到是十六进制数据，python打开识别的是字符串

先把字符串转换成十进制

字符 十进制 十六进制 

: 58 0x3A
1 49 0x31
