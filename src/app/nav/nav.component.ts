import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('siteNavSide') siteNavSide: ElementRef;
  @ViewChild('navBtn') navBtn: ElementRef;

  constructor() {

  }

  ngOnInit(): void {

  }


  ngAfterViewInit() {
    this.navBtn.nativeElement.onclick
      = () => {
        var isHidden = this.siteNavSide.nativeElement.style.display;
        console.log(isHidden);
        if (isHidden !== 'flex') {
          this.siteNavSide.nativeElement.style.display = 'flex';

        } else {
          this.siteNavSide.nativeElement.style.display = 'none';
        }

      }
  }

}
