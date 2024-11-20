(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{360:function(t,l,i){"use strict";i.r(l);var e=i(0),r=Object(e.a)({},(function(){var t=this,l=t._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h2",{attrs:{id:"前言"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),l("p",[t._v("在k8s集群实际使用过程中，我们可以看到容器在正常运行或者异常运行返回的不同状态码，这里针对异常情况，我们可以借助不同的状态码，排查对应的异常。")]),t._v(" "),l("ul",[l("li",[t._v("容器退出状态码的区间在0-255")]),t._v(" "),l("li",[t._v("0 表示正常退出")]),t._v(" "),l("li",[t._v("外界中断将程序退出的时候状态码区间在 129-255，(操作系统给程序发送中断信号，比如 kill -9 是 SIGKILL，Ctrl+c 是 SIGINT)")]),t._v(" "),l("li",[t._v("一般程序自身原因导致的异常退出状态区间在 1-128 (这只是一般约定，程序如果一定要用129-255的状态码也是可以的)注意：有时我们会看到代码中有 exit(-1)，这时会自动做一个转换，最终输出的结果还是会在 0-255 之间。")])]),t._v(" "),l("h2",{attrs:{id:"常见的容器退出状态码"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常见的容器退出状态码"}},[t._v("#")]),t._v(" 常见的容器退出状态码")]),t._v(" "),l("p",[l("strong",[t._v("EXIT CODE 137")])]),t._v(" "),l("ul",[l("li",[t._v("表明容器收到了SIGKILL信号，进程被杀掉，对应kill -9")]),t._v(" "),l("li",[t._v("引发SIGKILL的是docker kill。这可以由用户或由docker守护程序来发起，手动执行：docker kill")]),t._v(" "),l("li",[t._v("137比较常见，如果pod中的limit资源设置较小，会运行内存不足导致OOMKilled，此时state中的 OOMKilled值为true，你可以在系统的 dmesg -T 中看到oom日志")])])])}),[],!1,null,null,null);l.default=r.exports}}]);