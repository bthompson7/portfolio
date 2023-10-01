import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('expBtn') expBtn: ElementRef;
  @ViewChild('skillBtn') skillBtn: ElementRef;
  @ViewChild('projectsBtn') projectsBtn: ElementRef;
  @ViewChild('expPanel') expPanel: ElementRef;
  @ViewChild('skillsPanel') skillsPanel: ElementRef;
  @ViewChild('projectsPanel') projectsPanel: ElementRef;
  @ViewChild('aboutMe') aboutMe: ElementRef;
  @ViewChild('expBackBtn') expBackBtn: ElementRef;
  @ViewChild('skillsBackBtn') skillsBackBtn: ElementRef;
  @ViewChild('projectsBackBtn') projectsBackBtn: ElementRef;

  constructor(private backendService: BackendService) {

  }

  ngOnInit(): void {
    if (environment.production) {
      this.backendService.logRequest().subscribe();
    }
  }

  ngAfterViewInit() {


    // hide content sections
    this.expPanel.nativeElement.style.display = 'none';
    this.skillsPanel.nativeElement.style.display = 'none';
    this.projectsPanel.nativeElement.style.display = 'none';

    // onClick listeners

    this.expBtn.nativeElement.onclick = () => {
      this.aboutMe.nativeElement.style.display = 'none';
      this.expPanel.nativeElement.style.display = 'flex';
    }

    this.skillBtn.nativeElement.onclick = () => {
      this.aboutMe.nativeElement.style.display = 'none';
      this.skillsPanel.nativeElement.style.display = 'flex';
    }

    this.projectsBtn.nativeElement.onclick = () => {
      this.aboutMe.nativeElement.style.display = 'none';
      this.projectsPanel.nativeElement.style.display = 'flex';
    }

    this.expBackBtn.nativeElement.onclick = () => {
      this.expPanel.nativeElement.style.display = 'none';
      this.aboutMe.nativeElement.style.display = 'flex';

    }

    this.skillsBackBtn.nativeElement.onclick = () => {
      this.skillsPanel.nativeElement.style.display = 'none';
      this.aboutMe.nativeElement.style.display = 'flex';

    }

    this.projectsBackBtn.nativeElement.onclick = () => {
      this.projectsPanel.nativeElement.style.display = 'none';
      this.aboutMe.nativeElement.style.display = 'flex';

    }
    // end onClick

  }
}
