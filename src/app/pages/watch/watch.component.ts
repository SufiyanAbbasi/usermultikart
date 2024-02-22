import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LogosComponent } from "../../shared/logos/logos.component";
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { DeliveryComponent } from "../../shared/delivery/delivery.component";

@Component({
    selector: 'app-watch',
    standalone: true,
    templateUrl: './watch.component.html',
    styleUrl: './watch.component.css',
    imports: [RouterLink, FontAwesomeModule, LogosComponent, CommonModule, DeliveryComponent]
})
export class WatchComponent {

    star = faStar
    cart = faShoppingCart
    search = faMagnifyingGlass
    heart = faHeart
    compare = faCodeCompare

    mywatch: any = [
        {
            id: 0,
            name: 'WATCH MODELS',
            img: '../../../assets/images/watch/watch4.png',
            text1: 'D1 Milano',
            text2: 'Damas keening',
            text3: 'Diving Watch',
            text4: 'Dollar Watch',
        },
        {
            id: 1,
            name: 'CALCULATOR WATCH',
            img: '../../../assets/images/watch/watch5.png',
            text1: 'Shock Resistant',
            text2: 'Skeleton Watch',
            text3: 'Slow Watch',
            text4: 'Solar Watch',
        },
        {
            id: 2,
            name: 'MAGNETIC WATCH',
            img: '../../../assets/images/watch/watch6.png',
            text1: 'Watchmaking Congloremates',
            text2: 'Brietling SA',
            text3: 'Casio Watch',
            text4: 'Citizen Watch',
        },
        {
            id: 3,
            name: 'HISTORY WATCH',
            img: '../../../assets/images/watch/watch7.png',
            text1: 'Manufacture Dhorlogerie',
            text2: 'Mechanical Watch',
            text3: 'Microbrand Watches',
            text4: 'MILW-76-T2',
        },
    ]

    trendwatch: any = [
        {
            id: 1,
            mainimg: "../../../assets/images/watch/watch8.jpg",
            name: 'Watch 1',
            newprice: '$156.00 ',
            oldprice: '$205.00'
        },
        {
            id: 2,
            mainimg: "../../../assets/images/watch/watch11.jpg",
            name: 'Watch 2',
            newprice: '$207.00 ',
            oldprice: '$315.00'
        },
        {
            id: 3,
            mainimg: "../../../assets/images/watch/watch10.jpg",
            name: 'Watch 3',
            newprice: '$335.00 ',
            oldprice: '$447.00'
        },
        {
            id: 4,
            mainimg: "../../../assets/images/watch/watch11.jpg",
            name: 'Watch 4',
            newprice: '$446.00 ',
            oldprice: '$530.00'
        },


    ]

    watchblog: any = [
        {
          id:0,
          img: 'assets/images/watch/watch16.jpg',
          date: '25 January 2018',
        },
        {
          id:1,
          img: 'assets/images/watch/watch17.jpg',
          date: '26 January 2018',
        },
        {
          id:2,
          img: 'assets/images/watch/watch18.jpg',
          date: '27 January 2018',
        },
    
      ]


}
