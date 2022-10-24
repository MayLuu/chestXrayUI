import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';

import { MatGridListModule } from '@angular/material/grid-list';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { MatSelectModule } from '@angular/material/select';

import { MatStepperModule } from '@angular/material/stepper';
import { FoundComponent } from './components/found/found.component';

import { SwiperModule } from 'swiper/angular';
import { TestComponent } from './components/test/test.component';
import { MatDatepickerModule } from '@angular/material/datepicker';


// import { authInterceptorProviders } from './_helpers/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    FoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatStepperModule,
    SwiperModule,
    HttpClientModule,
    MatDatepickerModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
