import { RouterModule} from '@angular/router';
import { InMemoryScrollingOptions, Routes, provideRouter, withInMemoryScrolling } from '@angular/router';
import { NgModule } from '@angular/core';
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
import { OnsalefurnitureComponent } from './shared/subfurnitureprod/onsalefurniture/onsalefurniture.component';
import { NewfurnitureComponent } from './shared/subfurnitureprod/newfurniture/newfurniture.component';
import { BestfurnitureComponent } from './shared/subfurnitureprod/bestfurniture/bestfurniture.component';
import { FlowerComponent } from './pages/flower/flower.component';
import { BeautyComponent } from './pages/beauty/beauty.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { BestelectronicsComponent } from './shared/subelectronicsprod/bestelectronics/bestelectronics.component';
import { OnsaleelectronicsComponent } from './shared/subelectronicsprod/onsaleelectronics/onsaleelectronics.component';
import { PetsComponent } from './pages/pets/pets.component';
import { GymComponent } from './pages/gym/gym.component';
import { ToolComponent } from './pages/tool/tool.component';
import { ShoesComponent } from './pages/shoes/shoes.component';
import { BagsComponent } from './pages/bags/bags.component';
import { MarijuanaComponent } from './pages/marijuana/marijuana.component';


export const routes: Routes = [

    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    // { path: 'dashboard', component: DashboardComponent },
    { path: 'vegetable', component: VegetableComponent },
    { path: 'watch', component: WatchComponent },
    { path: 'flower', component: FlowerComponent },
    { path: 'beauty', component: BeautyComponent }, 
    { path: 'pets', component: PetsComponent }, 
    { path: 'gym', component: GymComponent }, 
    { path: 'tool', component: ToolComponent }, 
    { path: 'shoes', component: ShoesComponent }, 
    { path: 'bags', component: BagsComponent }, 
    { path: 'marijuana', component: MarijuanaComponent }, 
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            { path: '', component: NewproductsComponent, },
            { path: 'newproducts', component: NewproductsComponent, },
            { path: 'bestseller', component: BestsellersComponent },
            { path: 'featuredproducts', component: FeaturedproductComponent },
            { path: 'onsale', component: OnsaleComponent },
        ],
    },
    {
        path: 'furniture',
        component: FurnitureComponent,
        children: [
            { path: '', component: OnsalefurnitureComponent },
            { path: 'onsalefur', component: OnsalefurnitureComponent },
            { path: 'newarrivalfur', component: NewfurnitureComponent },
            { path: 'bestsellerfur', component: BestfurnitureComponent },
        ],
    },
    {
        path: 'electronics', component: ElectronicsComponent, 
        children: [
            { path: '', component: BestelectronicsComponent, },
            { path: 'bestsellerelec', component:BestelectronicsComponent  },
            { path: 'onsaleelec', component: OnsaleelectronicsComponent, },
        ],
    },

];
const scrollConfig: InMemoryScrollingOptions = {
    scrollPositionRestoration: 'enabled' // Must be 'enabled', 'disabled', or 'top'
  };
  export const routing = provideRouter(routes, withInMemoryScrolling(scrollConfig));