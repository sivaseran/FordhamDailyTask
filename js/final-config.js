import {db,collection,doc,getDoc,getDocs,setDoc,writeBatch,serverTimestamp} from './firebase.js';
import {ensureFordhamSetup} from './fordham-setup.js';

export const FINAL_SETUP_VERSION='fd-1.0.0-2026-11-07';
// Fordham does not use a Sunday evening rotation. Empty list = feature off.
export const SUNDAY_ROTATION_ANCHOR='9999-12-31';
export const SUNDAY_ROTATION=[];

export const FINAL_WEEKLY_TASKS=[
  {
    "id": "fd01",
    "taskName": "Refill cigarette display & face up",
    "sortOrder": 1,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "06:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd02",
    "taskName": "Check out of date (sandwich chiller, eggs, bread)",
    "sortOrder": 2,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "06:30"
          }
        ]
      }
    }
  },
  {
    "id": "fd03",
    "taskName": "Wipe and tidy coffee machine (fill up if necessary)",
    "sortOrder": 3,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd04",
    "taskName": "Face up drinks, crisps, milk & sandwiches",
    "sortOrder": 4,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      }
    }
  },
  {
    "id": "fd05",
    "taskName": "Wash up the bakery trays and clean oven & kitchen area",
    "sortOrder": 5,
    "photoRequired": true,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S1",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "05:30"
          }
        ]
      }
    }
  },
  {
    "id": "fd06",
    "taskName": "Restock bunkers",
    "sortOrder": 6,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:00"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd07",
    "taskName": "Face up bunkers",
    "sortOrder": 7,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:00"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:00"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:00"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:00"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd08",
    "taskName": "Top up gloves, towels & check bins (forecourt)",
    "sortOrder": 8,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd09",
    "taskName": "Pump cleaning, pick up litter (coal area as well)",
    "sortOrder": 9,
    "photoRequired": true,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:30"
          }
        ]
      }
    }
  },
  {
    "id": "fd10",
    "taskName": "Full filling of chocolate & hanging bags from back stock – order",
    "sortOrder": 10,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "15:00"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "10:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd11",
    "taskName": "Full filling of crisps from back stock – order",
    "sortOrder": 11,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "15:00"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff6",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "14:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd12",
    "taskName": "Fill up wines & multipack beer – order",
    "sortOrder": 12,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff6",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd13",
    "taskName": "Fill up drinks & beer",
    "sortOrder": 13,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "09:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "11:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd14",
    "taskName": "Face up entire shop",
    "sortOrder": 14,
    "photoRequired": true,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "11:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd15",
    "taskName": "Sweep main shop floor & entrance",
    "sortOrder": 15,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "11:30"
          }
        ]
      }
    }
  },
  {
    "id": "fd16",
    "taskName": "Clean toilet and tidy up the stock room",
    "sortOrder": 16,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "12:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S2",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "11:30"
          }
        ]
      }
    }
  },
  {
    "id": "fd17",
    "taskName": "Face up drinks, crisps & chilled food",
    "sortOrder": 17,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "14:00"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "14:00"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "14:00"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "14:00"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "15:00"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff7",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "14:00"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff6",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "16:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd18",
    "taskName": "Order",
    "sortOrder": 18,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff4",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "14:00"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "14:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd19",
    "taskName": "Hot food unit cleaning",
    "sortOrder": 19,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "16:00"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "16:00"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "16:00"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "16:00"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "16:00"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff7",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "16:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd20",
    "taskName": "Clean the rollover cabinet",
    "sortOrder": 20,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "17:00"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "17:00"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "17:00"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "17:00"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "17:00"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S3",
            "assigneeId": "staff7",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "17:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd21",
    "taskName": "Newspaper wrap-up",
    "sortOrder": 21,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "19:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd22",
    "taskName": "Clean the coffee machine and empty the coffee bin",
    "sortOrder": 22,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "19:30"
          }
        ]
      }
    }
  },
  {
    "id": "fd23",
    "taskName": "Fill up drinks & beer",
    "sortOrder": 23,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff7",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff6",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "18:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd24",
    "taskName": "Face up the entire shop",
    "sortOrder": 24,
    "photoRequired": true,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff7",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff6",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "19:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd25",
    "taskName": "Tidy up the store room",
    "sortOrder": 25,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "19:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd26",
    "taskName": "Sweep & mop the floor",
    "sortOrder": 26,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff2",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff7",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "20:00"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S4",
            "assigneeId": "staff6",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "19:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd27",
    "taskName": "Check out of date",
    "sortOrder": 27,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:00"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:00"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:00"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:00"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:00"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:00"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:00"
          }
        ]
      }
    }
  },
  {
    "id": "fd28",
    "taskName": "Drinks top up (top view)",
    "sortOrder": 28,
    "photoRequired": true,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Mon": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:30"
          }
        ]
      },
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:30"
          }
        ]
      },
      "Wed": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:30"
          }
        ]
      },
      "Thu": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:30"
          }
        ]
      },
      "Sat": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff5",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:30"
          }
        ]
      }
    }
  },
  {
    "id": "fd29",
    "taskName": "Wipe shelf strips with hot water (entire shop)",
    "sortOrder": 29,
    "photoRequired": false,
    "temperatureRequired": false,
    "recurring": false,
    "schedule": {
      "Tue": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff1",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:30"
          }
        ]
      },
      "Fri": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:30"
          }
        ]
      },
      "Sun": {
        "versions": [
          {
            "effectiveFrom": "2026-11-07",
            "active": true,
            "slotId": "S5",
            "assigneeId": "staff3",
            "assigneeKey": "",
            "legacyAssignee": "",
            "effortMinutes": 10,
            "sourceTime": "21:30"
          }
        ]
      }
    }
  }
];

