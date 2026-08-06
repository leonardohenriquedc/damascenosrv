<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Projects extends Model
{
    use HasFactory, Notifiable;

    protected $casts = [
        'stack' => 'array',
    ];

    protected $attributes = [
        'description' => '',
        'link_site' => '',
        'link_github' => '',
        'stack' => '[]',
    ];
}
