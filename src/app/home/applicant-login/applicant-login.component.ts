import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';
import { ApplicantService } from '../../services/applicant.service';

@Component({
  selector: 'app-applicant-login',
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
  providers: [ApplicantService],
  templateUrl: './applicant-login.component.html',
  styleUrl: './applicant-login.component.scss'
})
export class ApplicantLoginComponent {
  active: string = "login";

  loginApplicantForm!: FormGroup;
  registerApplicantForm!: FormGroup;

  constructor(private applicantService: ApplicantService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginApplicantForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    this.registerApplicantForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onLogin() {
    console.log(this.loginApplicantForm.value);
    this.applicantService.loginByEmailAndPassword(this.loginApplicantForm.value).subscribe((res) => {

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
    console.log(this.registerApplicantForm.value);
    this.applicantService.registerApplicant(this.registerApplicantForm.value).subscribe((res) => {
      
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
      if (error.status === 500 ) {
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
