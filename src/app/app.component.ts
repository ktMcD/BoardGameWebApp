import { Component } from '@angular/core';
import { RepositoryService } from './repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BoardGameWebApp';


  constructor(private repositoryService: RepositoryService) { }
  boardGames: any;


  ngOnInit(): void {
    this.gettGames();
  }
  gettGames() {
    this.repositoryService.getBoardGames().subscribe(
      (response) => { this.boardGames = response; });
  }
}
