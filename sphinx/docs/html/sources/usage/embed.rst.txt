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
