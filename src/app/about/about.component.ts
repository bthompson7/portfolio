import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private backendService: BackendService) {
  }

  ngOnInit(): void {
    this.backendService.logRequest().subscribe();

  }
}
