// nav
module.exports = [
  { text: '首页', link: '/' },
  { text: '运维',link: '/ops/',
    items: [
      { text: 'k8s', link: '/k8s/'},
      { text: '存储', link: '/storage/'},
      { text: 'CICD', link: '/cicd/'},
    ]
  },
  { text: '编程',link: '/code/',
    items: [
      { text: 'python', link: '/python/'},
      { text: 'golang', link: '/golang/'},
    ]
  },
  { text: '生活',link: '/life/',
    items: [
    ]
  },
  { text: '友链',
    items: [
      { text: '喻好好', link: 'https://www.cnblogs.com/yuhaohao'},
      { text: '二丫讲梵', link: 'https://wiki.eryajf.net/'},
      { text: '鄢云峰 YYF', link: 'https://yanyunfeng.com/'},
      { text: 'Pursue', link: "https://doc.pursue.pub/"},
    ]
  },
  { text: '关于', link: '/pages/ea589c/' },
  {
    text: '页面',
    items: [
      {
        text: '本站索引',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
      {
        text: '我的工具',
        items: [
          { text: '文心一言', link: 'https://yiyan.baidu.com' },
          { text: 'POE.COM', link: 'https://poe.com' },
        ]
      }
    ],
  },
  // { text: '开往', link: 'https://travellings.link' },
]
