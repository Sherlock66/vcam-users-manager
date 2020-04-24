import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm;
  isProcesing:boolean =false;
  hasError: boolean = false;
  isSuccess: boolean = false;
  message : string;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }
  closeAlert(){
    this.hasError = false;
    this.isSuccess = false;
    this.message = ""
  }
  onSubmit(loginData) {
    this.isProcesing = true;
    if (loginData.email.trim().length == 0 || loginData.password.trim().length ==0){
      this.hasError = true;
      this.isProcesing = false;
      this.message ="veuillez bien remplir les champs"
      console.log("formulaire mal rempli");
      return ;
    }
    
    console.warn('Your order has been submitted', loginData);
  }

}