async function deleteCollection(name){
  const snap=await getDocs(collection(db,name));
  const docs=[...snap.docs];
  for(let i=0;i<docs.length;i+=350){
    const batch=writeBatch(db);
    docs.slice(i,i+350).forEach(d=>batch.delete(d.ref));
    await batch.commit();
  }
  return docs.length;
}

async function seedTemplatesIfEmpty(){
  const existing=await getDocs(collection(db,'weeklyTemplates'));
  if(!existing.empty) return false;

  for(let i=0;i<FINAL_WEEKLY_TASKS.length;i+=200){
    const batch=writeBatch(db);
    for(const t of FINAL_WEEKLY_TASKS.slice(i,i+200)){
      const {id,...payload}=t;
      batch.set(doc(db,'weeklyTemplates',id),{
        ...payload,
        updatedAt:serverTimestamp(),
        updatedByUserId:'system',
        updatedByName:'Fordham setup'
      });
    }
    await batch.commit();
  }
  return true;
}

export async function ensureFinalV36Schedule(){
  await ensureFordhamSetup();
  const appRef=doc(db,'system','app');
  const appSnap=await getDoc(appRef);
  if(appSnap.exists() && appSnap.data()?.finalSetupVersion===FINAL_SETUP_VERSION){
    return {applied:false,seededTemplates:false};
  }

  // LIVE-SAFE startup: never replace weeklyTemplates and never delete dailyTasks,
  // shiftCover or shiftCoverRules. If a completely empty installation is opened,
  // restore only the template; otherwise current Firebase data remains authoritative.
  const seededTemplates=await seedTemplatesIfEmpty();

  await setDoc(appRef,{
    finalSetupVersion:FINAL_SETUP_VERSION,
    finalSetupAppliedAt:serverTimestamp(),
    sundayRotationAnchor:SUNDAY_ROTATION_ANCHOR,
    sundayRotationStaff:SUNDAY_ROTATION,
    finalTaskCount:FINAL_WEEKLY_TASKS.length,
    liveDataPreserved:true
  },{merge:true});

  return {applied:true,seededTemplates,taskCount:FINAL_WEEKLY_TASKS.length};
}
