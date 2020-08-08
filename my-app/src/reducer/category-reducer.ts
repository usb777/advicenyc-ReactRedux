import { ICategoryState } from ".";  // index.ts
import { AnyAction } from "redux";
import { categoryTypes } from "../action-mapper/Category-action-mappers";


const initialState:ICategoryState = 
{
    allCategory:[],
    errorMessage:''
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
        default:
            return state;
    }
}