import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { LogwithComponent } from 'src/app/Auth/logwith/logwith.component';
import { TokenStorageService } from 'src/app/service/token-storage.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  roles: string[] = [];
  authority: string;
  isLogged: Boolean = false;
  username:String;
  isAdmin:Boolean = false;
  constructor(private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getUsername() != null){
      this.isLogged=true;
      this.username=this.tokenStorage.getUsername();
    }
    this.roles=this.tokenStorage.getAuthorities();
        if (this.roles[0] == "ROLE_ADMIN"){
          this.isAdmin=true;
        }



  }
  logOut(){
    this.tokenStorage.signOut();
    this.reloadComponent();
  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}









