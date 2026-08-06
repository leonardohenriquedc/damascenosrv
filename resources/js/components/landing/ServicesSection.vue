<script setup lang="ts">
import { AppWindow, ArrowUpRight, Code2, Server } from '@lucide/vue';
import SectionHeading from '@/components/landing/SectionHeading.vue';

const services = [
    {
        icon: Code2,
        title: 'Criação de Sites e Landing Pages',
        description:
            'Páginas rápidas, elegantes e otimizadas para conversão, construídas com as melhores práticas de design e desempenho.',
        accent: 'from-brand-500 to-brand-700',
        shadow: 'shadow-brand-600/20',
    },
    {
        icon: Server,
        title: 'Criação de Servidores',
        description:
            'Provisionamento, configuração e gestão de infraestrutura robusta, segura e escalável para suas aplicações.',
        accent: 'from-sky-500 to-blue-700',
        shadow: 'shadow-sky-600/20',
    },
    {
        icon: AppWindow,
        title: 'Apps e SaaS',
        description:
            'Sistemas web e aplicações completas, com arquitetura moderna, autenticação, painéis e integrações.',
        accent: 'from-indigo-500 to-violet-700',
        shadow: 'shadow-indigo-600/20',
    },
];
</script>

<template>
    <section id="servicos" class="scroll-mt-24 py-24 sm:py-32">
        <div class="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <SectionHeading
                v-reveal
                eyebrow="Serviços"
                title="Tudo o que sua empresa precisa para crescer"
                description="Da primeira ideia à produção, entregamos soluções completas com foco em qualidade, velocidade e resultado."
            />

            <div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <article
                    v-for="(service, index) in services"
                    :key="service.title"
                    v-reveal="index"
                    class="group relative flex flex-col rounded-3xl border border-night-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand-100 hover:shadow-2xl hover:shadow-brand-600/10"
                >
                    <div
                        class="absolute right-6 top-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-night-100 text-night-300 transition-all duration-300 group-hover:border-brand-200 group-hover:bg-brand-50 group-hover:text-brand-600"
                    >
                        <ArrowUpRight class="h-4.5 w-4.5" />
                    </div>

                    <span
                        class="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                        :class="service.accent"
                    >
                        <component :is="service.icon" class="h-7 w-7" />
                    </span>

                    <h3 class="mt-6 text-xl font-bold text-night-900">
                        {{ service.title }}
                    </h3>
                    <p class="mt-3 flex-1 leading-relaxed text-night-500">
                        {{ service.description }}
                    </p>

                    <div class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                        Saiba mais
                        <ArrowUpRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
