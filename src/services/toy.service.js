import { utilService } from "./util.service.js"
import { storageService } from "./asyncStorage.service.js"
import { httpService } from "./http.service.js"

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
}

console.log('Toy service is up')
const KEY = 'toy_DB'
const BASE_URL = 'toy/'
_createToys()

// const API = 'toy/'

function query(filter) {
    // return storageService.query(KEY, filter)
    console.log(httpService.get(BASE_URL, filter))
    return httpService.get(BASE_URL, filter)
}

function getById(toyId) {
    // return storageService.getById(KEY, toyId)
    return httpService.get(BASE_URL + toyId)
}

function save(toyToSave) {
    // if (toyToSave._id) return storageService.put(KEY, toyToSave)
    // else return storageService.post(KEY, toyToSave)

    if (toyToSave._id) return httpService.put(BASE_URL, toyToSave)
    else return httpService.post(BASE_URL, toyToSave)
}

function remove(toyId) {
    // return storageService.remove(KEY, toyId)
    return httpService.delete(BASE_URL + toyId)
}

function getEmptyToy() {
    return {
        _id: '',
        name: '',
        price: null,
        labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: new Date(Date.now()).toLocaleString(),
        inStock: true,
    }
}

function _createToys() {
    var toys = JSON.parse(localStorage.getItem(KEY))
    if (!toys || !toys.length) {
        toys = [
            _createToy(
                'Talking Doll',
                123,
                ['Doll', 'Battery Powered', 'Baby'],
                ['Good', 'Nice', 'Fun']
            ),
            _createToy('Ball', 50, ['Outdoor', 'Baby'], ['Amazing!']),
            _createToy('Cards', 250, ['Box game'], ['wow!', 'awesome']),
        ]
        localStorage.setItem(KEY, JSON.stringify(toys))
    }
}

function _createToy(name, price, labels, reviews) {
    return {
        _id: utilService.makeId(),
        name,
        price,
        labels,
        inStock: true,
        createdAt: new Date(Date.now()).toLocaleString(),
        reviews,
    }
}