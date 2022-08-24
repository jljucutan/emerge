/**
 * SERVICES-39739 | 04.23.2020 | standard hours configuration
 *
 * LEGEND
 * 01 = Chichago
 * 02 = Washington
 * 03 = Denver
 * 04 = Los Angles
 * 05 = New York
 * 06 = London
 * 07 = San Francisco
 * 08 = Munich
 * 09 = Hong Kong
 * 10 = Palo Alto
 * 11 = Shanghai
 * 12 = Beijing
 * 14 = Houston
 * 15 = Boston
 * 16 = Dallas
 * 17 = Paris
 */

const STANDARD_HOURS_CONFIG = {
  "01": {
      "equals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 40
      },
      "notEquals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 35
      }
  },
  "02": {
      "equals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 40
      },
      "notEquals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 37.5
      }
  },
  "04": {
      "includeAll": {
        "standardHours": 37.5
      }
  },
  "05": {
      "includeAll": {
        "standardHours": 35
      }
  },
  "06": {
      "equals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 40
      },
      "notEquals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 35
      }
  },
  "07": {
      "equals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 40
      },
      "notEquals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 37.5
      }
  },
  "08": {
      "includeAll": {
        "standardHours": 40
      }
  },
  "09": {
      "includeAll": {
        "standardHours": 40
      }
  },
  "10": {
      "equals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 40
      },
      "notEquals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 37.5
      }
  },
  "11": {
      "includeAll": {
        "standardHours": 40
      }
  },
  "12": {
      "includeAll": {
        "standardHours": 40
      }
  },
  "14": {
      "equals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 40
      },
      "notEquals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 37.5
      }
  },
  "15": {
      "includeAll": {
        "standardHours": 35
      }
  },
  "16": {
      "equals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 40
      },
      "notEquals": {
        "practiceGroups": ['10014', '10219', '10220', '10033'],
        "standardHours": 37.5
      }
  },
  "17": {
      "includeAll": {
        "standardHours": 35
      }
  }
};
