import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

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
    private authService: AuthService,
    private router: Router
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

    this.authService.login(loginData.email, loginData.password)
      .then(response => {
        console.log(response);
        this.isSuccess = true;
        this.authService.saveToken({
          'access_token' : response.accessToken,
          'token_type': response.token_type,
          'expires_at': response.expires_at
        });
        this.authService.saveUser(response.user);
        this.router.navigateByUrl('/home');
        
    }).catch(error => {
      console.log(error);
    });
    console.warn('Your order has been submitted', loginData);
  }

}
