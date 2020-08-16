import React from 'react';
import Accordion from './components/Accordion';

const items = [
  { title: 'What is React?', content: 'React is a front end js framework' },
  { title: 'Why React?', content: 'React the boss' },
  { title: 'Where React?', content: 'In your browser' }
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
