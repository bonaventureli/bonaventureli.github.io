bat脚本
=============

注释
---------------

@echo on
@echo *******************************************************
@echo *       a file script.         *
@echo *                By abc     		    *
@echo *                                                     *
@echo *******************************************************
@echo ##
@echo off

移动文件
---------------

@echo ## Copy the release ota bin from Debug folder

copy /y ..\build\aaa\abc.bin .\

重命名文件
---------------

@echo ## rename the bin to abc.bin
copy abc.bin ddd.bin

删除文件
---------------

@echo delete the ddd.bin 

del ddd.bin

merge文件
---------------

@echo ## merge the aaa.bin to bbb.bin, generate ccc.bin

copy /b aaa.bin + bbb.bin ccc.bin

pause


%cd% %~dp0
---------------

%cd%和%~dp0都能用来表示当前目录，但是他们在不同的使用场景下，功能却不相同：

%cd%代表的是当前工作目录（current working directory，variable）；

%~dp0代表的是当前批处理文件所在完整目录（the batch file's directory，fixed）。

http://www.cygwin.com/

