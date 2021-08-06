import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'app-users-component',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private remoteService: RemoteService) { }

  ngOnInit(): void {
    this.remoteService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }


}
