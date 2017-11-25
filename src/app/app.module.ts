import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ViserModule } from 'viser-ng';
import { ViserModule } from 'angular-module-starter-test1';

import { AppComponent } from './app.component';

// console.log(ViserModule, 'ViserModule');
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
