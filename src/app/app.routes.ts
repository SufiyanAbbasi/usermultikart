import { Routes } from '@angular/router';
import { BestsellersComponent } from './shared/subspecialproducts/bestsellers/bestsellers.component';
import { NewproductsComponent } from './shared/subspecialproducts/newproducts/newproducts.component';
import { FeaturedproductComponent } from './shared/subspecialproducts/featuredproduct/featuredproduct.component';
import { OnsaleComponent } from './shared/subspecialproducts/onsale/onsale.component';
import { SpecialprodComponent } from './shared/specialprod/specialprod.component';
import { ExproductComponent } from './shared/subspecialproducts/exproduct/exproduct.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VegetableComponent } from './pages/vegetable/vegetable.component';
import { WatchComponent } from './pages/watch/watch.component';
import { FurnitureComponent } from './pages/furniture/furniture.component';

export const routes: Routes = [
    {path: '', component:LoginComponent},
    {path: 'login', component:LoginComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'vegetable', component:VegetableComponent},
    {path: 'watch', component:WatchComponent},
    {path: 'furniture', component:FurnitureComponent},
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: 'newproducts', component: NewproductsComponent,  },
            { path: '', component: NewproductsComponent,  },
            { path: 'bestseller', component: BestsellersComponent },
            { path: 'featuredproducts', component: FeaturedproductComponent },
            { path: 'onsale', component: OnsaleComponent },
        ],
    },

];
