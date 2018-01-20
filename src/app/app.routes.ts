import { RouterModule, Routes } from '@angular/router';
import { PricesComponent } from './components/prices/prices.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuardService } from './services/auth-guard.service';

import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component'

const APP_MODULES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'form', component: TemplateComponent },
  { path: 'data', component: DataComponent },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [ AuthGuardService ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_MODULES);
