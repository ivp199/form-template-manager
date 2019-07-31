export const inputTypeOptions = [
  {
    text: 'text',
    validations: ['required', 'alphabets'],
  },
  {
    text: 'number',
    validations: ['required'],
  },
  {
    text: 'email',
    validations: ['required'],
  },
  {
    text: 'number',
    validations: ['required'],
  },
  {
    text: 'checkbox',
    hasOptions: true,
    validations: ['required'],
  },
  {
    text: 'radio',
    hasOptions: true,
    validations: ['required'],
  },
  {
    text: 'image',
    validations: ['required'],
  },
  {
    text: 'date-time',
    validations: ['required'],
  }
]

export const templates = [
  {
    "id": 1,
    "name": "neural-net",
    "displayName": "Neural net",
    "description": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    "fields": [
      {
        "fieldName": "mobile_number",
        "displayName": "Mobile number",
        "type": {
          "text": "number"
        }
      },
      {
        "fieldName": "gender",
        "displayName": "Gender",
        "type": {
          "text": "radio",
          "hasOptions": true
        },
        "options": [
          {"name": "Male", "value": "male"},
          {"name": "Female", "value": "female"},
        ]
      },
      {
        "fieldName": "last_name",
        "displayName": "Last name",
        "type": {
          "text": "text"
        }
      },
      {
        "fieldName": "age",
        "displayName": "Age",
        "type": {
          "text": "number"
        }
      }
    ]
  },
  {
    "id": 2,
    "name": "infrastructure",
    "displayName": "Infrastructure",
    "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    "fields": [
      {
        "fieldName": "last_name",
        "displayName": "Last name",
        "type": {
          "text": "text"
        }
      },
      {
        "fieldName": "options",
        "displayName": "Options",
        "type": {
          "text": "checkbox",
          "hasOptions": true
        },
        "options": [
          {"name": "Option 1", "value": "opt1"},
          {"name": "Option 2", "value": "opt2"},
        ]
      },
      {
        "fieldName": "first_name",
        "displayName": "First name",
        "type": {
          "text": "text"
        }
      },
      {
        "fieldName": "first_name",
        "displayName": "First name",
        "type": {
          "text": "text"
        }
      }
    ]
  },
  {
    "id": 3,
    "name": "re-engineered",
    "displayName": "Re engineered",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "fields": [
      {
        "fieldName": "gender",
        "displayName": "Gender",
        "type": {
          "text": "radio",
          "hasOptions": true
        },
        "options": [
          {"name": "Male", "value": "male"},
          {"name": "Female", "value": "female"},
        ]
      },
      {
        "fieldName": "age",
        "displayName": "Age",
        "type": {
          "text": "number"
        }
      },
      {
        "fieldName": "options",
        "displayName": "Options",
        "type": {
          "text": "checkbox",
          "hasOptions": true
        },
        "options": [
          {"name": "Option 1", "value": "opt1"},
          {"name": "Option 2", "value": "opt2"},
        ]
      },
      {
        "fieldName": "age",
        "displayName": "Age",
        "type": {
          "text": "number"
        }
      }
    ]
  },
  {
    "id": 4,
    "name": "leverage",
    "displayName": "Leverage",
    "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    "fields": [
      {
        "fieldName": "last_name",
        "displayName": "Last name",
        "type": {
          "text": "text"
        }
      },
      {
        "fieldName": "last_name",
        "displayName": "Last name",
        "type": {
          "text": "text"
        }
      },
      {
        "fieldName": "options",
        "displayName": "Options",
        "type": {
          "text": "checkbox",
          "hasOptions": true
        },
        "options": [
          {"name": "Option 1", "value": "opt1"},
          {"name": "Option 2", "value": "opt2"},
        ]
      },
      {
        "fieldName": "age",
        "displayName": "Age",
        "type": {
          "text": "number"
        }
      }
    ]
  },
  {
    "id": 5,
    "name": "open-system",
    "displayName": "Open system",
    "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "fields": [
      {
        "fieldName": "age",
        "displayName": "Age",
        "type": {
          "text": "number"
        }
      },
      {
        "fieldName": "last_name",
        "displayName": "Last name",
        "type": {
          "text": "text"
        }
      },
      {
        "fieldName": "first_name",
        "displayName": "First name",
        "type": {
          "text": "text"
        }
      },
      {
        "fieldName": "gender",
        "displayName": "Gender",
        "type": {
          "text": "radio",
          "hasOptions": true
        },
        "options": [
          {"name": "Male", "value": "male"},
          {"name": "Female", "value": "female"},
        ]
      },
      {
        "fieldName": "first_name",
        "displayName": "First name",
        "type": {
          "text": "text"
        }
      }
    ]
  },
  {
    "id": 6,
    "name": "pricing-structure",
    "displayName": "Pricing structure",
    "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "fields": [
      {
        "fieldName": "age",
        "displayName": "Age",
        "type": {
          "text": "number"
        }
      },
      {
        "fieldName": "mobile_number",
        "displayName": "Mobile number",
        "type": {
          "text": "number"
        }
      },
      {
        "fieldName": "first_name",
        "displayName": "First name",
        "type": {
          "text": "text"
        }
      }
    ]
  },
  {
    "id": 7,
    "name": "frame",
    "displayName": "Frame",
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "fields": [
      {
        "fieldName": "gender",
        "displayName": "Gender",
        "type": {
          "text": "radio",
          "hasOptions": true
        },
        "options": [
          {"name": "Male", "value": "male"},
          {"name": "Female", "value": "female"},
        ]
      },
      {
        "fieldName": "options",
        "displayName": "Options",
        "type": {
          "text": "checkbox",
          "hasOptions": true
        },
        "options": [
          {"name": "Option 1", "value": "opt1"},
          {"name": "Option 2", "value": "opt2"},
        ]
      },
      {
        "fieldName": "age",
        "displayName": "Age",
        "type": {
          "text": "number"
        }
      },
      {
        "fieldName": "last_name",
        "displayName": "Last name",
        "type": {
          "text": "text"
        }
      }
    ]
  },
  {
    "id": 8,
    "name": "knowledge-base",
    "displayName": "Knowledge base",
    "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "fields": [
      {
        "fieldName": "mobile_number",
        "displayName": "Mobile number",
        "type": {
          "text": "number"
        }
      },
      {
        "fieldName": "gender",
        "displayName": "Gender",
        "type": {
          "text": "radio",
          "hasOptions": true
        },
        "options": [
          {"name": "Male", "value": "male"},
          {"name": "Female", "value": "female"},
        ]
      },
      {
        "fieldName": "last_name",
        "displayName": "Last name",
        "type": {
          "text": "text"
        }
      }
    ]
  },
  {
    "id": 9,
    "name": "intermediate",
    "displayName": "Intermediate",
    "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    "fields": [
      {
        "fieldName": "age",
        "displayName": "Age",
        "type": {
          "text": "number"
        }
      },
      {
        "fieldName": "last_name",
        "displayName": "Last name",
        "type": {
          "text": "text"
        }
      },
      {
        "fieldName": "gender",
        "displayName": "Gender",
        "type": {
          "text": "radio",
          "hasOptions": true
        },
        "options": [
          {"name": "Male", "value": "male"},
          {"name": "Female", "value": "female"},
        ]
      },
      {
        "fieldName": "age",
        "displayName": "Age",
        "type": {
          "text": "number"
        }
      },
      {
        "fieldName": "age",
        "displayName": "Age",
        "type": {
          "text": "number"
        }
      }
    ]
  },
  {
    "id": 10,
    "name": "success",
    "displayName": "Success",
    "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    "fields": [
      {
        "fieldName": "gender",
        "displayName": "Gender",
        "type": {
          "text": "radio",
          "hasOptions": true
        },
        "options": [
          {"name": "Male", "value": "male"},
          {"name": "Female", "value": "female"},
        ]
      },
      {
        "fieldName": "first_name",
        "displayName": "First name",
        "type": {
          "text": "text"
        }
      },
      {
        "fieldName": "gender",
        "displayName": "Gender",
        "type": {
          "text": "radio",
          "hasOptions": true
        },
        "options": [
          {"name": "Male", "value": "male"},
          {"name": "Female", "value": "female"},
        ]
      },
      {
        "fieldName": "last_name",
        "displayName": "Last name",
        "type": {
          "text": "text"
        }
      }
    ]
  }
];