<?php

use Illuminate\Database\Seeder;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $credentialAdmin = [
            'name'  => 'Armel Nya',
            'email' => 'armelnganji@gmail.com',
            'password' => bcrypt('armel') 
        ];

        $user = User::create($credentialAdmin);
    }
}
