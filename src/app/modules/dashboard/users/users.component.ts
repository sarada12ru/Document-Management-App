import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/interfaces/user.interface';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { EditUserComponent } from 'src/app/components/users/edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users: User[] | undefined;
  bsModalRef?: BsModalRef;

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.apiService.get(`users`)
    .subscribe((res: any) => {
      if(!res.success) {
        console.log("Failed to fetch user list !");
        return;
      }
      this.users = res['data'];
    })
  }

  addUser() {
    const initialState: ModalOptions = {
      initialState: {
        list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
        title: 'Modal with component'
      }
    };
    this.bsModalRef = this.modalService.show(EditUserComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  editUser(user: User) {
    const initialState: ModalOptions = {
      initialState: {
        list: ['Open a modal with component', 'Pass your data', 'Do something else', '...'],
        title: 'Modal with component',
        data: user
      }
    };
    this.bsModalRef = this.modalService.show(EditUserComponent, initialState);
    this.bsModalRef.content.user = user;
  }

}
