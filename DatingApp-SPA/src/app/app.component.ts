import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './_services/Auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DatingApp';
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService){}

  ngOnInit(){
    const token  = localStorage.getItem('token');
    if(token) {
      this.authService.decodeToken = this.jwtHelper.decodeToken(token);
    }
  }
}
