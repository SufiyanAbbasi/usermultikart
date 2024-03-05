import { Component } from '@angular/core';
import { DeliveryComponent } from "../../shared/delivery/delivery.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShoppingCart, faMagnifyingGlass, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { LogosComponent } from "../../shared/logos/logos.component";
import { Topcollection } from '../../core/interfaces/topcollection';
import { addcart } from '../../core/services/addcart.service';
import { CompareService } from '../../core/services/compare.service';

@Component({
    selector: 'app-tool',
    standalone: true,
    templateUrl: './tool.component.html',
    styleUrl: './tool.component.css',
    imports: [DeliveryComponent, CommonModule, RouterLink, FontAwesomeModule, LogosComponent]
})
export class ToolComponent {
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




    mytool: any = [
        {
            id: 0,
            name: 'AUTO PARTS',
            img: '../../../assets/images/tool/tool7.jpg',
            text1: 'Shock Resistant Parts',
            text2: 'Skeleton Parts',
            text3: 'Slow Parts',
            text4: 'Solar Power Parts',
        },
        {
            id: 1,
            name: 'BRAKES & STEERING',
            img: '../../../assets/images/tool/tool8.jpg',
            text1: 'Shock Resistant Parts',
            text2: 'Skeleton Parts',
            text3: 'Slow Parts',
            text4: 'Solar Power Parts',
        },
        {
            id: 2,
            name: 'ENGINE & DRIVETRAIN',
            img: '../../../assets/images/tool/tool9.jpg',
            text1: 'Shock Resistant Parts',
            text2: 'Skeleton Parts',
            text3: 'Slow Parts',
            text4: 'Solar Power Parts',
        },
        {
            id: 3,
            name: 'EXTERIOR ACCESORIES',
            img: '../../../assets/images/tool/tool10.jpg',
            text1: 'Shock Resistant Parts',
            text2: 'Skeleton Parts',
            text3: 'Slow Parts',
            text4: 'Solar Power Parts',
        },
    ]

    popularprod: Topcollection[]  = [
        {
            id: 1,
            mainimg: "../../../assets/images/tool/tool11.jpg",
            name: 'Wheel Bairing',
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
            mainimg: "../../../assets/images/tool/tool12.jpg",
            name: 'Cable Clutch',
            newprice: '$420.00 ',
            oldprice: '$140.00',
            quantity: 1,
            totalPrice: '$420.00 ',
            description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
            secondaryimg: [],
            dress: '',
        },
        {
            id: 3,
            mainimg: "../../../assets/images/tool/tool13.jpg",
            name: 'Cap Wheel',
            newprice: '$532.40 ',
            oldprice: '$136.00',
            quantity: 1,
            totalPrice: '$532.00 ',
            description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
            secondaryimg: [],
            dress: '',
        },
        {
            id: 4,
            mainimg: "../../../assets/images/tool/tool14.jpg",
            name: 'Suspensons',
            newprice: '$408.00 ',
            oldprice: '$149.00',
            quantity: 1,
            totalPrice: '$408.00 ',
            description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
            secondaryimg: [],
            dress: '',
        },


    ]
    populartool: Topcollection[] = [
        {
            id: 1,
            mainimg: "../../../assets/images/tool/tool11.jpg",
            name: 'Wheel Bairing',
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
            mainimg: "../../../assets/images/tool/tool12.jpg",
            name: 'Cable Clutch',
            newprice: '$420.00 ',
            oldprice: '$140.00',
            quantity: 1,
            totalPrice: '$420.00 ',
            description: "lorem ipsum dolor emit cos senta dom nesta alfredo",
            secondaryimg: [],
            dress: '',
        }


    ]
    showContent: boolean = true;
    toggleContent() {
        this.showContent = !this.showContent;
    }
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
