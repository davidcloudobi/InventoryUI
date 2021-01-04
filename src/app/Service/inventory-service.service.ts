import { EventEmitter, Injectable } from '@angular/core';
import { InventoryCountData } from '../Interface/interface';

const ELEMENT_DATA: InventoryCountData [] =
     [
      {
        outlet : 'Lekki',
        name: 'Hydrogen',
        status: 'in progress',
        count: 'Full'
      }
    ];
@Injectable({
  providedIn: 'root'
})
export class InventoryServiceService {
  data = ELEMENT_DATA;
getDueData(): InventoryCountData [] {

  return this.data.slice(0);

}

getUpcomingData(): InventoryCountData [] {
this.data.push(   {
  outlet : 'Lekki',
  name: 'Hydrogen',
  status: 'in progress',
  count: 'Full'
});
return this.data.slice(0);
}



getCompletedData(): InventoryCountData [] {

return null;

  }

getCancelledData(): InventoryCountData [] {

  return null;
}
}
