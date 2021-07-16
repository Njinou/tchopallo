/*const Keys= {
    drink: {
        biere:{
              guiness : [
                    {name:'Petite Guiness',code:'pg',stock: 35, prix:1000},
                    {name:'Grande Guiness',code:'gg',stock: 1, prix:1500},
                    {name:'Ice Black',code:'ib',stock: 13, prix:1000},
                    {name:'Ice Ananas',code:'ia',stock: 16, prix:1000},
                    {name:'Smooth',code:'sm',stock: 6, prix:1000},
                    {name:'Harp',code:'hrp',stock: 4, prix:1000},
                    {name:'Origin',code:'og',stock: 4, prix:1000},
                    {name:'Malta',code:'mlta',stock: 15, prix:1000},
                ],
            
              brasserie : [
                    {name:'Tonic',code: 'tc',stock: 18, prix:1000},
                    {name:'Beaufort Ordinaire',code: 'bo',stock: 6, prix:1000},
                    {name:'Beaufort Light',code: 'bl',stock: 6, prix:1000},
                    {name:'Beaufort Tango',code: 'bt',stock: 6, prix:1000},
                    {name:'33 Export',code: 'exp',stock: 6, prix:1000},
                    {name:'Castel',code: 'cast',stock: 3, prix:1000},
                    {name:'Chill',code: 'chl',stock: 7, prix:1000},
                    {name:'Soda',code: 'sda',stock: 4, prix:1000},
                    {name:'Booster',code: 'bster',stock: 4, prix:1000},
                    {name:'Mutzig',code: 'mtz',stock: 4, prix:1000},
                    {name:'UCB',code: 'ucb',stock: 4, prix:1000},
                    {name:'Magnan',code: 'mgn',stock: 4, prix:1000},
                ],

              ucb : [
                    {name:'Kadji',code: 'kj',stock: 4, prix:1000},
                ],
        },
        top:[
            {name:'Ananas',code: 'ananas',stock: 7, prix:1000,key: 'ananas'},
            {name:'Coca Cola',code: 'coca',stock: 7, prix:1000,key: 'coca'},
            {name:'Orange',code: 'org',stock: 7, prix:1000,key: 'org'},
            {name:'Grenadine',code: 'grde',stock: 7, prix:1000,key: 'grde'},
            {name:'Vimto',code: 'vmt',stock: 7, prix:1000,key: 'vmt'},
            {name:'Djino',code: 'djin',stock: 7, prix:1000,key: 'djin'},
            {name:'pamplemouse',code: 'pmpls',stock: 7, prix:1000,key: 'pmpls'},
            {name:'Orangina',code: 'orgina',stock: 7, prix:1000,key: 'orgina'},
        ],
        etrangere: [
            {name:'Heineken',code: 'hnk',stock: 7, prix:1000},
            {name:'1664',code: 'sz',stock: 4, prix:1000},
        ],
        eau:[
            {name:'Supermont',code: 'sprmt',stock: 7, prix:1000},
        ],
        naturel:[
            {name:'Fleur d"oseil- Folere',code: 'oseil',stock: 7, prix:500},
            {name:'Gingenbre',code: 'djindja',stock: 7, prix:500},
            {name:'Ananas',code: 'ananas',stock: 7, prix:1000/1500},
            {name:'Goyave',code: 'gyve',stock: 7, prix:1000/1500},
            {name:'Mangue',code: 'mgue',stock: 7, prix:1000/1500},
            {name:'Papaye',code: 'ppy',stock: 7, prix:1000/1500},
            {name:'Orange',code: 'org',stock: 7, prix:1000/1500},
            {name:'Citron',code: 'ctr',stock: 7, prix:1000/1500},
            {name:'Limonade',code: 'lmd',stock: 7, prix:1000/1500},
            {name:'Pasteque',code: 'pstk',stock: 7, prix:1000/1500},
        ],
        liqueur :[
                    {name:'JW Black',code: 'blk',stock: 7, prix:25000},
                    {name:'Baileys 75 CL',code: 'blk',stock: 7, prix:15000},
                    {name:'Baileys Delight',code: 'blk',stock: 7, prix:15000},
                    {name:'J&B 75 Cl',code: 'jnb',stock: 7, prix:15000},
                    {name:'JW Red 75 CL',code: 'red',stock: 7, prix:15000},
                    {name:'JW Platinum',code: 'pltnm ',stock: 7, prix:90000},
                    {name:'JW Gold Reserved ',code: 'gld',stock: 7, prix:70000},
                    {name:'DTown-Singleton',code: 'sglt',stock: 7, prix:35000},
                    {name:'Zapaca',code: 'zpca',stock: 7, prix:90000},
                    {name:'Cardhuc',code: 'crdc',stock: 7, prix:50000},
                    {name:'Blue Label',code: 'blue-lbl',stock: 7, prix:20000},
                    {name:'Ciroc',code: 'crc',stock: 7, prix:35000},
                    {name:'Black & White ',code: 'blk-white',stock: 7, prix:15000},
                    {name:'Gordon Gin Dry',code: 'gin',stock: 7, prix:15000},
                    {name:'Tanqueray',code: 'tqr',stock: 7, prix:25000},
                    {name:'White Horse',code: 'w-hrs',stock: 7, prix:15000},
                    {name:'VAT 69',code: 'vat',stock: 7, prix:15000},
                    {name:'Dimple ',code: 'dmpl',stock: 7, prix:50000},
                    {name:'Captain Morgan',code: 'mrg',stock: 7, prix:15000},
                    {name:'Smirnoff Red ',code: 'smr-red',stock: 7, prix:15000},
                    {name:'Smirnoff  Black',code: 'smr-blk',stock: 7, prix:15000},
                    {name:'Captain Morgan',code: 'mrg',stock: 7, prix:15000},
                    {name:'Green Label',code: 'grn-lbl',stock: 7, prix:70000},
                    {name:'Guiness  Triple Black',code: 'gns-triple-blk',stock: 7, prix:15000},
                
        ],
        vin: [],
    },    
    'fast food':[],
}*/


