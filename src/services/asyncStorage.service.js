import { utilService } from './util.service.js'

export const storageService = {
    query,
    getById,
    put,
    post,
    remove,
    // getLabels,
}



function query(key, filter) {
    var toys = utilService.loadFromStorage(key)
    if (!toys || !toys.length) toys = _createToys(key)
    if (!filter) return Promise.resolve(toys)
    return _filterToys(filter, toys)
}

function getById(key, toyId) {
    const toys = utilService.loadFromStorage(key)
    const toy = toys.find(toy => toy._id === toyId)
    return Promise.resolve(toy)
}

function put(key, toyToSave) {
    const toys = utilService.loadFromStorage(key)
    const idx = toys.findIndex(toy => toy._id === toyToSave._id)
    toys.splice(idx, 1, toyToSave)
    utilService.saveToStorage(key, toys)
    return Promise.resolve(toyToSave)
}

function post(key, toyToSave) {
    toyToSave._id = utilService.makeId()
    toyToSave.createdAt = Date.now()

    const toys = utilService.loadFromStorage(key)
    toys.unshift(toyToSave)
    utilService.saveToStorage(key, toys)
    return Promise.resolve(toyToSave)
}

function remove(key, toyId) {
    const toys = utilService.loadFromStorage(key)

    const idx = toys.findIndex(toy => toy._id === toyId)
    if (idx === -1) return Promise.reject('no such toy')

    toys.splice(idx, 1)
    utilService.saveToStorage(key, toys)
    return Promise.resolve('removed')
}

// function _filterToys(toys, filterBy) {
//     // const { labels, sortBy } = filterBy
//     const filteredToys = toys.filter(toy => {

//         if (filterBy.name) {
//             const regex = new RegExp(filterBy.name, 'i')
//             if (!regex.test(toy.name)) return false
//         }

//         // if (filterBy.inStock && !toy.inStock) {
//         //     return false
//         // }

//         // if (labels.length) {
//         //     const hasLabel = labels.some(label => toy.labels.includes(label))
//         //     if (!hasLabel) return false
//         // }
//         return true
//     })

//     // if (sortBy.name) {
//     //     toys = toys.sort((a, b) => a.name.localeCompare(b.name))
//     // }
//     // if (sortBy.price) {
//     //     toys = toys.sort((a, b) => (a.price - b.price) * sortBy.diff)
//     // }
//     // if (sortBy.created) {
//     //     toys = toys.sort((a, b) => (a.createAt - b.createAt) * sortBy.diff)
//     // }

//     return Promise.resolve(filteredToys)
// }

function _filterToys(filterBy, toys) {
    if (!filterBy) return toys
    const { name } = filterBy
  
    const regex = new RegExp(name, 'i')
    toys = toys.filter(toys => regex.test(toys.name))
  
    return Promise.resolve(toys)
  }

