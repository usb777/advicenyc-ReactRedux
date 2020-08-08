
// a model is just an object for holding data, generally it will reflect data from our database
export class Category 
{
    id:number// a unique number for identification
    name:string
  
    constructor( id:number, name:string  )
    {
            this.id = id
            this.name = name
          
    } //constructor
} //class