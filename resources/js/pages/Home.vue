<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import CTASection from '@/components/landing/CTASection.vue';
import DifferentialsSection from '@/components/landing/DifferentialsSection.vue';
import HeroSection from '@/components/landing/HeroSection.vue';
import ProjectsBanner from '@/components/landing/ProjectsBanner.vue';
import ServicesSection from '@/components/landing/ServicesSection.vue';
import TechnologiesSection from '@/components/landing/TechnologiesSection.vue';
</script>

<template>
    <Head title="DamascenoSRV">
        <meta
            name="description"
            content="Desenvolvimento moderno, desempenho, segurança e escalabilidade. Sites, servidores, apps e SaaS sob medida para empresas que desejam crescer."
        />
        <meta property="og:title" content="DamascenoSRV - Soluções digitais" />
        <meta
            property="og:description"
            content="Soluções digitais para transformar sua ideia em realidade."
        />
    </Head>

    <HeroSection />
    <ServicesSection />
    <ProjectsBanner />
    <DifferentialsSection />
    <TechnologiesSection />
    <CTASection />
</template>