export const  drinkKeys = [
  
    {
      id: 'Biere',
      data:  [
        {
          title: "Guiness",
          data: [ {name:'Petite Guiness',code:'pg',stock: 35, prix:1000},
          {name:'Grande Guiness',code:'gg',stock: 1, prix:1500},
          {name:'Ice Black',code:'ib',stock: 13, prix:1000},
          {name:'Ice Ananas',code:'ia',stock: 16, prix:1000},
          {name:'Smooth',code:'sm',stock: 6, prix:1000},
          {name:'Harp',code:'hrp',stock: 4, prix:1000},
          {name:'Origin',code:'og',stock: 4, prix:1000},
          {name:'Malta',code:'mlta',stock: 15, prix:1000},]
        },
  
        {
          title: "Brasseries",
          data: [  {name:'Tonic',code: 'tc',stock: 18, prix:1000},
          {name:'Beaufort Ordinaire',code: 'bo',stock: 6, prix:1000},
          {name:'Beaufort Light',code: 'bl',stock: 6, prix:1000},
          {name:'Beaufort Tango',code: 'bt',stock: 6, prix:1000},
          {name:'33 Export',code: 'exp',stock: 6, prix:1000},
          {name:'Castel',code: 'cast',stock: 3, prix:1000},
          {name:'Chill',code: 'chl',stock: 7, prix:1000},
          {name:'Soda',code: 'sda',stock: 4, prix:1000},
          {name:'Booster',code: 'bster',stock: 4, prix:1000},
          {name:'Mutzig',code: 'mtz',stock: 4, prix:1000},
          {name:'UCB',code: 'ucb',stock: 4, prix:1000},
          {name:'Magnan',code: 'mgn',stock: 4, prix:1000},]
        },
        {
          title:'UCB',
              data : [
                  {name:'Kadji',code: 'kj',stock: 4, prix:1000},
          ],
      },
      {
          title:'Etrangeres',
              data : [
                  {name:'Heineken',code: 'hnk',stock: 7, prix:1000},
                  {name:'1664',code: 'sz',stock: 4, prix:1000},
          ],
      },
  
    ]},
    {
      id: 'eau',
      data:  [
        {
          title: "simple",
          data: [{name:'Supermont',code: 'sprmt',stock: 7, prix:1000},
          {name:'Eau Pure',code: 'opur',stock: 7, prix:1000},
          {name:'Tangui',code: 'tgui',stock: 7, prix:1000},]
        },
    ]},
    {
      id:'JUS',
      data:[
        {
          title:'NATURELS',
          data: [
              {name:'Fleur d"oseil- Folere',code: 'oseil',stock: 7, prix:500},
              {name:'Gingenbre',code: 'djindja',stock: 7, prix:500},
              {name:'Ananas',code: 'ananas',stock: 7, prix:1000/1500},
              {name:'Goyave',code: 'gyve',stock: 7, prix:1000/1500},
              {name:'Mangue',code: 'mgue',stock: 7, prix:1000/1500},
              {name:'Papaye',code: 'ppy',stock: 7, prix:1000/1500},
              {name:'Orange',code: 'org',stock: 7, prix:1000/1500},
              {name:'Citron',code: 'ctr',stock: 7, prix:1000/1500},
              {name:'Limonade',code: 'lmd',stock: 7, prix:1000/1500},
              {name:'Pasteque',code: 'pstk',stock: 7, prix:1000/1500},
          ]
      },
      {
        title:'Cocktail',
        data:[],
      },
      {
        title:'Top',
            data : [
                {name:'Ananas',code: 'ananas',stock: 7, prix:1000,key: 'ananas'},
                {name:'Coca Cola',code: 'coca',stock: 7, prix:1000,key: 'coca'},
                {name:'Orange',code: 'org',stock: 7, prix:1000,key: 'org'},
                {name:'Grenadine',code: 'grde',stock: 7, prix:1000,key: 'grde'},
                {name:'Vimto',code: 'vmt',stock: 7, prix:1000,key: 'vmt'},
                {name:'Djino',code: 'djin',stock: 7, prix:1000,key: 'djin'},
                {name:'pamplemouse',code: 'pmpls',stock: 7, prix:1000,key: 'pmpls'},
                {name:'Orangina',code: 'orgina',stock: 7, prix:1000,key: 'orgina'},
        ],
    },
  ],
    },
    {
      id: 'Liqueur',
      data:  [
        {
          title: "Guiness",
          data: [
            {name:'JW Black',code: 'blk',stock: 7, prix:25000},
            {name:'Baileys 75 CL',code: 'blk',stock: 7, prix:15000},
            {name:'Baileys Delight',code: 'blk',stock: 7, prix:15000},
            {name:'J&B 75 Cl',code: 'jnb',stock: 7, prix:15000},
            {name:'JW Red 75 CL',code: 'red',stock: 7, prix:15000},
            {name:'JW Platinum',code: 'pltnm ',stock: 7, prix:90000},
            {name:'JW Gold Reserved ',code: 'gld',stock: 7, prix:70000},
            {name:'DTown-Singleton',code: 'sglt',stock: 7, prix:35000},
            {name:'Zapaca',code: 'zpca',stock: 7, prix:90000},
            {name:'Cardhuc',code: 'crdc',stock: 7, prix:50000},
            {name:'Blue Label',code: 'blue-lbl',stock: 7, prix:20000},
            {name:'Ciroc',code: 'crc',stock: 7, prix:35000},
            {name:'Black & White ',code: 'blk-white',stock: 7, prix:15000},
            {name:'Gordon Gin Dry',code: 'gin',stock: 7, prix:15000},
            {name:'Tanqueray',code: 'tqr',stock: 7, prix:25000},
            {name:'White Horse',code: 'w-hrs',stock: 7, prix:15000},
            {name:'VAT 69',code: 'vat',stock: 7, prix:15000},
            {name:'Dimple ',code: 'dmpl',stock: 7, prix:50000},
            {name:'Captain Morgan',code: 'mrg',stock: 7, prix:15000},
            {name:'Smirnoff Red ',code: 'smr-red',stock: 7, prix:15000},
            {name:'Smirnoff  Black',code: 'smr-blk',stock: 7, prix:15000},
            {name:'Captain Morgan',code: 'mrg',stock: 7, prix:15000},
            {name:'Green Label',code: 'grn-lbl',stock: 7, prix:70000},
            {name:'Guiness  Triple Black',code: 'gns-triple-blk',stock: 7, prix:15000},
          ]
        },
        {
          title:'BVS',
          data:[]
        },
        {
          title:'Importes',
          data:[]
        }
    ]},
    {
      id:'Vin',
      data:[
        {
          title:'locaux',
          data:[
            {name:'Bordeaux',code: 'brdo',stock: 7, prix:15000},
          ]
        },
        {
          title:'traditionel',
          data:[
            {name:'Matango',code: 'mtgo',stock: 7, prix:15000},
            {name:'Odontol',code: 'odontl',stock: 7, prix:15000},
          ]
        },
        {
          title:'importes',
          data:[
  
          ]
        }
      ]
    }
  ];
