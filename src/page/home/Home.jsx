import React from 'react'
import { TabBar } from 'antd-mobile'
import {
  Route,
  Switch,
  useHistory,
  useLocation,
   BrowserRouter as Router,
   Redirect,
} from 'react-router-dom'
import {
  AppOutline,
  AppstoreOutline,
  CollectMoneyOutline,
} from 'antd-mobile-icons'

import styles from './home.module.less'

import {CookBook} from "./cookbook"
import {CateGary} from "./categary"
import Self from './self/Index'

const Bottom = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/cookbook',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/categray',
      title: '分类',
      icon: <AppstoreOutline />,
    },
    {
      key: '/self',
      title: '个人中心',
      icon: <CollectMoneyOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default () => {
  return (
    <Router>
      <div className={styles.app}>
        <div className={styles.body}>
          <Switch>
            <Route exact path='/cookbook'>
              <CookBook />
            </Route>
            <Route exact path='/categray'>
              <CateGary></CateGary>
            </Route>
            <Route exact path='/self'>
              <Self></Self>
            </Route>
            <Redirect from='/' to="/cookbook"></Redirect>
          </Switch>
        </div>
        <div className={styles.bottom}>
          <Bottom />
        </div>
      </div>
    </Router>
  )
}


