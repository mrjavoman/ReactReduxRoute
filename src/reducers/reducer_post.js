//import FETCH_POSTS from '../actions/index';

const INITIAL_STATE = { all: [], post: null };
const FETCH_POSTS = "FETCH_POSTS";

export default function(state = INITIAL_STATE, action) {

    console.log(FETCH_POSTS);

    switch(action.type) {
        case FETCH_POSTS: 
            return { ...state, all: action.payload.data }
        default: 
            return state;
    }
}