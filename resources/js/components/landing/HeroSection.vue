<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { ArrowRight, Check, Gauge, Headset, Lock, Layers, Sparkles, Zap } from '@lucide/vue';
import HeroMockup from '@/components/landing/HeroMockup.vue';

const benefits = [
    { label: 'Segurança', icon: Lock },
    { label: 'Alta Performance', icon: Gauge },
    { label: 'Escalabilidade', icon: Layers },
    { label: 'Suporte dedicado', icon: Headset },
];
</script>

<template>
    <section class="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <!-- Organic background shapes -->
        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div
                class="absolute -top-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-brand-100/60 blur-3xl"
            />
            <div
                class="absolute top-1/3 -left-48 h-[28rem] w-[28rem] rounded-full bg-sky-100/50 blur-3xl"
            />
            <div
                class="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand-50 blur-3xl"
            />
            <svg
                class="absolute inset-x-0 bottom-0 h-40 w-full text-night-50"
                viewBox="0 0 1440 160"
                fill="currentColor"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,80 C320,140 640,20 960,60 C1200,90 1360,40 1440,70 L1440,160 L0,160 Z"
                    opacity="0.5"
                />
            </svg>
            <svg
                class="absolute inset-x-0 top-0 h-32 w-full text-brand-50"
                viewBox="0 0 1440 120"
                fill="currentColor"
                preserveAspectRatio="none"
            >
                <path d="M0,60 C420,120 900,0 1440,50 L1440,120 L0,120 Z" opacity="0.6" />
            </svg>
        </div>

        <div class="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
            <!-- Left -->
            <div class="max-w-xl">
                <span
                    class="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700"
                >
                    <Sparkles class="h-3.5 w-3.5" />
                    Desenvolvimento de software premium
                </span>

                <h1
                    class="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-night-900 sm:text-5xl lg:text-6xl"
                >
                    Soluções digitais para <span class="text-brand-600">transformar</span> sua
                    ideia em realidade.
                </h1>

                <p class="mt-6 text-lg leading-relaxed text-night-500 sm:text-xl">
                    Desenvolvimento moderno, desempenho, segurança e escalabilidade para empresas
                    que desejam crescer utilizando tecnologia.
                </p>

                <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                        href="#contato"
                        class="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30"
                    >
                        Fale conosco
                        <ArrowRight
                            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </Link>
                    <Link
                        href="/projetos"
                        class="inline-flex items-center justify-center gap-2 rounded-full border border-night-200 bg-white px-7 py-3.5 text-sm font-semibold text-night-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700 hover:shadow-md"
                    >
                        Conhecer projetos
                    </Link>
                </div>

                <ul class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <li
                        v-for="benefit in benefits"
                        :key="benefit.label"
                        class="flex items-center gap-2 text-sm font-medium text-night-600"
                    >
                        <span
                            class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
                        >
                            <Check class="h-3.5 w-3.5" />
                        </span>
                        <component :is="benefit.icon" class="h-4 w-4 text-brand-600" />
                        {{ benefit.label }}
                    </li>
                </ul>
            </div>

            <!-- Right -->
            <div v-reveal class="relative lg:translate-x-4">
                <HeroMockup />
            </div>
        </div>
    </section>
</template>
