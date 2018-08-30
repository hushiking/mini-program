import {
    tabBarFunc
} from '../../utils/template'
Page({
    data: {

    },
    onLoad: function () {
        tabBarFunc("tabBar", 2, this) // 0表示第一个tabbar  
    },
})