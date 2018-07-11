import { Component, OnInit } from '@angular/core';
import { PopupService } from '../shared/popup.service';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';

  constructor(private popup: PopupService, public game: GameService) { }

  ngOnInit() {
    this.popup.open(this);
  }

  onSend(): void {
    this.game.getGames();
  }

  onAdd(): void {
    this.game.addGame();
  }
}
