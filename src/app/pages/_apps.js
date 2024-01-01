// pages/_app.js
import React from 'react';
import '../globals.css'; // Asegúrate de que la ruta al archivo CSS global es correcta
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema de PrimeReact
import 'primereact/resources/primereact.min.css'; // Core CSS de PrimeReact
import 'primeicons/primeicons.css'; // Iconos

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
