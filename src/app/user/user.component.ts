import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { AuthenticateService } from 'src/app/auth/authenticate.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;
  role: string

  constructor(private headerService: HeaderService, private authService: AuthenticateService) { }

  ngOnInit(): void {
    this.user = this.headerService.currentUser;
    this.role = this.authService.getProfile();
  }

}
