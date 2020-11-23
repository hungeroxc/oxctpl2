import React, { createContext, ReactElement } from 'react'
import { Observer } from 'mobx-react'

import * as store from '@store/index'

interface ChildrenProps<T> {
    children: (value: T) => ReactElement<any>
}

export const RootContext = createContext<Global.IStore>(null)

/**
 * 已包含Observer,用于class组件
 * @param param0
 */
export const RootConsumer = ({ children }: ChildrenProps<Global.IStore>) => <Observer>{() => children(store)}</Observer>

const Provider: React.FC = ({ children }) => {
    return <RootContext.Provider value={{ ...store }}>{children}</RootContext.Provider>
}

export default Provider
