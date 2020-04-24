<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\User;
use App\Invitation;

class Group extends Model
{
    //
    // protected $table = 'groups';
    
    public function users(){
       return $this->belongsToMany('User');
    }
}
