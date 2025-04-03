import { Routes } from '@angular/router';
import { AngularComponent } from './MyComponents/angular/angular.component';
import { ReactComponent } from './MyComponents/react/react.component';
import { VueComponent } from './MyComponents/vue/vue.component';


export const routes: Routes = [
  { path: 'angular', component: AngularComponent },
  { path: 'react', component: ReactComponent },
  { path: 'vue', component: VueComponent },
  { path: '', redirectTo: '/angular', pathMatch: 'full' }
];
