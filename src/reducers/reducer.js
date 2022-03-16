import { FETCH_TETE_FAIL, FETCH_TETE_START, FETCH_TETE_SUCESS } from "../actions/actions";
import dummyData from "../dummyData";
const intialState = {
    tetedata: dummyData,
    isloading: false,
    error: ''
}
console.log(dummyData)

export default function reducer (state = intialState, action){
    switch(action.type){
        case FETCH_TETE_START:
            return{
                ...state, tetedata: state.tetedata, error: '', isloading: true
            }
            case FETCH_TETE_FAIL: 
            return{
                ...state, tetedata: state.tetedata, error: action.payload, isloading: false
            }
            case FETCH_TETE_SUCESS:
                // console.log(action.payload.data)
                return{
                    ...state, tetedata: action.payload, error: '', isloading: false
                }
                default: return state
    }
}