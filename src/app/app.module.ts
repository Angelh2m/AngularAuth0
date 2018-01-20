import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_ROUTING } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
// Forms
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PricesComponent,
    ProtectedComponent,
    TemplateComponent,
    DataComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [ AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
