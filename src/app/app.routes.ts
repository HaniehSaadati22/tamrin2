import { Routes } from '@angular/router';
import { PublicTemplate } from './public-template/public-template';
import { HomePage } from './home-page/home-page';
import { AboutePage } from './aboute-page/aboute-page';
import { ProdactsPage } from './prodacts-page/prodacts-page';
import { ContactPage } from './contact-page/contact-page';
import { LoginPage } from './login-page/login-page';
import { PrivateTemplate } from './private-template/private-template';
import { DashboardPage } from './dashboard-page/dashboard-page';
import { UsersPage } from './users-page/users-page';
import { ProdactPage } from './prodact-page/prodact-page';
import { OrdersPage } from './orders-page/orders-page';


export const routes: Routes = [
    {
        path: 'public', component: PublicTemplate, children: [
            { path: 'home', component: HomePage },
            { path: 'about', component: AboutePage },
            { path: 'products', component: ProdactsPage },
            { path: 'contact', component: ContactPage },
            { path: 'login', component: LoginPage },
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: '', redirectTo: 'home' },
        ]
    },
    {
        path: 'privete', component: PrivateTemplate, children: [
            { path: 'dashboard', component: DashboardPage },
            { path: 'users', component: UsersPage },
            { path: 'products', component: ProdactPage },
            { path: 'orders', component: OrdersPage },
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: '', redirectTo: 'dashboard' },
        ]
    },
    { path: '', redirectTo: 'public', pathMatch: 'full' },
    { path: '**', redirectTo: 'public' }
];