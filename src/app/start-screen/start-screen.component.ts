import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent implements OnInit {

  constructor(private router: Router) { } // we import the router because we need it to navigate to another page
  // 'private' because we use the router just inside this Component, if want use the router in the html we need 'public'

  ngOnInit(): void {
  }


  newGame() {
    // Start Game
    this.router.navigateByUrl('/game');
  }

}
