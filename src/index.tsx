import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const fn: React.MouseEventHandler = function(e) {
  console.log(e);
};


ReactDOM.render(
  <div>
    <Button size="small">
      <span>Click Me</span>
      <span>Click Me</span>
    </Button>
    <Button onClick={fn}>Click Me</Button>
    <Button size="big">Click Me</Button>
  </div>,
  document.getElementById('root')
);
