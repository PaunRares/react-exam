const initialState = {
    people:[],
    filteredPeople: [],
    filterActive: false
}
export function reducer (state=initialState, action) {
    switch(action.type){
        case 'ADD_PEOPLE':
            return {
                ...state,
                people: action.payload,
                filterActive: false
            }
        case 'SORT_NAME':
            const sortNameArray = state.people.sort((a, b) => {
                let nameA = a.firstName.toUpperCase();
                let nameB = b.firstName.toUpperCase();
                if(nameA < nameB){
                    return -1;
                }
                if(nameA > nameB){
                    return 1;
                }
                return 0;
            })
            return {
                ...state,
                people: sortNameArray,
                filteredPeople: [...state.filteredPeople],
                filterActive: false
            }
        case 'SORT_PRICE':
            const sortPriceArray = state.people.sort((a, b) => a.salary-b.salary)
            return {
                ...state,
                people: sortPriceArray,
                filteredPeople: [...state.filteredPeople],
                filterActive: false
            }    
        case 'FILTER_PRICE':
            const toFilter = action.payload.split('-')
            const filterSalary = state.people.filter(obj => obj.salary >= Number(toFilter[0]) && obj.salary <= Number(toFilter[1]))
            return {
                ...state,
                people: [...state.people],
                filteredPeople: filterSalary,
                filterActive: true
            }
        case 'REMOVE_PEOPLE':
            const newPeople = state.people.filter(obj => obj.id !== action.payload);
            const newFiltredPeople = state.filteredPeople.filter(obj => obj.id !== action.payload)
            return {
                ...state,
                people: newPeople,
                filteredPeople: newFiltredPeople
            }

        default:
            return state;
    }
}