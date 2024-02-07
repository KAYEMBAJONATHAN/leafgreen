import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { OrderComponent } from './component/order/order.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { SearchTermComponent } from './component/search-term/search-term.component';
import { TagComponent } from './component/tag/tag.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'order', component: OrderComponent },
    {path: 'search/:searchTerm', component: SearchTermComponent},
    { path: 'navigation', component: NavigationComponent },
    {path: 'tag/:tag', component: TagComponent}
];
