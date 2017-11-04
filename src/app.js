import React from 'react';
import ReactDOM from 'react-dom';

import 'font-awesome/css/font-awesome.css'

ReactDOM.render(
    <div className="ot">
        <img src={require('./common/img/banner001.png')} />
        <span className="fa fa-rocket"></span>
    </div>,
    document.getElementById('app')
)