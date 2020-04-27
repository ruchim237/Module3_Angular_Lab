import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServeComponent } from './serve/serve.component';

@NgModule({
  declarations: [
    AppComponent,
    ServeComponent
  ],
  imports: [
    BrowserModule,
    ServeComponent
  ],
  providers: [],
  bootstrap: [ServeComponent]
})
export class AppModule { }
