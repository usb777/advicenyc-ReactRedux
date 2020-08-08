import { combineReducers } from "redux";
import { Category } from "../model/Category";
import { categoryReducer } from "./category-reducer";



export interface ICategoryState
{
    allCategory:Category[]
    errorMessage:string
}


//define all of the pieces of state
export interface IState{   
    allCategory:ICategoryState
}

//turn all individual pieces of state into a single state
export const state = combineReducers<IState>({
   
    allCategory: categoryReducer
})