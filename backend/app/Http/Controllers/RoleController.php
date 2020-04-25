<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Role;

class RoleController extends Controller
{
   public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);
        $role = Role::create($request->all()); // we create new rule
        return response()->json($role);
    }

}
