import { RequestService } from '../../cores/services/request/request.service';
import { RequestI } from './../../cores/models/request/request.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-page',
  templateUrl: './request-page.component.html',
  styleUrls: ['./request-page.component.css']
})
export class requestPageComponent implements OnInit {

  requests: RequestI[] = [];

  constructor(
    private requestSVC: RequestService
  ) { }

  ngOnInit(): void {
    this.requestSVC.getAllRequests().subscribe(data => {
      this.requests = data;
    })
  }

}
