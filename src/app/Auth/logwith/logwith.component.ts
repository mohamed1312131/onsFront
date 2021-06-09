import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';


@Component({
  selector: 'app-logwith',
  templateUrl: './logwith.component.html',
  styleUrls: ['./logwith.component.css']
})
export class LogwithComponent implements OnInit {

  socialUser: SocialUser;
  userLogged: SocialUser;
  isLogged: boolean;


  constructor(public activeModal: NgbActiveModal,
    private authService: SocialAuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.userLogged = data;
        this.isLogged = (this.userLogged != null);
      }
    );
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        console.log(data);
        this.isLogged = true;
        this.router.navigate(['/']);
      });
    }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        console.log(data);
        this.router.navigate(['/']);
      });
  }

}
