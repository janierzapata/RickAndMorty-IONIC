import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {
  character:any = {};
  origin:any=""
  location:any=""

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http
      .get<any>(
        'https://rickandmortyapi.com/api/character/' +
          this.activatedRoute.snapshot.paramMap.get('id')
      )
      .subscribe((data) => {
        this.character = data;
        this.location = data.location.name;
        this.origin = data.origin.name;
      });
    
  }
}
