import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayTopComponent } from './components/display-top/display-top.component';
import { DisplayBottomComponent } from './components/display-bottom/display-bottom.component';
import { HttpClientModule } from '@angular/common/http';
import { ClockComponent } from './components/clock.component';
import { DetailsBottomComponent } from './components/details-bottom.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DisplayTopComponent,
    DisplayBottomComponent,
    ClockComponent, 
    DetailsBottomComponent, 
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
