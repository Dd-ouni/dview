import { createApp } from 'vue';
import 'element-plus/dist/index.css';
import App from './app.vue';
import dview from '@dview/components';
const app = createApp(App);
app.use(dview);
app.mount('#app');
