import { Component, OnInit } from '@angular/core';
import { ApiService } from './../Services/api.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  quiz ={}

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz)
  }

}
