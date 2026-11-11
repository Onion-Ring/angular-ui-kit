import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { GuideComponent } from './pages/guide-component/guide-component';
import { Buttons } from './pages/guide-component/buttons/buttons';
import { Inputs } from './pages/guide-component/inputs/inputs';
import { Cards } from './pages/guide-component/cards/cards';
import { Dropdowns } from './pages/guide-component/dropdowns/dropdowns';
import { Modals } from './pages/guide-component/modals/modals';
import { Footers } from './pages/guide-component/footers/footers';
import { Navs } from './pages/guide-component/navs/navs';
import { Headers } from './pages/guide-component/headers/headers';


export const routes: Routes = [
    {
        path: '',
        component: Home,
    },
    {
        path: 'guide',
        component: GuideComponent,
        children:[
            {
                path: '',
                redirectTo: 'buttons',
                pathMatch: 'full'
            },
            {
                path:'buttons',
                component:Buttons
            },
            {
                path:'inputs',
                component:Inputs
            },
            {
                path: 'cards',
                component: Cards
            },
            {
                path: 'dropdowns',
                component: Dropdowns
            },
            {
                path: 'modals',
                component: Modals
            },
            {
                path: 'footers',
                component: Footers
            },
            {
                path: 'headers',
                component: Headers
            },
            {
                path: 'navs',
                component: Navs
            }
            
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
