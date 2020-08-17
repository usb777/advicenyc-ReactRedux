import { Dispatch } from "redux";
import { Category } from "../model/Category";
import { getAllCategory } from "../remote/getallCategory";
import { getCategoryById } from "../remote/getallCategory";

export const categoryTypes = 
{
    GET_ALL_CATEGORY: 'REDUX_GET_ALL_CATEGORY', // Good
    FAILED_TO_RETRIEVE_CATEGORY:'REDUX_FAILED_TO_RETRIEVE_CATEGORY',  //Bad
   
    GET_ONE_CATEGORY: 'GET_ONE_CATEGORY',   
    FAILED_TO_RETRIEVE_ONE_CATEGORY: 'FAILED_TO_RETRIEVE_ONE_CATEGORY'
}



export const getAllCategoryActionMapper = () => async (dispatch:Dispatch) => {
    // try to get all categories from a remote function
    try
    {
        let categoryArray = await getAllCategory() // await - asyncronys function
       // console.log(categoryArray);
        //if we do call dispatch with those categoies
        dispatch({
            type: categoryTypes.GET_ALL_CATEGORY,
            payload:{  categoryArray  }   //promise
        })
    }  //try 
    catch (e) //   
    {
            //catch any errors and dispatch a bad action
            console.log("====Error===" + e)
        dispatch({  type:categoryTypes.FAILED_TO_RETRIEVE_CATEGORY    })
    } //catch
    finally  
    {   // close Database or file connection
        console.log("Was errror or didn't was for me nevermind, cos I want show it");
    } //finally
    //function completes
}



export const getOneVisualizationActionMapper = (id:number) => async (dispatch:Dispatch) => 
{
    try {
        let oneCategory = await getCategoryById(id)
    
        dispatch({
            type: categoryTypes.GET_ONE_CATEGORY,
            payload:{
                oneCategory
            }
        })
    } catch (e) {
        dispatch({
            type: categoryTypes.FAILED_TO_RETRIEVE_ONE_CATEGORY
        })
    }

} // 
    
    