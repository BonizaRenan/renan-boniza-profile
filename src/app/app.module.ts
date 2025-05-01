import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstContentComponent } from './components/first-content/first-content.component';
import { SecondContentComponent } from './components/second-content/second-content.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThirdContentComponent } from './components/third-content/third-content.component';
import { FourthContentComponent } from './components/fourth-content/fourth-content.component';
import { FifthContentComponent } from './components/fifth-content/fifth-content.component';

import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstContentComponent,
    SecondContentComponent,
    ThirdContentComponent,
    FourthContentComponent,
    FifthContentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
