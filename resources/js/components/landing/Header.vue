<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3';
import { Headset, Menu, X } from '@lucide/vue';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import Logo from '@/components/landing/Logo.vue';
import { primaryNavigation } from '@/lib/site';

const scrolled = ref(false);
const mobileOpen = ref(false);

const navigation = primaryNavigation;

function onScroll() {
    scrolled.value = window.scrollY > 12;
}

function scrollToId(href: string) {
    mobileOpen.value = false;

    // In-page anchors on the home page are scrolled to natively.
    const target = document.querySelector<HTMLElement>(href);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function goHome() {
    mobileOpen.value = false;
    if (window.location.pathname !== '/') {
        router.visit('/');
    }
}

function goToContact() {
    const isHome = window.location.pathname === '/';
    if (isHome) {
        document
            .querySelector('#contato')
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }
    goHome();
    window.setTimeout(
        () => document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }),
        120,
    );
}

function handleContactMobile() {
    mobileOpen.value = false;
    goToContact();
}

function handleNav(item: { label: string; href: string }) {
    const isHome = window.location.pathname === '/';
    if (!isHome) {
        goHome();
        // Wait for the new page to mount before scrolling to the anchor.
        window.setTimeout(() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' }), 120);
        return;
    }
    scrollToId(item.href);
}

onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
});
</script>

<template>
    <header
        :class="[
            'fixed inset-x-0 top-0 z-50 transition-all duration-300',
            scrolled
                ? 'border-b border-night-100/80 bg-white/80 py-2.5 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] backdrop-blur-xl'
                : 'border-b border-transparent bg-transparent py-4',
        ]"
    >
        <nav
            class="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
            aria-label="Navegação principal"
        >
            <Logo />

            <ul class="hidden items-center gap-1 lg:flex">
                <li v-for="item in navigation" :key="item.href">
                    <button
                        type="button"
                        @click="handleNav(item)"
                        class="rounded-full px-4 py-2 text-sm font-medium text-night-600 transition-colors hover:bg-night-50 hover:text-night-900"
                    >
                        {{ item.label }}
                    </button>
                </li>
            </ul>

            <div class="flex items-center gap-3">
                <button
                    type="button"
                    @click="goToContact"
                    class="group hidden items-center gap-2 rounded-full bg-night-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-night-900/10 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-600/25 sm:inline-flex"
                >
                    <Headset class="h-4 w-4" />
                    Fale conosco
                </button>

                <button
                    type="button"
                    class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-night-200 bg-white/70 text-night-900 transition-colors hover:bg-night-50 lg:hidden"
                    :aria-expanded="mobileOpen"
                    aria-label="Abrir menu"
                    @click="mobileOpen = !mobileOpen"
                >
                    <X v-if="mobileOpen" class="h-5 w-5" />
                    <Menu v-else class="h-5 w-5" />
                </button>
            </div>
        </nav>

        <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            leave-active-class="transition duration-150 ease-in"
            leave-to-class="opacity-0 -translate-y-2"
        >
            <nav
                v-if="mobileOpen"
                class="mx-4 mt-2 rounded-2xl border border-night-100 bg-white/95 p-3 shadow-xl shadow-night-900/10 backdrop-blur-xl lg:hidden"
                aria-label="Menu móvel"
            >
                <ul class="flex flex-col gap-1">
                    <li v-for="item in navigation" :key="item.href">
                        <button
                            type="button"
                            @click="handleNav(item)"
                            class="w-full rounded-xl px-4 py-2.5 text-left text-sm font-medium text-night-700 transition-colors hover:bg-night-50 hover:text-night-900"
                        >
                            {{ item.label }}
                        </button>
                    </li>
                    <li class="mt-1 border-t border-night-100 pt-2">
                        <button
                            type="button"
                            @click="handleContactMobile"
                            class="flex w-full items-center justify-center gap-2 rounded-xl bg-night-900 px-4 py-2.5 text-sm font-semibold text-white"
                        >
                            <Headset class="h-4 w-4" />
                            Fale conosco
                        </button>
                    </li>
                </ul>
            </nav>
        </Transition>
    </header>
</template>
