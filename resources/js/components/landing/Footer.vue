<script setup lang="ts">
import { Mail } from '@lucide/vue';
import Logo from '@/components/landing/Logo.vue';
import { COMPANY, primaryNavigation } from '@/lib/site';
</script>

<template>
    <footer id="footer" class="border-t border-night-100 bg-night-50">
        <div class="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
            <div class="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                <div class="max-w-sm">
                    <Logo />
                    <p class="mt-4 text-sm leading-relaxed text-night-500">
                        Desenvolvimento moderno, desempenho, segurança e escalabilidade para
                        empresas que desejam crescer utilizando tecnologia.
                    </p>

                    <div class="mt-6 flex items-center gap-3">
                        <a
                            :href="COMPANY.instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-night-200 bg-white text-night-500 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-md"
                        >
                            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        <a
                            :href="COMPANY.facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-night-200 bg-white text-night-500 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-md"
                        >
                            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor" aria-hidden="true">
                                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.45 2.9h-2.35v7A10 10 0 0 0 22 12Z" />
                            </svg>
                        </a>
                        <a
                            :href="`mailto:${COMPANY.email}`"
                            aria-label="Enviar e-mail"
                            class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-night-200 bg-white text-night-500 transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-md"
                        >
                            <Mail class="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-10 sm:grid-cols-3">
                    <div>
                        <h3 class="text-sm font-semibold text-night-900">Navegação</h3>
                        <ul class="mt-4 space-y-3">
                            <li v-for="item in primaryNavigation" :key="item.href">
                                <a
                                    :href="item.href"
                                    class="text-sm text-night-500 transition-colors hover:text-brand-600"
                                >
                                    {{ item.label }}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-sm font-semibold text-night-900">Serviços</h3>
                        <ul class="mt-4 space-y-3 text-sm text-night-500">
                            <li>Sites e Landing Pages</li>
                            <li>Criação de Servidores</li>
                            <li>Apps e SaaS</li>
                            <li>Manutenção</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-sm font-semibold text-night-900">Contato</h3>
                        <ul class="mt-4 space-y-3 text-sm text-night-500">
                            <li>
                                <a
                                    :href="`mailto:${COMPANY.email}`"
                                    class="transition-colors hover:text-brand-600"
                                >
                                    {{ COMPANY.email }}
                                </a>
                            </li>
                            <li>Atendimento sob demanda</li>
                            <li>Home office / Remoto</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                class="mt-14 flex flex-col items-center justify-between gap-4 border-t border-night-100 pt-8 sm:flex-row"
            >
                <p class="text-sm text-night-500">
                    © {{ new Date().getFullYear() }} {{ COMPANY.name }}. Todos os direitos
                    reservados.
                </p>
                <p class="text-sm text-night-400">Feito com tecnologia, design e muito código.</p>
            </div>
        </div>
    </footer>
</template>
