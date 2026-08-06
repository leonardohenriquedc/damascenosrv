<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { ArrowRight } from '@lucide/vue';
import SectionHeading from '@/components/landing/SectionHeading.vue';

const cards = [
    {
        icon: 'gestão',
        label: 'Dashboard',
        title: 'Sistema Financeiro',
        bar: 'w-3/4',
    },
    {
        icon: 'blog',
        label: 'Conteúdo',
        title: 'Blog Pessoal',
        bar: 'w-1/2',
    },
];
</script>

<template>
    <section id="projetos" class="scroll-mt-24 py-24 sm:py-32">
        <div class="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div
                class="relative overflow-hidden rounded-[2.5rem] border border-brand-100 bg-gradient-to-br from-night-900 via-brand-950 to-night-900 px-6 py-14 sm:px-12 lg:px-16"
            >
                <!-- decorative glow -->
                <div
                    class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-600/30 blur-3xl"
                    aria-hidden="true"
                />
                <div
                    class="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"
                    aria-hidden="true"
                />

                <div class="relative grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <span
                            class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-200"
                        >
                            Projetos
                        </span>
                        <h2 class="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Projetos que geram valor <span class="text-brand-400">e resultado.</span>
                        </h2>
                        <p class="mt-5 max-w-md text-lg leading-relaxed text-night-200">
                            Conheça algumas das soluções que desenvolvemos e os resultados que
                            entregamos para nossos clientes.
                        </p>
                        <Link
                            href="/projetos"
                            class="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-night-900 shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                        >
                            Ver projetos
                            <ArrowRight
                                class="h-4 w-4 text-brand-600 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    <!-- Right mockups -->
                    <div class="relative hidden lg:block" aria-hidden="true">
                        <div
                            class="absolute -inset-8 -z-10 rounded-full bg-brand-500/20 blur-3xl"
                        />
                        <div
                            class="rotate-3 rounded-2xl border border-white/20 bg-night-800/90 p-4 shadow-2xl shadow-black/30 transition-transform duration-500 hover:rotate-1"
                        >
                            <div class="mb-3 flex items-center justify-between">
                                <div class="flex gap-1.5">
                                    <span class="h-2 w-2 rounded-full bg-rose-400" />
                                    <span class="h-2 w-2 rounded-full bg-amber-300" />
                                    <span class="h-2 w-2 rounded-full bg-emerald-400" />
                                </div>
                                <span class="rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-night-300">
                                    financeiro.damascenosrv.com
                                </span>
                            </div>
                            <div class="space-y-2.5">
                                <div class="flex items-center gap-2">
                                    <span class="h-6 w-6 rounded-md bg-brand-600/80" />
                                    <div class="flex-1">
                                        <div class="h-2 w-24 rounded bg-white/25" />
                                    </div>
                                </div>
                                <div class="grid grid-cols-3 gap-2">
                                    <div class="rounded-lg bg-white/10 p-2">
                                        <div class="h-1.5 w-10 rounded bg-white/25" />
                                        <div class="mt-1.5 h-2 w-8 rounded bg-brand-400/80" />
                                    </div>
                                    <div class="rounded-lg bg-white/10 p-2">
                                        <div class="h-1.5 w-10 rounded bg-white/25" />
                                        <div class="mt-1.5 h-2 w-8 rounded bg-white/25" />
                                    </div>
                                    <div class="rounded-lg bg-white/10 p-2">
                                        <div class="h-1.5 w-10 rounded bg-white/25" />
                                        <div class="mt-1.5 h-2 w-8 rounded bg-white/25" />
                                    </div>
                                </div>
                                <div class="flex items-end gap-1.5 pt-1">
                                    <div class="h-6 flex-1 rounded-t bg-white/15" />
                                    <div class="h-10 flex-1 rounded-t bg-white/20" />
                                    <div class="h-8 flex-1 rounded-t bg-brand-500/70" />
                                    <div class="h-12 flex-1 rounded-t bg-brand-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
