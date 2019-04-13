import { Component, OnInit } from '@angular/core';
import { LoginStateService } from 'src/app/angular-modules/service/os-services/services/login-state.service';

@Component({
  selector: 'app-taskbar-apple',
  templateUrl: './taskbar-apple.component.html',
  styleUrls: ['./taskbar-apple.component.scss']
})
export class TaskbarAppleComponent implements OnInit {

  constructor(private loginStateService: LoginStateService) { }

  ngOnInit() {
  }

  public logout() {
    this.loginStateService.logout();
  }

}
