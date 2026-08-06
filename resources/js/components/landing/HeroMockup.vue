<script setup lang="ts">
import { ArrowUpRight, BadgeCheck, Layers, ShieldCheck, TrendingUp, Zap } from '@lucide/vue';
</script>

<template>
    <div class="relative" aria-hidden="true">
        <!-- Soft glow behind the mockup -->
        <div
            class="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-200 via-brand-100 to-transparent opacity-70 blur-2xl"
        />

        <!-- Falling float cards -->
        <div
            class="absolute -left-4 top-10 z-20 hidden animate-[float-y_6s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-white/60 bg-white/80 p-3 shadow-xl shadow-brand-900/10 backdrop-blur-xl sm:flex"
        >
            <span
                class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/30"
            >
                <ShieldCheck class="h-5 w-5" />
            </span>
            <div class="pr-1">
                <p class="text-xs font-semibold text-night-900">Segurança aprimorada</p>
                <p class="text-[11px] text-night-500">Protegido de ponta a ponta</p>
            </div>
        </div>

        <div
            class="absolute -right-3 top-24 z-20 hidden animate-[float-y-slow_7s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-white/60 bg-white/80 p-3 shadow-xl shadow-brand-900/10 backdrop-blur-xl md:flex"
        >
            <span
                class="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
            >
                <TrendingUp class="h-5 w-5" />
            </span>
            <div class="pr-1">
                <p class="text-xs font-semibold text-night-900">+128% crescimento</p>
                <p class="text-[11px] text-night-500">Últimos 90 dias</p>
            </div>
        </div>

        <!-- Main dashboard window -->
        <div
            class="relative rounded-3xl border border-white/60 bg-white/70 p-3 shadow-2xl shadow-brand-900/20 backdrop-blur-xl"
        >
            <!-- Title bar -->
            <div
                class="flex items-center justify-between rounded-2xl border border-night-100 bg-white/80 px-4 py-3"
            >
                <div class="flex items-center gap-1.5">
                    <span class="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span class="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span class="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div class="hidden items-center gap-2 rounded-full bg-night-50 px-3 py-1 sm:flex">
                    <span class="text-[11px] font-medium text-night-500">damascenosrv.com</span>
                </div>
                <div class="h-5 w-9 rounded-md bg-night-100" />
            </div>

            <!-- Body -->
            <div class="mt-3 grid grid-cols-5 gap-3">
                <!-- Sidebar -->
                <div class="col-span-1 hidden flex-col gap-2 rounded-2xl border border-night-100 bg-white/80 p-3 sm:flex">
                    <div class="mb-1 flex items-center gap-2">
                        <span class="h-6 w-6 rounded-lg bg-gradient-to-br from-brand-600 to-brand-800" />
                        <span class="h-2.5 w-14 rounded-full bg-night-100" />
                    </div>
                    <span class="h-2.5 w-16 rounded-full bg-brand-100" />
                    <span class="h-2.5 w-14 rounded-full bg-night-100" />
                    <span class="h-2.5 w-16 rounded-full bg-night-100" />
                    <span class="mt-auto h-2.5 w-12 rounded-full bg-night-100" />
                </div>

                <!-- Main content -->
                <div class="col-span-5 flex flex-col gap-3 sm:col-span-4">
                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-3">
                        <div class="rounded-2xl border border-night-100 bg-white p-3">
                            <p class="text-[10px] font-medium text-night-500">Receita</p>
                            <p class="mt-1 text-sm font-bold text-night-900">R$ 84,2k</p>
                            <span class="mt-1 inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600">
                                <TrendingUp class="h-3 w-3" /> 12%
                            </span>
                        </div>
                        <div class="rounded-2xl border border-night-100 bg-white p-3">
                            <p class="text-[10px] font-medium text-night-500">Usuários</p>
                            <p class="mt-1 text-sm font-bold text-night-900">12.4k</p>
                            <span class="mt-1 inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600">
                                <TrendingUp class="h-3 w-3" /> 8%
                            </span>
                        </div>
                        <div class="hidden rounded-2xl border border-brand-100 bg-brand-50 p-3 sm:block">
                            <p class="text-[10px] font-medium text-brand-700">Desempenho</p>
                            <p class="mt-1 text-sm font-bold text-brand-700">99.9%</p>
                            <span class="mt-1 inline-flex items-center gap-1 text-[10px] font-medium text-brand-600">
                                <Zap class="h-3 w-3" /> Ups
                            </span>
                        </div>
                    </div>

                    <!-- Chart -->
                    <div
                        class="rounded-2xl border border-night-100 bg-white p-4"
                    >
                        <div class="flex items-center justify-between">
                            <p class="text-xs font-semibold text-night-900">Visão geral</p>
                            <div class="flex items-center gap-1.5">
                                <span class="h-2 w-2 rounded-full bg-brand-600" />
                                <span class="text-[10px] text-night-500">Vendas</span>
                            </div>
                        </div>
                        <div class="mt-3 flex h-20 items-end gap-1.5 sm:h-24">
                            <div class="h-6 flex-1 rounded-t-md bg-brand-100" />
                            <div class="h-10 flex-1 rounded-t-md bg-brand-200" />
                            <div class="h-8 flex-1 rounded-t-md bg-brand-200" />
                            <div class="h-14 flex-1 rounded-t-md bg-brand-300" />
                            <div class="h-12 flex-1 rounded-t-md bg-brand-300" />
                            <div class="h-20 flex-1 rounded-t-md bg-gradient-to-t from-brand-600 to-brand-400 shadow-lg shadow-brand-600/25" />
                            <div class="h-16 flex-1 rounded-t-md bg-brand-300" />
                            <div class="h-10 flex-1 rounded-t-md bg-brand-200" />
                            <div class="h-7 flex-1 rounded-t-md bg-brand-100" />
                        </div>
                    </div>

                    <!-- Bottom row -->
                    <div class="hidden items-center justify-between gap-3 sm:flex">
                        <div class="flex items-center gap-2 rounded-full border border-night-100 bg-white px-3 py-2">
                            <BadgeCheck class="h-4 w-4 text-emerald-500" />
                            <span class="text-[11px] font-medium text-night-600">Deploy em produção</span>
                        </div>
                        <div class="flex gap-2">
                            <span class="rounded-lg px-2 py-1.5 text-[11px] font-semibold text-brand-700 ring-1 ring-inset ring-brand-200">
                                React
                            </span>
                            <span class="rounded-lg px-2 py-1.5 text-[11px] font-semibold text-night-600 ring-1 ring-inset ring-night-200">
                                Laravel
                            </span>
                            <span class="rounded-lg px-2 py-1.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
                                Docker
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom floating card -->
        <div
            class="absolute -bottom-5 left-1/3 z-20 hidden animate-[float-y-slow_8s_ease-in-out_infinite] items-center gap-2 rounded-2xl border border-white/60 bg-white/85 p-3 shadow-xl shadow-brand-900/10 backdrop-blur-xl md:flex"
        >
            <span
                class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30"
            >
                <Layers class="h-4 w-4" />
            </span>
            <div>
                <p class="text-xs font-semibold text-night-900">Arquitetura moderna</p>
                <p class="flex items-center gap-1 text-[11px] text-night-500">
                    Escalável <ArrowUpRight class="h-3 w-3 text-brand-600" />
                </p>
            </div>
        </div>
    </div>
</template>
