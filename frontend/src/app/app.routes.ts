import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Layout } from './layout/layout';


export const routes: Routes = [
    {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      // yahan future pages add kar sakte ho
    ],
  },
];
