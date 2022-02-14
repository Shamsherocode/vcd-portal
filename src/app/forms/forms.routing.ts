import { Routes } from '@angular/router';

import { ExtendedFormsComponent } from './extendedforms/extendedforms.component';
import { RegularFormsComponent } from './regularforms/regularforms.component';
import { ValidationFormsComponent } from './validationforms/validationforms.component';
import { WizardComponent } from './wizard/wizard.component';

export const FormsRoutes: Routes = [
    // {
    //     path: '',
    //     children: [{
    //         path: 'regular',
    //         component: RegularFormsComponent
    //     }]
    // },
    {
        path: '',
        children: [{
            path: 'info/account',
            component: WizardComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'info/changepassword',
            component: WizardComponent
        }]
    },
    {
        path: '',
        children: [{
            path: 'info/profile',
            component: WizardComponent
        }]
    }
];
