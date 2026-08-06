import type { Component } from 'vue';

export interface NavItem {
    label: string;
    /** id anchor on the home page */
    href: string;
    external?: boolean;
}

export interface NavigationLink extends NavItem {
    icon?: Component;
}

export const COMPANY = {
    name: 'DamascenoSRV',
    email: 'comercial@damascenosrv.com',
    instagram: 'https://www.instagram.com/damascenosrv/',
    facebook: 'https://www.facebook.com/profile.php?id=61593098602637',
};

/** Anchor links rendered on the single-page header. */
export const primaryNavigation: NavItem[] = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
];
