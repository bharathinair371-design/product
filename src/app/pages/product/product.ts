import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {

  product: any[] = [];   // this will store only posts array

  constructor(private apiservice: Apiservice, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.apiservice.getproduct().subscribe((data: any) => {
      this.product = data.posts;   // ✅ access posts array
      console.log(this.product);   // 🔍 debug
    });
  }
}
