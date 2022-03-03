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
      key: '/more',
      title: '更多',
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
              <Todo />
            </Route>
            <Route exact path='/more'>
              <Message />
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


function Todo() {
  return <div>我的待办</div>
}

function Message() {
  return <div>我的消息</div>
}

function PersonalCenter() {
  return <div>个人中心</div>
}