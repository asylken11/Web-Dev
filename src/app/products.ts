export interface Product {
  id: number;
  name: string;
  color: string;
  Os: string;
  hasNfc: boolean;
  ram: number;
  rom: number;
  camera: string;
  price: number;
  imageUrl: string[];
  rating: number;
  category: number;
}

export const products = [
  {
    id: 1,
    name: 'Google Pixel 7',
    color: 'black',
    Os: 'Android 13',
    hasNfc: true,
    ram: 8,
    rom: 128,
    camera: '50MP + 12MP',
    price: 217001,
    link: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-chernyi-106971937/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/hfe/hb5/84424699838494.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/he1/h1a/64291476766750.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hd8/h3a/64291478110238.jpg?format=gallery-medium'
  ],
  rating: 5,
  category:1
  },
  {
    id: 2,
    name: 'Xiaomi Redmi Note 12 Pro',
    color: 'gray',
    Os: 'Android 12',
    hasNfc: true,
    ram: 8,
    rom: 256,
    camera: '108MP + 8MP + 2MP + 5MP',
    price: 121885,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-4g-8-gb-256-gb-seryi-109775102/?c=511010000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h02/ha0/79846423199774.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/heb/h34/79846438207518.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/ha8/h37/79846426935326.jpg?format=gallery-medium'
  ],
  rating: 5
  ,
  category:2
},
  {
    id: 3,
    name: 'IPhone 15 Pro Max',
    color: 'black',
    Os: 'iOS 17',
    hasNfc: true,
    ram: 8,
    rom: 1024,
    camera: '48MP + 12MP + 12MP',
    price: 940894,
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=511010000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/hc6/h5d/84076355977246.jpg?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hcf/h00/83559848247326.png?format=gallery-medium',
    'https://resources.cdn-kaspi.kz/img/m/p/hfb/hf5/83559848214558.png?format=gallery-medium'
  ],
  rating: 5
  ,
  category:1
},
  {
    id: 4,
    name: 'Samsung S24 Ultra',
    color: 'gray',
    Os: 'Android 14',
    hasNfc: true,
    ram: 12,
    rom: 512,
    camera: '200MP + 50MP + 12MP + 10MP',
    price: 647989,
    link: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-chernyi-106971937/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h10/h0f/84963708370974.png?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/h28/h8f/84963582607390.jpg?format=gallery-medium',
'https://resources.cdn-kaspi.kz/img/m/p/h39/h87/84963582574622.png?format=gallery-medium'],
    rating: 5
    ,
  category:1
},
  {
    id: 5,
    name: 'OPPO Reno 8T',
    color: 'black',
    Os: 'Android 13',
    hasNfc: true,
    ram: 8,
    rom: 128,
    camera: '100MP + 2MP + 2MP',
    price: 139500,
    link: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-chernyi-106971937/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h4e/h64/70342818955294.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/hda/h11/70342819774494.jpg?format=gallery-medium',
'https://resources.cdn-kaspi.kz/img/m/p/hc8/h04/70342819250206.jpg?format=gallery-medium'],
    rating: 4
    ,
  category:4
},
  {
    id: 6,
    name: 'Vivo Y55',
    color: 'cyan',
    Os: 'Android 12',
    hasNfc: false,
    ram: 8,
    rom: 128,
    camera: '50MP + 2MP + 2MP',
    price: 94990,
    link: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-chernyi-106971937/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h6a/h74/64428205113374.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/h1c/hd5/84661645770782.jpg?format=gallery-medium',
'https://resources.cdn-kaspi.kz/img/m/p/h37/h4b/84661645738014.jpg?format=gallery-medium'],
    rating: 5,
    category:1
},
  {
    id: 7,
    name: 'OnePlus 11',
    color: 'black',
    Os: 'Android 13',
    hasNfc: true,
    ram: 16,
    rom: 256,
    camera: '50MP + 48MP + 32MP',
    price: 377000,
    link: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-chernyi-106971937/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h0e/h19/69978583367710.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/h07/h2b/68516688953374.jpg?format=gallery-medium',
'https://resources.cdn-kaspi.kz/img/m/p/hb6/h07/79997815980062.jpg?format=gallery-medium'],
    rating: 5,
    category:1
},
  {
    id: 8,
    name: 'Realme 9 pro',
    color: 'black',
    Os: 'Android 12',
    hasNfc: true,
    ram: 8,
    rom: 128,
    camera: '64MP + 8MP + 2MP',
    price: 179900,
    link: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-chernyi-106971937/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/hd8/h11/68355676667934.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/hd5/hcc/68355947069470.jpg?format=gallery-medium',
'https://resources.cdn-kaspi.kz/img/m/p/h33/h2a/68355947593758.jpg?format=gallery-medium'],
    rating: 5,
    category:1
},
  {
    id: 9,
    name: 'HONOR X9A',
    color: 'Green',
    Os: 'Android 12',
    hasNfc: true,
    ram: 8,
    rom: 256,
    camera: '64MP + 5MP + 2MP',
    price: 299999,
    link: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-chernyi-106971937/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/hc7/h97/79913098870814.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/hc0/h3f/81127143866398.jpg?format=gallery-medium',
'https://resources.cdn-kaspi.kz/img/m/p/h1b/hea/81127142883358.jpg?format=gallery-medium'],
    rating: 5,
    category:3
},
  {
    id: 10,
    name: 'Huawei P60 Pro',
    color: 'white',
    Os: 'EMUI 13.1',
    hasNfc: true,
    ram: 8,
    rom: 256,
    camera: '48MP + 13MP + 48MP',
    price: 379899,
    link: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-chernyi-106971937/?c=750000000',
    imageUrl: ['https://resources.cdn-kaspi.kz/img/m/p/h21/he2/80819885342750.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/hf8/hfe/80819885408286.jpg?format=gallery-medium',
'https://resources.cdn-kaspi.kz/img/m/p/hbf/hff/80819884589086.jpg?format=gallery-medium'],
    rating: 5,
    category:2
}
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/