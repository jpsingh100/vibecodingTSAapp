export interface TSAItem {
  id: string;
  name: string;
  category: string;
  status: 'allowed' | 'restricted' | 'prohibited';
  carryOn: string;
  checkedBag: string;
  description: string;
  additionalInfo?: string;
}

export interface Category {
  name: string;
  icon: string;
  items: number;
}