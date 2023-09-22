import {HttpResponse, HttpRequest} from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'

export class SignUpController {
    handle(httpRequest: HttpRequest): HttpResponse {
        console.log(httpRequest);
        
        if(!httpRequest.body.name){
            return {
             statusCode:400,
             body:new MissingParamError('name')
            } 
        }
        if(!httpRequest.body.email){
            return {
             statusCode:400,
             body:new MissingParamError('email')
            } 
        }
    }
}