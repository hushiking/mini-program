# 小程序tabBar

1. 采用模板引入实现各个页面tabBar
2. 在`template.js`中定义tabBar生成函数
3. 函数参数`bindName`代表模板中使用的数组名称；`id`表示第几个tabBar，从`0`开始；`target`表示绑定当前页面的`this`
4. 在对应页面的wxml文件中引入模板，如下所示：
    ```wxml
    <import src="../../template/template_tab.wxml" />
    <template is="tabBar" data="{{...bindData}}" />
    ```
5. 样式文件可以在`app.wxss`中全局引入，也可以在每个用到tabBar页面的wxss文件中单独引入，就像这样：`@import "/template/template_tab.wxss";`
6. 在需要使用tabBar页面的js文件中引入`template.js`，就像这样：`import { tabBarFunc } from '../../utils/template'`
7. 在对应页面js文件的onLoad函数中使用`tabBarFunc("tabBar", 0, this)`来生成tabBar，其中`0`表示第一个tabBar，`1`表示第二个tabBar，以此类推
