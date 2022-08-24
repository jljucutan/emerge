/**
 * Action reason mapping
 * 02.26.2020 | jjucutan | added job codes to NPS and RPL
 */
 const ACTION_REASON_MAP = [
  {
    "reasonCode": "NEI",
    "reasonCodeDesc": "New Hire",
    "action": "Hire",
    "actionCode": "HIR",
    "jobCode": [100000, 100001, 100118],
    "jobCodeType": "excludes"
  },
  {
    "reasonCode": "NPS",
    "reasonCodeDesc": "New Position",
    "action": "Hire",
    "actionCode": "HIR",
    "jobCode": [100000, 100001, 100118, 100326, 101173, 100704],
    "jobCodeType": "excludes"
  },
  {
    "reasonCode": "RPL",
    "reasonCodeDesc": "Replacement",
    "action": "Hire",
    "actionCode": "HIR",
    "jobCode": [100000, 100001, 100118, 100326, 101173, 100704],
    "jobCodeType": "excludes"
  },
  {
    "reasonCode": "LAT",
    "reasonCodeDesc": "Lateral Hire",
    "action": "Hire",
    "actionCode": "HIR",
    "jobCode": [100000, 100001, 100118],
    "jobCodeType": "excludes"
  },
  {
    "reasonCode": "PLT",
    "reasonCodeDesc": "Partner - Lateral Hire",
    "action": "Hire",
    "actionCode": "HIR",
    "jobCode": [100000, 100001, 100118],
    "jobCodeType": "includes"
  },
  {
    "reasonCode": "LPS",
    "reasonCodeDesc": "Lateral Hire Practice Support",
    "action": "Hire",
    "actionCode": "HIR",
    "jobCode": [],
    "jobCodeType": "all"
  },
  {
    "reasonCode": "SEA",
    "reasonCodeDesc": "Seasonal",
    "action": "Hire",
    "actionCode": "HIR",
    "jobCode": [],
    "jobCodeType": "all"
  },
  {
    "reasonCode": "STP",
    "reasonCodeDesc": "Stipend/PILI",
    "action": "Hire",
    "actionCode": "HIR",
    "jobCode": [100328, 100329],
    "jobCodeType": "includes"
  },
  {
    "reasonCode": "REH",
    "reasonCodeDesc": "Rehire",
    "action": "Rehire",
    "actionCode": "REH",
    "jobCode": [100000, 100001, 100118],
    "jobCodeType": "excludes"
  },
  {
    "reasonCode": "NPS",
    "reasonCodeDesc": "New Position",
    "action": "Rehire",
    "actionCode": "REH",
    "jobCode": [100000, 100001, 100118, 100326, 101173, 100704],
    "jobCodeType": "excludes"
  },
  {
    "reasonCode": "RPL",
    "reasonCodeDesc": "Replacement",
    "action": "Rehire",
    "actionCode": "REH",
    "jobCode": [100000, 100001, 100118, 100326, 101173, 100704],
    "jobCodeType": "excludes"
  },
  {
    "reasonCode": "LAT",
    "reasonCodeDesc": "Lateral Hire",
    "action": "Rehire",
    "actionCode": "REH",
    "jobCode": [100000, 100001, 100118],
    "jobCodeType": "excludes"
  },
  {
    "reasonCode": "PLT",
    "reasonCodeDesc": "Partner - Lateral Hire",
    "action": "Rehire",
    "actionCode": "REH",
    "jobCode": [100000, 100001, 100118],
    "jobCodeType": "includes"
  },
  {
    "reasonCode": "SEA",
    "reasonCodeDesc": "Seasonal",
    "action": "Rehire",
    "actionCode": "REH",
    "jobCode": [],
    "jobCodeType": "all"
  },
  {
    "reasonCode": "STP",
    "reasonCodeDesc": "Stipend/PILI",
    "action": "Rehire",
    "actionCode": "REH",
    "jobCode": [100328, 100329],
    "jobCodeType": "includes"
  }
];
