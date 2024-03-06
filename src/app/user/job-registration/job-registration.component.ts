
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterJobService } from '../../services/register-job.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-job-registration',
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
  providers:[RegisterJobService],
  templateUrl: './job-registration.component.html',
  styleUrl: './job-registration.component.scss'
})
export class JobRegistrationComponent{

  registerJobForm!: FormGroup;

  constructor(private registerJobService: RegisterJobService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerJobForm = this.fb.group({
      jobPosition: [null, [Validators.required]],
      vacancy: [null, [Validators.required]],
      location: [null, [Validators.required]],
      salaryOffer: [null, [Validators.required]],
      jobDescription: [null, [Validators.required]],
      closingDate: [null, [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.registerJobForm.value);
    this.registerJobService.registerJob(this.registerJobForm.value).subscribe((res) => {

      if (res != null) {
          alert("Register job successfully");
      } else {
        alert("Please enter all the information!");
      }
      console.log("Password Check: " + res);
    })
  }

}
