const sampleParent = [
  {
    id: 1,
    campName: 'Adventure Camp',
    parents: [
      {
        parentId: 10,
        firstName: 'Bob',
        lastName: 'Smith',
        profileImageURL: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
        email: 'bob.smith@parent.com',
        children: [
          {
            childId: 20,
            firstName: 'Howard',
            lastName: 'Smith',
            email: 'howard.smith@camper.com',
            profileImageURL: 'https://images.unsplash.com/photo-1571210862729-78a52d3779a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2lkc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
            allergies: ['peanuts'],
            counselor: 30,
            forms: [
              {
                type: 'medical',
                file: 'something.pdf',
              }
            ]
          }
        ]
      },
      {
        parentId: 11,
        firstName: 'Georgia',
        lastName: 'Lane',
        profileImageURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        email: 'georgia.lane@parent.com',
        children: [
          {
            childId: 21,
            firstName: 'Dale',
            lastName: 'Lane',
            email: 'dale.lane@camper.com',
            profileImageURL: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
            allergies: ['dairy'],
            counselor: 31,
            forms: [
              {
                type: 'medical',
                file: 'something2.pdf',
              }
            ]
          }
        ]
      },
      {
        parentId: 12,
        firstName: 'Greg',
        lastName: 'Sharp',
        profileImageURL: 'https://images.unsplash.com/photo-1482235225574-c37692835cf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
        email: 'greg.sharp@parent.com',
        children: [
          {
            childId: 22,
            firstName: 'Shari',
            lastName: 'Sharp',
            email: 'shari.sharp@camper.com',
            profileImageURL: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=60',
            allergies: ['peanuts'],
            counselor: 30,
            forms: [
              {
                type: 'medical',
                file: 'something.pdf',
              }
            ]
          }
        ]
      },
      {
        parentId: 13,
        firstName: 'Rand',
        lastName: 'Arnwine',
        profileImageURL: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
        email: 'rand.arnwine@parent.com',
        children: [
          {
            childId: 23,
            firstName: 'Matt',
            lastName: 'Arnwine',
            email: 'matt.arnwine@camper.com',
            profileImageURL: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1304&q=60',
            allergies: ['none'],
            counselor: 31,
            forms: [
              {
                type: 'medical',
                file: 'something.pdf',
              }
            ]
          }
        ]
      },
      {
        parentId: 14,
        firstName: 'Derrick',
        lastName: 'McKinley',
        profileImageURL: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
        email: 'derrick.mckinley@parent.com',
        children: [
          {
            childId: 24,
            firstName: 'Steve',
            lastName: 'McKinley',
            email: 'steve.mckinley@camper.com',
            profileImageURL: 'https://images.unsplash.com/photo-1490168040734-2226e72962f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
            allergies: ['gluten'],
            counselor: 31,
            forms: [
              {
                type: 'medical',
                file: 'something.pdf',
              }
            ]
          }
        ]
      },
      {
        parentId: 15,
        firstName: 'Maggie',
        lastName: 'Johnson',
        profileImageURL: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
        email: 'maggie.johnson@parent.com',
        children: [
          {
            childId: 25,
            firstName: 'Hunter',
            lastName: 'Johnson',
            email: 'hunter.johnson@camper.com',
            profileImageURL: 'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60',
            allergies: ['gluten'],
            counselor: 30,
            forms: [
              {
                type: 'medical',
                file: 'something.pdf',
              }
            ]
          }
        ]
      },
      {
        parentId: 16,
        firstName: 'Frank',
        lastName: 'Holden',
        profileImageURL: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        email: 'frank.holden@parent.com',
        children: [
          {
            childId: 26,
            firstName: 'Suzie',
            lastName: 'Holden',
            email: 'suzie.holden@camper.com',
            profileImageURL: 'https://images.unsplash.com/photo-1497881807663-38b9a95b7192?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGtpZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            allergies: ['peanuts'],
            counselor: 32,
            forms: [
              {
                type: 'medical',
                file: 'something.pdf',
              }
            ]
          }
        ]
      }
    ]
  }
];

export default sampleParent;