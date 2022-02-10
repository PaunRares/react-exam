export function addPeople(payload) {
    return {
        type: 'ADD_PEOPLE',
        payload
    }
}
export function removePeople(payload) {
    return {
        type: 'REMOVE_PEOPLE',
        payload
    }
}
export function sortName() {
    return {
        type: 'SORT_NAME'
    }
}
export function sortPrice() {
    return {
        type: 'SORT_PRICE'
    }
}
export function filterPrice(payload) {
    return {
        type: 'FILTER_PRICE',   
        payload
    }
}