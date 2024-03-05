import { Routes } from '@angular/router';
import { ContactComponent } from './home/contact/contact.component';
import { SignupComponent } from './home/signup/signup.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { ApplicantComponent } from './user/user_info/applicant/applicant.component';
import { JoblistingComponent } from './user/joblisting/joblisting.component';



export const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: ViewUserInfoComponent },
  { path: 'applicant', component: ApplicantComponent },
  { path: 'joblisting', component: JoblistingComponent }
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];