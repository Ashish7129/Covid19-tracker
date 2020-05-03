import { Component, OnInit } from '@angular/core';
import { News } from '../news';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsService } from '../../services/news-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css'],
})
export class AddNewComponent implements OnInit {
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
    this.newsForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(50)]],
      summary: ['', [Validators.required, Validators.minLength(50)]],
    });
  }

  save() {
    console.log(this.newsForm);
    console.log('Saved: ' + JSON.stringify(this.newsForm.value));
    if (this.newsForm.valid) {
      if (this.newsForm.dirty) {
        const p = { ...this.news, ...this.newsForm.value };
        console.log('data :' + p);
        this.newsService.createNews(p).subscribe({
          next: (addedNews) => {
            this.news.push(addedNews);
            this.onSaveComplete();
          },
          error: (err) => (this.errorMessage = err),
        });
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete() {
    this.newsForm.reset();
    this.router.navigate(['/news']);
  }
}
