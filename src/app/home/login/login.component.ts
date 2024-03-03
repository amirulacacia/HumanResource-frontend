import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  @ViewChild('jobIdInput') jobIdInput!: ElementRef;

  userType: string = 'applicant'; // Default user type

  constructor(private router: Router) {}

  login() {
    const email = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    const jobId = this.jobIdInput.nativeElement.value;

    if (this.userType === 'applicant') {
      if (email && password) {
        // Perform login logic for applicants (email and password)
        this.router.navigate(['/applicant-dashboard']);
      } else {
        alert('Please enter valid email and password for applicant login.');
      }
    } else if (this.userType === 'admin') {
      if (jobId && password) {
        // Perform login logic for admins (job_id and password)
        this.router.navigate(['/admin-dashboard']);
      } else {
        alert('Please enter valid job ID and password for admin login.');
      }
    }
  }
}
