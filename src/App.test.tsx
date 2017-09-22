import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
import Hello from './components/HelloWorld';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hello description="test" />, div);
});
