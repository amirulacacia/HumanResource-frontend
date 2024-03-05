import { Routes } from '@angular/router';
import { ContactComponent } from './home/contact/contact.component';
import { SignupComponent } from './home/signup/signup.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { ApplicantComponent } from './user/user_info/applicant/applicant.component';
import { ContentComponent } from './home/content/content.component';
import { EmployeeLoginComponent } from './home/employee-login/employee-login.component';
import { ApplicantLoginComponent } from './home/applicant-login/applicant-login.component';
import { JoblistingComponent } from './user/joblisting/joblisting.component';


export const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: ViewUserInfoComponent },
  { path: 'applicant', component: ApplicantComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];