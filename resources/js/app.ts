import { createInertiaApp } from '@inertiajs/vue3';
import { createApp, h } from 'vue';
import { initializeTheme } from '@/composables/useAppearance';
import { revealDirective } from '@/composables/useReveal';
import AppLayout from '@/layouts/AppLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { initializeFlashToast } from '@/lib/flashToast';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: (name) => {
        switch (true) {
            case name === 'Home':
            case name === 'Projects':
                return DefaultLayout;
            case name.startsWith('auth/'):
                return AuthLayout;
            case name.startsWith('settings/'):
                return [AppLayout, SettingsLayout];
            default:
                return AppLayout;
        }
    },
    progress: {
        color: '#2563EB',
    },
    setup({ el, App, props, plugin }) {
        if (!el) {
            return;
        }

        createApp({ render: () => h(App, props) })
            .use(plugin)
            .directive('reveal', revealDirective)
            .mount(el);
    },
});

// This will set light / dark mode on page load...
initializeTheme();

// This will listen for flash toast data from the server...
initializeFlashToast();