export const  platsKeys=[
    {
        title:'accompagnement',
        data : [
            {name:'Riz',code: 'ri',stock: 7, prix:500,description:'Vapeur/Coco Channel',category:'plats',souscategory:'accompagnement'},
            {name:'Plantain',code: 'plt',stock: 7, prix:500,description:'Plantain vapeur',category:'plats',souscategory:'accompagnement'},
            {name:'Pommes',code: 'pm',stock: 7, prix:500,description:'frits/vapeurs',category:'plats',souscategory:'accompagnement'},
            {name:'Ignames',code: 'ign',stock: 7, prix:500,description:'Vapeur',category:'plats',souscategory:'accompagnement'},
            {name:'Patates',code: 'ptt',stock: 7, prix:500,description:'frits/vapeur',category:'plats',souscategory:'accompagnement'},
            {name:'Spaghetti',code: 'spgt',stock: 7, prix:500,description:'spaghetti vapeur',category:'plats',souscategory:'accompagnement'},
            {name:'Banane',code: 'bnn',stock: 7, prix:500,description:'frits/vapeur',category:'plats',souscategory:'accompagnement'},
       ],
    },
    {
        title:'chapallo',
        data:[
            {name:'Pommes viandes',code: 'pm-vde',stock: 7, prix:1500,description:'Pommes sautes + Viandes',category:'plats',souscategory:'chapallo'},
            {name:'Macaroni plantain',code: 'mkroni-pltn',stock: 7, prix:1500,description:'Macaroni + Plantains',category:'plats',souscategory:'chapallo'},
            {name:'Legumes sautes',code: 'lgm-ste',stock: 7, prix:1500,description:'Legumes sautes',category:'plats',souscategory:'chapallo'},
            {name:'poisson fume',code: 'pssn-fme',stock: 7, prix:1500,description:'poisson fume',category:'plats',souscategory:'chapallo'},
            {name:'Roti de Boeuf a la cammerounaise',code: 'Rti-bf',stock: 7, prix:1500,description:'Roti de Boeuf  a la cammerounaise + Plantain/Pommes',category:'plats',souscategory:'chapallo'},
       
            {name:'Poisson poele a la basquaise',code: 'pssn-bsqz',stock: 7, prix:1500-5000,description:'frits/vapeur',category:'plats',souscategory:'chapallo'},
            {name:' Cotellettes de Porc à la Dijonnaise',code: 'ctlette-prc',stock: 7, prix:2000,description:'frits/vapeur',category:'plats',souscategory:'chapallo'},
            {name:'Medaillon de Porc',code: 'medaillon-prc',stock: 7, prix:2000,description:' Porc + plantain/ Pommes',category:'plats',souscategory:'chapallo'},
            {name:'Rognons Miboule',code: 'Rgn',stock: 7, prix:2000,description:' Rognon +  complements',category:'plats',souscategory:'chapallo'},
            {name:'Ndole des princes Sawa',code: 'ndl',stock: 7, prix:2000,description:'Ndole + arachides + crevettes',category:'plats',souscategory:'chapallo'},
            {name:'1/4 Poulet yassa',code: 'plt-yssa',stock: 7, prix:2500-3000,description:'Poulet Yassa',category:'plats',souscategory:'chapallo'},
            {name:'Steak à la crême  champignons',code: 'crm-chmpgn',stock: 7, prix:3000,description:'Steak à la crême  champignons',category:'plats',souscategory:'chapallo'},
            {name:'Gambas Chapallo',code: 'gms-chplo',stock: 7, prix:5000-10000,description:'Gambas Chapallo',category:'plats',souscategory:'chapallo'},
            {name:'Poulet Dolce Gabana',code: 'plt-dlc-gbn',stock: 7, prix:10000,description:'Gambas Chapallo',category:'plats',souscategory:'chapallo'},
            ],
    },
    {
        title:'traditionel',
        data:[
            {name:'Sauce jaune avec du Taro pilé',code: 'tro',stock: 7, prix:3500,description:'Taro Pilé + sauces Jaunes ',category:'plats',souscategory:'traditionel'},
            {name:'Banane malaxée aux arachides trempées',code: 'bnn-mlx',stock: 7, prix:1500,description:'Banane + arachides trempées ',category:'plats',souscategory:'traditionel'},
            {name:'Banane malaxée aux arachides grillés',code: 'bnn-grl',stock: 7, prix:1500,description:'Banane +  arachides grillés',category:'plats',souscategory:'traditionel'},
            {name:'Sauce Mbongo Tchobi',code: 'mbgo',stock: 7, prix:2500,description:'Mbongo Tchobi',category:'plats',souscategory:'traditionel'},
            {name:'Sauce Gombo',code: 'gmbo',stock: 7, prix:1500,description:'Gombo',category:'plats',souscategory:'traditionel'},
            {name:'Sauce Pistache gombo',code: 'pstch-gmbo',stock: 7, prix:1500,description:'Pistaches + gombo',category:'plats',souscategory:'traditionel'},
            {name:'Sauce Pistache',code: 'pstch',stock: 7, prix:2000,description:' Pistaches + ....+',category:'plats',souscategory:'traditionel'},
            {name:'Couscous Djamts"eu',code: 'cscs-djm',stock: 7, prix:2000,description:'Couscous + Djamts"eu',category:'plats',souscategory:'traditionel'},
            {name:'Macabo rapé aux arachides grillés',code: 'mkbo-rpe-grl',stock: 7, prix:1500,description:'Macabo rape + arachides grillés',category:'plats',souscategory:'traditionel'},
            {name:'Macabo rapé aux arachides trempées',code: 'mkbo-rpe-trmp',stock: 7, prix:1500,description:'Macabo rape + arachides trempées',category:'plats',souscategory:'traditionel'},
            {name:'Ekwang',code: 'ekwg',stock: 7, prix:3000,description:' Macabo + feuilles de taro',category:'plats',souscategory:'traditionel'},
            {name:'Macabo malaxé au Ndole',code: 'mkbo-mlxe-ndl',stock: 7, prix:2500,description:'Macabo + Ndole',category:'plats',souscategory:'traditionel'},
            {name:'Koki du Royaume Bamileke',code: 'kki',stock: 7, prix:1500,description:'Koki',category:'plats',souscategory:'traditionel'},
            {name:'Tenue Militaire ou koki de Maïs',code: 'kki-ms',stock: 7, prix:2500,description:'Mais +  jeunes feuilles de taro',category:'plats',souscategory:'traditionel'},
            {name:'Koki de Banane ',code: 'kki-bnn',stock: 7, prix:3000,description:'Bananes + jeunes feuilles de Taro',category:'plats',souscategory:'traditionel'},
            {name:'Koki de Patate',code: 'kki-ptt',stock: 7, prix:3000,description:'Patate + Jeunes feuilles de taro',category:'plats',souscategory:'traditionel'},
            {name:'Kondre de la Royaute Bamileke',code: 'kndr',stock: 7, prix:2500,description:' Plantains +... ',category:'plats',souscategory:'traditionel'},
            {name:'Kontchap de Maïs',code: 'kntchp',stock: 7, prix:1500,description:' Maïs + haricots ',category:'plats',souscategory:'traditionel'},
            {name:'Pepe Soup aux plantains',code: 'pp-Pltn',stock: 7, prix:2500,description:'Plantains',category:'plats',souscategory:'traditionel'},
            {name:'Pile Pomme',code: 'pl-pm',stock: 7, prix:1500,description:'Pommes',category:'plats',souscategory:'traditionel'},
            {name:'Pile patate',code: 'pl-ptt',stock: 7, prix:2500,description:'Patates',category:'plats',souscategory:'traditionel'},
            {name:'Pile Macabo',code: 'pl-mkbo',stock: 7, prix:3000,description:' Macabos',category:'plats',souscategory:'traditionel'},
            {name:'Pile Plantain',code: 'pl-pltn',stock: 7, prix:1500,description:'Pilés plantains',category:'plats',souscategory:'traditionel'},
            {name:'Sauce Tomate',code: 'tmt',stock: 7, prix:2000,description:' plantains',category:'plats',souscategory:'traditionel'},
            {name:'sauce d"arachide ',code: 'archd',stock: 7, prix:1500,description:'Arachides grilles',category:'plats',souscategory:'traditionel'},
        ],
    },
   
     {
         title:'legume',
         data:[
            {name:'Choux Facile',code: 'ch-fcl',stock: 7, prix:1.500,description:'Choux sautes',category:'plats',souscategory:'legume'},
            {name:'Choux aux arachides',code: 'ch-arachd',stock: 7, prix:1.500,description:'Choux + arachides grilles ',category:'plats',souscategory:'legume'},
            {name:'Legumes Sautes',code: 'lgm-saut',stock: 7, prix:2.500,description:' Legumes ',category:'plats',souscategory:'legume'},
            {name:'Eru',code: 'eru',stock: 7, prix:2000,description:'Eru',category:'plats',souscategory:'legume'},
            {name:'Ndole ',code: 'ndl',stock: 7, prix:2500,description:'Ndole + arachides trempees',category:'plats',souscategory:'legume'},
            {name:'Okok sucre ',code: 'okok-scr',stock: 7, prix:1500,description:'Okok + arachides grilles',category:'plats',souscategory:'legume'},
            {name:'okok salé',code: 'okok-sale',stock: 7, prix:1500,description:'okok + arachides trempés',category:'plats',souscategory:'legume'},
            {name:'Zom sautés',code: 'zm-saute',stock: 7, prix:2500,description:'Zom saute',category:'plats',souscategory:'legume'},
        ],
     }
         
    ];

