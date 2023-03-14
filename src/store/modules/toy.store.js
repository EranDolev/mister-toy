import { toyService } from '../../services/toy.service.js' 

export const toyStore = {

    state: {
        toys: [],
        filter: {
            name: '',
            // by: 'ALL',
        },
    },
    getters: {
        getMsg(state) {
            return state.msg
            },
            toys({ toys, filter }) {
                if (!filter) return toys
    
                const regex = new RegExp(filter.name, 'i')
                toys = toys.filter(toy => {
                    return regex.test(toy.name)
                })
    
                return toys
            },
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
        setFilter(state, { filter }) {
            state.filter = { ...state.filter, ...filter }
            console.log('stat.filter:', state.filter)
        },
    },
    actions: {
        loadToys({ commit }, { filter }) {
            return toyService.query(filter)
                .then(toys => {
                    console.log(toys)
                    commit({ type: 'setToys', toys })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
}