import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Global } from '../app-config';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  displayedColumns: string[] = ['id', 'cin', 'name', 'type',"cv","createdDate","actions"];

  dataSource:any[]=Global._DB.members



}
