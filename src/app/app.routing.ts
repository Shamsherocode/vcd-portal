import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { CanDeacticateGuard } from './services/can-deacticate.guard';
import { AuthenticationGuard } from './services/authentication.guard';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: 'provider',
        pathMatch: 'full',
      },{
        path: '',
        component: AdminLayoutComponent,
        canActivate: [AuthenticationGuard],
        children: [{
            path: '',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },
        // {
        //     path: 'components',
        //     loadChildren: './components/components.module#ComponentsModule'
        // },
        {
            path: 'user-profile',
            loadChildren: './userpage/user.module#UserModule'
        },
        {
            path: 'payment-details',
            loadChildren: './dashboard/doctors/widgets.module#WidgetsModule'
        },
        // {
        //     path: 'tables',
        //     loadChildren: './tables/tables.module#TablesModule'
        // },
        {
            path: 'payments',
            loadChildren: './tables/tables.module#TablesModule'
        },
        {
            path: 'locations',
            loadChildren: './locations/charts.module#ChartsModule'
        },
        {
            path: 'doctors',
            loadChildren: './doctors/calendar.module#CalendarModule'
        },
        // {
        //     path: '',
        //     loadChildren: './userpage/user.module#UserModule'
        // },
        // {
        //     path: 'locations',
        //     loadChildren: './locations/timeline.module#TimelineModule'
        // },
        // {
        //     path: 'doctors',
        //     loadChildren: './doctors/widgets.module#WidgetsModule'
        // }
        
        ]
        },{
            path: '',
            component: AuthLayoutComponent,
            canActivate: [CanDeacticateGuard],
            children: [{
                path: '',
                loadChildren: './sign/pages.module#PagesModule'
            }]
        }
];
