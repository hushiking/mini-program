import {
    tabBarFunc
} from '../../utils/template'
Page({
    data: {

    },
    onLoad: function () {
        tabBarFunc("tabBar", 0, this) // 0表示第一个tabbar  
    },
})