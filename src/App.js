import React, { lazy, Suspense } from 'react'

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

// 导入首页和城市选择两个组件（页面）
import Home from './pages/Home'
// import CityList from './pages/CityList'
// import Map from './pages/Map'
// // 房源详情组件
// import HouseDetail from './pages/HouseDetail'
// // 登录
// import Login from './pages/Login'
// import Registe from './pages/Registe'

// // 房源发布
// import Rent from './pages/Rent'
// import RentAdd from './pages/Rent/Add'
// import RentSearch from './pages/Rent/Search'

// 路由访问控制组件
import AuthRoute from './components/AuthRoute'

// 使用动态组件的方式导入组件：
const CityList = lazy(() => import('./pages/CityList'))
const Map = lazy(() => import('./pages/Map'))
const HouseDetail = lazy(() => import('./pages/HouseDetail'))
const Login = lazy(() => import('./pages/Login'))
const Registe = lazy(() => import('./pages/Registe'))
const Rent = lazy(() => import('./pages/Rent'))
const RentAdd = lazy(() => import('./pages/Rent/Add'))
const RentSearch = lazy(() => import('./pages/Rent/Search'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="route-loading">loading...</div>}>
        <div className="App">
          {/* 默认路由匹配时，跳转到 /home 实现路由重定向到首页 */}
          <Route path="/" exact render={() => <Redirect to="/home" />} />
          {/* 配置路由 */}
          {/* Home 组件是父路由的内容 */}
          <Route path="/home" component={Home} />
          <Route path="/citylist" component={CityList} />
          <Route path="/map" component={Map} />

          {/* 房源详情的路由规则： */}
          <Route path="/detail/:id" component={HouseDetail} />
          <Route path="/login" component={Login} />
          <Route path="/registe" component={Registe} />

          {/* 配置登录后，才能访问的页面 */}
          <AuthRoute exact path="/rent" component={Rent} />
          <AuthRoute path="/rent/add" component={RentAdd} />
          <AuthRoute path="/rent/search" component={RentSearch} />
        </div>
      </Suspense>
    </Router>
  )
}

export default App
