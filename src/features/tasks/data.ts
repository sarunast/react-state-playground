const TASKS = [
  {
    id: '5e5435c520b1642d658c8ea7',
    isComplete: false,
    description: 'aute exercitation amet do fugiat aliqua ea labore ex fugiat',
  },
  {
    id: '5e5435c595f6bed722dbc74b',
    isComplete: true,
    description: 'nisi quis sunt adipisicing incididunt laborum magna amet velit ad',
  },
  {
    id: '5e5435c5426e89679b73bd65',
    isComplete: false,
    description: 'anim voluptate pariatur eu non commodo nisi est velit commodo',
  },
  {
    id: '5e5435c5a9e157c0b5cd812c',
    isComplete: true,
    description: 'officia cillum laborum eu dolor veniam magna excepteur id nisi',
  },
  {
    id: '5e5435c580b603fc2f7a52e1',
    isComplete: false,
    description: 'qui mollit proident ipsum deserunt est non consequat nisi sit',
  },
  {
    id: '5e5435c5563312fb05336e09',
    isComplete: true,
    description: 'ipsum consectetur ex minim labore ad eu laborum ea dolore',
  },
  {
    id: '5e5435c5a471b20045fe048d',
    isComplete: true,
    description: 'cillum aliqua ut reprehenderit minim ut et et cillum proident',
  },
  {
    id: '5e5435c57672ce5b315ff934',
    isComplete: false,
    description: 'proident nulla id deserunt fugiat do ea et velit incididunt',
  },
  {
    id: '5e5435c52f87ebcedae30b56',
    isComplete: true,
    description: 'nostrud Lorem sint voluptate ut proident mollit sit velit dolor',
  },
  {
    id: '5e5435c53dbee21522ebdb11',
    isComplete: false,
    description: 'deserunt Lorem reprehenderit cillum ipsum elit laboris reprehenderit aute velit',
  },
  {
    id: '5e5435c5d1d534bbd3e298c5',
    isComplete: true,
    description: 'cillum officia eiusmod irure dolor ad excepteur nulla incididunt adipisicing',
  },
  {
    id: '5e5435c57e6f07859ab13577',
    isComplete: true,
    description: 'anim Lorem ea voluptate ullamco est deserunt excepteur aute elit',
  },
  {
    id: '5e5435c597ace6ef97cce53c',
    isComplete: false,
    description: 'aute culpa minim adipisicing ut sunt elit ipsum adipisicing ipsum',
  },
  {
    id: '5e5435c5f9b75509cc90cc07',
    isComplete: false,
    description: 'est magna amet velit incididunt ut excepteur Lorem in Lorem',
  },
  {
    id: '5e5435c50ae675d763d05b84',
    isComplete: true,
    description: 'nulla aliqua voluptate ullamco reprehenderit ex eiusmod qui officia ullamco',
  },
  {
    id: '5e5435c5ffbe0f44748de8f3',
    isComplete: true,
    description: 'qui do sint officia dolore consectetur cupidatat qui Lorem aliquip',
  },
  {
    id: '5e5435c502bca3c0bcd10f95',
    isComplete: true,
    description: 'nostrud enim pariatur magna enim nisi quis ad duis velit',
  },
  {
    id: '5e5435c54661679956edfe17',
    isComplete: false,
    description: 'minim aliqua dolor anim ad reprehenderit sunt id quis veniam',
  },
  {
    id: '5e5435c54bc3053cd18ef09b',
    isComplete: false,
    description: 'laborum ea excepteur nisi duis cupidatat nulla ut sit ea',
  },
  {
    id: '5e5435c5170604b366f78dde',
    isComplete: false,
    description: 'minim in amet ut commodo commodo sit incididunt et reprehenderit',
  },
]

export type TasksType = typeof TASKS

export const getTasks = (url: string) =>
  new Promise<typeof TASKS>((resolve, reject) => {
    // reject(new Error('Fail'))
    setTimeout(() => resolve(TASKS), 500)
  })

export default TASKS
