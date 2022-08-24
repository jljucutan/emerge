/**
 * Address display driven by country
 * 02.05.2020 | jjucutan | created
 * 03.18.2020 | jjucutan | added mail configuration
 * 03.25.2020 | jjucutan | restructure config
 */

const ADDRESS_COUNTRY_CFG = {
  "CHN": [
    {
      "name": "Current_Postal_Code", 
      "label": "Postal",
      "visible": true
    },
    {
      "name": "Current_State",
      "label": "State",
      "visible": true
    },
    {
      "name": "Current_City",
      "label": "City",
      "visible": true
    },
    {
      "name": "Current_Address1", 
      "label": "Address 1",
      "visible": true
    },
    {
      "name": "Current_Address2", 
      "label": "Address 2",
      "visible": true
    },
    {
      "name": "Current_Address3", 
      "label": "Address 3",
      "visible": true
    },
    {
      "name": "Current_Address4", 
      "label": "Address 4",
      "visible": true
    }
  ],
  "DEU": [
    {
      "name": "Current_Address1",
      "label": "Address 1",
      "visible": true
    },
    {
      "name": "Current_Address2", 
      "label": "Address 2",
      "visible": true
    },
    {
      "name": "Current_Address4", 
      "label": "P.O. Box",
      "visible": true
    },
    {
      "name": "Current_Postal_Code", 
      "label": "Postal",
      "visible": true
    },
    {
      "name": "Current_City", 
      "label": "City",
      "visible": true
    },
    {
      "name": "Current_State", 
      "label": "State",
      "visible": true
    },
    {
      "name": "Current_Address3", 
      "label": "",
      "visible": false
    }
  ],
  "FRA": [
    {
      "name": "Current_Address1", 
      "label": "Address 1",
      "visible": true
    },
    {
      "name": "Current_Address2", 
      "label": "Address 2",
      "visible": true
    },
    {
      "name": "Current_Address3", 
      "label": "Address 3",
      "visible": true
    },
    {
      "name": "Current_Postal_Code", 
      "label": "Postal",
      "visible": true
    },
    {
      "name": "Current_City", 
      "label": "City",
      "visible": true
    },
    {
      "name": "Current_Address4", 
      "label": "Post Office",
      "visible": true
    },
    {
      "name": "Current_State", 
      "label": "Department",
      "visible": true
    }
  ],
  "GBR": [
    {
      "name": "Current_Address1", 
      "label": "Address 1",
      "visible": true
    },
    {
      "name": "Current_Address2", 
      "label": "Address 2",
      "visible": true
    },
    {
      "name": "Current_Address3", 
      "label": "Address 3",
      "visible": true
    },
    {
      "name": "Current_City", 
      "label": "City",
      "visible": true
    },
    {
      "name": "Great_Britain_County", 
      "label": "County",
      "visible": true
    },
    {
      "name": "Current_Postal_Code", 
      "label": "Postal Code",
      "visible": true
    },
    {
      "name": "Current_State", 
      "label": "",
      "visible": false
    },
    {
      "name": "Current_Address4", 
      "label": "",
      "visible": false
    }
  ],
  "HKG": [
    {
      "name": "Current_Address1", 
      "label": "Address 1",
      "visible": true
    },
    {
      "name": "Current_Address2", 
      "label": "Address 2",
      "visible": true
    },
    {
      "name": "Current_Address3", 
      "label": "Address 3",
      "visible": true
    },
    {
      "name": "Current_State", 
      "label": "Area Code",
      "visible": true
    },
    {
      "name": "Current_City", 
      "label": "District",
      "visible": true
    },
    {
      "name": "Current_Postal_Code", 
      "label": "",
      "visible": false
    },
    {
      "name": "Current_Address4", 
      "label": "",
      "visible": false
    }
  ],
  "USA": [
    {
      "name": "Current_Address1", 
      "label": "Address 1",
      "visible": true
    },
    {
      "name": "Current_Address2", 
      "label": "Address 2",
      "visible": true
    },
    {
      "name": "Current_Address3", 
      "label": "Address 3",
      "visible": true
    },
    {
      "name": "Current_Address4", 
      "label": "",
      "visible": false
    },
    {
      "name": "Current_City", 
      "label": "City",
      "visible": true
    },
    {
      "name": "Current_State", 
      "label": "State",
      "visible": true
    },
    {
      "name": "Current_Postal_Code", 
      "label": "Postal",
      "visible": true
    }
  ]
};

