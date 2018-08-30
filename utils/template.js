function tabBarInit() {
  return [{
    'current': 0,
    'pagePath': '/pages/index/index',
    'iconPath': '/images/nav-list1.png',
    'selectedIconPath': '/images/nav-list1-hover.png',
    'text': '首页'
  },
  {
    'current': 0,
    'pagePath': '/pages/scene/scene',
    'iconPath': '/images/nav-list2.png',
    'selectedIconPath': '/images/nav-list2-hover.png',
    'text': '场景'

  },
  {
    'current': 0,
    'pagePath': '/pages/mine/mine',
    'iconPath': '/images/nav-list3.png',
    'selectedIconPath': '/images/nav-list3-hover.png',
    'text': '我的'
  }
  ]
}

/**
 * tabBar主函数
 * @param {String} bindName 数据对象名
 * @param {type} id 表示第几个tabBar，从0开始
 * @param {type} target 绑定当前对象
 */
function tabBarMain(bindName = 'tabData', id, target) {
  let that = target
  let bindData = {}
  let data = tabBarInit()
  data[id]['iconPath'] = data[id]['selectedIconPath'] // 换当前的icon
  data[id]['current'] = 1
  bindData[bindName] = data
  that.setData({ bindData })
  // WePY写法
  // that.bindData = bindData
  // that.$apply()
}

module.exports = {
  tabBarFunc: tabBarMain
}
