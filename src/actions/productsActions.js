import axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productsConstants";
export const listProducts = ()=>async (dispatch)=>{
    try{
        dispatch({type: PRODUCT_LIST_REQUEST})
        const { data } = await axios.get(`https://backend-ct8d.onrender.com/api/produkty`);

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }
    catch(error)
    {
        dispatch({
            type:PRODUCT_LIST_FAIL,
            payload:error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}


export const listProductDetails = (id)=>async (dispatch)=>{
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST})
        const { data } = await axios.get(`https://backend-ct8d.onrender.com/api/produkt/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data
        })
    }
    catch(error)
    {
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}