const MAIL_COUNTRY_CFG = {
  "CHN": [
    {
      "name": "Mail_Postal_Code", 
      "label": "Postal",
      "visible": true
    },
    {
      "name": "Mail_State",
      "label": "State",
      "visible": true
    },
    {
      "name": "Mail_City",
      "label": "City",
      "visible": true
    },
    {
      "name": "Mail_Address1", 
      "label": "Address 1",
      "visible": true
    },
    {
      "name": "Mail_Address2", 
      "label": "Address 2",
      "visible": true
    },
    {
      "name": "Mail_Address3", 
      "label": "Address 3",
      "visible": true
    },
    {
      "name": "Mail_Address4", 
      "label": "Address 4",
      "visible": true
    }
  ],
  "DEU": [
    {
      "name": "Mail_Address1",
      "label": "Address 1",
      "visible": true
    },
    {
      "name": "Mail_Address2", 
      "label": "Address 2",
      "visible": true
    },
    {
      "name": "Mail_Address4", 
      "label": "P.O. Box",
      "visible": true
    },
    {
      "name": "Mail_Postal_Code", 
      "label": "Postal",
      "visible": true
    },
    {
      "name": "Mail_City", 
      "label": "City",
      "visible": true
    },
    {
      "name": "Mail_State", 
      "label": "State",
      "visible": true
    },
    {
      "name": "Mail_Address3", 
      "label": "",
      "visible": false
    }
  ],
  "FRA": [
    {
      "name": "Mail_Address1", 
      "label": "Address 1",
      "visible": true
    },
    {
      "name": "Mail_Address2", 
      "label": "Address 2",
      "visible": true
    },
    {
      "name": "Mail_Address3", 
      "label": "Address 3",
      "visible": true
    },
    {
      "name": "Mail_Postal_Code", 
      "label": "Postal",
      "visible": true
    },
    {
      "name": "Mail_City", 
      "label": "City",
      "visible": true
    },
    {
      "name": "Mail_Address4", 
      "label": "Post Office",
      "visible": true
    },
    {
      "name": "Mail_State", 
      "label": "Department",
      "visible": true
    }
  ],
  "GBR": [
    {
      "name": "Mail_Address1", 
      "label": "Address 1",
      "visible": true
    },
    {
      "name": "Mail_Address2", 
      "label": "Address 2",
      "visible": true
    },
    {
      "name": "Mail_Address3", 
      "label": "Address 3",
      "visible": true
    },
    {
      "name": "Mail_City", 
      "label": "City",
      "visible": true
    },
    {
      "name": "Mailing_Address_County", 
      "label": "County",
      "visible": true
    },
    {
      "name": "Mail_Postal_Code", 
      "label": "Postal Code",
      "visible": true
    },
    {
      "name": "Mail_State", 
      "label": "",
      "visible": false
    },
    {
      "name": "Mail_Address4", 
      "label": "",
      "visible": false
    }
  ],
  "HKG": [
    {
      "name": "Mail_Address1", 
      "label": "Address 1",
      "visible": true
    },
    {
      "name": "Mail_Address2", 
      "label": "Address 2",
      "visible": true
    },
    {
      "name": "Mail_Address3", 
      "label": "Address 3",
      "visible": true
    },
    {
      "name": "Mail_State", 
      "label": "Area Code",
      "visible": true
    },
    {
      "name": "Mail_City", 
      "label": "District",
      "visible": true
    },
    {
      "name": "Mail_Postal_Code", 
      "label": "",
      "visible": false
    },
    {
      "name": "Mail_Address4", 
      "label": "",
      "visible": false
    }
  ],
  "USA": [
    {
      "name": "Mail_Address1", 
      "label": "Address 1",
      "visible": true
    },
    {
      "name": "Mail_Address2", 
      "label": "Address 2",
      "visible": true
    },
    {
      "name": "Mail_Address3", 
      "label": "Address 3",
      "visible": true
    },
    {
      "name": "Mail_Address4", 
      "label": "",
      "visible": false
    },
    {
      "name": "Mail_City", 
      "label": "City",
      "visible": true
    },
    {
      "name": "Mail_State", 
      "label": "State",
      "visible": true
    },
    {
      "name": "Mail_Postal_Code", 
      "label": "Postal",
      "visible": true
    }
  ]
};
