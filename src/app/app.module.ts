import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    HeaderComponent,
    ResidenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
