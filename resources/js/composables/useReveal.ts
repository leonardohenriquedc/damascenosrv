import type { Directive } from 'vue';

/**
 * A `v-reveal` custom directive that fades + slides elements up the first
 * time they scroll into view. Applying it warms up a subtle IntersectionObserver
 * that is removed once the element has been revealed so it only animates once.
 */
export const revealDirective: Directive<HTMLElement> = {
    mounted(el, binding) {
        el.dataset.reveal = String(binding.value ?? true);

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    el.dataset.revealed = 'true';
                    observer.disconnect();
                }
            },
            {
                threshold: 0.15,
                // Bias the viewport upward so cards pop in slightly before
                // they become fully visible.
                rootMargin: '0px 0px -10% 0px',
            },
        );

        observer.observe(el);
    },
};
