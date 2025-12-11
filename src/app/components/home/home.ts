import { Component } from '@angular/core';
import { Links } from '../links/links';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Links, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',  
})
export class Home {

}
