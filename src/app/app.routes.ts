import { Routes } from '@angular/router';
import { ContactComponent } from './home/contact/contact.component';
import { SignupComponent } from './home/signup/signup.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';
import { ApplicantComponent } from './user/user_info/applicant/applicant.component';
import { JoblistingComponent } from './user/joblisting/joblisting.component';
import { ContentComponent } from './home/content/content.component';
import { EmployeeLoginComponent } from './home/employee-login/employee-login.component';
import { ApplicantLoginComponent } from './home/applicant-login/applicant-login.component';
import { SideNavComponent } from './home/side-nav/side-nav.component';
import { EmployeeComponent } from './employee/employee.component';
import { JobDetailsComponent } from './user/job-details/job-details.component';
import { JobRegistrationComponent } from './user/job-registration/job-registration.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';



export const routes: Routes = [
  { 
    path: 'job-registartion', 
    component: JobRegistrationComponent,
  },
 
  { 
    path: 'schedule-interview', 
    component: ScheduleInterviewComponent,
  },
  { 
    path: 'joblisting', 
    component: JoblistingComponent 
  },
  { 
    path: 'job-details', 
    component: JobDetailsComponent 
  },
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
    path: 'employee', 
    component: EmployeeComponent, 
  },
  { 
    path: 'jobdetails', 
    component: JobDetailsComponent, 
  },
  { 
    path: 'jobregister', 
    component: JobRegistrationComponent, 
  },
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
];