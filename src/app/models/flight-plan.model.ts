export interface FlightPlanCommand {
  waypointId: number;
  command: string;
  mavCommand: number;
  parameters: Record<string, any>;
  mavParameters?: number[];
  }
  
  export interface FlightPlan {
    flightPlanId: string;
    flightPlan: FlightPlanCommand[];
  }