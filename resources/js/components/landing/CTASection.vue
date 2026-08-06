<script setup lang="ts">
import { Contact, Send } from '@lucide/vue';
import { COMPANY } from '@/lib/site';

const contactHref = `mailto:${COMPANY.email}?subject=${encodeURIComponent('Solicitação de orçamento')}`;
</script>

<template>
    <section id="contato" class="scroll-mt-24 py-24 sm:py-32">
        <div class="mx-auto w-full max-w-5xl px-5 sm:px-8">
            <div
                v-reveal
                class="relative overflow-hidden rounded-[2.5rem] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-sky-50 px-6 py-16 text-center sm:px-12 lg:py-20"
            >
                <div
                    class="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-200/50 blur-3xl"
                    aria-hidden="true"
                />

                <div class="relative">
                    <span
                        class="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30"
                    >
                        <Contact class="h-7 w-7" />
                    </span>
                    <h2 class="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-night-900 sm:text-4xl lg:text-5xl">
                        Vamos <span class="text-brand-600">transformar</span> sua ideia em
                        realidade.
                    </h2>
                    <p class="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-night-500">
                        Conte para nós o seu projeto e receba uma proposta personalizada em
                        pouco tempo.
                    </p>
                    <a
                        :href="contactHref"
                        class="group mt-9 inline-flex items-center gap-2 rounded-full bg-night-900 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-night-900/15 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-600/25"
                    >
                        Solicitar orçamento
                        <Send
                            class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
