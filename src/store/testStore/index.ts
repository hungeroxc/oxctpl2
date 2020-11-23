import { makeAutoObservable, observable } from 'mobx'

import { test } from '@services/api'

export class TestStore {
    constructor() {
        makeAutoObservable(this, { list: observable.ref })
    }

    list: ITestStore.List[] = []

    getList = async () => {
        try {
            const a = await test()
            this.list = a.data.list
        } catch (error) {
            console.log(error)
        }
    }
}

export default new TestStore()
