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

