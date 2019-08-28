import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import List from './List.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} hideNavBar={true} initial = {true} />
         <Scene key = "list" component = {List} hideNavBar={true} title = "list" />
      </Scene>
   </Router>
)
export default Routes