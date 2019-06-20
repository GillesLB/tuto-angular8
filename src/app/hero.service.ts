import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';
import { MessageService } from 'src/app/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
