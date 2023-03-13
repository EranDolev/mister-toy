import { createStore } from 'vuex'
import { toyService } from '../services/toy.service'

const toyStore = {
    strict:true,
    state() {
        return {
            toys: [],
        }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
    },
    actions: {
        loadToys({ commit }) {
            return toyService.query()
                .then(toys => {
                    console.log(toys)
                    commit({ type: 'setToys', toys })
                })
        }
    },
    getters: {
        getMsg(state) {
        return state.msg
        },
        toys({ toys }) {return toys},
    },
    modules: {}
}

export const store = createStore(toyStore)
