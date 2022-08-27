import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit {

  // html elements we need to change
  @ViewChild('siteNavSide') siteNavSide: ElementRef;
  @ViewChild('navBtn') navButton: ElementRef;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    let navBtnIcon = this.navButton.nativeElement.children[0];

    this.navButton.nativeElement.onclick = () => {
      let siteNavSideBtn = this.siteNavSide.nativeElement.style.display;
      if (siteNavSideBtn !== 'flex') {

        // change icon css class
        this.renderer.removeClass(navBtnIcon, "fa-solid");
        this.renderer.removeClass(navBtnIcon, "fa-bars");
        this.renderer.addClass(navBtnIcon, "fa-times");

        // menu css
        this.siteNavSide.nativeElement.style.display = 'flex';
        this.siteNavSide.nativeElement.style.justifyContent = 'center';
      } else {
        this.siteNavSide.nativeElement.style.display = 'none';

        // change icon class
        this.renderer.removeClass(navBtnIcon, "fa-times");
        this.renderer.addClass(navBtnIcon, "fa-solid");
        this.renderer.addClass(navBtnIcon, "fa-bars");
      }
    }
  }
}
