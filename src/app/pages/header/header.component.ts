import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone, faRandom, faHeart, faUser} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  call = faPhone;
  compare = faRandom;
  heart = faHeart;
  user = faUser;
}
