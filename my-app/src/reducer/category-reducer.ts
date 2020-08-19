import { ICategoryState } from ".";  // index.ts
import { AnyAction } from "redux";
import { categoryTypes } from "../action-mapper/Category-action-mappers";
import {Category} from "../model/Category";


const initialState:ICategoryState = 
{
    allCategory:[],
    errorMessage:''   /*   ,
    oneCategory: new Category(0,"")   */
}
    
export const categoryReducer = (state = initialState, action:AnyAction ) =>
{
    switch (action.type) 
    {
        case categoryTypes.GET_ALL_CATEGORY:{   // Good
            return {
                ...state, // spread Operator
                allCategory:action.payload.categoryArray
            }
        }  
        case categoryTypes.FAILED_TO_RETRIEVE_CATEGORY:{    //  Bad
            return {                           
                ...state,
                errorMessage:'Failed to Retrieve Categories'
            }
      
        } 

/*
        case categoryTypes.GET_ONE_CATEGORY:{
            return{
                ...state,
                oneCategory: action.payload.oneCategory
            }
        }
        case categoryTypes.FAILED_TO_RETRIEVE_ONE_CATEGORY:{
            return{
                ...state,
                errorMessage:'Failed to retrieve category'
            }
        }


*/
        default:
            return state;
    }
}