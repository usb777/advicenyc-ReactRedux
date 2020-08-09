import { InternalServerError } from "../errors/InternalServerError"
import { CategoryNotFoundError} from "../errors/CategoryNotFoundError"

import { reduxClient } from "./remote-client"
import {Category} from "../model/Category"


export const getAllCategory = async () => 
{
    try 
    {
        let response = await reduxClient.get('/category')
        
        if(response.status === 200)
        {
            return response.data
        }  //if
        else 
        {
            throw new InternalServerError()
        } //else
    } catch (e)
      {
        throw new InternalServerError()
      }   //catch
} //getAllCategory

export async function getCategoryById(
    categoryId: number | undefined
  ): Promise<Category> {
    try {
      let res = await reduxClient.get(`/category/${categoryId}`);
  
      if (res.status === 400) {
        throw new CategoryNotFoundError();
      }
      return res.data;
    } catch (e) {
      if (e.status === 400) {
        throw e;
      } else if (e.status === 404) {
        throw new CategoryNotFoundError();
      } else {
        throw new InternalServerError();
      }
    }
  } //end of class


