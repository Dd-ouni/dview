import { createApp } from 'vue';
import App from './app.vue';
import dview from '@dview/components';
const app = createApp(App);
app.use(dview);
app.mount('#app');
