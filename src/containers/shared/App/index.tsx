import React from 'react'
import { Button } from 'antd'
import { observer } from 'mobx-react'

import styles from './index.scss'
import SettingIcon from '@svg/setting.svg'
import ReactImg from '@images/react.png'
import useRootStore from '@store/useRootStore'

const App = () => {
    const { testStore } = useRootStore()

    const test = async () => {
        await testStore.getList()
    }
    const read = () => {
        const list: ITestStore.List[] = testStore.list
        console.log(list)
    }
    return (
        <div className={styles.test}>
            123123
            <SettingIcon />
            <Button type="primary" onClick={test}>
                123
            </Button>
            <Button type="primary" onClick={read}>
                321
            </Button>
            <img src={ReactImg} alt="" />
        </div>
    )
}

export default observer(App)
