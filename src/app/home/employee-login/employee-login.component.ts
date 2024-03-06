import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    HttpClientModule,
    CheckboxModule,
    TabMenuModule,
    CommonModule,
    FormsModule
  ],
  providers: [EmployeeService],
  templateUrl: './employee-login.component.html',
  styleUrl: './employee-login.component.scss'
})
export class EmployeeLoginComponent {
  active: string = "login";

  loginEmployeeForm!: FormGroup;
  registerEmployeeForm!: FormGroup;

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginEmployeeForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    this.registerEmployeeForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onLogin() {
    console.log(this.loginEmployeeForm.value);
    this.employeeService.loginByEmailAndPassword(this.loginEmployeeForm.value).subscribe((res) => {

      if (res != null) {

        if (res == true) {
          alert("Login successfully");
        } else {
          alert("Please enter correct email and password!");
        }
      } else {
        alert("User not found, Please enter correct email and password!");
      }
      console.log("Password Check: " + res);
    })
  }

  onSignup() {
    console.log(this.registerEmployeeForm.value);
    this.employeeService.registerEmployee(this.registerEmployeeForm.value).subscribe((res) => {
      
      if (res != null) {
          alert("Register successfully");
      } else {
        alert("Not enough information, Please enter email and password!");
      }
      console.log(res);
    },
    (error) => {
      // Handle the error here
      console.error("Error during registration:", error);
  
      // Check if the error is related to an incorrect email address
      if (error.status === 500) {
        alert("Invalid email address. Please enter a valid email.");
      } else {
        alert("An error occurred during registration. Please try again.");
      }
    });
  }

  onLoginTab(): void {
		this.active = "login";
	}

	onRegisterTab(): void {
		this.active = "register";
	}
}
