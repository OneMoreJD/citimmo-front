import { Component,  EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/auth/authenticate.service';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output()
  public sidenavToggle = new EventEmitter();

  logger:boolean;
  name: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, private router:Router, private authenticateService:AuthenticateService, private headerService: HeaderService) {
  }

  ngOnInit() {
    this.authenticateService.logger$.subscribe(logger => {
      this.logger = logger;
      if (logger) {
        this.headerService.getUser(this.authenticateService.getUsername()).subscribe(data => {
          console.log(data);
          this.name = data.firstName + ' ' + data.lastName;
        });
      }
    });
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
