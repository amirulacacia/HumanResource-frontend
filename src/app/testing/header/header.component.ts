import { Component, Input } from '@angular/core';
import { AuthContentComponent } from "../auth-content/auth-content.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [AuthContentComponent]
})
export class HeaderComponent {
  @Input() pageTitle!:string;
  @Input() logoSrc!:string;
}
