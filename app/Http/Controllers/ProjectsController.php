<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function getall(){
        $projects = Projects::all();
        return response()->json($projects);
    }
}
