import axios from 'axios';
import config from './../config';
import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT} from '../constants/userCostants';

export const login= (email,password) => async (dispatch, getState) =>{
    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        });

        const {data} =await axios.post(`${config.API_URL}/api/user/login`,{
            email,
            password
          });
          console.log(data)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        });

        localStorage.setItem('user',JSON.stringify(getState().userInfo.user));

    }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message
        });
    }
}

export const logout=()=>{

}