import { HttpError } from "./HttpError";


export class UserNotFoundError extends HttpError {
    constructor(){
        super('Users Not Found', 404)
    }
}