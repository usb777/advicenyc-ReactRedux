import { Dispatch } from "redux";
import { Category } from "../model/Category";
import { getCategoryById } from "../remote/getallCategory";

export const categoryByIdTypes = 
{    
    GET_ONE_CATEGORY: 'GET_ONE_CATEGORY',   
    FAILED_TO_RETRIEVE_ONE_CATEGORY: 'FAILED_TO_RETRIEVE_ONE_CATEGORY'
}


export const getOneCategoryActionMapper = (id:number) => async (dispatch:Dispatch) => 
{
    try {
            let oneCategory = await getCategoryById(id)
    
         dispatch({
                    type: categoryByIdTypes.GET_ONE_CATEGORY,
                    payload:{   oneCategory    }
                })
        } catch (e) 
    {
        dispatch({type: categoryByIdTypes.FAILED_TO_RETRIEVE_ONE_CATEGORY     })
    }

} // 
    
    