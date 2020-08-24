import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ToastProvider } from 'react-toast-notifications'
import { ChakraProvider, CSSReset } from '@chakra-ui/core'
import theme from '@chakra-ui/theme'

const customTheme = {
  ...theme,
  breakpoints: ['768px', '991px', '1440px', '1920px'],
}

ReactDOM.render(
  <ToastProvider autoDismiss autoDismissTimeout={4000} placement="top-center">
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </ToastProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
