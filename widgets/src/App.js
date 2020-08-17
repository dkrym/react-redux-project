import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  { title: 'What is React?', content: 'React is a front end js framework' },
  { title: 'Why React?', content: 'React the boss' },
  { title: 'Where React?', content: 'In your browser' }
];

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
