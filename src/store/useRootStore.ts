import { useContext } from 'react'

import { RootContext } from '@shared/Provider'

const useRootStore = () => {
    return useContext(RootContext)
}

export default useRootStore
