import { CommonModule } from '@angular/common';
import { Component, Input, computed, signal } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  sideNavCollapsed = signal(false);
  
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'account_box',
      label: 'Applicant',
      route: 'applicant-login'
    },
    {
      icon: 'admin_panel_settings',
      label: 'Employee',
      route: 'employee-login'
    },
    {
      icon: 'phone',
      label: 'Contact',
      route: 'contact'
    },
    {
      icon: "info",
      label: "Information",
      route: "user"
    },
    {
      icon: "people",
      label: "Employee List",
      route: "employee"
    },
    {
      icon: "next_week",
      label: "Job Register",
      route: "jobregister"
    },
    {
      icon: "event_note",
      label: "Interview Schedule",
      route: "schedule-interview"
    },
    {
      icon: "event_available",
      label: "Interview Status",
      route: "interview-status"
    },
    {
      icon: "shop_two",
      label: "Job List",
      route: "joblisting"
    },
    {
      icon: "work",
      label: "Job Details",
      route: "jobdetails"
    },
    {
      icon: "description",
      label: "Applicant Forms",
      route: "applicant"
    },

  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}
