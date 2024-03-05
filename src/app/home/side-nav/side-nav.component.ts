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
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'footer'
    },
    {
      icon: 'phone',
      label: 'Contact',
      route: 'auth'
    }
  ]);

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}
