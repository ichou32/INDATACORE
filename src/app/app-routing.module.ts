import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { GraphesComponent } from './graphes/graphes.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent},
  { path: 'datatable', component: DataTableComponent, canActivate: [AuthGuard] },
  { path:'editproduct/:id', component: EditItemComponent, canActivate: [AuthGuard] },
  { path: 'uploadfile', component: FileUploadComponent, canActivate: [AuthGuard] },
  { path: 'graphes', component: GraphesComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
