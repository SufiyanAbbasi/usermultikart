import { Component } from '@angular/core';
import { SliderComponent } from "../../shared/slider/slider.component";
import { TopcollectionComponent } from "../../shared/topcollection/topcollection.component";
import { FashtrendComponent } from "../../shared/fashtrend/fashtrend.component";
import { SpecialprodComponent } from "../../shared/specialprod/specialprod.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [SliderComponent, TopcollectionComponent, FashtrendComponent, SpecialprodComponent, RouterLink, RouterOutlet]
})
export class DashboardComponent {

}
