docker
===============


https://docs.docker.com/get-started/overview/

https://www.runoob.com/docker/docker-container-connection.html

docker login

docker logout

docker images

docker ps
docker run -it bonaventureli/ubuntu:apache2 /bin/bash

docker run -p 80:80 -d httpd
docker stop interesting_mendel

docker run -d -P training/webapp python app.py

apache2
apt install net-tools
apt install iputils-ping

nginx
========
::

    $ docker pull nginx
    $ docker run --name nginx-test -p 8080:80 -d nginx

参数说明：

* --name nginx-test：容器名称。
* -p 8080:80： 端口进行映射，将本地 8080 端口映射到容器内部的 80 端口。
* -d nginx： 设置容器在在后台一直运行。

docker-machine ip


`阿里镜像加速`_

.. _`阿里镜像加速`: https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors



