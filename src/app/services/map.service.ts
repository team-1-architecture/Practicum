// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { AgmMap } from '@agm/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class MapService {
//     subscribeToMapEvent<N extends keyof google.maps.MapHandlerMap<google.maps.Map>>(
//         map: google.maps.Map,
//         eventName: N
//       ): Observable<google.maps.MapMouseEvent> {
//         return new Observable((observer) => {
//           const listener = map.addListener(eventName, (event: google.maps.MapMouseEvent) => {
//             observer.next(event);
//           });
      
//           return () => {
//             google.maps.event.removeListener(listener);
//           };
//         });
//       }
//     }