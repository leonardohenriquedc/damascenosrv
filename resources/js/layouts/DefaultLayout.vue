<script setup lang="ts">
import Footer from '@/components/landing/Footer.vue';
import Header from '@/components/landing/Header.vue';
</script>

<template>
    <div class="flex min-h-screen flex-col bg-white text-night-900 antialiased">
        <Header />
        <main id="inicio" class="flex-1">
            <slot />
        </main>
        <Footer />
    </div>
</template>
