<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

  
})*/
Route::group(["prefix" => "v0.1"], function(){
    //authenticated apis
    Route::group(["middleware" => "admin.auth"], function(){
        Route::group(["prefix" => "user"], function(){
            Route::post("signin", [UserController::class, "sign"]);
            Route::get("login",[UserController::class,"login"]);
        })

        })
    })
