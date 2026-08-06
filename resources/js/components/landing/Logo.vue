<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

withDefaults(
    defineProps<{
        showWordmark?: boolean;
    }>(),
    {
        showWordmark: true,
    },
);
</script>

<template>
    <Link
        href="/"
        class="group inline-flex items-center gap-2.5 rounded-xl"
        aria-label="DamascenoSRV - início"
    >
        <span
            class="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-600/25 transition-transform duration-500 group-hover:scale-105"
        >
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" aria-hidden="true">
                <path
                    d="M4 18 L10 6"
                    stroke="currentColor"
                    stroke-width="2.4"
                    stroke-linecap="round"
                />
                <path
                    d="M8 18 L14 6 L16 12"
                    stroke="currentColor"
                    stroke-width="2.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <circle cx="19" cy="15" r="1.8" fill="currentColor" />
            </svg>
        </span>
        <span
            v-if="showWordmark"
            class="text-lg font-extrabold tracking-tight text-night-900"
        >
            Damasceno<span class="text-brand-600">SRV</span>
        </span>
    </Link>
</template>
