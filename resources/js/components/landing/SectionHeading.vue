<script setup lang="ts">
withDefaults(
    defineProps<{
        eyebrow: string;
        title: string;
        description?: string;
        align?: 'center' | 'left';
    }>(),
    {
        description: '',
        align: 'center',
    },
);
</script>

<template>
    <div
        class="max-w-2xl"
        :class="align === 'center' ? 'mx-auto text-center' : 'text-left'"
    >
        <span
            class="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700"
        >
            {{ eyebrow }}
        </span>
        <h2
            class="mt-5 text-3xl font-extrabold tracking-tight text-night-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
        >
            {{ title }}
        </h2>
        <p v-if="description" class="mt-4 text-lg leading-relaxed text-night-500">
            {{ description }}
        </p>
    </div>
</template>
