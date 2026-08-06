<script setup lang="ts">
import SectionHeading from '@/components/landing/SectionHeading.vue';
import TechLogo from '@/components/landing/TechLogo.vue';

const technologies = [
    { name: 'Laravel', type: 'laravel' },
    { name: 'Vue.js', type: 'vue' },
    { name: 'PHP', type: 'php' },
    { name: 'JavaScript', type: 'js' },
    { name: 'TypeScript', type: 'ts' },
    { name: 'Docker', type: 'docker' },
    { name: 'MySQL', type: 'mysql' },
    { name: 'PostgreSQL', type: 'postgres' },
    { name: 'Redis', type: 'redis' },
    { name: 'Git', type: 'git' },
    { name: 'GitHub', type: 'github' },
    { name: 'Linux', type: 'linux' },
    { name: 'Nginx', type: 'nginx' },
];
</script>

<template>
    <section class="py-24 sm:py-32">
        <div class="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <SectionHeading
                v-reveal
                eyebrow="Tecnologias"
                title="Tecnologias modernas e de alta performance"
                description="Trabalhamos com um stack consolidado e em constante evolução para entregar o melhor resultado."
            />

            <div class="group mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <TechLogo v-for="tech in technologies" :key="tech.name" :name="tech.name">
                    <template #icon>
                        <!-- Laravel -->
                        <svg v-if="tech.type === 'laravel'" viewBox="0 0 24 24" class="h-8 w-8" fill="currentColor" aria-hidden="true">
                            <path d="M23.65 2.48a6.9 6.9 0 0 0-2.46-1.3c-.5-.15-1.03-.2-1.24.4-.03.08 0 .17.05.24.28.43.6.82.9 1.23.2.28-.08.61-.38.42-.2-.13-.38-.3-.57-.45-.23-.18-.5.12-.37.38.26.53.7.95 1.23 1.32a4.09 4.09 0 0 0 .6-2.8c-.01-.32-.47-.37-.6-.1-.27.6-.66 1.12-1.18 1.53a2.2 2.2 0 0 1-.23 2.66l-.93 2.6-1.37-.79c-.17-.1-.38.03-.36.22a19 19 0 0 0 .03.6c.03.35-.25.65-.6.64-.37 0-.7-.28-.71-.66-.02-.54.02-1.08-.06-1.6-.06-.45-.08-.9-.28-1.3-.84-1.7-2.05-3.16-3.2-4.67A25.5 25.5 0 0 0 4 1.4c-.56-.22-1.07.15-1.54.44-.44.27-.93.34-1.43.24a3.3 3.3 0 0 1-.6-.17c-.36-.13-.68.28-.5.58.6 1.06 1.3 2.1 2.3 2.87 1.27.98 2.7 1.6 4.12 2.27 2.24 1.06 4.36 2.37 6.2 4.08 1.3 1.21 2.5 2.5 3.69 3.8.4.44.94.7 1.5.78.65.1 1.34.2 1.98.02.5-.13.93-.45 1.18-.9.38-.7.5-1.52.65-2.3.08-.43-.1-.85-.47-1.05-.37-.2-.82-.06-1.15.18-.25.18-.53.4-.82.26-.34-.17-.26-.72-.12-1.05.24-.58.6-1.12 1.1-1.53.55-.44 1.24-.66 1.93-.53.5.1 1 .33 1.5.42.53.1.81-.5.54-.89.34-.06.68-.06 1.02-.02.42.05.76-.3.76-.73-.02-.28.22-.53.5-.51.24.02.48-.08.63-.26.14-.17.3-.31.43-.48.32-.43-.1-1-.65-.85zM22.9 8.53c.7-.25 1.3-.72 1.7-1.3-.9.6-1.9 1-2.95 1.13-.5.07-1.02.03-1.53 0-.4-.02-.6.47-.33.75.32.34.69.63 1.02.96.3.3.72.47 1.14.47.32 0 .64-.13.85-.36.42-.42.56-1.02.52-1.6-.02-.02-.03-.03-.05-.05h-.37z" />
                        </svg>

                        <!-- Vue.js -->
                        <svg v-else-if="tech.type === 'vue'" viewBox="0 0 24 24" class="h-8 w-8" fill="none" aria-hidden="true">
                            <path d="M14.5 3 12 7.8 9.5 3H2l10 18L22 3h-7.5Z" fill="#35495e" />
                            <path d="M9.5 3 12 7.8 14.5 3h-2.9L12 5.4 12.4 3h-2.9Z" fill="#41b883" />
                        </svg>

                        <!-- PHP -->
                        <svg v-else-if="tech.type === 'php'" viewBox="0 0 24 24" class="h-8 w-8" fill="currentColor" aria-hidden="true">
                            <ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="currentColor" stroke-width="1.4" />
                            <path d="m7 12 3-6 3 6-3 6-3-6Z" opacity="0.9" stroke="currentColor" stroke-width="1" fill="none" />
                            <path d="M14.4 12h1.1l.5-1h-1.1l-.5 1Zm2.2 0h1.1l.5-1h-1.1l-.5 1Z" />
                        </svg>

                        <!-- JavaScript -->
                        <svg v-else-if="tech.type === 'js'" viewBox="0 0 24 24" class="h-8 w-8" fill="#F7DF1E" aria-hidden="true">
                            <path d="M0 0h24v24H0V0zm15.3 18.3c.8 1.4 1.9 2.4 3.8 2.4 1.6 0 2.6-.8 2.6-2 0-1.3-.9-1.8-2.7-2.5l-.9-.4c-1.3-.6-2.1-1.4-2.1-2.8 0-1.4 1.1-2.6 2.9-2.6 1.3 0 2.2.4 2.8 1.6l-1.6 1c-.3-.7-.7-1-1.2-1-.6 0-1 .3-1 .9 0 .6.4.9 1.4 1.3l.9.4c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.6-3.1 2.6-1.7 0-2.8-.8-3.3-1.9l1.7-1zm-7.7.6c.6 1.1 1.1 1.9 2.4 2.4 1.3.5 2.4.3 3.1-.4l-1.7-1c-.4.4-.9.6-1.4.5-.8-.2-.9-.9-1.2-1.6-.5-1.6-.9-3.6-.9-6.7h2.8c0 2.9.1 4.4.2 5.1h.1c.1-.7.3-1.8.5-2.5l-.4-2.6h2.7c.1.9.1 1.3.2 1.9-.1.4-.2.9-.3 1.4-.6 1.4-1.5 2.5-3.2 2.5-1 0-1.8-.3-2.4-1.1 0 .2-.4 1.1-.4 1.1z" />
                        </svg>

                        <!-- TypeScript -->
                        <svg v-else-if="tech.type === 'ts'" viewBox="0 0 24 24" class="h-8 w-8" fill="#3178C6" aria-hidden="true">
                            <rect width="24" height="24" rx="3" fill="#3178C6" />
                            <path fill="#fff" d="M18.3 12.9c-1-.5-1.5-.9-1.5-1.4 0-.5.4-.8 1-.8.5 0 .9.2 1.2.5l.9-1c-.5-.5-1.2-.8-2-.8-1.4 0-2.3.9-2.3 2.1 0 1.3.8 1.9 2.1 2.5.7.3 1 .6 1 1 0 .4-.4.8-1 .8-.6 0-1.1-.3-1.4-.7l-.9 1c.6.7 1.3 1 2.3 1 1.5 0 2.5-.9 2.5-2.2 0-1.4-.9-2-2.1-2.6zM11.2 9H8.6v10h2.7V9h.3 0zm4.3 0v1.6h2.2V20h2.3V10.6H22V9h-6.5z" />
                        </svg>

                        <!-- Docker -->
                        <svg v-else-if="tech.type === 'docker'" viewBox="0 0 24 24" class="h-8 w-8" fill="#2496ED" aria-hidden="true">
                            <path d="M23.5 8.6c-.3-.8-1.3-1.4-2.4-1.3-.1 0-.7.1-1.4.3-.2-.8-.7-1.4-1.5-1.9l-.6-.4-.4.6c-.5.9-.6 1.9-.3 2.7-.2.2-.5.4-.9.6-.8.4-1.9.5-2.9.5H.5c-.3 0-.5.2-.5.5 0 .3.2.5.5.5h.9v1.3c0 3.7 2.8 6.4 6.5 6.4 4.4 0 7.4-2.3 8.9-6.8.5.3 2.1.2 2.9-.6l1.2-1.1c.6.3 2.3.5 3.1-.9.3-.5.1-1.3-.5-2.1zM7.9 13.4c-.5.5-1.2.8-1.9.8-.7 0-1.4-.3-1.9-.8-.5-.5-.8-1.2-.8-1.9s.3-1.4.8-1.9c.5-.5 1.2-.8 1.9-.8.7 0 1.4.3 1.9.8.5.5.8 1.2.8 1.9-.1.8-.4 1.4-.8 1.9z" />
                        </svg>

                        <!-- MySQL -->
                        <svg v-else-if="tech.type === 'mysql'" viewBox="0 0 24 24" class="h-8 w-8" fill="#00758F" aria-hidden="true">
                            <path d="M12 2C6.5 2 2 3.8 2 6c0 2.2 4.5 4 10 4s10-1.8 10-4c0-2.2-4.5-4-10-4zm0 7C6.5 9 3 7.3 3 6v3c0 2.2 3.5 4 9 4s9-1.8 9-4V6c0 1.3-3.5 3-9 3zm0 0c4.5 0 8-1.4 9-2.5V13c0 2.2-3.5 4-9 4s-9-1.8-9-4V8.5C5 10 7.5 11.5 12 11.5v-.5c-5.5 0-9-1.7-9-3s3.5 1.7 9 1.7 8-1.5 8-3-3.5 1 -8 1z" />
                        </svg>

                        <!-- PostgreSQL -->
                        <svg v-else-if="tech.type === 'postgres'" viewBox="0 0 24 24" class="h-8 w-8" fill="#336791" aria-hidden="true">
                            <path d="M12 2C6.5 2 2 3.8 2 6v12c0 2.2 4.5 4 10 4s10-1.8 10-4V6c0-2.2-4.5-4-10-4zm5 7.5h-2c0 1.4-1.1 2.5-2.5 2.5h-1c-1.4 0-2.5-1.1-2.5-2.5H7c0 1.4-1.1 2.5-2.5 2.5V10c-.5 0-1 .5-1 1s.5 1 1 1h2c0 1.4 1.1 2.5 2.5 2.5h.5v2.5c0 .3.2.5.5.5s.5-.2.5-.5v-2.5H13c1.4 0 2.5-1.1 2.5-2.5h2c.5 0 1-.5 1-1s-.5-1-1-1h-1.5c0-1.4-1.1-2.5-2.5-2.5H14c0-1.1-.9-2-2-2s-2 .9-2 2c0 .3.2.5.5.5s.5-.2.5-.5c0-.6.4-1 1-1s1 .4 1 1c0 .3-.2.5 0 .5.6 0 1 .4 1 .5z" />
                        </svg>

                        <!-- Redis -->
                        <svg v-else-if="tech.type === 'redis'" viewBox="0 0 24 24" class="h-8 w-8" fill="#DC382D" aria-hidden="true">
                            <path d="M12 2c-4.4 0-8 1.4-8 3.2s3.6 3.2 8 3.2 8-1.4 8-3.2S16.4 2 12 2zm0 5.1c-3.9 0-6.6-1.1-6.9-1.8.1-.8 2.9-1.9 6.9-1.9s6.8 1.1 6.9 1.9c-.3.7-3 1.8-6.9 1.8zM12 8.6c-4.4 0-8 .6-8 1.4v.9c.3-.8 3.6-1.4 8-1.4s7.7.6 8 1.4V10c0-.8-3.6-1.4-8-1.4zm0 3.6c-4.4 0-8 .6-8 1.4v.9c.3-.8 3.6-1.4 8-1.4s7.7.6 8 1.4V13.6c0-.8-3.6-1.4-8-1.4zm0 3.6c-4.4 0-8 .6-8 1.4V18c0 .8 3.6 1.4 8 1.4s8-.6 8-1.4v-1.4c0-.8-3.6-1.4-8-1.4zm0 3.6c-3.9 0-6.8.9-6.9.9h.1c0-.5 3-1 6.8-1s6.8.5 6.8 1c-.1 0-.9-.9-6.8-.9z" />
                        </svg>

                        <!-- Git -->
                        <svg v-else-if="tech.type === 'git'" viewBox="0 0 24 24" class="h-8 w-8" fill="none" aria-hidden="true">
                            <circle cx="6" cy="4" r="2.2" fill="#F05032" />
                            <circle cx="6" cy="20" r="2.2" fill="#F05032" />
                            <circle cx="18" cy="18" r="2.2" fill="#F05032" />
                            <path d="M6 6.2v11.6M6 7l8.5 2.5a2 2 0 0 1-.2 1l-4.6 4.9M10 15l-1 5.2" stroke="#F05032" stroke-width="1.3" fill="none" stroke-linecap="round" />
                        </svg>

                        <!-- GitHub -->
                        <svg v-else-if="tech.type === 'github'" viewBox="0 0 24 24" class="h-8 w-8" fill="currentColor" aria-hidden="true">
                            <path d="M12 .5C5.9.5.9 5.5.9 11.6c0 4.9 3.2 9.1 7.6 10.6.6.1.8-.2.8-.5v-1.8c-3.1.7-3.8-1.5-3.8-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.4-.3-5-1.2-5-5.4 0-1.2.4-2.2 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10 10 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.7 1.1 1.7 1.1 2.9 0 4.2-2.6 5.1-5 5.4.4.4.8 1.1.8 2.2V21.7c0 .3.2.6.8.5 4.4-1.5 7.6-5.7 7.6-10.6C23.1 5.5 18.1.5 12 .5z" />
                        </svg>

                        <!-- Linux -->
                        <svg v-else-if="tech.type === 'linux'" viewBox="0 0 24 24" class="h-8 w-8" fill="currentColor" aria-hidden="true">
                            <path d="M15.6 13.6c.3-.6.5-1.2.5-1.9 0-3-2.2-5-5.7-5-3.2 0-5.7 2-5.7 4.8 0 .7.2 1.4.5 2-.1.5-.5 1-.5 1.4-.1 1.3.9 2.5 2.2 3.2.9.5 2 .8 3.1.8.3 0 .6-.1.9-.2h2.2c1-.1 1.8-.6 2.7-1 .8-.5 1.4-1.2 1.6-2 .3-1.1-.1-2.2-.8-3.1zM9.6 7.6c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8.8-1.8 1.8-1.8zm4.8 8.2h-.2c-1-.4-2.1-.6-3.2-.6s-2.2.2-3.2.6c-.7.3-1.3.8-1.6 1.4-.2.4-.1.8.2 1.1.4.4 1 .5 1.6.3.8-.3 1.7-.4 2.6-.4s1.8.1 2.6.4c.6.2 1.2.1 1.6-.3.3-.3.4-.7.2-1.1-.3-.6-.9-1.1-1.6-1.4z" opacity="0.95" />
                            <path d="M16.5 17.9v.5c0 .4-.1.9-.3 1.2h.1c.4-.2.7-.6.9-1.1.1-.3.1-.6.1-.8-.3.1-.5.2-.8.2z" />
                        </svg>

                        <!-- Nginx -->
                        <svg v-else-if="tech.type === 'nginx'" viewBox="0 0 24 24" class="h-8 w-8" fill="none" stroke="#009639" aria-hidden="true">
                            <path d="M3 5v14l9-7v7l9-7V5l-9 7 0 0L3 5Z" fill="#009639" stroke="none" />
                            <path d="M5.5 6.2V17L13.5 12v0M18.5 6.2V17L10.5 12" stroke="#fff" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" fill="none" />
                        </svg>

                        <!-- Git -->
                    </template>
                </TechLogo>
            </div>
        </div>
    </section>
</template>
