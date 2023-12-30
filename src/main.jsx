import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import ColorModeToggle from './components/ColorModeToggle/ColorModeToggle.jsx';
import { extendTheme } from "@chakra-ui/react"; 
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';


const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  components: {
    ColorModeToggle: {
      baseStyle: {
        // Common styles for both light and dark modes
      },
      styles: {
        dark: {
          // Styles specific to dark mode
          backgroundColor: 'black',
          color: 'white',
        },
        light: {
          // Styles specific to light mode
          backgroundColor: 'white',
          color: 'black',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeToggle />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);