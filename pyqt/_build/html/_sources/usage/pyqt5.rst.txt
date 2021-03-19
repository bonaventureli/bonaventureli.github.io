pyqt5
========

生成pdf
-----------

pip install sphinx
pip install pdfrw
pip install rst2pdf
pip install anaconda

::

    extensions = [
        'sphinx.ext.autodoc',
        'rst2pdf.pdfbuilder'
    ]


参考：Sphinx生成PDF_

使用rst2pdf拓展sphinx生成PDF_

`Sphinx Getting Startd`_

`PyQt5 5.15.4`_

learnpyqt_

`runoob python`_

.. _Sphinx生成PDF: https://blog.csdn.net/weixin_34195546/article/details/91902501

.. _使用rst2pdf拓展sphinx生成PDF: https://www.hankcs.com/program/python/the-use-of-rst2pdf-to-expand-sphinx-to-generate-pdf.html

.. _Sphinx Getting Startd: https://www.sphinx-doc.org/en/master/usage/quickstart.html


.. _PyQt5 5.15.4: https://pypi.org/project/PyQt5/

.. _learnpyqt: https://www.learnpyqt.com/

.. _runoob python: https://www.runoob.com/python/python-chinese-encoding.html

Creating a window
--------------------------
.. code-block:: python

    import sys
    from PyQt5.QtWidgets import QApplication, QWidget


    app = QApplication(sys.argv)

    window = QWidget()
    window.show() # IMPORTANT!!!!! Windows are hidden by default.

    # Start the event loop.
    app.exec_()


.. code-block:: python

    import sys
    from PyQt5.QtWidgets import QApplication, QMainWindow


    app = QApplication(sys.argv)

    window = QMainWindow()
    window.show() # IMPORTANT!!!!! Windows are hidden by default.

    # Start the event loop.
    app.exec_()


My first widget
------------------

.. code-block:: python

    import sys
    from PyQt5.QtWidgets import QApplication, QLabel, QMainWindow
    from PyQt5.QtCore import Qt

    # Subclass QMainWindow to customise your application's main window
    class MainWindow(QMainWindow):

        def __init__(self, *args, **kwargs):
            super(MainWindow, self).__init__(*args, **kwargs)

            self.setWindowTitle("My Awesome App")

            label = QLabel("This is a PyQt5 window!")

            # The `Qt` namespace has a lot of attributes to customise
            # widgets. See: http://doc.qt.io/qt-5/qt.html
            label.setAlignment(Qt.AlignCenter)

            # Set the central widget of the Window. Widget will expand
            # to take up all the space in the window by default.
            self.setCentralWidget(label)


    app = QApplication(sys.argv)

    window = MainWindow()
    window.show()

    app.exec_()

.. image:: ./image_pyqt/firstwindow.png

First steps with Qt Designer
---------------------------------

.. image:: ./qt/qt1.png

Using your generated .ui file

* load into into a class using the .loadUI() method
* convert it to Python using the pyuic5 tool.

Loading the .ui file directly
----------------------------------

.. code-block:: python

    import sys
    from PyQt5 import QtWidgets, uic
    
    app = QtWidgets.QApplication(sys.argv)

    window = uic.loadUi("mainwindow.ui")
    window.show()
    app.exec()


.. code-block:: python

    import sys
    from PyQt5 import QtCore, QtGui, QtWidgets
    from PyQt5 import uic

    class MainWindow(QtWidgets.QMainWindow):

        def __init__(self, *args, **kwargs):
            super().__init__(*args, **kwargs)
            uic.loadUi("mainwindow.ui", self)


    app = QtWidgets.QApplication(sys.argv)
    window = MainWindow()
    window.show()
    app.exec_()


Converting your .ui file to Python
------------------------------------------

::
   
    pyuic5 mainwindow.ui -o MainWindow.py
    from MainWindow import Ui_MainWindow

.. code-block:: python

    import sys
    from PyQt5 import QtWidgets, uic

    from MainWindow import Ui_MainWindow


    class MainWindow(QtWidgets.QMainWindow, Ui_MainWindow):
        def __init__(self, *args, obj=None, **kwargs):
            super(MainWindow, self).__init__(*args, **kwargs)
            self.setupUi(self)


    app = QtWidgets.QApplication(sys.argv)

    window = MainWindow()
    window.show()
    app.exec()


打包发布pyqt应用程序
--------------------------

http://www.pyinstaller.org/

PyInstaller Quickstart
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Install PyInstaller from PyPI:

::

    pip install pyinstaller

Go to your program’s directory and run:

::

    pyinstaller yourprogram.py
    pyinstaller -Fw yourprogram.py

This will generate the bundle in a subdirectory called dist.

C:\Users\lfwen\AppData\Local\Programs\Python\Python36\python.exe

C:\Program Files\WindowsApps\PythonSoftwareFoundation.Python.3.7_3.7.1776.0_x64__qbz5n2kfra8p0\python.exe


ui界面控件说明
-----------------------

列表窗口部件

树窗口部件

表格窗口部件


树形结构控件实现多窗口切换
-------------------------------


把所有控件放在一个界面里方法Containers控件
-------------------------------------------------



lineEdit获取文字
------------------------

lineEdit.text()

lineEdit设置文字
------------------------

lineEdit.setText()


