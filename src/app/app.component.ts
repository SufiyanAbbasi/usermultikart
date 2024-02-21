import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/header/header.component";
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { LoginComponent } from "./pages/login/login.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, NavbarComponent, DashboardComponent, FooterComponent, LoginComponent]
})
export class AppComponent {
  title = 'usermulikart';
}
