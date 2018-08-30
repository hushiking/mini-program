import {
    tabBarFunc
} from '../../utils/template'
Page({
    data: {

    },
    onLoad: function () {
        tabBarFunc("tabBar", 1, this) // 0表示第一个tabbar  
    },
})