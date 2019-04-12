import { Component, OnInit } from '@angular/core';
import { LoginStateService } from 'src/app/angular-modules/service/os-services/services/login-state.service';

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.scss']
})
export class LockScreenComponent implements OnInit {

  constructor(private loginStateService: LoginStateService) { }

  ngOnInit() {
  }

  public login(): void {
    this.loginStateService.login();
  }

}
