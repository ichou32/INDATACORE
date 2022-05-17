import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { GraphesComponent } from './components/graphes/graphes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

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
