import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormBuilder } from '@angular/forms';
import { RoleService } from '../_services/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  role;
  user;

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  roleForm;
  isProcesing: boolean = false;
  hasError: boolean = false;
  isSuccess: boolean = false;
  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService ,
    private roleService: RoleService,
    private router: Router
  ) {
    this.roleForm = this.formBuilder.group({
      name: '',
      description: ''
    });
  }

  onSubmit(roleData) {
    this.isProcesing = true;
    if (roleData.name.trim().length == 0 || roleData.description.trim().length == 0) {
      this.hasError = true;
      this.isProcesing = false;
      this.message = "veuillez bien remplir les champs"
      console.log("formulaire mal rempli");
      return;
    }
    this.roleService.createRole(roleData).then(
      response => {
        console.log(response);
        this.isSuccess = true;
      }).catch(error => {
        console.log(error);
      });

  }
  closeAlert() {
    this.hasError = false;
    this.isSuccess = false;
    this.message = ""
  }
}
