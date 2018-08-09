import { Component, OnInit } from '@angular/core';
import { ApiService } from './../Services/api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question = {}
  questions

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {

    var quizId = this.route.snapshot.paramMap.get('quizId')
    this.api.getQuestions(quizId).subscribe(res => {

      this.questions = res

    })
  }

}
