<script setup lang="ts">
import { ArrowUpRight, FolderGit2, Globe } from '@lucide/vue';
import type { Project } from '@/types';

defineProps<{
    project: Project;
}>();
</script>

<template>
    <article
        class="group relative flex flex-col rounded-3xl border border-night-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-600/10"
    >
        <div
            class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/20 transition-transform duration-300 group-hover:scale-110"
        >
            <FolderGit2 class="h-6 w-6" />
        </div>

        <h3 class="mt-6 text-xl font-bold text-night-900">{{ project.name }}</h3>
        <p class="mt-3 flex-1 text-sm leading-relaxed text-night-500">
            {{ project.description }}
        </p>

        <div class="mt-6 flex flex-wrap gap-2" v-if="project.stack?.length">
            <span
                v-for="tech in project.stack"
                :key="tech"
                class="rounded-full bg-night-50 px-3 py-1 text-xs font-medium text-night-600 ring-1 ring-inset ring-night-100"
            >
                {{ tech }}
            </span>
        </div>

        <div class="mt-8 flex items-center gap-3 border-t border-night-100 pt-6">
            <a
                v-if="project.link_site"
                :href="project.link_site"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-night-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-600"
            >
                <Globe class="h-4 w-4" />
                Ver site
            </a>
            <a
                v-if="project.link_github"
                :href="project.link_github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver código no GitHub"
                class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-night-200 text-night-500 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600"
            >
                <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.9.5.9 5.5.9 11.6c0 4.9 3.2 9.1 7.6 10.6.6.1.8-.2.8-.5v-1.8c-3.1.7-3.8-1.5-3.8-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.4-.3-5-1.2-5-5.4 0-1.2.4-2.2 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10 10 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.7 1.1 1.7 1.1 2.9 0 4.2-2.6 5.1-5 5.4.4.4.8 1.1.8 2.2V21.7c0 .3.2.6.8.5 4.4-1.5 7.6-5.7 7.6-10.6C23.1 5.5 18.1.5 12 .5z" />
                </svg>
            </a>
        </div>
    </article>
</template>
