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
          { text: '备忘录清单', link: 'https://ref.eryajf.net' },
          { text: '网站状态', link: 'http://uptime.eryajf.net/dashboard' },
          { text: 'json2go', link: 'http://public.eryajf.net/json2go' },
          { text: '微信MD编辑', link: 'http://public.eryajf.net/mdnice' },
          { text: '国内镜像', link: 'http://public.eryajf.net/mirror' },
          { text: '出口IP查询', link: 'http://ip.eryajf.net' },
          { text: '代码高亮工具', link: 'http://public.eryajf.net/highlight/' },
        ]
      }
    ],
  },
  // { text: '开往', link: 'https://travellings.link' },
]