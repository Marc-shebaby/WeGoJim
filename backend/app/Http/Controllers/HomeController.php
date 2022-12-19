<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use App\Models\Post;
<<<<<<< HEAD:backend/app/Http/Controllers/HomeController.php
=======

>>>>>>> 08fc17ab2c8d278290fc9717b7673aaed771b51b:WeGoJim/app/Http/Controllers/HomeController.php
class HomeController extends Controller
{
 
            function add_posts(Request $req, $id){
                $new_post= new Post;
              
                    

                    $new_post->img_src = $req->img_src;
                    
                    $new_post->content= $req ->content;
                
                    $new_post->user_id = $id;
                    if($new_post->save()){
<<<<<<< HEAD:backend/app/Http/Controllers/HomeController.php
                        $user = User::where("id", "=", $id)->get();
                        $user[0]->score+=1;
=======
                        User::find($id)->increment('score');
>>>>>>> 08fc17ab2c8d278290fc9717b7673aaed771b51b:WeGoJim/app/Http/Controllers/HomeController.php
                        return response()->json([
                            "status" => "Post Added"
                        ]);
                        }else{
                            return response()->json([
                                "status" => "Error Adding"
                            ]);
                        }
                
                }
        function get_posts(){
            $posts = DB::table('posts')
            ->join('users', 'posts.user_id', '=', 'users.id')
            ->select('users.username', 'posts.img_src', 'posts.created_at','posts.content')
            ->get();
            return response()->json(["posts"=>$posts,]);
        }
<<<<<<< HEAD:backend/app/Http/Controllers/HomeController.php


}
=======
        function get_to_delete_post( $id,$img_src){
            User::find($id)->decrement('score');
          
          
            $to_del=Post::where('user_id',$id)
            ->where('img_src',$img_src)
            -> delete();
        
            return response()->json(["posts"=>$to_del,]);
       
        }
        function get_top(){
            $user = User::orderBy("score", "desc")
            ->limit(5)
            ->get();

        return response()->json(["users"=>$user]);
        }


};
>>>>>>> 08fc17ab2c8d278290fc9717b7673aaed771b51b:WeGoJim/app/Http/Controllers/HomeController.php