export const grillKeys =[
    {
        title:'poulet',
        data:[
            {name:'Poulet fume',code: 'plt-fm',stock: 7, prix:2000,description:'Poulet fume',category:'grill',souscategory:'poulet'},
            {name:'Poulet aux Champignons',code: 'plt-cmpgn',stock: 7, prix:10000,description:'Poulet + Champignon',category:'grill',souscategory:'poulet'},
            {name:'Poulet DG',code: 'plt-dg',stock: 7, prix:10000,description:'Poulet + plantain',category:'grill',souscategory:'poulet'},
            {name:'Poulet braise',code: 'plt-brz',stock: 7, prix:7.000,description:'Poulet braise sur charbon',category:'grill',souscategory:'poulet'},
            {name:'Poulet frit',code: 'plt-frit',stock: 7, prix:6.000,description:'Poulet frit a l"huile',category:'grill',souscategory:'poulet'},
            {name:'Poulet roti',code: 'plt-roti',stock: 7, prix:6.000,description:'Poulet roti en machine',category:'grill',souscategory:'poulet'},
        ],
    },
    {
        title:'boeuf',
        data:[{name:'Brochettes de Viandes de Boeuf',code: 'brchtte-bf',stock: 7, prix:500,description:'Brochettes de Boeuf',category:'grill',souscategory:'boeuf'},
            {name:'Chawarmar  de Boeuf',code: 'chwrm-bf',stock: 7, prix:500,description:'Chawarmar de  Boeuf',category:'grill',souscategory:'boeuf'},       
    ],
    },
    {
        title:'porc',
        data:[
            {code: 'brchtte-prc',stock: 7, prix:500,description:'Brochettes de Porc',category:'grill',souscategory:'porc'}, 
            {code: 'chwrm-prc',stock: 7, prix:500,description:'Chawarmar de  Porc',category:'grill',souscategory:'porc'},    
        ],
    }
    
];

