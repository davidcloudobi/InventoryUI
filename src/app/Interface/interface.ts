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

export interface LoginUser{
  email: string;
  password: string;
}

export interface UserObj{
  id: string; name: string;  email: string; token: string;
}

export interface BusinessObj{
    name: string;
    contactName: string;
    email: string;
    phone: string;
    website: string;
    logoUrl: string;
    businessTypeId: string;
    id: string;
}
