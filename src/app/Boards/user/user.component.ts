import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from 'src/app/Auth/signup/signup.component';
import { AdminService } from 'src/app/service/admin.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { ModelComponent } from '../model/model.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:String;
  users : any =[];
  constructor(private modalService: NgbModal,private userService:AdminService, private router:Router,private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers(){
    this.name = this.tokenStorage.getUsername();
    this.userService.getAllUser().subscribe(
      data =>{
        this.users=data;
        console.log(data);
      }
    )
  }
  open(id:number) {
    const modalRef = this.modalService.open(ModelComponent);
    modalRef.componentInstance.name = id;
  }
  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(
      data =>{
        console.log(data);
        this.ngOnInit();
            }
    )
  }



}
