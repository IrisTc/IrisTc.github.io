(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{217:function(t,s,a){"use strict";a.r(s);var _=a(6),n=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"实验五报告-简单文件系统的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验五报告-简单文件系统的实现"}},[t._v("#")]),t._v(" 实验五报告：简单文件系统的实现")]),t._v(" "),a("p",[a("em",[t._v("陶莎 18271407")])]),t._v(" "),a("h3",{attrs:{id:"一、实验目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、实验目的"}},[t._v("#")]),t._v(" 一、实验目的")]),t._v(" "),a("p",[t._v("​\t\t通过具体的文件存储空间的管理、文件物理结构、目录结构和文件操作的实现，加深对文件系统内部数据结构、功能以及实现过程的理解。")]),t._v(" "),a("h3",{attrs:{id:"二、实验内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、实验内容"}},[t._v("#")]),t._v(" 二、实验内容")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在内存中开辟一个虚拟磁盘空间作为文件存储器，在其上实现一个多用户多目录的文件系统。在退出该文件系统的同时，应将虚拟磁盘上的内容以一个文件的方式保存到磁盘上，以便下次可以再将它恢复到内存的虚拟磁盘中。")])]),t._v(" "),a("li",[a("p",[t._v("文件物理结构可采用显式链接或其他方法。")])]),t._v(" "),a("li",[a("p",[t._v("空闲磁盘空间的管理可选择FAT图、位示图或其他方法。")])]),t._v(" "),a("li",[a("p",[t._v("文件目录结构采用多级目录结构。为简单起见，目录组织方式可以不使用索引结点，每个目录项应包含文件名、物理地址、长度等信息，还可以通过目录项实现对文件的读写保护。")])]),t._v(" "),a("li",[a("p",[t._v("要求提供以下操作命令：")]),t._v(" "),a("ul",[a("li",[t._v("my_format：对文件存储器进行格式化，即按照文件系统的结构对虚拟磁盘空间进行布局，并在其上创建根目录以及用于管理文件存储空间等的数据结构。")]),t._v(" "),a("li",[t._v("my_mkdir：用于创建子目录")]),t._v(" "),a("li",[t._v("my_rmdir：用于删除子目录")]),t._v(" "),a("li",[t._v("my_ls：用于显示目录中的内容")]),t._v(" "),a("li",[t._v("my_cd：用于更改当前目录")]),t._v(" "),a("li",[t._v("my_create：用于创建文件")]),t._v(" "),a("li",[t._v("my_open：用于打开文件")]),t._v(" "),a("li",[t._v("my_close：用于关闭文件")]),t._v(" "),a("li",[t._v("my_write：用于写文件")]),t._v(" "),a("li",[t._v("my_read：用于读文件")]),t._v(" "),a("li",[t._v("my_rm：用于删除文件")]),t._v(" "),a("li",[t._v("my_exitsys：用于退出文件系统")])])])]),t._v(" "),a("h3",{attrs:{id:"三、设计方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、设计方案"}},[t._v("#")]),t._v(" 三、设计方案")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("在该虚拟文件系统启动时，申请一块内存作为磁盘空间")])]),t._v(" "),a("li",[a("p",[t._v("将这块内存空间格式化，仿照FAT16文件系统")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("1块")]),t._v(" "),a("th",[t._v("2块")]),t._v(" "),a("th",[t._v("2块")]),t._v(" "),a("th",[t._v("995块")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("引导块")]),t._v(" "),a("td",[t._v("FAT1")]),t._v(" "),a("td",[t._v("FAT2")]),t._v(" "),a("td",[t._v("数据区")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("关键数据结构设计")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("引导块sysblock")]),t._v(" "),a("p",[t._v("在引导块中主要存放逻辑磁盘的相关描述信息，磁盘块大小、数量、文件分配表、根目录区、数据区在磁盘中的起始位置等。本实例是在内存的虚拟磁盘中创建的一个文件系统，因此包含的内容较少，只有磁盘块大小，数量，数据区开始位置，根目录开始位置等")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BLOCK")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" magic_number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//魔数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" information"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件系统信息")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根目录起始盘块号")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("startblock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//虚拟磁盘数据区开始位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" sysblock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("文件控制块fcb")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FCB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" exname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" attribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0目录文件，1数据文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件创建时间")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件创建日期")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件起始盘块号")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件大小")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" free"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0：空fcb")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" fcb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("文件分配表fat")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FAT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" fat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("用户打开文件表useropen")]),t._v(" "),a("p",[t._v("当打开一个文件时，必须将文件的目录项中的所有内容全部复制到内存中，同时还要记录文件操作的动态信息，如读写指针的值等。本实例中实现的是一个用于单用户单人舞系统的文件系统，为简单起见，我们把用户文件描述符表和内存fcb表合在一起，称为用户打开文件表，表项数目为10，即一个用户最多可同时打开10个文件，用一个数组来描述，即数组下表即某个打开文件的描述符")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("USEROPEN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" exname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" attribute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0目录文件，1数据文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件创建时间")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件创建日期")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("short")]),t._v(" first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件起始盘块号")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//文件大小")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" free"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//0：空fcb")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" dirno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在父目录文件中的盘块号")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" diroff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//fcb在父目录中的逻辑序号")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" dir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//全路径信息")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//读写指针在文件中的位置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" fcbstate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否修改")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" topenfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//打开的表项是否为空")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" useropen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("全局变量定义")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("myhard"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指向虚拟磁盘内存的起始地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SIZE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//缓冲区")]),t._v("\nuseropen filelist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MAXOPENFILE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用户打开文件表数组")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" currfd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//用户当前目录位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("startb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//记录虚拟磁盘数据区开始位置")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("虚拟磁盘空间布局")]),t._v(" "),a("p",[t._v("由于真正的磁盘操作需要设计设备的驱动程序，所以本实例是在内存中申请一块空间作为虚拟磁盘使用，我们的文件系统建立在这个虚拟磁盘上。虚拟磁盘一共划分为1000个磁盘块，每个块占1024字节，其布局格式是模仿FAT文件系统设计的")])])]),t._v(" "),a("p",[t._v("​          ![img](file:///C:/Users/TC/AppData/Local/Temp/msohtmlclip1/01/clip_image002.png)")])])]),t._v(" "),a("h3",{attrs:{id:"四、实验过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、实验过程"}},[t._v("#")]),t._v(" 四、实验过程")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("initSys")])]),t._v(" "),a("ul",[a("li",[t._v("功能：文件系统启动函数，读取文件系统内容，初始化全局变量并打开根目录")]),t._v(" "),a("li",[t._v("流程：\n"),a("ul",[a("li",[t._v("如果已经存在文件系统（即SYSNAME文件且开头魔数相同）则将root目录载入，否则调用my_format函数创建文件系统再载入")]),t._v(" "),a("li",[t._v("初始化根目录并进入")]),t._v(" "),a("li",[t._v("初始化文件打开表filelist，将当前目录写入第一个")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("my_format")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("功能：格式化磁盘，初始化前6个磁盘块")])]),t._v(" "),a("li",[a("p",[t._v("流程：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("分配虚拟磁盘内存myhard")])]),t._v(" "),a("li",[a("p",[t._v("初始化引导块，即第0块")])]),t._v(" "),a("li",[a("p",[t._v("初始化两个FAT表，即第1-4块，每个FAT表占2个块")])]),t._v(" "),a("li",[a("p",[t._v("初始化根目录，即第5块，创建.和..两个特殊目录")])]),t._v(" "),a("li",[a("p",[t._v("写入磁盘空间，即SYSNAME文件")])])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("my_exitsys")])]),t._v(" "),a("ul",[a("li",[t._v("功能：将文件系统数据写入磁盘保存，退出系统")]),t._v(" "),a("li",[t._v("流程：\n"),a("ul",[a("li",[t._v("依次关闭已打开文件")]),t._v(" "),a("li",[t._v("将虚拟磁盘信息myhard写入SYSNAME文件")])])])])]),t._v(" "),a("li",[a("p",[t._v("*"),a("em",[t._v("my_mkdir(char "),a("em",[t._v("filename)")])])]),t._v(" "),a("ul",[a("li",[t._v("功能：在当前目录创建新目录")]),t._v(" "),a("li",[t._v("流程：\n"),a("ul",[a("li",[t._v("调用do_read读入当前目录文件到内存，检查新建文件目录是否重名")]),t._v(" "),a("li",[t._v("分配一个空间的打开文件表项")]),t._v(" "),a("li",[t._v("分配一个空闲盘块")]),t._v(" "),a("li",[t._v("更新FAT表")]),t._v(" "),a("li",[t._v("在当前目录中为新建目录寻找一个空闲的目录项")]),t._v(" "),a("li",[t._v("设置fcb")]),t._v(" "),a("li",[t._v("创建特殊的两个目录项.和..")])])])])]),t._v(" "),a("li",[a("p",[t._v("*"),a("em",[t._v("my_cd(char "),a("em",[t._v("filename)")])])]),t._v(" "),a("ul",[a("li",[t._v("功能：在当前目录进入filename目录")]),t._v(" "),a("li",[t._v("流程\n"),a("ul",[a("li",[t._v("调用do_read读当前目录文件表项到内存")]),t._v(" "),a("li",[t._v("遍历查找filename是否存在")]),t._v(" "),a("li",[t._v("如果是.则直接返回；如果是..则直接关闭当前目录")]),t._v(" "),a("li",[t._v("如果是其他目录，申请一个打开文件表项，把找到的目录信息写入打开文件表，设置当前目录为该目录")])])])])]),t._v(" "),a("li",[a("p",[t._v("*"),a("em",[t._v("my_rmdir(char "),a("em",[t._v("filename)")])])]),t._v(" "),a("ul",[a("li",[t._v("功能：删除空目录")]),t._v(" "),a("li",[t._v("流程：\n"),a("ul",[a("li",[t._v("调用do_read读当前目录文件表项到内存")]),t._v(" "),a("li",[t._v("遍历查找要删除的文件目录是否存在")]),t._v(" "),a("li",[t._v("检查该目录是否为空")]),t._v(" "),a("li",[t._v("检查是否已经打开，若打开则调用close关闭")]),t._v(" "),a("li",[t._v("回收目录文件的磁盘块")]),t._v(" "),a("li",[t._v("清空该目录文件的目录项")]),t._v(" "),a("li",[t._v("修改用户打开表项的长度信息")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("my_ls")])]),t._v(" "),a("ul",[a("li",[t._v("功能：列出当前目录中的所有目录和文件项")]),t._v(" "),a("li",[t._v("流程：\n"),a("ul",[a("li",[t._v("调用do_read读出当前目录文件表项到内存")]),t._v(" "),a("li",[t._v("将目录文件信息打印到屏幕上")])])])])]),t._v(" "),a("li",[a("p",[t._v("*"),a("em",[t._v("my_create(char "),a("em",[t._v("filename)")])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("功能：新建文件")])]),t._v(" "),a("li",[a("p",[t._v("流程：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("检查文件名是否合法")])]),t._v(" "),a("li",[a("p",[t._v("检查是否在目录中新建文件，不能再文件中新建文件")])]),t._v(" "),a("li",[a("p",[t._v("读当前目录文件表项到内存")])]),t._v(" "),a("li",[a("p",[t._v("遍历检查是否有重名文件")])]),t._v(" "),a("li",[a("p",[t._v("申请fcb和空闲盘块，更新FAT表")])]),t._v(" "),a("li",[a("p",[t._v("更新当前目录的打开目录文件表项")])]),t._v(" "),a("li",[a("p",[t._v("修改父目录的fcb")])])])])])]),t._v(" "),a("li",[a("p",[t._v("*"),a("em",[t._v("my_rm(char "),a("em",[t._v("filename)")])])]),t._v(" "),a("ul",[a("li",[t._v("功能：删除文件")]),t._v(" "),a("li",[t._v("流程：\n"),a("ul",[a("li",[t._v("调用do_read读当前目录文件表项到内存")]),t._v(" "),a("li",[t._v("遍历查找filename文件")]),t._v(" "),a("li",[t._v("更新FAT表")]),t._v(" "),a("li",[t._v("清空该文件的fcb")]),t._v(" "),a("li",[t._v("修改父目录文件的fcb")])])])])]),t._v(" "),a("li",[a("p",[t._v("*"),a("em",[t._v("my_open(char "),a("em",[t._v("filename)")])])]),t._v(" "),a("ul",[a("li",[t._v("功能：打开文件")]),t._v(" "),a("li",[t._v("流程：\n"),a("ul",[a("li",[t._v("调用do_read读当前目录文件表项到内存")]),t._v(" "),a("li",[t._v("遍历查找filename文件")]),t._v(" "),a("li",[t._v("申请空闲的打开文件表表项")]),t._v(" "),a("li",[t._v("写入打开文件表")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("my_close(int fd)")])]),t._v(" "),a("ul",[a("li",[t._v("功能：关闭文件")]),t._v(" "),a("li",[t._v("流程：\n"),a("ul",[a("li",[t._v("检查fd的有效性")]),t._v(" "),a("li",[t._v("检查用户打开表表项的fcbstate字段，即是否修改")]),t._v(" "),a("li",[t._v("回收该文件占据的打开文件表表项内存")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("my_write(int fd)")])]),t._v(" "),a("ul",[a("li",[t._v("功能：在文件中写入数据")]),t._v(" "),a("li",[t._v("流程：\n"),a("ul",[a("li",[t._v("检查fd的有效性")]),t._v(" "),a("li",[t._v("提示用户输入写模式")]),t._v(" "),a("li",[t._v("提示用户输入内容")]),t._v(" "),a("li",[t._v("调用do_write()将键入的内容写入到文件中")]),t._v(" "),a("li",[t._v("返回写入的字节数")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("my_read(fd)")])]),t._v(" "),a("ul",[a("li",[t._v("功能：读取文件内容并输出")]),t._v(" "),a("li",[t._v("流程：\n"),a("ul",[a("li",[t._v("检查fd的有效性")]),t._v(" "),a("li",[t._v("调用do_read()读取内容到内存")]),t._v(" "),a("li",[t._v("输出")])])])])]),t._v(" "),a("li",[a("p",[t._v("*"),a("em",[t._v("do_write(int fd, char "),a("em",[t._v("text, int len, char wstyle)")])])]),t._v(" "),a("ul",[a("li",[t._v("功能：写入")]),t._v(" "),a("li",[t._v("参数：\n"),a("ul",[a("li",[t._v("fd：打开文件表的下标")]),t._v(" "),a("li",[t._v("text：写入的内容")]),t._v(" "),a("li",[t._v("len：写入长度")]),t._v(" "),a("li",[t._v("wstyle：写入的模式")])])]),t._v(" "),a("li",[t._v("流程：\n"),a("ul",[a("li",[t._v("根据不同的写入模式移动写指针，截断写移到开头，追加写移到末尾")]),t._v(" "),a("li",[t._v("定位磁盘块和块内偏移量")]),t._v(" "),a("li",[t._v("循环写入")]),t._v(" "),a("li",[t._v("如果写入长度比磁盘块大小大，则写满后申请一块新的磁盘块，循环写入；否则一次性写入")]),t._v(" "),a("li",[t._v("删除多余的磁盘块，因为截断写可能导致新写入的数据占据磁盘块数量小于原占据的磁盘块数量，需要释放")])])])])]),t._v(" "),a("li",[a("p",[t._v("*"),a("em",[t._v("do_read(int fd, int len, char "),a("em",[t._v("text)")])])]),t._v(" "),a("ul",[a("li",[t._v("功能：读出")]),t._v(" "),a("li",[t._v("参数：\n"),a("ul",[a("li",[t._v("fd：打开文件表的下标")]),t._v(" "),a("li",[t._v("text：写入的内容")]),t._v(" "),a("li",[t._v("len：写入长度")])])]),t._v(" "),a("li",[t._v("流程：\n"),a("ul",[a("li",[t._v("根据读取指针位置pos，首磁盘块first，fat表定位读取目标磁盘块和块内地址")]),t._v(" "),a("li",[t._v("循环读取到剩余待读取长度小于等于0")]),t._v(" "),a("li",[t._v("每次读取判断剩余要读取的长度是否超过当前磁盘块，不超出就读完，超出就读到这个磁盘块结束，等下一个循环再读")])])])])])]),t._v(" "),a("h3",{attrs:{id:"五、实验测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、实验测试"}},[t._v("#")]),t._v(" 五、实验测试")]),t._v(" "),a("ul",[a("li",[a("p",[a("img",{attrs:{src:"G:%5C%E6%88%AA%E5%9B%BE%5C%E6%88%AA%E5%9B%BE%5C912.PNG",alt:"912"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"G:%5C%E6%88%AA%E5%9B%BE%5C%E6%88%AA%E5%9B%BE%5C911.PNG",alt:"911"}})])])]),t._v(" "),a("h3",{attrs:{id:"六、问题记录和总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、问题记录和总结"}},[t._v("#")]),t._v(" 六、问题记录和总结")])])}),[],!1,null,null,null);s.default=n.exports}}]);