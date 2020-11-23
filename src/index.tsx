import React from 'react'
import ReactDOM from 'react-dom'

import App from '@shared/App'
import Provider from '@shared/Provider'

const render = () => {
    ReactDOM.render(
        <Provider>
            <App />
        </Provider>,
        document.getElementById('app')
    )
}

render()
