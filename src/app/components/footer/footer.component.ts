import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.saludar();
  }

  ngOnChange(): void {
    this.saludar2();
  }

  saludar() :any {
    console.log("holaMundo");

  }

  saludar2() :any {
    console.log("holaMundo2");
  }

}
