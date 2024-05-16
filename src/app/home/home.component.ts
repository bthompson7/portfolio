import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Nav buttons
  @ViewChild('aboutBtn') aboutBtn: ElementRef;
  @ViewChild('expBtn') expBtn: ElementRef;
  @ViewChild('skillBtn') skillBtn: ElementRef;
  @ViewChild('projectsBtn') projectsBtn: ElementRef;

  // content panels
  @ViewChild('aboutPanel') aboutPanel: ElementRef;
  @ViewChild('expPanel') expPanel: ElementRef;
  @ViewChild('skillsPanel') skillsPanel: ElementRef;
  @ViewChild('projectsPanel') projectsPanel: ElementRef;
  @ViewChild('header') header: ElementRef;
  @ViewChild('footer') footer: ElementRef;


  // panel "X" buttons
  @ViewChild('aboutBackBtn') aboutBackBtn: ElementRef;
  @ViewChild('expBackBtn') expBackBtn: ElementRef;
  @ViewChild('skillsBackBtn') skillsBackBtn: ElementRef;
  @ViewChild('projectsBackBtn') projectsBackBtn: ElementRef;

  private timer: number

  constructor(private backendService: BackendService) {

  }

  ngOnInit(): void {
    this.backendService.analyticsGetRequest();
  }

  ngAfterViewInit() {
    let displayBlock: string = "block";

    // hide content sections
    this.aboutPanel.nativeElement.style.display = 'none';
    this.expPanel.nativeElement.style.display = 'none';
    this.skillsPanel.nativeElement.style.display = 'none';
    this.projectsPanel.nativeElement.style.display = 'none';

    /* START onClick  */

    // content buttons
    this.aboutBtn.nativeElement.onclick = () => {
      this.header.nativeElement.style.display = 'none';
      this.footer.nativeElement.style.display = 'none';

      this.aboutPanel.nativeElement.style.display = displayBlock;
      this.timer = Date.now();
    }

    this.expBtn.nativeElement.onclick = () => {
      this.header.nativeElement.style.display = 'none';
      this.footer.nativeElement.style.display = 'none';

      this.expPanel.nativeElement.style.display = displayBlock;
      this.timer = Date.now();
    }

    this.skillBtn.nativeElement.onclick = () => {
      this.header.nativeElement.style.display = 'none';
      this.footer.nativeElement.style.display = 'none';

      this.skillsPanel.nativeElement.style.display = displayBlock;
      this.timer = Date.now();
    }

    this.projectsBtn.nativeElement.onclick = () => {
      this.header.nativeElement.style.display = 'none';
      this.footer.nativeElement.style.display = 'none';

      this.projectsPanel.nativeElement.style.display = displayBlock;
      this.timer = Date.now();
    }

    // back buttons
    this.aboutBackBtn.nativeElement.onclick = () => {
      this.aboutPanel.nativeElement.style.display = 'none';
      this.header.nativeElement.style.display = 'flex';
      this.footer.nativeElement.style.display = 'block';

      let diffInSeconds = ((Date.now() - this.timer) / 1000)
      this.backendService.analyticsPostRequest("About", Math.round((diffInSeconds + Number.EPSILON) * 100) / 100)
    }

    this.expBackBtn.nativeElement.onclick = () => {
      this.expPanel.nativeElement.style.display = 'none';
      this.header.nativeElement.style.display = 'flex';
      this.footer.nativeElement.style.display = 'block';

      let diffInSeconds = ((Date.now() - this.timer) / 1000)
      this.backendService.analyticsPostRequest("Experience", Math.round((diffInSeconds + Number.EPSILON) * 100) / 100)

    }

    this.skillsBackBtn.nativeElement.onclick = () => {
      this.skillsPanel.nativeElement.style.display = 'none';
      this.header.nativeElement.style.display = 'flex';
      this.footer.nativeElement.style.display = 'block';

      let diffInSeconds = ((Date.now() - this.timer) / 1000)
      this.backendService.analyticsPostRequest("Skills", Math.round((diffInSeconds + Number.EPSILON) * 100) / 100)

    }

    this.projectsBackBtn.nativeElement.onclick = () => {
      this.projectsPanel.nativeElement.style.display = 'none';
      this.header.nativeElement.style.display = 'flex';
      this.footer.nativeElement.style.display = 'block';

      let diffInSeconds = ((Date.now() - this.timer) / 1000)
      this.backendService.analyticsPostRequest("Projects", Math.round((diffInSeconds + Number.EPSILON) * 100) / 100)
    }

    /* END onClick */

  }
}
