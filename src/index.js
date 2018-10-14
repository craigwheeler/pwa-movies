import {AppContainer} from 'react-hot-loader';
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import './style.css';
import {MuiThemeProvider} from '@material-ui/core'
import {createMuiTheme} from '@material-ui/core/styles';
import {grey, amber} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: amber,
        type: 'dark'
    }
})
const rootEl = document.getElementById('root');
render(
    <AppContainer>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    </AppContainer>,
    rootEl
);
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(
            <AppContainer>
                <MuiThemeProvider theme={theme}>
                    <NextApp/>
                </MuiThemeProvider>
            </AppContainer>,
            rootEl
        );
    });
}
import {install, applyUpdate} from 'offline-plugin/runtime';

install({
    onUpdateReady: () => applyUpdate()
});
