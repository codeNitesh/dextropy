import { Component, OnInit } from '@angular/core';

export class BidData {
  bidPrice: string;
  eta_for_completion: string;
  plan_of_execution: PlanOfExecution[]
}

export class PlanOfExecution {
  milestone: string;
  eta: Date;
}

@Component({
  selector: 'app-bid-bid',
  templateUrl: './bid-bid.component.html',
  styleUrls: ['./bid-bid.component.css']
})
export class BidBidComponent implements OnInit {


  biddingData: BidData = new BidData()

  constructor() { }

  ngOnInit(): void {
    this.biddingData.plan_of_execution = []
    this.addNewMilestone()
  }

  addNewMilestone(){
    this.biddingData.plan_of_execution.push({milestone: null, eta: null})
  }

}
