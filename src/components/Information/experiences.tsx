const nova = process.env.PUBLIC_URL + '/imgs/nova.png';
const bestpick = process.env.PUBLIC_URL + '/imgs/bestpick.jpg';
const is = process.env.PUBLIC_URL + '/imgs/is.png';
const lexicon = process.env.PUBLIC_URL + '/imgs/lexicon.png';
const tipping = process.env.PUBLIC_URL + '/imgs/tipping.png';
const codeboxx = process.env.PUBLIC_URL + '/imgs/codeboxx.jpeg';

const ExperienceDetails = [
    {
      name: 'Codeboxx',
      location: 'Bangkok, Thailand',
      position: 'Full-stack Developer',
      avatar2x: codeboxx,
      description: `Building, integrating APIs and maintaining web applications.`,
      durations: {
        start: {
            month: 'Sep',
            year: '2024'
        },
        end: {
            present: true
        }
      },
      stacks: ['NextJs', 'Typescript', 'Typo3', 'Shopify']
    },
    {
      name: 'Best Pick F&B',
      location: 'Ho Chi Minh, Vietnam',
      position: 'Full-stack Developer',
      avatar2x: bestpick,
      description: `Building and maintaining transactions and master data of users.
                    Projects include managing APIs with different providers.`,
      durations: {
        start: {
            month: 'May',
            year: '2023'
        },
        end: {
            month: 'Aug',
            year: '2024'
        }
      },
      stacks: ['NodeJs', 'React', 'MySql', 'MongoDB', 'Git', 'Docker', 'Redux']
    },
    {
      name: 'Lexicon',
      location: 'Bangkok, Thailand',
      position: 'Full-stack Developer',
      avatar2x: lexicon,
      description: `Working on few projects for big clients such as CPN, British Club Bangkok.
                    Most projects are cmms (web - applications) for instance,
                    Booking system, form and management systems.`,
      durations: {
        start: {
            month: 'Apr',
            year: '2022'
        },
        end: {
            month: 'Jun',
            year: '2023'
        }
      },
      stacks: ['PHP', 'Laravel', 'JavaScript', 'MySql', 'Wordpress', 'Git']
    },
    {
      name: 'Code Play (Tipping Point Solution)',
      location: 'Bangkok, Thailand',
      position: 'Full-stack Developer',
      avatar2x: tipping,
      description: `External projects leaned towards supporting e-commerce systems
                    and boosting reaches, engagements and likes of small businesses
                    and influencers. The projects included an e-commerce platform
                    and payment systems.`,
      durations: {
        start: {
            month: 'Oct',
            year: '2021'
        },
        end: {
            month: 'Apr',
            year: '2022'
        }
      },
      stacks: ['PHP', 'Laravel', 'JavaScript', 'MySql', 'jQuery', 'Git']
    },
    {
      name: 'IS Software',
      location: 'Bangkok, Thailand',
      position: 'Full-stack Developer',
      avatar2x: is,
      description: `Most projects were CMMS machine - related managements, 
                    transactions, budget forecasting and management and employee KPI calculation`,
      durations: {
        start: {
            month: 'Aug',
            year: '2020'
        },
        end: {
            month: 'Oct',
            year: '2021'
        }
      },
      stacks: ['PHP', 'JavaScript', 'MySql', 'jQuery']
    },
    {
      name: 'Nova Concepts',
      location: 'Brooklyn, New York',
      position: '3D Visualizer',
      avatar2x: nova,
      description: 'Produced 3D renders and models for marketing upcoming architectural projects as an intern.',
      durations: {
        start: {
            month: 'Oct',
            year: '2019'
        },
        end: {
            month: 'Aug',
            year: '2020'
        }
      },
      stacks: ['3Ds Max', 'Corona', 'Photoshop'],
    },
  ];

export default ExperienceDetails