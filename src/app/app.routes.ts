import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { GuideComponent } from './pages/guide-component/guide-component';

export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'guide',
        component: GuideComponent,
    },
    {
        path: '**',
        redirectTo: ''
    }
];