export const fastFoodKeys =[];

export const   entreesKeys= [ 
    { title:'patisserie',
    data:[
         {name:'Pizza',code: 'pza',stock: 7, prix:1000,description:'Pizza ',category:'entrees',souscategory:'patisserie'},
         {name:'Quiche',code: 'qche',stock: 7, prix:1000,description:'Quiches ',category:'entrees',souscategory:'patisserie'},
         {name:'Hamurger',code: 'hmbgr',stock: 7, prix:1000,description:'Hamburger ',category:'entrees',souscategory:'patisserie'},
         {name:'Mousse au Chocolat',code: 'msse-chlt',stock: 7, prix:1000,description:'Mousse chocolat ',category:'entrees',souscategory:'patisserie'},
     ],
    },
    {
    title:'oeuvre',
    data: [
        {name:'Oeufs  Mimosa',code: 'mimz',stock: 7, prix:1000,description:' Oeuf Bouillie accompagne des vegetaux',category:'entrees',souscategory:'oeuvre'},
        {name:'Assiettes de crudites',code: 'crdt',stock: 7, prix:1000,description:' Salade + tomate +... ',category:'entrees',souscategory:'oeuvre'},
        {name:'Carottes Hawaienne',code: 'hawai',stock: 7, prix:1000,description:'Carottes rapes +.... ',category:'entrees',souscategory:'oeuvre'},
        {name:'Salade Mexicaine',code: 'mexicaine',stock: 7, prix:1500,description:'Salade + ... ',category:'entrees',souscategory:'oeuvre'},
        {name:'Cocktail d"avocat',code: 'cock',stock: 7, prix:2000,description:'Avocats + ... ',category:'entrees',souscategory:'oeuvre'},
        {name:'Farci de Tomate',code: 'fr6',stock: 7, prix:1000,description:'Tomate + Oignons',category:'entrees',souscategory:'oeuvre'},
        {name:'Macedoine',code: 'mcdn',stock: 7, prix:1000,description:'Mais + petite pois +.... ',category:'entrees',souscategory:'oeuvre'},
        ],
    }
     
    ];

