import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs'

@Injectable()
export class ApiService {

  private selectedQuestion = new Subject<any>()
  questionSelected = this.selectedQuestion.asObservable()

  private selectedQuiz = new Subject<any>()
  quizSelected = this.selectedQuiz.asObservable()

  constructor(private http: HttpClient) { }

  postQuestion(question){
  this.http.post('https://localhost:44327/api/questions', question).subscribe(res => {

    console.log(res)


  })

  }

  postQuiz(quiz){
    this.http.post('https://localhost:44327/api/quizzes', quiz).subscribe(res => {

      console.log(res)


    })

  }

  getQuestions(){


    return this.http.get('https://localhost:44327/api/questions');
  }


  getQuizzes(){


    return this.http.get('https://localhost:44327/api/quizzes');
  }


  putQuestion(question){

    this.http.put(`https://localhost:44327/api/questions/${question.id}`, question).subscribe(res => {

      console.log(res)


    })


  }

  putQuiz(quiz){

    this.http.put(`https://localhost:44327/api/quizzes/${quiz.id}`, quiz).subscribe(res => {

      console.log(res)


    })


  }

  selectQuestion(question){

    this.selectedQuestion.next(question)

  }

  selectQuiz(quiz){

    this.selectedQuiz.next(quiz)

  }

}
