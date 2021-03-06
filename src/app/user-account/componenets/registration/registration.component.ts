import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registration!: FormGroup;
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {
    this.registration = this.fb.group({
      name : ['',Validators.required],
      email : ['',Validators.required],
      phoneNumber : ['',Validators.required],
      passwordGroup : this.fb.group({
        password : ['',Validators.required],
        confirmPassword : ['',Validators.required]
      })
    })
  }

  onSubmit(){

  }

}
