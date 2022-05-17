import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ItemViewComponent } from './components/data-table/list-view/item-view/item-view.component';
import { ListViewComponent } from './components/data-table/list-view/list-view.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { GraphesComponent } from './components/graphes/graphes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SignupComponent } from './components/signup/signup.component';
import { ErrorInterceptor } from './FakeBackend/error.interceptor';
import { fakeBackendProvider } from './FakeBackend/fake_backend';
import { JwtInterceptor } from './FakeBackend/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SideBarComponent,
    DataTableComponent,
    ListViewComponent,
    ItemViewComponent,
    EditItemComponent,
    FileUploadComponent,
    HomeComponent,
    GraphesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
