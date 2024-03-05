import { Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { AuthContentComponent } from './testing/auth-content/auth-content.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: '', component: AuthContentComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
];