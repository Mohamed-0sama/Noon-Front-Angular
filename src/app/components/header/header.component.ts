import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
@ViewChild('second__navbar') second__navbar! : ElementRef
@ViewChild('li') li! : ElementRef
@ViewChild('show__categories') show__categories! : ElementRef
  constructor() {}
  toggleNav(){
    if (this.second__navbar.nativeElement.style.marginLeft == "-160px") {
      this.second__navbar.nativeElement.style.marginLeft = "0"
    }else {
      this.second__navbar.nativeElement.style.marginLeft = "-160px"
    }
  }
  ngOnInit(): void {
  }
ngAfterViewInit(){
this.li.nativeElement.onmouseover = () =>{
this.show__categories.nativeElement.style.display = "flex"
}
this.show__categories.nativeElement.onmouseover = () =>{
this.show__categories.nativeElement.style.display = "flex"
}
this.li.nativeElement.onmouseleave = () =>{
this.show__categories.nativeElement.style.display = "none"
}
this.show__categories.nativeElement.onmouseleave = () =>{
this.show__categories.nativeElement.style.display = "none"
}
}
}
