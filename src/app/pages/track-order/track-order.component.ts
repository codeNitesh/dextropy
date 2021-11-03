import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent implements OnInit {

  mainTrackingData: any[] = [
    {progress: "Done", stageName: "Order Received", estimateDate: "March 27th, 2021", estimateTime: "12:00:32 am"},
    {progress: "TBH - DELAYED", stageName: "Purchase", estimateDate: "March 28th, 2022", estimateTime: "12:00:32 am"},
    {progress: "", stageName: "Manufacturing", estimateDate: "March 29th, 2022", estimateTime: "12:00:32 am"},
    {progress: "", stageName: "Inspection", estimateDate: "March 30th, 2022", estimateTime: "12:00:32 am"},
    {progress: "", stageName: "Dispatch", estimateDate: "March 02th, 2022", estimateTime: "12:00:32 am"},
    {progress: "", stageName: "Project Signoff", estimateDate: "March 05th, 2022", estimateTime: "12:00:32 am"},
  ]

  ourTrackingList: any[]= []

  showMainTimeLine: Boolean = true

  stageToExpand: {} = null

  constructor() { }

  ngOnInit(): void {
    this.setTracks(this.mainTrackingData)
  }

  setTracks(mainTrackingData: any[]){
    mainTrackingData.forEach(track => {
      this.ourTrackingList.push({isSelected: false, data: track})
    });
  }

  showDetailsOfStage(stageName: string, isDisabled: boolean){
    if(!isDisabled){
      this.ourTrackingList.forEach(track=>{
        if(track.data.stageName == stageName && track.isSelected){
          track.isSelected = false
          this.stageToExpand = null
          this.showMainTimeLine = true
          return;
        }
        track.isSelected = false
        if(track.data.stageName == stageName) {
          this.stageToExpand = track
          track.isSelected = true
          this.showMainTimeLine = false
        }
      });
    }
    
  }
}
