<script setup lang="ts">
import { Database } from '@lucide/vue';

withDefaults(
    defineProps<{
        name: string;
    }>(),
    {},
);
</script>

<template>
    <div
        class="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-night-100 bg-white px-6 py-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-600/10"
    >
        <span class="text-night-400 transition-colors duration-300 group-hover:text-brand-600">
            <slot name="icon">
                <Database class="h-9 w-9" />
            </slot>
        </span>
        <span class="text-sm font-semibold text-night-700">{{ name }}</span>
    </div>
</template>
