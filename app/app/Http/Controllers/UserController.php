<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class UserController extends Controller
{
    function register(Request $request){
        $user = new User();
        $user->userName = $request->input('userName');
        $user->email = $request->input('email');
        $user->password =Hash::make($request->input('password'));   
        $user->save();    
        return $user;
    }
    function login(Request $request){
        $user = User::where('email', $request->input('email'))->first();
        if(!$user || !Hash::check($request->input('password'), $user->password)){
            return null;
        }
        return $user;
    }
}
