import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticateService } from 'src/app/auth/authenticate.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Output()
  sidenavClose = new EventEmitter();

  logger:boolean;

  constructor(private authenticateService:AuthenticateService) { }

  ngOnInit(): void {
    this.authenticateService.logger$.subscribe(logger => this.logger = logger);
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
