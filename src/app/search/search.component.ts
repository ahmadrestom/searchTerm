import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm = '';
  articles = [
    {
      title: "Understanding the difference between grid template and grid-auto",
      content: "With all the new properties related to css Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-. and grid-auto-. properties. Specifically the difference between grid-template-rowslcolumns and grid-auto-rowslcolumns Although | knew they were to d"
    },
    {
      title: "Flexbox vs. Grid: When to use each",
      content: "Flexbox is great for layouts that are one dimensional, however grid is better for 2 dimensionals"
    }
  ];

  constructor(private sanitizer: DomSanitizer){}

  get filteredArticles(){
    if(!this.searchTerm) return this.articles;
    const term = this.searchTerm.toLowerCase();
    return this.articles.filter(article =>
      article.title.toLowerCase().includes(term) || article.content.toLowerCase().includes(term)
    );
  }

  private escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

  highlight(text: string):SafeHtml{
    if(!this.searchTerm) return this.sanitizer.bypassSecurityTrustHtml(text);
    const term = this.escapeRegex(this.searchTerm);
    const regex = new RegExp(term, 'gi');
    const highlighted = text.replace(regex, match =>`<span class="highlight">${match}</span>`);
    return this.sanitizer.bypassSecurityTrustHtml(highlighted);

  }

}
