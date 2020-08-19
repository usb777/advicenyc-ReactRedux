import { combineReducers } from "redux";
import { Category } from "../model/Category";
import { categoryReducer } from "./category-reducer";
import { categoryByIdReducer } from "./categoryById-reducer";

export interface ICategoryState
{
    allCategory:Category[]
    errorMessage:string 
}

export interface ICategoryByIdState
{
    categoryById:Category
    errorMessage:string 
}


//define all of the pieces of state
export interface IState
{   
    allCategory:ICategoryState;
    categoryById:ICategoryByIdState;
}

//turn all individual pieces of state into a single state
export const state = combineReducers<IState>
({
   
    allCategory: categoryReducer,
    categoryById: categoryByIdReducer
})