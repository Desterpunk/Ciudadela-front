import { Router } from '@angular/router';
import { RequestService } from './../../cores/services/request/request.service';
import { ConstructionTypeI } from './../../cores/models/construction-type/constructionType.interface';
import { ConstructionTypeService } from './../../cores/services/construction-type/construccion-type.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-request-page',
  templateUrl: './form-request-page.component.html',
  styleUrls: ['./form-request-page.component.css']
})
export class FormRequestPageComponent implements OnInit {

  constructionTypes : ConstructionTypeI[] = [];

  constructor(
    private constructrionDataSVC: ConstructionTypeService,
    private requestDataSVC: RequestService,
    private fb: FormBuilder,
    private router:Router
  ) { }

  requestForm = this.fb.group({
    x: [''],
    y: [''],
    tipoConstruccion: ['']

  })

  ngOnInit(): void {
    this.constructrionDataSVC.getAllConstructionType().subscribe(data => {
      this.constructionTypes = data;
    })
  }

  onSubmit() {
    this.requestDataSVC.addNewRequest(this.requestForm.value).subscribe(data => {
    });

    this.router.navigate(['/request-page']);
  }

}
