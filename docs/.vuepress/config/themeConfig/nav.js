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
      { text: '随写编年', link: '/sxbn/'},
      { text: '家人物语', link: '/jrwy/'},
    ]
  },
  { text: '关于', link: '/pages/ea589c/' },
  {
    text: '页面',
    link: '/nav/',
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
        text: '本站页面',
        items: [
          { text: '导航', link: '/nav/' },
          { text: '打赏', link: '/reward/' },
        ]
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