import { Component } from '@angular/core';
import { LogosComponent } from "../../shared/logos/logos.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { Topcollection } from '../../core/interfaces/topcollection';
import { addcart } from '../../core/services/addcart.service';
import { CompareService } from '../../core/services/compare.service';

@Component({
    selector: 'app-pets',
    standalone: true,
    templateUrl: './pets.component.html',
    styleUrl: './pets.component.css',
    imports: [LogosComponent, RouterLink, FontAwesomeModule, CommonModule]
})
export class PetsComponent {
    star = faStar
    cart = faShoppingCart
    search = faMagnifyingGlass
    heart = faHeart
    compare = faCodeCompare
     
    product!: Topcollection[];
    item!: Topcollection;
    constructor(private cartService: addcart, private compareService: CompareService) { }
    ngOnInit(): void {
  
    }
    toppets: Topcollection[] = [
        {
            id: 1,
            mainimg: "../../../assets/images/pets/pet9.jpg",
            name: 'Steel Bowl Puppy',
            newprice: '$114.00 ',
            oldprice: '$120.00',
            quantity: 1,
            totalPrice: '$114.00 ',
            description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
            secondaryimg: [],
            dress: '',
        },
        {
            id: 2,
            mainimg: "../../../assets/images/pets/pet10.jpg",
            name: 'Calcium Milk Bone',
            newprice: '$133.00 ',
            oldprice: '$140.00',
            quantity: 1,
            totalPrice: '$133.00 ',
            description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
            secondaryimg: [],
            dress: '',
        },
        {
            id: 3,
            mainimg: "../../../assets/images/pets/pet11.jpg",
            name: 'Dog Sleep Mat',
            newprice: '$122.40 ',
            oldprice: '$136.00',
            quantity: 1,
            totalPrice: '$122.00 ',
            description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
            secondaryimg: [],
            dress: '',
        },
        {
            id: 4,
            mainimg: "../../../assets/images/pets/pet12.jpg",
            name: 'Dog Super Bone Toy',
            newprice: '$128.00 ',
            oldprice: '$149.00',
            quantity: 1,
            totalPrice: '$128.00 ',
            description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
            secondaryimg: [],
            dress: '',
        },


    ]


    petblog: any = [
        {
            id: 0,
            img: 'assets/images/pets/pet16.jpg',
            date: '25 January 2018',
        },
        {
            id: 1,
            img: 'assets/images/pets/pet15.jpg',
            date: '26 January 2018',
        },
        {
            id: 2,
            img: 'assets/images/pets/pet17.jpg',
            date: '27 January 2018',
        },
    ]


    //add to cart function
    addToCart(product: Topcollection) {
        this.cartService.addToCart(product);
    }

    // wishlist 
    showAlert() {
        alert("This Item has been added to wishlist")
    }

    // compare function 
    addToCompare(item: Topcollection): void {
        this.compareService.addToCompare(item);
        alert("Click ok! to compare")
    }

}
