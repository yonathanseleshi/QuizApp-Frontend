import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule, MatCardModule} from '@angular/material';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { ApiService } from './Services/api.service';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';



@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
