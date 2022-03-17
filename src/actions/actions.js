import axios from "axios";
export const Post_TETE = "POST_TETE"
export const DELETE_TETE = "DELETE_TETE"
export const PUT_TETE = "PUT_TETE"

export const NEW_USER = "NEW_USER"
export const LOGIN_USER = "LOGIN_USER"

export const FETCH_TETE_START = "FETCH_TETE_START"
export const FETCH_TETE_FAIL= "FETCH_TETE_FAIL"
export const FETCH_TETE_SUCESS = "FETCH_TETE_SUCESS"

export const fetchTete = ()=>(dispatch)=>{
    dispatch({type: FETCH_TETE_START})
    axios
    .get('https://tete-a-tete-backend.herokuapp.com/tete/')
    .then(data=>{
        console.log(data.data.data)

        dispatch({type: FETCH_TETE_SUCESS, payload: data.data.data})
    })
    .catch(err=>{
        console.log(err.message)
        dispatch({type: FETCH_TETE_FAIL, payload: err.message})
    })
}

export const addNewUser =(newuser)=>(dispatch)=>{
    dispatch({type: FETCH_TETE_START})
    axios
    .post('https://tete-a-tete-backend.herokuapp.com/auth/register', newuser)
    .then(data=> console.log(data))
    .catch(err=> dispatch({type: FETCH_TETE_FAIL, payload: err.message}))
    dispatch({type: NEW_USER, payload: newuser})

}

export const loginUser = (newLogin)=>(dispatch)=>{
    dispatch({type: FETCH_TETE_START})
    axios
    .post('https://tete-a-tete-backend.herokuapp.com/auth/login', newLogin)
    .then(data=>{
        console.log(data.data.token)
        console.log(data.data.username)
        console.log(data.data)
        
       localStorage.setItem('token', data.data.token)
       localStorage.setItem('username', data.data.username)
      
    })
    .catch(err=> dispatch({type: FETCH_TETE_FAIL, payload: err.message}))
    dispatch({type: LOGIN_USER, payload: newLogin})
}
export const newPost = (username, newpost)=>(dispatch)=>{
    dispatch({type: FETCH_TETE_START})
    axios
    .post(`https://tete-a-tete-backend.herokuapp.com/tete/username/${username}`, newpost)
    .then(data=>{
        console.log(data)
    })
    .catch(err=> dispatch({type: FETCH_TETE_FAIL, payload: err.message}))

}