export const dessertsKeys=[
    {
        title: 'patisserie', 
        data:[
            {name:'Crepes',code: 'crp',stock: 7, prix:1000,description:'Crepes',category:'desserts',souscategory:'patisserie'},
            {name:'tartes',code: 'trte',stock: 7, prix:1000,description:'Tartes',category:'desserts',souscategory:'patisserie'},
            {name:'Moka',code: 'mk',stock: 7, prix:1000,description:'Moka',category:'desserts',souscategory:'patisserie'},
        ],
    },
    {
        title: 'laitier', 
        data:[
            {name:'Cremes',code: 'crm',stock: 7, prix:1000,description:'Cemes',category:'desserts',souscategory:'laitier'},
            {name:'Cremes renversees au Caramel',code: 'crm-krml',stock: 7, prix:1000,description:' Cremes au Caramel',category:'desserts',souscategory:'laitier'},
            {name:'Glaces ',code: 'glc',stock: 7, prix:1000,description:' Chocolat / Vanille/fraise',category:'desserts',souscategory:'laitier'},
            {name:'Kossam',code: 'ksam',stock: 7, prix:1000,description:'lait fermente',category:'desserts',souscategory:'laitier'},
        ],
    },
    {
        title:'fruit',
        data:[ 
            {name:'Cascade de Fruits ',code: 'cskd-frt',stock: 7, prix:1000,description:'Cascade de Fruits',category:'desserts',souscategory:'fruit'},
            {name:'Farandone de fruits ',code: 'frd-frt',stock: 7, prix:2000,description:'Farandone de Fruits',category:'desserts',souscategory:'fruit'},],
    }
    ];

