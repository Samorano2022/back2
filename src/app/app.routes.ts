import { Routes } from '@angular/router';
import { HeropageComponent } from './heropage/heropage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';


export const routes: Routes = [
    { path: '', title:"Hero", component: HeropageComponent },
    // { path: 'Hero',title:"Heropage", component: HeropageComponent },
];
