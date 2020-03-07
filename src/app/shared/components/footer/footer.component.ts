import { Component, OnInit, AfterViewInit, ViewChild, VERSION } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version = VERSION;
  constructor() { }

  ngOnInit() {
  }

}
