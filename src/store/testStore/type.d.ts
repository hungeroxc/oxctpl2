import { TestStore as TestStoreModel } from './index'

export as namespace ITestStore

export interface TestStore extends TestStoreModel {}

export interface List {
    id: string
}
