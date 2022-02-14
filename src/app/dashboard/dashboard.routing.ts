import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { WidgetsComponent } from './doctors/widgets.component';

export const DashboardRoutes: Routes = [
  {

    path: '',
    children: [ {
      path: 'provider',
      component: DashboardComponent
  }]
},
{

  path: '',
  children: [ {
    path: 'provider/details/:id',
    component: WidgetsComponent
}]
}

];
