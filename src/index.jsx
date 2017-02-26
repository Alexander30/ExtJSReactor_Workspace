import React from 'react';
import ReactDOM from 'react-dom'
import { install, reactify } from '@extjs/reactor';

//install();
//const Panel=reactify('panel');
class Hello extends React.Component{
    render(){
        return <h1>Hello World! I am hot</h1>
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));