import { Component } from '@angular/core';

@Component({
  selector: 'app-joblisting',
  standalone: true,
  imports: [],
  templateUrl: './joblisting.component.html',
  styleUrl: './joblisting.component.scss'
})
export class JoblistingComponent {
  router: any;



  navigateToJobDetails() {
    // Navigate to the job-details page
    this.router.navigate(['/job-details']);
  }

}
