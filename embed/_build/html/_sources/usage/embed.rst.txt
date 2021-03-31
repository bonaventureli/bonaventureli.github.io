embed
=============

信号量互斥

::

    int take(void)
    {
        if(gflag == 1)
        {
            gflag = 0;
            continue;
        }
    }

    int release(void)
    {
        if(gflag == 0)
        {
            gflag = 1;
        }
    }


`memcpy越界`_

.. _`memcpy越界`: https://hec9sr20xg.feishu.cn/file/boxcny1uQZSlNcLB40vtTY67fPf
