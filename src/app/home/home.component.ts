import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentLink = 1;

  constructor(public data: DataService, private router: Router) { }

  ngOnInit(): void { }

  async setLink(linkId) {
		this.currentLink = linkId;
	}

}
