import { Routes } from '@angular/router';
import { ContactComponent } from './home/contact/contact.component';
import { SignupComponent } from './home/signup/signup.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { ApplicantComponent } from './user/user_info/applicant/applicant.component';
import { ContentComponent } from './home/content/content.component';
import { EmployeeLoginComponent } from './home/employee-login/employee-login.component';
import { ApplicantLoginComponent } from './home/applicant-login/applicant-login.component';
import { SideNavComponent } from './home/side-nav/side-nav.component';

export const routes: Routes = [
  { 
    path: 'contact', 
    component: ContactComponent 
  },
  { 
    path: 'signup', 
    component: SignupComponent 
  },
  { 
    path: 'user', 
    component: ViewUserInfoComponent 
  },
  { 
    path: 'applicant',
    component: ApplicantComponent 
  },
  { 
    path: 'home', 
    component: ContentComponent 
  },
  { 
    path: 'employee-login', 
    component: EmployeeLoginComponent, 
  },
  { 
    path: 'applicant-login', 
    component: ApplicantLoginComponent, 
  },
  { 
    path: 'side-bar', 
    component: SideNavComponent
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
];