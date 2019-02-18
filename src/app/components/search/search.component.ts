import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) {
    // console.log("constructor")
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      // console.log(params['termino']);
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes)
    })
  }

}

