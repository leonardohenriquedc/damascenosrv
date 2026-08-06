<?php

use App\Http\Controllers\ProjectsController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');
});

Route::get('/projetos', [ProjectsController::class, 'index'])->name('projects.index');

// REST API para listar projetos (para consumidores externos).
Route::get('/projects', [ProjectsController::class, 'getall'])->name('projects.api');
Route::get('/api/projects', [ProjectsController::class, 'getall'])->name('projects.api.json');

require __DIR__.'/settings.php';
