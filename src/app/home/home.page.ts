import { Component } from '@angular/core';
import { LoginModule } from '../models/loginModel';
import { LoginService } from '../services/loginService';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

public loginDetails:LoginModule;

constructor(private loginService:LoginService,public toast:ToastController){

}

login(form:NgForm){


  this.loginDetails = {
    mobile : form.value.mobile,
    password:form.value.password

}

this.loginService.login(this.loginDetails).subscribe(data=>{
console.log(data)
this.viewToast(data.data)


})
console.log(this.loginDetails)

}


async viewToast(data){

  if(data){
    if(!data.nickName){
      const t = await this.toast.create({
        message:  "Please check your Mobile Number or Password !!!"    ,
        duration:2000
      });
      t.present()
    }else{
  const t = await this.toast.create({
    message:"Welcome " + data.nickName + " !!!",
    duration:2000
  });
t.present()
}
  
}


}

}
