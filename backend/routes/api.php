<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
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
Route::group([
   'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);   
    
});
Route::post('/add/{id}', [HomeController::class, 'add_posts']);
<<<<<<< HEAD:backend/routes/api.php
Route::get('/get', [HomeController::class, 'get_posts']);  
=======
Route::get('/get', [HomeController::class, 'get_posts']); 
Route::get('/rem/{id}/{img_src}', [HomeController::class, 'get_to_delete_post']); 
Route::get('/top', [HomeController::class, 'get_top']); 
>>>>>>> 08fc17ab2c8d278290fc9717b7673aaed771b51b:WeGoJim/routes/api.php
