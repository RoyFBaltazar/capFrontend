import { FETCH_TETE_FAIL, FETCH_TETE_START, FETCH_TETE_SUCESS, LOGIN_USER, LOGOUT_USER, NEW_USER, Post_TETE } from "../actions/actions";
import dummyData from "../dummyData";
const intialState = {
    tetedata: [],
    isloading: false,
    error: '',
    users: '',
    loggedIn: false
}


export default function reducer (state = intialState, action){
    switch(action.type){
        case FETCH_TETE_START:
            return{
                ...state, tetedata: state.tetedata, error: '', users: '', isloading: true,
            }
            case FETCH_TETE_FAIL: 
            return{
                ...state, tetedata: state.tetedata, error: action.payload, users: '', isloading: false,
            }
            case FETCH_TETE_SUCESS:
                // console.log(action.payload.data)
                return{
                    ...state, tetedata: action.payload, error: '', users: '', isloading: false, 
                }
            case NEW_USER:
                
                return{
                    ...state, tetedata: state.tetedata, error: '', users: action.payload , isloading: false, loggedIn: true
                }
            case LOGIN_USER:
                return{
                    ...state, tetedata: state.tetedata, error: '', users: action.payload, isloading: false, loggedIn: true
                }
                case LOGOUT_USER:
                    return{
                        ...state, tetedata: state.tetedata, error: '', users: '', isloading: false, loggedIn: false}
                case Post_TETE:
                    return{
                        ...state, tetedata: [action.payload, ...state.tetedata ], error: '', users: '', isloading: false, loggedIn: true
                    }
                default: return state
    }
}