<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldsToUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('login')->unique()->nullable();
            $table->enum('gender', ['M','F'])->nullable();
            $table->boolean('is_active')->default(true);
            $table->string('picture')->nullable();
            $table->string('country')->nullable();
            $table->string('town')->nullable();
            $table->string('phone')->nullable();
            $table->string('github')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'first_name',
                'last_name',
                'login',
                'gender',
                'is_active',
                'picture',
                'country',
                'town',
                'phone',
                'github'
            ]);
        });
    }
}
