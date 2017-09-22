import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  Hello  from './components/HelloWorld';
import properties from './manifest';

ReactDOM.render(
    <Hello description={properties.description} />,
    document.getElementById('root') as HTMLElement
);
