<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\User;
use App\Permission;

class Role extends Model
{
    protected $guarded = [];
   //  protected $table = 'roles';

   //  public function users(){
   //     return $this->belongsToMany('User','user_roles');
   //  }
   //   public function permissions(){
   //     return $this->belongsToMany('Permission');
   //  }
}
