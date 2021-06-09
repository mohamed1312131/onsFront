import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  @Input() name;
 message:any =[];
  constructor(public activeModal: NgbActiveModal,private userService:AdminService) { }

  ngOnInit(): void {

    this.userService.getMessages(this.name).subscribe(
      data =>{
        this.message=data;
      }
    )
  }

}
