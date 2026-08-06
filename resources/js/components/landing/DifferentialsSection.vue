<script setup lang="ts">
import { Blocks, Cpu, Gauge, Globe, Lock, Workflow } from '@lucide/vue';
import SectionHeading from '@/components/landing/SectionHeading.vue';

const items = [
    {
        icon: Blocks,
        title: 'Desenvolvimento sob medida',
        description: 'Soluções 100% personalizadas às necessidades do seu negócio, sem templates genéricos.',
    },
    {
        icon: Gauge,
        title: 'Performance',
        description: 'Aplicações rápidas e otimizadas, com carregamento instantâneo e boa experiência em qualquer dispositivo.',
    },
    {
        icon: Workflow,
        title: 'SEO',
        description: 'Estruturação semântica e tecnicas modernas para posicionar sua marca no topo das buscas.',
    },
    {
        icon: Lock,
        title: 'Segurança',
        description: 'Proteção de dados, autenticação robusta e boas práticas para manter tudo seguro.',
    },
    {
        icon: Globe,
        title: 'Integrações',
        description: 'Conectamos sua solução com APIs, pagamentos, automações e serviços externos.',
    },
    {
        icon: Cpu,
        title: 'Arquitetura moderna',
        description: 'Código limpo, escalável e com padrões atualizados que evoluem junto com seu negócio.',
    },
];
</script>

<template>
    <section id="sobre" class="scroll-mt-24 bg-night-50 py-24 sm:py-32">
        <div class="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <SectionHeading
                v-reveal
                eyebrow="Diferenciais"
                title="Construímos soluções que fazem a diferença"
                description="Cada detalhe é pensado para entregar tecnologia confiável, rápida e preparada para o futuro."
            />

            <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div
                    v-for="(item, index) in items"
                    :key="item.title"
                    v-reveal="index"
                    class="group rounded-3xl border border-night-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10"
                >
                    <span
                        class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white"
                    >
                        <component :is="item.icon" class="h-6 w-6" />
                    </span>
                    <h3 class="mt-5 text-lg font-bold text-night-900">{{ item.title }}</h3>
                    <p class="mt-2 text-sm leading-relaxed text-night-500">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
