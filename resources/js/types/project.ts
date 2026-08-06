export interface Project {
    id: number;
    name: string;
    description: string;
    link_site?: string | null;
    link_github?: string | null;
    stack: string[];
    created_at?: string | null;
    updated_at?: string | null;
}
