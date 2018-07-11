import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StatisticsService } from './statistics.service';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class GameService {
  gameData: Array<any>;
  dataChange:  ReplaySubject<any>;
  gamesUrl = 'http://localhost:3500/games';

  constructor(private http: HttpClient, private statisticsService: StatisticsService) {
    this.dataChange  = new ReplaySubject();
  }

  getGames() {
    this.makeResponse()
      .subscribe((games: Array<any>) => {
        this.handleGameData(games);
      });
  }

  addGame() {
    this.makeAdd()
      .subscribe(res => this.getGames());
  }

  makeResponse(): Observable<any> {
    return this.http.get(this.gamesUrl);
  }

  makeAdd(): Observable<any> {
    return this.http.post(this.gamesUrl, {'name': 'new'});
  }

  handleGameData(games) {
    this.gameData = games;
    this.doNext(games);
    this.statisticsService.send();
  }

  doNext(value) {
    this.dataChange.next(value);
  }

}
