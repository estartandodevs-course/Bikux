import React from 'react'
import { Switch, Route, Redirect} from 'react-router'


import Home from 'components/home/Home'
import Login from 'components/login/Login'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={Login} />
        <Redirect from='*' to='/' />

    </Switch>
