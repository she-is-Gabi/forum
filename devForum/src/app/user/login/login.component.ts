import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  formSubmitHandler( form:NgForm) {
    

    // onInit - renders static content
    //ngAfterViewInit - render final content+dynamic
    const{email,password} = form.value;

    if(form.invalid){
      console.log('Form is invalid');
      
      return;
    }
    form.setValue({email:'', password:''});
  }
}
