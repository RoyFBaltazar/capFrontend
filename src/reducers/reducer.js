import { FETCH_TETE_FAIL, FETCH_TETE_START, FETCH_TETE_SUCESS, NEW_USER } from "../actions/actions";
import dummyData from "../dummyData";
const intialState = {
    tetedata: dummyData,
    isloading: false,
    error: '',
    users: ''
}
console.log(dummyData)

export default function reducer (state = intialState, action){
    switch(action.type){
        case FETCH_TETE_START:
            return{
                ...state, tetedata: state.tetedata, error: '', users: '', isloading: true
            }
            case FETCH_TETE_FAIL: 
            return{
                ...state, tetedata: state.tetedata, error: action.payload, users: '', isloading: false
            }
            case FETCH_TETE_SUCESS:
                // console.log(action.payload.data)
                return{
                    ...state, tetedata: action.payload, error: '', users: '', isloading: false
                }
            case NEW_USER:
                console.log(action.payload)
                return{
                    ...state, tetedata: state.tetedata, error: '', users: action.payload , isloading: false
                }    
                default: return state
    }
}