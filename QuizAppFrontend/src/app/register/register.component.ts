import { Component, OnInit } from '@angular/core';
import { ApiService } from './../Services/api.service';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form
  constructor(private api: ApiService, private formBuilder: FormBuilder) {

    this.form = formBuilder.group({


      email: ['', Validators.required],
      password: ['', Validators.required]


    })

  }



  register(){
    console.log(this.form)

  }

}
