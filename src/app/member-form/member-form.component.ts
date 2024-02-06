import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  form!:FormGroup 
  ngOnInit():void{
    this.initForm();
  }

  initForm():void{
this .form=new FormGroup({
  cin:new FormControl(null,[Validators.required]),
  name:new FormControl(null,[Validators.required]),
  cv:new FormControl(null,[Validators.required]),
  types:new FormControl(null,[Validators.required]),

  createdDate:new FormControl(null,[Validators.required]),
})

  }
  onsub():void{
    //recuperation des donnes a partir du html 
    console.log(this.form.value);
    const MemberToSave=
    this.form.value;

    //declancher l'envoie de requette http en mode post au bakcned



  
  }}
