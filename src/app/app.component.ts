import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SideNavComponent } from "./home/side-nav/side-nav.component";
import { ContentComponent } from "./testing/content/content.component";
import { HeaderComponent } from "./testing/header/header.component";
import { AuthContentComponent } from "./testing/auth-content/auth-content.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        SideNavComponent,
        ContentComponent,
        HeaderComponent,
        AuthContentComponent
    ]
})
export class AppComponent {
  // title = 'hrApplication';

  collapsed = signal(false);

  sidenavWidth = computed(() => this.collapsed() ? '65px' : '250px')
}
