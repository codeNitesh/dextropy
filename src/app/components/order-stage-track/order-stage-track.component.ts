import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-stage-track',
  templateUrl: './order-stage-track.component.html',
  styleUrls: ['./order-stage-track.component.css']
})
export class OrderStageTrackComponent implements OnInit {

  @Input() stageDetails: any
  
  constructor() { }

  ngOnInit(): void {
  }

}
