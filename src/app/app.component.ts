import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from './models/user';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'INDATACORETest';
  currentUser!: user;
  logged: boolean= false
  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
    const currentUser = this.authenticationService.currentUserValue;

  }
  ngOnInit(): void {
    if (this.currentUser) {
        this.logged = true;
    }  
  }

//   logout() {
//     this.authenticationService.logout();
//     this.router.navigate(['/login']);
// }
}
