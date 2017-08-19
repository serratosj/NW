module.exports = { 
  'users': {
  loginadmin: 'admin',
  passwordadmin: 'admin',
  loginpd: 'ArthurAnderson',
  passwordpd: 'Pa5sword',
  loginc: 'CherinChoi',
  passwordc: 'Miji5645',

},

'facility': {
  name: 'Bradley H.', 
  address: 'Wallaby 569',
  city: 'Seattle',
  state: 'Washington',
  zipCode: '94203',
  phoneNumber: '(541) 754-3010',
  programDirector: 'Arthur',
  altername: 'Facility Duck',
  address2: 'Eco Park 214',
  city2: 'Denver',
  state2: 'Colorado',
  programDirector2: 'Sara'
},


'program': {
  name: 'Nicolas', 
  lastname: 'Jaar',
  email: 'ecuan@tiempodevelopment.com',
  facility: 'Bradley H.'
},

'counselor': {
  name: 'Cherin', 
  lastname: 'Choi',
  email: 'ecuan@tiempodevelopment.com',
  facility: 'Bradley H.',
  notes: 'the life pursuit'
},

'patient': {
  name: 'Alanna', 
  lastname: 'Whittaker',
  username: 'alanna',
  email: 'ecuan@tiempodevelopment.com',
  birthDate: '1989-01-17',
  condition: 'alcohol',
  payer: 'Medicaid',
  programType: 'Residential',
  gender:'Female',
  facility: 'Bradley H.',
},

'patient_pd': {
  name: 'Jennifer', 
  lastname: 'Hawkins',
  username: 'jenniferh',
  email: 'ecuan@tiempodevelopment.com',
  birthDate: '1989-01-17',
  condition: 'alcohol',
  payer: 'Medicaid',
  programType: 'Residential',
  gender:'Female',
  facility: 'Bradley H.',
  counselor: 'Cherin Choi'
  },

  'patient_c': {
  name: 'Madison', 
  lastname: 'Williams',
  userName: 'madisonw',
  email: 'ecuan@tiempodevelopment.com',
  birthDate: '1989-01-17',
  condition: 'cannabis',
  payer: 'Medicaid',
  programType: 'Residential',
  gender:'Female',
  facility: 'Bradley H.',
  counselor: 'Cherin Choi'
  },

'events': {
  programType: 'Residential', 
  title: 'Event - Happy Life',
  initialHour: 8,
  finalHour: 10
}, 

'events_edit': {
  programType: 'Residential', 
  title: 'Event - Happy Day',
  initialHour: 9,
  finalHour: 11
}, 

'goals': {
  programType: 'Residential', 
  title: 'Goal - Happy Day',
  description: 'This is a goal created with Nightwatch.js',
  milestone: 'First Milestone',
  title2: 'Second Goal',
  description2: 'This is a goal created with Nightwatch.js and then edited',
  milestone2: 'Second Milestone'
  
}

};


