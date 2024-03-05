import { Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { ContactComponent } from './home/contact/contact.component';
import { SignupComponent } from './home/signup/signup.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { ApplicantComponent } from './user/user_info/applicant/applicant.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user', component: ViewUserInfoComponent },
  { path: 'applicant', component: ApplicantComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];