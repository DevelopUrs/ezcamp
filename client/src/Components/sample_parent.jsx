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
      }
    ]
  }
];

export default sampleParent;