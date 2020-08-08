import React from 'react'
import { Category } from '../model/Category';
import {Link} from 'react-router-dom' // <a href = '' >

import { Redirect } from 'react-router';
import { Table} from 'reactstrap'

interface IViewAllCategoryProps
{
    allCategory:Category[]
    errorMessage:string
    getAllCategoryActionMapper: ()=>void
}


export class ViewAllCategoryComponent extends React.Component<IViewAllCategoryProps,any>{

    // runs when component starts to exist
    componentDidMount(){
        // check to see if we already have category (redux store)
        if(this.props.allCategory.length === 0)
        {
                      
            this.props.getAllCategoryActionMapper()
        }
           
        else {    }
    }

    render(){
       
      //Start Typescript

        let categoryDisplay = this.props.allCategory.map((category,index) => {
            return (  
                <tr>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                  
                   <td><Link to={{ pathname: `/user/${category.id}` }}>update</Link> </td>
                

                </tr>
            )
        })

        // end Typescript
      //  console.log(userDisplay);
        return(



<Table striped bordered hover size="sm">   <thead>
                            <tr>
                                <th>id</th>                              
                                <th>name</th>                                                                                          
                                <th>Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoryDisplay}
                        </tbody>
                    </Table>



            
        )
    }
}