import { Component } from '@angular/core';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  dataSource:any[]=[

{id:'124578', cin:"125578",name:"Mahdi",type:"teacher",cv:"lien", createdDate:"30/1/2024"},
{id:'13568', cin:"23422",name:"Mahdi",type:"teacher",cv:"lien", createdDate:"30/1/2024"},
{}

  ]



}
