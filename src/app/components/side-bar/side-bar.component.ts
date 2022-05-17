import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private service: AuthenticationService, private router: Router) { }
  
  ngOnInit(): void {
  }

logout(){
  this.service.logout()
  this.router.navigate(['/login']);
}
}
