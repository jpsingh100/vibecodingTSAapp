import { TSAItem } from '../types';

export const tsaItems: TSAItem[] = [
  // Liquids & Gels
  {
    id: 'shampoo',
    name: 'Shampoo',
    category: 'Liquids & Gels',
    status: 'restricted',
    carryOn: '3-1-1 rule applies',
    checkedBag: 'Yes',
    description: 'Must be 3.4 oz (100ml) or smaller and fit in quart-sized bag',
    additionalInfo: 'Larger containers must go in checked baggage'
  },
  {
    id: 'toothpaste',
    name: 'Toothpaste',
    category: 'Liquids & Gels',
    status: 'restricted',
    carryOn: '3-1-1 rule applies',
    checkedBag: 'Yes',
    description: 'Must be 3.4 oz (100ml) or smaller and fit in quart-sized bag'
  },
  {
    id: 'water-bottle',
    name: 'Water Bottle (Empty)',
    category: 'Liquids & Gels',
    status: 'allowed',
    carryOn: 'Yes',
    checkedBag: 'Yes',
    description: 'Empty bottles are allowed and can be filled after security'
  },
  {
    id: 'water-bottle-full',
    name: 'Water Bottle (Full)',
    category: 'Liquids & Gels',
    status: 'prohibited',
    carryOn: 'No',
    checkedBag: 'Yes',
    description: 'Must be emptied before security checkpoint'
  },

  // Electronics
  {
    id: 'laptop',
    name: 'Laptop',
    category: 'Electronics',
    status: 'allowed',
    carryOn: 'Yes',
    checkedBag: 'Yes',
    description: 'Must be removed from bag during screening',
    additionalInfo: 'Place in separate bin for X-ray screening'
  },
  {
    id: 'phone',
    name: 'Cell Phone',
    category: 'Electronics',
    status: 'allowed',
    carryOn: 'Yes',
    checkedBag: 'Yes',
    description: 'Can remain in bag during screening'
  },
  {
    id: 'power-bank',
    name: 'Power Bank',
    category: 'Electronics',
    status: 'restricted',
    carryOn: 'Yes (with limits)',
    checkedBag: 'No',
    description: 'Must be under 100Wh and in carry-on only',
    additionalInfo: 'Lithium batteries are not allowed in checked bags'
  },
  {
    id: 'tablet',
    name: 'Tablet',
    category: 'Electronics',
    status: 'allowed',
    carryOn: 'Yes',
    checkedBag: 'Yes',
    description: 'Larger than phone may need separate screening'
  },

  // Tools & Sharp Objects
  {
    id: 'scissors-small',
    name: 'Scissors (Small)',
    category: 'Tools & Sharp Objects',
    status: 'allowed',
    carryOn: 'Yes (under 4 inches)',
    checkedBag: 'Yes',
    description: 'Blades must be less than 4 inches from pivot point'
  },
  {
    id: 'scissors-large',
    name: 'Scissors (Large)',
    category: 'Tools & Sharp Objects',
    status: 'prohibited',
    carryOn: 'No',
    checkedBag: 'Yes',
    description: 'Blades over 4 inches are not allowed in carry-on'
  },
  {
    id: 'nail-clippers',
    name: 'Nail Clippers',
    category: 'Tools & Sharp Objects',
    status: 'allowed',
    carryOn: 'Yes',
    checkedBag: 'Yes',
    description: 'Small nail clippers are permitted'
  },
  {
    id: 'knife',
    name: 'Knife',
    category: 'Tools & Sharp Objects',
    status: 'prohibited',
    carryOn: 'No',
    checkedBag: 'Yes',
    description: 'All knives are prohibited in carry-on luggage'
  },

  // Personal Care
  {
    id: 'medications',
    name: 'Medications',
    category: 'Personal Care',
    status: 'allowed',
    carryOn: 'Yes',
    checkedBag: 'Yes',
    description: 'Prescription and over-the-counter medications are allowed',
    additionalInfo: 'Liquids over 3.4oz should be declared separately'
  },
  {
    id: 'contact-solution',
    name: 'Contact Solution',
    category: 'Personal Care',
    status: 'restricted',
    carryOn: '3-1-1 rule applies',
    checkedBag: 'Yes',
    description: 'Must be 3.4 oz or smaller unless medically necessary'
  },
  {
    id: 'hair-dryer',
    name: 'Hair Dryer',
    category: 'Personal Care',
    status: 'allowed',
    carryOn: 'Yes',
    checkedBag: 'Yes',
    description: 'Electric hair dryers are allowed in both carry-on and checked bags'
  },

  // Food & Beverages
  {
    id: 'snacks-solid',
    name: 'Solid Snacks',
    category: 'Food & Beverages',
    status: 'allowed',
    carryOn: 'Yes',
    checkedBag: 'Yes',
    description: 'Solid food items are generally allowed'
  },
  {
    id: 'baby-food',
    name: 'Baby Food',
    category: 'Food & Beverages',
    status: 'allowed',
    carryOn: 'Yes',
    checkedBag: 'Yes',
    description: 'Baby food and formula are exempt from 3-1-1 rule',
    additionalInfo: 'Must be declared for additional screening'
  },
  {
    id: 'alcohol',
    name: 'Alcohol (under 70%)',
    category: 'Food & Beverages',
    status: 'restricted',
    carryOn: '3-1-1 rule applies',
    checkedBag: 'Yes (limits apply)',
    description: 'Mini bottles must follow liquid rules in carry-on'
  },

  // Sports & Recreation
  {
    id: 'golf-clubs',
    name: 'Golf Clubs',
    category: 'Sports & Recreation',
    status: 'prohibited',
    carryOn: 'No',
    checkedBag: 'Yes',
    description: 'Golf clubs must be packed in checked baggage'
  },
  {
    id: 'tennis-racket',
    name: 'Tennis Racket',
    category: 'Sports & Recreation',
    status: 'allowed',
    carryOn: 'Yes',
    checkedBag: 'Yes',
    description: 'Tennis rackets are allowed in carry-on bags'
  },
  {
    id: 'fishing-rod',
    name: 'Fishing Rod',
    category: 'Sports & Recreation',
    status: 'allowed',
    carryOn: 'Yes',
    checkedBag: 'Yes',
    description: 'Fishing rods are allowed but may be subject to additional screening'
  }
];

export const categories = [
  { name: 'Liquids & Gels', icon: '💧', items: tsaItems.filter(item => item.category === 'Liquids & Gels').length },
  { name: 'Electronics', icon: '📱', items: tsaItems.filter(item => item.category === 'Electronics').length },
  { name: 'Tools & Sharp Objects', icon: '✂️', items: tsaItems.filter(item => item.category === 'Tools & Sharp Objects').length },
  { name: 'Personal Care', icon: '🧴', items: tsaItems.filter(item => item.category === 'Personal Care').length },
  { name: 'Food & Beverages', icon: '🍎', items: tsaItems.filter(item => item.category === 'Food & Beverages').length },
  { name: 'Sports & Recreation', icon: '⚽', items: tsaItems.filter(item => item.category === 'Sports & Recreation').length }
];