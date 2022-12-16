<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Validator;
class UserController extends Controller
{
    function login(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'username' => 'required|string',
            'password' => 'required|string',
        ]);
        if($validate->fails()){
            return response()->json([
                "status" => "error",
                "results" =>"characters required"
            ]);
        }
        $credentials = $request->only('username', 'password');
        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'results' => 'Invalid Credentials',
            ]);
        }
        $user = Auth::user();
        return response()->json([
                'status' => 'success',
                'results' => 'Welcome',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ], 200);
    }
    function sign(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'username' => 'required|string',

            'email' => 'required|string',

            'password' => 'required|string',
        ]);
        if($validate->fails()){
            return response()->json([
                "status" => "error",
                "results" =>" email is not in the right format"
            ]);
        }
        $user = new User;
        $user->username = $request->username ? $request->username : $user->username;
        $user->password= $request->password ? $request->password: $user->password; #already crypted in js
        $user->email = $request->email ? $request->email : $user->email;
        if($user->save()){
            return response()->json([
                "status" => "success",
                "results" => $user
            ], 200);
        }else{
            return response()->json([
                "status" => "failure",
            ], 400);
        }


}
}
