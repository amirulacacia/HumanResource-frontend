import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import your components here
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { AdditionalInfoComponent } from './user/user_info/additionalinfo/additionalinfo.component';
import { AddressComponent } from './user/user_info/address/address.component';
import { EducationComponent } from './user/user_info/education/education.component';
import { ExperienceComponent } from './user/user_info/experience/experience.component';
import { UserdiversityComponent } from './user/user_info/userdiversity/userdiversity.component';
import { UserdocumentsComponent } from './user/user_info/userdocuments/userdocuments.component';
import { UserinformationComponent } from './user/user_info/userinformation/userinformationpage.component';
import { LoginComponent } from './home/login/login.component';

// Define your routes
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route redirects to login
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'additionalInfo', component: AdditionalInfoComponent },
  { path: 'address', component: AddressComponent },
  { path: 'education', component: EducationComponent },
  { path: 'userdiversity', component: UserdiversityComponent },
  { path: 'userdocuments', component: UserdocumentsComponent },
  { path: 'userinformation', component: UserinformationComponent },
  // Add more routes as needed
  // { path: 'other', component: OtherComponent },
];

// Export the routes
export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });

// Import FormsModule and BrowserModule
export const AppModules = [
  BrowserModule,
  FormsModule,
  CommonModule
];

// Export your components
export const AppComponents = [
  FooterComponent,
  HeaderComponent,
  AdditionalInfoComponent,
  AddressComponent,
  EducationComponent,
  ExperienceComponent,
  UserdiversityComponent,
  UserdocumentsComponent,
  UserinformationComponent,
  LoginComponent
];
