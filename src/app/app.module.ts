import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { UserFormComponent } from './user-form/user-form.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomePageComponent,
    UserFormComponent,
    BookingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
