import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characterslist',
  templateUrl: './characterslist.page.html',
  styleUrls: ['./characterslist.page.scss'],
})
export class CharacterslistPage implements OnInit {
  characters = [];
  page = 1;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    const url = 'https://rickandmortyapi.com/api/character?page=' + this.page;
    this.http.get<any>(url).subscribe((data) => {
      this.characters = data.results;
    });
  }

  changePagePlus() {
    this.page = this.page + 1;

    this.fetch();
  }

  changePageSub() {
    if (this.page != 1) {
      this.page = this.page - 1;
    }
    this.fetch();
  }
}
