import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { ReferencesComponent } from './home/references/references.component';
import { ExperienceComponent } from './user_info/experience/experience.component';
import { AdditionalInfoComponent } from './user_info/additionalinfo/additionalinfo.component';
import { AddressComponent } from './user_info/address/address.component';
import { EducationComponent } from './user_info/education/education.component';
import { UserdiversityComponent } from './user_info/userdiversity/userdiversity.component';
import { UserdocumentsComponent } from './user_info/userdocuments/userdocuments.component';
import { UserinformationComponent } from './user_info/userinformation/userinformationpage.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'additionalInfo', component: AdditionalInfoComponent },
  { path: 'address', component: AddressComponent },
  { path: 'education', component: EducationComponent },
  { path: 'userdiversity', component: UserdiversityComponent },
  { path: 'userdocuments', component: UserdocumentsComponent },
  { path: 'userinformation', component: UserinformationComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];