export const  pdjeuner=[
       { title:'local',
        data:[
            {name:'Beignets-Haricots-Bouillie',code: 'bhb',stock: 7, prix:500,description:'Beignets + Haricot + Bouilie',category:'pdj',souscategory:'local'},
            {name:'Sapghetti Saute',code: 'spgt-ste',stock: 7, prix:600,description:'Spaghetti saute + pain',category:'pdj',souscategory:'local'},
            {name:'Puree d"Avocat',code: 'pree-avcat',stock: 7, prix:600,description:'Puree d"avocat + pain',category:'pdj',souscategory:'local'},
            {name:'Omelette Spaghetti garnie',code: 'omelette',stock: 7, prix:600,description:'Omelette + Spaghetti/haricot',category:'pdj',souscategory:'local'},
            {name:'Bouillon',code: 'bllon',stock: 7, prix:1000,description:'Bouillon de Pattes de Boeuf ou Poisson',category:'pdj',souscategory:'local'},
        ]
       },
       {title :"boissonsChaude",
       data:[
        {name:'Café',code: 'kfe',stock: 7, prix:500,description:'Brioche + Tartine + Boisson chaude',category:'pdj',souscategory:'boissonsChaude'},
        {name:'Nescafe',code: 'nskf',stock: 7, prix:500,description:'Brioche + Tartine + Boisson chaude',category:'pdj',souscategory:'boissonsChaude'},
        {name:'Lait',code: 'lait',stock: 7, prix:500,description:'Brioche + Tartine + Boisson chaude',category:'pdj',souscategory:'boissonsChaude'},
        {name:'Chocolat',code: 'chlt',stock: 7, prix:500,description:'Ovaltine /Matinal',category:'pdj',souscategory:'boissonsChaude'},
       ],

       },
       {
           title : "infusion",
           data :[ {name:'The',code: 'T',stock: 7, prix:500,description:'The menthe ou autres....',category:'pdj',souscategory:'infusion'},
           {name:'Tisane',code: 'Tsane',stock: 7, prix:500,description:'Tisane',category:'pdj',souscategory:'infusion'},
           {name:'Bantou',code: 'btu',stock: 7, prix:500,description:'Bantou',category:'pdj',souscategory:'infusion'},]
       },
       {
           title :"vienoiserie",
           data : [{name:'Pain Choco',code: 'pn-chko',stock: 7, prix:1000,description:'Croissant au Chocolat',category:'pdj',souscategory:'vienoiserie'},
           {name:'palmier',code: 'palmier',stock: 7, prix:1000,description:'pate feuillete saupoudree de sucre',category:'pdj',souscategory:'vienoiserie'},
           {name:'croissant',code: 'crssant',stock: 7, prix:1000,description:'pate feuilletee beurree ',category:'pdj',souscategory:'vienoiserie'},
           {name:'feuilletes ',code: 'feuilletes',stock: 7, prix:1000,description:'pates feuillete ...',category:'pdj',souscategory:'vienoiserie'},],

       },
       {
           title : "etranger",
           data:[ {name:'Classique',code: 'clsq',stock: 7, prix:1000,description:'Brioche + Tartine + Boisson chaude',category:'pdj',souscategory:'etranger'},
           {name:'Continental',code: 'cntl',stock: 7, prix:1500,description:'classique + Omelette ',category:'pdj',souscategory:'etranger'},
           {name:'Chapallo',code: 'chaplo',stock: 7, prix:2000,description:'continental + Boissoon. froide ou fruits',category:'pdj',souscategory:'etranger'},
           {name:'5etoiles',code: 'star',stock: 7, prix:3000,description:'Chapallo + Crudites ',category:'pdj',souscategory:'etranger'}]
       }
    
];
//ORDRE PDJ, ENTREES, PLATS CHAUDS , DESSERTS , RAFFRAICHISSEMENT ...  FAST FOOD...
//export default Keys;
