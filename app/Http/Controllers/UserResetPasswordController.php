<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Support\Facades\Password;

class UserResetPasswordController extends Controller
{
    //
  use ResetsPasswords;


  //---- ResetsPasswords  methods


  protected function sendResetResponse(Request $request, $response)
  {
    return response(['message' => $response]);
  }

  protected function sendResetFailedResponse(Request $request, $response)
  {
    return response(['error' => $response], 422);
  }

  public function broker()
  {
    return Password::broker('users');
  }




}
