export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

export interface InventoryCountData {
  outlet: string; name: string; status: string; count: string;
}

export interface InventoryCountTableData{
  Due: InventoryCountData[];
   Upcoming: InventoryCountData[];
    Completed: InventoryCountData[];
     Cancelled: InventoryCountData[];
}
