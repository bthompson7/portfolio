import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
    standalone: false
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
      let diffInTime = 0;

      if(timeSplit.join(" ").includes("Present")){
        diffInTime = today.getTime() - startDate.getTime();
      }else{
        let endDate = new Date(timeSplit[3] + " 1 " +  timeSplit[4])
        diffInTime = endDate.getTime() - startDate.getTime();
      }

      let diffInDays = diffInTime / this.oneDay;
      let years = (diffInDays / 365).toFixed(1).split(".");
      let year = parseInt(years[0])
      let month = parseInt(years[1])
      let timeDisplayString =  time + " &middot; "

      // year
      if(year === 1){
        timeDisplayString += year + " year "
      }else if(year > 1){
        timeDisplayString += year + " years "
      }

      // month
      if(month === 1){
        timeDisplayString += month + " month "
      }else if(month > 1){
        timeDisplayString += month + " months "
      }

      this.renderer.setProperty(ElementRef.nativeElement, 'innerHTML', timeDisplayString);
    }
  }
}