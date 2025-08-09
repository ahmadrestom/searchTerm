# Angular Search & Highlight App

This is a small Angular 19 standalone component application that allows you to:
- Search through a list of articles
- Highlight the search term inside the article titles and content

---

## 📋 Prerequisites

Before you start, make sure you have:

- [Node.js](https://nodejs.org/) (v18 or later recommended for Angular 19)
- [Angular CLI](https://angular.dev/tools/cli) installed globaly:
  ```bash
  npm install -g @angular/cli

  You can verify versions : 
    node -v
    npm -v
    ng version

  
## Downloading
- If using git:
    - git clone https://github.com/ahmadrestom/searchTerm
    - cd searchTerm
- Install npm dependencies:
    - npm install
- Run the application:
    - ng serve
- Open in browser on default port 4200:
    - http://localhost:4200/  

## How it works
- Type a search term in the input field
- The app filters articles containing the search term
- Match in titles and content are highlighted in yellow using the <span class="highlight"> wrapper

## Notes
- This project uses Angular standalone componenets (Angular 19+ features)
    



This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.


