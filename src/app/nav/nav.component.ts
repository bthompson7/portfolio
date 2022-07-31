import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {

  // html elements
  @ViewChild('siteNavSide') siteNavSide: ElementRef;
  @ViewChild('navBtn') navBtn: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.navBtn.nativeElement.onclick = () => {
      var siteNavSideBtn = this.siteNavSide.nativeElement.style.display;
      if (siteNavSideBtn !== 'flex') {
        this.siteNavSide.nativeElement.style.display = 'flex';
        this.siteNavSide.nativeElement.style.class = 'fa fa-solid fa fa-xmark'

      } else {
        this.siteNavSide.nativeElement.style.display = 'none';
        this.siteNavSide.nativeElement.style.class = 'fa fa solid fa fa-bars'

      }

    }
  }

}
