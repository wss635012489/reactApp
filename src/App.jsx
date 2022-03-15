import React, { Component } from 'react'
import { Route,Switch, useLocation } from 'react-router-dom'
import Home from "./page/home/Home"
import List from './page/list/Index'
import Detail from './page/detail/Index'
import RouteReansition from './components/routeTransition/Index'
import "./App.css"
export default function App() {
  const location = useLocation()
  return (
    <div className='app'>
      <RouteReansition>
        <Switch location={location}>
          <Route path="/list">
            <List></List>
          </Route>
          <Route path="/detail">
            <Detail></Detail>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </RouteReansition>
    </div>
  ) 
}
