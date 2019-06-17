<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;

class UserForgotPasswordController extends Controller
{
    //
  use SendsPasswordResetEmails;


  //---- SendsPasswordResetEmails methods
  protected function sendResetLinkResponse(Request $request, $response)
  {
    return response(['message' => $response]);
  }

  protected function sendResetLinkFailedResponse(Request $request, $response)
  {
    return response(['error' => 'failed for some resaon'], 422);
  }

  //default is admin because of default web guard
  public function broker()
  {
    return Password::broker('users');
  }
}
