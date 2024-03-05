import { Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { ContactComponent } from './home/contact/contact.component';
import { SignupComponent } from './home/signup/signup.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { ApplicantComponent } from './user/user_info/applicant/applicant.component';
import { ContentComponent } from './home/content/content.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: ViewUserInfoComponent },
  { path: 'applicant', component: ApplicantComponent },
  { path: 'home', component: ContentComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];