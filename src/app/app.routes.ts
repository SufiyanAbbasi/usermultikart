import { Routes } from '@angular/router';
import { BestsellersComponent } from './shared/subspecialproducts/bestsellers/bestsellers.component';
import { NewproductsComponent } from './shared/subspecialproducts/newproducts/newproducts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    
            { path: "", component: NewproductsComponent },
            { path: 'bestseller', component: BestsellersComponent }

];
