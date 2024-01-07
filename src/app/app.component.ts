import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'SIMPLE';
  text="deneme";

  num1:number=1;

  x:number=0;
  n:number=0;

  flimit:number=1;

  bolunen:number=0;
  bolen:number=0;
  bolum:number=0;
  kalan:number=0;

  //---
  ngOnInit(): void {
  }
  click(){
    this.text="Butona tıklandı."
  }
  // onChange(event:any){
  // }
  onMouseOver(){
    this.text="Mouse üzerinde"
  }
  //---
  testFunc(){

  }
  addOne(){
    this.num1+=1;
  }
  getString(){
    return this.num1 % 2 == 0 ? "Çift Sayı":"Tek Sayı";
  }

  //Girilen sayılar arasındaki tüm doğal sayılar
  getList(){
    let list:number[]=[]
    for(let i=this.x; i<=this.n; i++){
      console.log(`${this.x} ten ${this.n} e kadar olan ${i} sayısı eklendi.`);
      list.push(i)
    }
  return list
  }

  //Klavyeden girilecek n değerine kadar olan Fibonacci Dizisi
  getFibonacci(){
    let list:number[]=[1,1]
    while(list[list.length-2] + list[list.length-1] < this.flimit && this.flimit>1){
      console.log(list,list[list.length-2],list[list.length-1])
      list.push(list[list.length-2] + list[list.length-1])
    }
    return (this.flimit<2) ? []:list
  }
  //bolme işlemi
  calculateDivide() {
    this.bolum = 0;
    let bolunen:number=this.bolunen;
    while (this.bolunen >= this.bolen && this.bolunen != 0 && this.bolen != 0) {
      this.bolunen -= this.bolen;
      this.kalan = this.bolunen;  // Update the remainder after subtracting the divisor
      this.bolum++;
    }
  }

  //
}
