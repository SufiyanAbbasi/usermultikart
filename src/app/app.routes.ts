import { Routes } from '@angular/router';
import { BestsellersComponent } from './shared/subspecialproducts/bestsellers/bestsellers.component';
import { NewproductsComponent } from './shared/subspecialproducts/newproducts/newproducts.component';
import { FeaturedproductComponent } from './shared/subspecialproducts/featuredproduct/featuredproduct.component';
import { OnsaleComponent } from './shared/subspecialproducts/onsale/onsale.component';
import { SpecialprodComponent } from './shared/specialprod/specialprod.component';

export const routes: Routes = [

    { path: '', component: NewproductsComponent },
    { path: 'bestseller', component: BestsellersComponent },
    { path: 'featuredproducts', component: FeaturedproductComponent },
    { path: 'onsale', component: OnsaleComponent },
];
