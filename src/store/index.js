import { createStore } from 'vuex'
import { toyStore } from './modules/toy.store'

const mainStore = {
    strict:true,
    modules: {
        toyStore,
    }
}

export const store = createStore(mainStore)
