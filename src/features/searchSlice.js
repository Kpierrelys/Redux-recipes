const initialState = '';

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'search/setSearch':
            return action.payload;
        case 'search/clearSearch':
            return '';
        default:
            return state;
    }
}

export const setSearchCalorie = (calories) => {
    return {
        type: 'search/setSearch',
        payload: calories
    }
}

export const clearSearch = () => {
    return {
        type: 'search/clearSearch'
    }
}