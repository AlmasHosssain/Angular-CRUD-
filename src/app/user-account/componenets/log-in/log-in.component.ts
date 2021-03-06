import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  login! : FormGroup

  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      email : ['',Validators.required],
      password : ['',Validators.required],
      check : ['']
    })
  }

  onSubmit(){

  }

}
