import { Component, OnInit } from '@angular/core';
import { ApiService } from './../Services/api.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question = {}
  questions

  constructor(private api: ApiService) { }

  ngOnInit() {

    this.api.getQuestions().subscribe(res => {

      this.questions = res

    })
  }

}
