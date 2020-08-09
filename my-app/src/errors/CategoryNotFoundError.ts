import { HttpError } from "./HttpError";


export class CategoryNotFoundError extends HttpError{
    constructor(){
        super('Category Not Found', 404)
    }
}

