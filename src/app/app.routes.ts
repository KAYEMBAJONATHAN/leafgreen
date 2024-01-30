import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { OrderComponent } from './component/order/order.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ProductComponent } from './component/product/product.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'order', component: OrderComponent },
    {path: 'product', component: ProductComponent},
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'navigation', component: NavigationComponent },
];
