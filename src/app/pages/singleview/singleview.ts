import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../../apiservice';

@Component({
  selector: 'app-singleview',
  imports: [],
  templateUrl: './singleview.html',
  styleUrl: './singleview.css',
})
export class Singleview {
  //declare an array
  Singleproduct:any;
 // constructor(private route:activated)
 constructor(private route:ActivatedRoute,private apiservice:Apiservice,private cdr:ChangeDetectorRef){}
 ngOnInit(){
  const productid=this.route.snapshot.paramMap.get('titleid');
  if(productid)
 {
  this.apiservice.getsingleproducts(productid).subscribe((data)=>{
    this.Singleproduct=data;
    console.log(data)
    this.cdr.detectChanges()
  });
 }

}
}
