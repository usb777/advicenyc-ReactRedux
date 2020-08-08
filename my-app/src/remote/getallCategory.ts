import { InternalServerError } from "../errors/InternalServerError"
import { reduxClient } from "./remote-client"


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


