export type WorkItem = {
  title: string;
  client: string;
  description: string;
  image: string;
  label?: string;
};

export const WORK_SECTION = {
  title: 'My Work in Action',
  subtitle: 'Some of our favorite work, for some of our favorite clients.'
};

export const WORK_ITEMS: WorkItem[] = [
  {
    title: 'Establishing Credibility Through a Sophisticated Brand',
    client: 'Hubspot Ventures',
    description: 'Some of our favorite work, for some of our favorite clients.',
    image: '/assets/work/work-1.jpg',
   
  },
  {
    title: 'A Brighter, Bolder Retail Story',
    client: 'Instacart',
    description: 'Brand system refresh for a global marketplace.',
    image: '/assets/work/work-2.jpg',
   
  }
];
