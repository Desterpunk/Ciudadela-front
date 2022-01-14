import { ConstructionTypeI } from './../../cores/models/construction-type/constructionType.interface';
import { ConstructionTypeService } from './../../cores/services/construction-type/construccion-type.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-request-page',
  templateUrl: './form-request-page.component.html',
  styleUrls: ['./form-request-page.component.css']
})
export class FormRequestPageComponent implements OnInit {

  constructionTypes : ConstructionTypeI[] = [];

  constructor(
    private dataSVC: ConstructionTypeService
  ) { }

  ngOnInit(): void {
    this.dataSVC.getAllConstructionType().subscribe(data => {
      this.constructionTypes = data;
    })
  }

}
