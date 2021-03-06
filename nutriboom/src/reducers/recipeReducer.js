import {SCHEDULE_RECIPE, GET_IMAGE, FETCH_RECIPES, FETCH_RECIPE, NEW_RECIPE, GET_RECIPES_BY_AUTH} from '../actions/types';

const initialState = {
    recipes: [],
    dates: [],
    newrecipe: {
        title: '',
        date: undefined,
        steps: []
    },
    fetchedrecipe: {
        author: '',
        description: '',
        name: '',
        time: undefined
    },
    fetchedrecipes: {
        author: '',
        description: '',
        name: '',
        time: undefined
    },
    image: {}
}

export default function(state=initialState, action) {
    console.log(action.payload);
    switch (action.type) {
        case FETCH_RECIPES: 
        return {
            ...state,
            dates: action.payload
        }
        case GET_RECIPES_BY_AUTH:
        return {
            ...state,
            recipes:action.payload
        }
        case FETCH_RECIPE: 
        return {
            ...state,
            fetchedrecipe:action.recipe
        }
        case NEW_RECIPE: 
        return {
            ...state,
            recipe: action.payload
        }
        case GET_IMAGE: 
        return {
            ...state,
            image: action.payload
        }
        case SCHEDULE_RECIPE: 
        return {
            ...state,
            dates: action.payload
        }
        default:
            return state;
    }
}