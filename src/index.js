import React from 'react';
import ReactDOM from 'react-dom'
import { install, reactify } from '@extjs/reactor';
import { Panel } from "@extjs/reactor/modern"

install({viewport:true});

class Hello extends React.Component{
    render(){
        return <h1>Hello World! I am hot</h1>
    }
}

Ext.onReady(()=>ReactDOM.render((<Panel title='Ext JS Panel pico!'/>), document.getElementById('root')));