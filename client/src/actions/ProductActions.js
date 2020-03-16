import axios from "axios";
import {PRODUCTS_FETCH,PRODUCT_CREATE,PRODUCT_FETCH,PRODUCT_UPDATE} from "./types";

export const productFetch = id => {
    return dispatch => {
        axios.get(`http://localhost:3001/products/${id}`).then(res => {
            // console.log(res.data);
          
           dispatch( {type : PRODUCT_FETCH, payload : res.data});
        
          })
        }


}




export const productsFetch = () => {


    return dispatch => {
    axios.get("http://localhost:3001/products").then(res => {
        // console.log(res.data);
      
       dispatch( {type : PRODUCTS_FETCH, payload : res.data});
    
      })
    }
    
}

export const productDelete = id => {

    return dispatch => {
        axios.delete("http://localhost:3001/products/" + id).then(res =>{
            axios.get("http://localhost:3001/products").then(
                res => {
                   dispatch({ type : PRODUCTS_FETCH, payload : res.data});
                }
            )
        })
    }
    
}

export const productCreate = values => {
console.log("log =>: ---------------------")
console.log("log =>: values", values)
console.log("log =>: ---------------------")

    
    return dispatch => {
        axios.post("http://localhost:3001/products", values).then(
            res => {
            // console.log(res.data);
          
           dispatch( {type : PRODUCT_CREATE, payload : res.data});
        
          }
          )
        }  
     }

     export const productUpdate = (id,values) => {
         console.log("log =>: --------------------------------------------")
         console.log("log =>: productUpdate -> id,values", id,values)
         console.log("log =>: --------------------------------------------")
         return dispatch => {
             axios.post("http://localhost:3001/products/" + id,values).then(res => {
                dispatch( {type : PRODUCT_UPDATE});
             })
         }
     }