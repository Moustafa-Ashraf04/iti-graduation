import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-registr',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,HeaderComponent],
  templateUrl: './registr.component.html',
  styleUrl: './registr.component.css'
})
export class RegistrComponent {
  is_loading:boolean=false
  error:string =''
  constructor( private _Router:Router){}
  registerform:FormGroup= new FormGroup(
    {
      first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      last_name:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
      age:new FormControl(null,[Validators.required,Validators.min(16),Validators.max(90)]),
      email:new FormControl(null,[Validators.email,Validators.required]),
      password:new FormControl(null,[Validators.required]),
    }

  );

  submitregistration(registerform:FormGroup){
    // this.is_loading=true
    // this._Auhtservices.signUp(registerform.value).subscribe({
    //   next:(response) => {
    //   this.is_loading=false
    //     if(response.message === "success"){
    //       this._Router.navigate(['/login'])
    //     }else {
    //       this.error = response.message;

    //     }
    //   }
    // })

  }
}
