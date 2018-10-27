import { Injectable } from "@angular/core";
import {Http} from '@angular/http'; 
import 'rxjs/Rx';
import { LoginModule } from "../models/loginModel";
import {Response} from '@angular/http';

@Injectable()
export class LoginService{


constructor(private http:Http){

}

login(loginDetails:LoginModule){


return this.http.post("http://35.225.176.255/Inv/User/Login/1.0.0",{"metadata": {
    "ip": "106.208.200.107", 
    "requestID": "3591060802910751528629306545", 
    "app_id": "da0e848fb7d880efa20e220a3e318c1b"
    },
    "data": {
    "mobile_no": loginDetails.mobile,
    "password": loginDetails.password
    }}).map((res:Response)=>{

return res.json()

})

}



}