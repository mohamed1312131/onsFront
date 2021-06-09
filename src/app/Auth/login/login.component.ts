import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginInfo } from 'src/app/service/auth-login-info';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  user:any = [];

  constructor(private authService: AuthService,
     private tokenStorage: TokenStorageService,
     private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }
  onSubmit(): void {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.user=data;
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);

        this.tokenStorage.saveAuthorities(this.user.roles);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles=this.tokenStorage.getAuthorities();
        if (this.roles[0] == "ROLE_ADMIN"){
          this.router.navigate(['/admin'])
        }
        else{
          this.router.navigate([''])
        }



      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );

  }

  reloadPage() {
    window.location.reload();
  }



}
