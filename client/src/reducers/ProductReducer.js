import {PRODUCTS_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE,PRODUCT_FETCH} from "../actions/types";



export default function(state = [],action){
    switch (action.type) {
     case PRODUCTS_FETCH:
     case PRODUCT_FETCH:
     return action.payload;
     case PRODUCT_CREATE:
       return { save : true, msg: "บันทึกสินค้าเรียบร้อยครับ"}

    case PRODUCT_UPDATE:
        return {...state, save : true, msg: "บันทึกสินค้าเรียบร้อยครับ"}

    default:
        return state;
    }
}