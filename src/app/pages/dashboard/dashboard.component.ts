import { Component } from '@angular/core';
import { SliderComponent } from "../../shared/slider/slider.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [SliderComponent]
})
export class DashboardComponent {

}
