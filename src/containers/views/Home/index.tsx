import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()
    return <div onClick={() => history.push('/test')}>这是home页面</div>
}

export default Home
