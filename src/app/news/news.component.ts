import { Component, OnInit } from '@angular/core';
import { News } from '../model/news';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from '../services/news-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: News[] = [];
  errorMessage = '';

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next: (currentNews) => {
        // console.log('Init function : fetching the news : ' + currentNews);
        this.news = currentNews.reverse();
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
