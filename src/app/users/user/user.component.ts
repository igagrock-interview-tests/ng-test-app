import { Component, Input, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

 @Input() lists;
  constructor(private remoteService: RemoteService) { }

  ngOnInit(): void {
    console.log('user', this.lists)
  }

}
