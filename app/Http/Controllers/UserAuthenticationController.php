<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use GuzzleHttp\Client;
use Illuminate\Routing\Route;

class UserAuthenticationController extends Controller
{
    //

    // public function __construct()
    // {
    //     $this->middleware('guest')->except('logout');
    // }

    public function register(Request $request)
    {

      $validate = $request->validate([
        'email' => 'required',
        'name' => 'required',
        'password' => 'required'
      ]);

      $user = new User();

      $user->name = $request->name;
      $user->email = $request->email;
      $user->password = bcrypt($request->password);
      $user->save();


      $req = Request::create(route('passport.token'), 'POST', [

          'grant_type' => 'password',
          'client_id' => config('auth.oauth_credentials.password_grant_client.id'),
          'client_secret' => config('auth.oauth_credentials.password_grant_client.secret'),
          'username' => $user->email,
          'password' => $request->password,
          'scope' => ''
      ]);

      $response = app()->handle($req);

      return $response;

//      $http = new Client();
//
//      $response = $http->post(url('http://localhost:8000/outh/token'),[
//
//        'body' =>[
//          'grant_type' => 'password',
//          'client_id' => 2,
//          'client_secret' => 'keDOPs7xGk5AlKOmO48QWNUOBfwuVH0PuPSJ6Y2L',
//          'username' => $user->email,
//          'password' => $request->password,
//          'scope' => ''
//        ]
//      ]);
//
//      return $response->getStatusCode();

    }

    public function login()
    {

    }

    public function logout()
    {

    }

}
