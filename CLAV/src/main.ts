/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)
export const bus = app;

registerPlugins(app)

app.mount('#app')
