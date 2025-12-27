import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { Singleview } from './pages/singleview/singleview';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'product',component:Product},
    {path:'singleview/:titleid',component:Singleview},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:Home},
];
