import { Component, Input, OnInit, OnDestroy  } from '@angular/core';
import { Router } from '@angular/router';
import { Article }    from './article';
import { ArticleService } from '../service';

@Component({
    selector: 'article-form',
    templateUrl: 'app/article/article.component.html',
    providers: [ArticleService]

})

export class ArticleDetailComponent implements OnInit{
    private _listeArticle: Article[];
    private _articleService: ArticleService;
    private _indiceEnCours: number;
    private _router: Router;

    constructor(articleService: ArticleService, router: Router) {
        this._articleService = articleService;
        this._router = router;
    }

    @Input() enrArticle: Article;
    titre = 'Saisie article';

    submitted = false;

    ngOnInit() {
        this._listeArticle = this._articleService.getArticles(); 
        this.setEncours(0);
        /*this._articleService.getArticle()
            .then(article => {
                this._listeArticle = article;
                this.setEncours(0);
                });*/
    }

    onSubmit() {
        this.submitted = true;
        if (this.enrArticle.id < 0)
            this._articleService.addArticle(this.enrArticle);
        else
            this._articleService.setArticle(this.enrArticle);
        this._listeArticle[this._indiceEnCours] = this.enrArticle;
    }

    active = true;   

 private setEncours(ind: number): void {
        this.enrArticle = this._listeArticle[ind];
        this._indiceEnCours = ind;
    }

}
