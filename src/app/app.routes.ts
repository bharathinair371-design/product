import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'product',component:Product},
];
