import { Component } from '@angular/core';
import { SliderComponent } from "../../shared/slider/slider.component";
import { TopcollectionComponent } from "../../shared/topcollection/topcollection.component";
import { FashtrendComponent } from "../../shared/fashtrend/fashtrend.component";
import { SpecialprodComponent } from "../../shared/specialprod/specialprod.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { DeliveryComponent } from "../../shared/delivery/delivery.component";
import { BlogsComponent } from "../../shared/blogs/blogs.component";
import { LogosComponent } from "../../shared/logos/logos.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [SliderComponent, TopcollectionComponent, FashtrendComponent, SpecialprodComponent, RouterLink, RouterOutlet, DeliveryComponent, BlogsComponent, LogosComponent]
})
export class DashboardComponent {

}
