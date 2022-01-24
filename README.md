# renting-houses-app
- 前端 使用`React + React-router + Redux + antd-mobile + react-virtualized` + 百度地图Api 实现的租房App
- 后端 <a href="#">地址</a>


项目准备：
1. 部署后端本地接口
    - 在 api.js 中，添加请求拦截器
2. 脚手架初始化项目
3. 使用antd-mobile
4. 设置路由
    1. 封装 AuthRoute 鉴权路由组件
    2. 路由缓存（用`router v4`版本`没有实现😂）
5. 使用PropTypes进行props校验
6. 由于列表都是长列表,使用react-virtualized进行长列表处理


- 运行 
    ```shell
    git clone 
    cd renting-houses-app
    yarn or npm -i
    yarn start ot npm start
    ```

