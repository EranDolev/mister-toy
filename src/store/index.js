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
        addToy(state, { toy }) {
            // calling service
            const savedToy = toyService.save(toy)
            const idx = state.toys.findIndex(toy => toy.id === savedToy.id)
            let msg = `Toy ${savedToy.name} was added`
            let desc = `Toy ${savedToy.name} was added`
            if (idx !== -1) {
                state.toys.splice(idx, 1, savedToy)
                msg = `Toy with id: ${savedToy._id} was updated`
                desc = `Toy with id: ${savedToy.name} was updated`
            }
            state.toys.push(savedToy)
            // showSuccessMsg(msg)

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
