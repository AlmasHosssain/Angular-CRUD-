import { PasswordCheck } from './../../../share-data/validators/pasword-validator';
import { ISKills } from './../../models/ISKills';
import { UserDetailsService } from './../../service/user-details-service.service';
import { IUser } from './../../models/IUser';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nanoid } from 'nanoid'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {


  singleUser! : IUser;
  userData! : FormGroup;
  formHeading : boolean = true;
  experienceYear = ['1','2','3','More then 3'];
  proficiency = ['Beginner','Intermediate','Advance']
  constructor(
    private fb : FormBuilder,
    private userDetailsService : UserDetailsService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userData = this.fb.group({
      name : ['',Validators.required],
      email : ['',Validators.required],
      passwordGroup : this.fb.group({
        password : ['',Validators.required],
        confirmPassword : ['',Validators.required]
      },{validators : PasswordCheck.passwordCheck}),
      skills : this.fb.array([
        this.addSkill()
      ])
    })



    this.activatedRoute.paramMap.subscribe((params : ParamMap)=>{
      let id = params.get('id');
      if (id) {
        this.formHeading=false
        this.getSingleUser(id)
      }else{
        this.initialUserCondition()
      }
    })

  }


  addSkill():FormGroup{
    return this.fb.group({
      skillName: ['', Validators.required],
      experienceInYears: ['', Validators.required],
      proficiency: ['', Validators.required]
    })
  }

  addSkillBtn():void{
    (<FormArray>this.userData.get('skills')).push(this.addSkill())
  }

  removeSkillBtn(skillIndex : number):void{
    let removeSkill = (<FormArray>this.userData.get('skills'));
    removeSkill.removeAt(skillIndex);
  }

  getSkillsControls() {
    return (this.userData.get('skills') as FormArray).controls;
  }

  getConfirmPassword(){
    return this.userData.get('passwordGroup')?.errors?.passwordMissmatch;
  }

  getSingleUser(id : string){
    this.userDetailsService.getSingleUser(id).subscribe((user : IUser)=>{
      this.singleUser = user;
      this.editUser(user);
    })
  }

  editUser(user:IUser){
    this.userData.patchValue({
      name : user.name,
      email : user.email,
      passwordGroup : {
        password : user.password
      }
    })

    this.userData.setControl('skills',this.setExistingSkills(user.skills))
  }


  setExistingSkills(skills : ISKills[]):FormArray{
    let formArray = new FormArray([])
    skills.forEach(singleSkill=>{
      formArray.push(this.fb.group({
        skillName : singleSkill.skillName,
        experienceInYears : singleSkill.experienceInYears,
        proficiency : singleSkill.proficiency
      }))
    })
    return formArray;
  }
  onSubmit():void{
    this.mapFormValueToSingleUser()
    let {name,email,passwordGroup: {password},skills} = this.userData.value;
    if (this.singleUser.id !== "") {
      console.log(this.singleUser)
      this.userDetailsService.updateSingleTask(this.singleUser).subscribe(data=>{
        console.log(data)
      })
      this.router.navigate(['/user/list'])
    } else {
      console.log('Hi')
      let submittedData : IUser = {
        id : nanoid(),
        name,
        email,
        password,
        skills
    }
    this.userDetailsService.addNewUser(submittedData)
    this.router.navigate(['/user/list'])
    }
  }
  initialUserCondition(){
    this.singleUser= {
      id : '',
      name : '',
      email : '',
      password : '',
      skills : []
    }

  }
  mapFormValueToSingleUser(){
    let {name,email,passwordGroup: {password},skills} = this.userData.value;
    this.singleUser!.name = name;
    this.singleUser.email = email;
    this.singleUser.password = password;
    this.singleUser.skills = skills
  }
}
function getConfirmPassword() {
  throw new Error('Function not implemented.');
}

