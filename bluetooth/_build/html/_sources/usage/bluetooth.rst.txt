bluetooth
======================



之前一段时间学习了HOGP profile。Specification写得很简单，主要是说明它的一些基本要求。而在代码方面，它的内容也并不是非常多。正如它的名字一样——HID over GATT Profile，它是利用LE的基本协议GATT（通用属性协议）来实现HID host与Device的交互的。总的来说，工作在LE模式的HID设备从连接建立到通信的过程大致是这样的：

1.在设备发现阶段，HID（以下均指LE的HID设备）device需要在它的advertisement中包含HID的相关信息，如HID service的UUID、设备Appearance、设备Local Name和Class of Device等；这样，HID host在扫描中就可以得知对端为HID设备了；

2.在连接建立阶段，用户通过UI触发连接的建立过程；由于前面检测到对方为HID设备，连接建立会进入到HID的state machine当中，以建立HID连接为最终目标；这一过程又分为下面几个阶段：

1）GATT连接建立阶段；既然是HID over GATT Profile，必须先由GATT来探探对方的虚实，看看它是否符合HOGP的规范。这里会涉及到L2CAP的连接建立与GATT的disovery过程；

2）SMP通道加密阶段；其实这是每对LE设备建立连接的必经之路，好歹得加密防止简单的攻击。由于L2CAP连接建立是由HOGP触发的，因此在这个过程中会有SMP的加密过程。之前一篇博客层介绍过，SMP可以在createBond的过程中触发，实现整个配对、加密过程，但那是在非HID设备的情况下进行的；

3）HID服务搜索阶段与配置；虽然第一阶段中GATT已经完成了service discovery，但是HID还需要将必要的属性从GATT的cache中提取出来，存到自己的database中；此外还有一些额外的属性值（characteristic value）需要读取，如用于解析按键的Report Map；最后，对某些属性的configuration descriptor进行配置，设置如notification、indication等；

4）HID设备注册阶段；这是HID代码向系统注册uhid设备的过程。说实话这一部分我还不是很了解，大概就是注册了一个虚拟设备节点，同时备案了HID的Report Map；以后每次有HID消息过来，只要将它作为Input事件写入这个节点的文件描述符即可，剩下的事件处理kernel会来帮我们完成；

5）HID设备通信阶段；这里将根据之前的第三阶段的配置结果进行。如hid device将事件通过notification的方式发送给hid host，而host根据第三阶段的搜索结果进行相应的处理。

 

下面，我以一个LE键盘为例，简单介绍下Bluedroid（不是bluez！！！）中HOGP的代码流程。

首先，请允许我放出createBond过程中的一段代码，一切皆是由它引起的




https://blog.csdn.net/edmond999/article/details/82628865



SYD8801是一款低功耗高性能蓝牙低功耗SOC，集成了高性能2.4GHz射频收发机、32位ARM Cortex-M0处理器、128kB Flash存储器、以及丰富的数字接口。SYD8801片上集成了Balun无需阻抗匹配网络、高效率DCDC降压转换器，适合用于可穿戴、物联网设备等



http://www.sydtek.com/

本文之目的是给出一个学习HOGP设备开发知识的指引，包括HOGP的学习资料和BLE开发板资料。

首先你需要阅读《Human Interface Device over Bluetooth Low Energy》。本文是对HOGP的一篇综述，先介绍了USB HID，然后介绍了HID Over GATT。HOGP采用了USB HID的数据格式，所以务必先阅读USB HID；否则你可能看不懂HOGP规范中的数据格式。这篇综述涉及到四篇spec：《USB Device Class Definition for Human Interface Devices(HID)》、《USB HID Usage Tables》、《HID Over GATT Profile》和《HID Service》。


https://www.bluetooth.com/specifications/specs/


`蓝牙联盟`_
.. _`蓝牙联盟`: https://www.bluetooth.com/

core5.2_

.. _core5.2: https://hec9sr20xg.feishu.cn/file/boxcnNpf33eqntLWpMLNL2uSfBc

`iphone抓HCI log方法`_

.. _`iphone抓HCI log方法`: https://hec9sr20xg.feishu.cn/file/boxcnKnZNGrfv7YQsrzsboHruXT
