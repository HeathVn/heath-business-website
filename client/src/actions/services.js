import * as api from '../api';

//Action Creators


export const getServices = ()=> async(dispatch) => {

try{
  const { data} = await api.fetchServices();

  dispatch({type: 'FETCH_ALL', payload:data});
}catch(error){
  console.log(error.message);
}

    

    
}