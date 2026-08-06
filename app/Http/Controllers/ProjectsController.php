<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;
use Inertia\Inertia;
use Inertia\Response;

class ProjectsController extends Controller
{
    public function index(): Response
    {
        $projects = $this->resolvedProjects();

        return Inertia::render('Projects', [
            'projects' => $projects,
        ]);
    }

    public function getall(): JsonResponse
    {
        return response()->json($this->resolvedProjects());
    }

    /**
     * Resolve os projetos em um shape estável para a página e a API REST.
     *
     * @return Collection<int, array{id: int, name: string, description: string, link_site: ?string, link_github: ?string, stack: array<int, string>}>
     */
    private function resolvedProjects(): Collection
    {
        return Projects::query()
            ->orderBy('name')
            ->get()
            ->map(fn (Projects $project) => [
                'id' => $project->id,
                'name' => $project->name,
                'description' => $project->description,
                'link_site' => $project->link_site,
                'link_github' => $project->link_github,
                'stack' => $project->stack,
            ]);
    }
}
