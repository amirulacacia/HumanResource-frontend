import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from "primeng/inputtext";
import { InputGroupModule } from "primeng/inputgroup";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { ButtonModule } from "primeng/button";
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginUserForm!: FormGroup;

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginUserForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.loginUserForm.value);
    this.employeeService.loginByEmailAndPassword(this.loginUserForm.value).subscribe((res) => {

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
  
}
