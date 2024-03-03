import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { ReferencesComponent } from './home/references/references.component';
import { ExperienceComponent } from './experience/experience.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { AddressComponent } from './address/address.component';
import { EducationComponent } from './education/education.component';
import { UserdiversityComponent } from './userdiversity/userdiversity.component';
import { UserdocumentsComponent } from './userdocuments/userdocuments.component';
import { UserinformationComponent } from './userinformation/userinformation.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
