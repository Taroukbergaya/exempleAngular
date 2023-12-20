import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ContainerComponent } from './container/container.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetComponent } from './projet/projet.component';
import { FormsModule } from '@angular/forms';
import { ListContactComponent } from './list-contact/list-contact.component';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    ContactComponent,
    ProjetComponent,
    ListContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
