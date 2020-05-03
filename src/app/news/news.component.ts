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
  new = new News();
  news: News[] = [];
  errorMessage = '';
  loading = false;

  newsForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.newsService.getNews().subscribe({
      next: (currentNews) => {
        console.log('Init function : fetching the news : ' + currentNews);
        this.news = currentNews;
      },
      error: (err) => (this.errorMessage = err),
    });
    this.loading = false;
  }
}
