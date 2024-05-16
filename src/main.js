import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { quillEditor } from 'vue3-quill';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(quillEditor);

app.mount('#app');
