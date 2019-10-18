import {
    SET_USER_TOKEN
} from "../mutations";

const users ={
    state:{
        token:""
    },
    mutations:{
      [SET_USER_TOKEN](state,data){
          console.log("data",data)
          state.token = data
      }  
    },
    actions:{
        setUserToken({commit,state},data){
            commit(SET_USER_TOKEN,data);
        }
    }
}

export default  users