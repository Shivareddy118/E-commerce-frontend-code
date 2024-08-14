import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CategoryComponent } from './category/category.component';
import { PlantsComponent } from './plants/plants.component';
import { Home1Component } from './home1/home1.component';
import { SeedsComponent } from './seeds/seeds.component';


export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'login', component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'category',component:CategoryComponent},
    {path:'plants',component:PlantsComponent},
    {path:'home1', component:Home1Component},
    {path:'seeds',component:SeedsComponent}

];
