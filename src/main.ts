import { createApp } from 'vue'
import App from './App.vue'

const appContainer = document.querySelector('vue-web-component')!.shadowRoot!.querySelector('#vue-app-inside-web-component')
createApp(App).mount(appContainer!);
