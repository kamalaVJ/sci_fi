import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
//import {darkBaseTheme} from '@material-ui/styles/t'

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});
ReactDOM.render(<MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'));

if(module.hot)
{
    module.hot.accept("./App", ()=>{
        const NextApp = require('./App').default
        ReactDOM.render(<MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <NextApp />
            </MuiThemeProvider>
            , document.getElementById('root'));
    })


}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
