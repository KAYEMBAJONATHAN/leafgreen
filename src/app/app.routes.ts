import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { SearchTermComponent } from './component/search-term/search-term.component';
import { TagComponent } from './component/tag/tag.component';
import { FoodComponent } from './component/food/food.component';
import { CartComponent } from './component/cart/cart.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'search/:searchTerm', component: SearchTermComponent},
    { path: 'navigation', component: NavigationComponent },
    {path: 'tag/:tag', component: TagComponent},
    {path: 'food/:id', component: FoodComponent},
    {path: 'cart', component: CartComponent}
];
