import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptor } from './FakeBackend/error.interceptor';
import { JwtInterceptor } from './FakeBackend/jwt.interceptor';
import { fakeBackendProvider } from './FakeBackend/fake_backend';
import { SideBarComponent } from './home/side-bar/side-bar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ListViewComponent } from './data-table/list-view/list-view.component';
import { ItemViewComponent } from './data-table/list-view/item-view/item-view.component';
import { EditItemComponent } from './edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    SideBarComponent,
    DataTableComponent,
    ListViewComponent,
    ItemViewComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
