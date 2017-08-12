import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Add this!
import { HttpModule } from '@angular/http'; // Add this!

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Also here!
    HttpModule // Also here!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
