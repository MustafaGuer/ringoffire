import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { EditPlayerComponent } from '../edit-player/edit-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
<<<<<<< HEAD
  public game: Game;
  private gameId: string;
=======
  game: Game;
  gameId: string;
  gameOver = false;
>>>>>>> aa74ecb994e9e4b69dd228b9ef86639216101d35

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      console.log('UrlId: ', params.id);
      this.gameId = params.id;
      this.firestore
        .collection('games')
        .doc(this.gameId)
        .valueChanges()
        .subscribe((game: any) => {
          this.game.currentPlayer = game.currentPlayer;
          this.game.playedCards = game.playedCards;
          this.game.players = game.players;
          this.game.playerImages = game.playerImages;
          this.game.stack = game.stack;
          this.game.pickCardAnimation = game.pickCardAnimation;
          this.game.currentCard = game.currentCard;
          console.log('Game Update: ', game);
        });
    });
  }

  private newGame(): void {
    this.game = new Game();
  }

  public takeCard(): void {
    if (!this.game.pickCardAnimation) {
      this.game.currentCard = this.game.stack.pop();
      this.game.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer =
        this.game.currentPlayer % this.game.players.length;
      this.saveGame();

      setTimeout(() => {
        this.game.playedCards.push(this.game.currentCard);
        this.game.pickCardAnimation = false;
        this.saveGame();
      }, 1000);
    }
  }

  editPlayer(playerId: number) {
    console.log('Edit Player: ', playerId);

    const dialogRef = this.dialog.open(EditPlayerComponent);

    dialogRef.afterClosed().subscribe((change: string) => {
      console.log('Received change', change);
      if (change) {
        if(change == 'DELETE') {
          this.game.players.splice(playerId, 1);
          this.game.playerImages.splice(playerId, 1);
      } else {
        this.game.playerImages[playerId] = change;
      }
        this.saveGame();
      }
    });
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game.players.push(name);
        this.game.playerImages.push('men.webp');
        this.saveGame();
      }
    });
  }

<<<<<<< HEAD
  private saveGame(): void {
    this
      .firestore
=======
  saveGame() {
    this.firestore
>>>>>>> aa74ecb994e9e4b69dd228b9ef86639216101d35
      .collection('games')
      .doc(this.gameId)
      .update(this.game.toJson());
  }
<<<<<<< HEAD

=======
>>>>>>> aa74ecb994e9e4b69dd228b9ef86639216101d35
}
