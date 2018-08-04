import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule, MatCardModule, MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';


import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { ApiService } from './Services/api.service';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';


const routes = [
  {path: 'question', component: QuestionComponent},
    {path: 'questions', component: QuestionsComponent},
  {path: '', component: HomeComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
