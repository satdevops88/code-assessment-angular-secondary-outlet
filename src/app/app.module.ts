import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { FooterAComponent } from './footer-a/footer-a.component';
import { FooterBComponent } from './footer-b/footer-b.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    Menu1Component,
    Menu2Component,
    FooterAComponent,
    FooterBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
