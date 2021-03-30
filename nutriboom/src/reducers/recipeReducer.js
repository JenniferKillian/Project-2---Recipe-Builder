import {FETCH_RECIPES, FETCH_USER, FETCH_FOOD, NEW_USER, NEW_RECIPE} from '../actions/types/types';

const initialState = {
    items: [],
    item: {}
}

export default function(state=initialState, action) {
    switch (action.type) {
        case FETCH_RECIPES: 
        return {
            ...state,
            items:action.payload
        }
        case NEW_RECIPE: 
        return {
            ...state,
            item: action.payload
        }
        default:
            return state;
    }
}