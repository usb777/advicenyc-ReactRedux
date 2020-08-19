/*
import { Users } from "../Components/Models/Users"
import { IFindByUserIdState } from "."
import { Role } from "../Components/Models/Role"
import { AnyAction } from "redux"
import { FindByUserIdTypes } from "../ActionMapper/UserByIdAM"
*/

import { ICategoryByIdState } from ".";  // index.ts
import { AnyAction } from "redux";
import { categoryByIdTypes } from "../action-mapper/CategoryByID-action-mappers";
import {Category} from "../model/Category";





export const initialState:ICategoryByIdState = 
{
    categoryById: new Category(0,""),
    errorMessage:""
}

//we make a reduce for updating this piece of state
export const categoryByIdReducer = (state = initialState, action:AnyAction) => {
    // whatever this reducer returns, becomes the state for this piece of state
    switch (action.type) 
    {
        // each case for a different kind of action
        case categoryByIdTypes.GET_ONE_CATEGORY:
    {
            // if you do not return a new object
            //react will not trigger a render
            return {
                ...state,
                categoryById: action.payload.oneCategory ,
                errorMessage: 'category not found'
            };
       }
        case categoryByIdTypes.FAILED_TO_RETRIEVE_ONE_CATEGORY:
        {
            return 
            {
                ...state,
                errorMessage:'Category not found'
            };
        }
      
        default:            return state;
    }
}
