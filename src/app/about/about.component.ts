import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private backendService: BackendService) {

  }

  ngOnInit(): void {
    if (environment.production) {
      this.backendService.logRequest().subscribe();
    }
  }
}
