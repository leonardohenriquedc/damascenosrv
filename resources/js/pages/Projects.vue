<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { ArrowLeft, FolderGit2 } from '@lucide/vue';
import ProjectCard from '@/components/landing/ProjectCard.vue';
import type { Project } from '@/types';

defineProps<{
    projects: Project[];
}>();
</script>

<template>
    <Head title="Projetos">
        <meta
            name="description"
            content="Conheça os projetos desenvolvidos pela DamascenoSRV: sistemas web, aplicações SaaS, servidores e landing pages."
        />
    </Head>

    <section class="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div
                class="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
            />
            <div
                class="absolute top-40 -left-32 h-80 w-80 rounded-full bg-sky-100/50 blur-3xl"
            />
        </div>

        <div class="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <Link
                href="/"
                class="inline-flex items-center gap-2 text-sm font-semibold text-night-500 transition-colors hover:text-brand-600"
            >
                <ArrowLeft class="h-4 w-4" />
                Voltar ao início
            </Link>

            <div class="mt-8 max-w-2xl">
                <span
                    class="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700"
                >
                    <FolderGit2 class="h-3.5 w-3.5" />
                    Portfólio
                </span>
                <h1
                    class="mt-5 text-4xl font-extrabold tracking-tight text-night-900 sm:text-5xl"
                >
                    Nossos <span class="text-brand-600">projetos</span>
                </h1>
                <p class="mt-5 text-lg leading-relaxed text-night-500">
                    Soluções que desenvolvemos e que geram valor e resultado de verdade para
                    nossos clientes.
                </p>
            </div>

            <div v-if="projects.length" class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                    v-for="(project, index) in projects"
                    :key="project.id"
                    v-reveal="index"
                    :project="project"
                />
            </div>

            <div
                v-else
                class="mt-14 flex flex-col items-center justify-center rounded-3xl border border-dashed border-night-200 bg-night-50 py-20 text-center"
            >
                <FolderGit2 class="h-10 w-10 text-night-300" />
                <p class="mt-4 text-lg font-semibold text-night-700">Nenhum projeto por aqui</p>
                <p class="mt-1 text-sm text-night-500">
                    Em breve publicaremos novos trabalhos.
                </p>
            </div>
        </div>
    </section>
</template>
