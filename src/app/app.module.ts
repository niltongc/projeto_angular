import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListApiComponent } from './components/list-api/list-api.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { List2ApiComponent } from './components/list2-api/list2-api.component';

@NgModule({
  declarations: [
    AppComponent,
    ListApiComponent,
    HeaderComponent,
    List2ApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
