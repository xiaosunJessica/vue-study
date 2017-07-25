# vue-study
## element-ui
+ 自定义主题

    按照官网链接：http://element.eleme.io/#/zh-CN/component/custom-theme
+ eslint使用
    按照链接： http://eslint.cn/docs/user-guide/getting-started

+ 开发过程遇到的问题
  
1. fonts/element-icons.woff?t=1472440741： 采用file-loader,woff不加后缀匹配
2. webpack-dev-server启动服务，需要安装webpack-dev-server模块
3. 刷新界面，出现404的错误。原因是spa方式，其路由是虚拟的，需要将请求只想index,我才用connect-history-api-fallback方式
<https://router.vuejs.org/zh-cn/essentials/history-mode.html>
4. mounted输出没值，是因为没有通过export default




