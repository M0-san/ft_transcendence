import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OAuthService} from "../oauth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public is2FA = false;
  constructor(private oauthService: OAuthService, private router: Router, private route: ActivatedRoute) {
    if (this.oauthService.isAuthenticated()) {
      this.router.navigate(['']);
    } else {
      if (route.snapshot.queryParams['code']) {
        this.is2FA = true;
        console.log(route.snapshot.queryParams);
      }
    }
  }

  ngOnInit(): void {
  }

  login() {
    this.oauthService.getAuthPage().subscribe({
      next: (data) => {
        window.location.href = data.page;
      },
      error: error => console.log(error)
    });
  }

  reset() {
    this.is2FA = false;
  }
}
