import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @ViewChildren('jobTime') elements: QueryList<ElementRef>;
  private oneDay = 1000 * 60 * 60 * 24;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    for (const ElementRef of this.elements) {
      let time = ElementRef.nativeElement.innerHTML
      let timeSplit = time.split(" ");
      // I would put the extact start date but this is going to apply to all jobs so using the first of the month will have to do
      let startDate = new Date(timeSplit[0] + " 1 " + timeSplit[1]);
      let today = new Date();
      let diffInTime = today.getTime() - startDate.getTime();
      let diffInDays = Math.round(diffInTime / this.oneDay);
      this.renderer.setProperty(ElementRef.nativeElement, 'innerHTML', time + " (" + (diffInDays / 365).toFixed(1) + " years)");
      console.log("Job Time: " + (diffInDays / 365).toFixed(1) + " / " + diffInDays);
    }
  }

  calcTimeSince() {

  }

}
