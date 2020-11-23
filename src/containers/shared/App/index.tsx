import React from 'react'
import { observer } from 'mobx-react'
import loadable from '@loadable/component'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const loadableOptions = { fallback: <div>loading</div> }
const Home = loadable(() => import(/* webpackChunkName: "home" */ '@views/Home'), loadableOptions)
const Test = loadable(() => import(/* webpackChunkName: "test" */ '@views/Test'), loadableOptions)

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/test" component={Test} />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default observer(App)
