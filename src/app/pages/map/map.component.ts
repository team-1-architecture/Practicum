import { Component, OnInit } from "@angular/core";
import { FlightPlan , FlightPlanCommand } from '../../models/flight-plan.model'
import { FlightPlanService } from '../../services/flight-plan.service';



@Component({
  selector: "app-map",
  templateUrl: "map.component.html"
})
export class MapComponent implements OnInit {
  lat = 31.75253099985997;
  lng = -106.40242909183934;

  markers: { lat: number; lng: number }[] = [];

  constructor(private flightPlanService: FlightPlanService) {}

  ngOnInit() {}


 

  onMapClick(event: any) {
    this.markers.push({ lat: event.coords.lat, lng: event.coords.lng });
  }

  onMapReady(map: google.maps.Map) {
    
  }
  generateUniqueFlightPlanId(): string {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 100000);
    return `flightPlan-${timestamp}-${randomNum}`;
  }
  generateFlightPlan() {
    const flightPlanCommands: FlightPlanCommand[] = [
      {
        waypointId: 0,
        command: 'takeoff',
        mavCommand: 22, // MAV_CMD_NAV_TAKEOFF
        parameters: {
          altitude: 10,
        },
      },
    ];
  
    // ...
    let waypointId = 1
    for (const marker of this.markers) {
      flightPlanCommands.push({
        waypointId,
        command: 'waypoint',
        mavCommand: 16, // MAV_CMD_NAV_WAYPOINT
        parameters: {
          latitude: marker.lat,
          longitude: marker.lng,
          altitude: 20,
        },
      });
  
      // ...
  
      for (let angle = 0; angle < 360; angle += 10) {
        flightPlanCommands.push({
          waypointId,
          command: 'captureImage',
          mavCommand: 2000, // Custom command
          parameters: {},
        });
  
        flightPlanCommands.push({
          waypointId,
          command: 'rotate',
          mavCommand: 115, // MAV_CMD_CONDITION_YAW
          parameters: {
            angle: 10,
          },
        });
      }
  
      waypointId += 1;
    }
  

   

    const flightPlanId = this.generateUniqueFlightPlanId();

    const flightPlan: FlightPlan = {
      flightPlanId,
      flightPlan: flightPlanCommands,
    };


    console.log('Flight Plan:', flightPlan);

   
    this.flightPlanService.saveFlightPlan(flightPlan).subscribe(
      (response) => {
        console.log('Flight plan saved:', response);
      },
      (error) => {
        console.error('Error saving flight plan:', error);
      }
    );
  }

  executeFlight(){
    this.flightPlanService.executeFlightPlan(true).subscribe(
      (response:any) => {
        console.log('Flight plan saved:', response);
      },
      (error:any) => {
        console.error('Error saving flight plan:', error);
      }
    );
  }
}
