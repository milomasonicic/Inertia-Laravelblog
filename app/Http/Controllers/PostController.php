<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //
    public function store(Request $request) 
    {


       $validated = $request->validate([
        'content' => 'required|text',
        'title' => 'required|string',
        'content' => 'required|string|max:16000',
        'tag'=> 'required'
       ], [
        'content' => 'Text is required',
        'tag' => 'Tag is required',
        'title' => 'Title is required',
        'content' => 'The content may not be longer than 16000 charachters'

       ]); 
      
       $post = Post::create([ 
            'content' => $request->content,
            'user_id' => $request->user_id,
            'title'=> $request->title,
            'tag'=> $request->tag,
            'video_url'=> " ",
            'image_url'=> " ",
            ]);
    
         
        $postId = $post->id;
        
        return redirect()->route('newPost', ['id'=> $postId]);

    }


    public function store2(Request $request) 
    {
        dd($request);

    }


  
}
