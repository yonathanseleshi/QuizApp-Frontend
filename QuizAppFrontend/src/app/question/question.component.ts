import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  post(question){

    console.log(question)

  }
}