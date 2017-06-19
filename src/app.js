import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import WeUI from 'react-weui';

//import styles
import 'weui';
import 'react-weui/lib/react-weui.min.css';

const {Button} = WeUI;

class App extends Component {
    render () {
        return (
            <Button>hello wechat</Button>
        );
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('container'));