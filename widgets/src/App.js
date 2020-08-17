import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  { title: 'What is React?', content: 'React is a front end js framework' },
  { title: 'Why React?', content: 'React the boss' },
  { title: 'Where React?', content: 'In your browser' }
];

const options = [
  { label: 'The Color Red', value: 'red' },
  { label: 'The Color Green', value: 'green' },
  { label: 'The Shade of Blue', value: 'blue' }
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
