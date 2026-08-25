import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  //---CAMBIAR A URL DE DOMINIO---//
  site: 'https://lia-bakerlab.github.io',
  //---FIN URL DE DOMINIO---//
  output: 'static',
  vite : {
    plugins:[tailwindcss()],
  }
});