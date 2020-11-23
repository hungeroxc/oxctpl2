import React from 'react'
import { Button } from 'antd'
import { observer } from 'mobx-react'
import { useHistory } from 'react-router-dom'

import SettingIcon from '@svg/setting.svg'
import ReactImg from '@images/react.png'
import useRootStore from '@store/useRootStore'
import styles from './index.scss'

const Test = () => {
    const { testStore } = useRootStore()

    const test = async () => {
        await testStore.getList()
    }
    const read = () => {
        const list: ITestStore.List[] = testStore.list
        console.log(list)
    }
    const history = useHistory()
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
            <button onClick={() => history.push('/')}>跳转</button>
            <img src={ReactImg} alt="" />
        </div>
    )
}

export default observer(Test)
