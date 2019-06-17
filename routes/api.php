<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'UserAuthenticationController@login')->name('user.login');
//Route::post('/register', 'UserAuthenticationController@register')->name('user.logout');
Route::post('/register', 'UserAuthenticationController@register')->name('user.register');
Route::post('/password/email', 'UserForgotPasswordController@sendResetLinkEmail');
Route::post('/password/reset', 'UserResetPasswordController@reset');


Route::middleware('auth:api')->post('/logout','UserAuthenticationController@logout');