import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  roles: string[];
  authority: string;
  isLogged: Boolean = false;
  message:any = {};
  user:any =[];
  constructor(private tokenStorage: TokenStorageService,private userService:AdminService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getUsername() != null){
      this.isLogged=true;
      console.log(this.isLogged)
    }

  }
  onSubmit(): void {
    this.userService.getUserByUserName(this.tokenStorage.getUsername()).subscribe(
      data =>{
        this.user=data;
        this.userService.send(this.user.id,this.message).subscribe(
          d =>{
            console.log(d);
          }
        )
      }
    )

  }



}
