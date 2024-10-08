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


    public function show($id) 
    {
       $post = Post::with('files')->find($id);

       return Inertia::render('YourPost', [
        'post' => $post
       ]);

    }

    //
    public function update(Request $request) 
    {
       // dd($request);

        $id= $request->postId;
       $post= Post::find($id);
      
       $post->update([
        'content' => $request->content,
        'title' => $request->title,
        'tag' => $request->tag
    ]);      
    }


     //delete

     public function delete(Request $request)
     {

        //dd($request);

         $post = Post::find($request->postId);
         $post->delete();

         return redirect()->route('mypage');
         
     }

     //publisy
     public function publish(Request $request)
     {

        //dd($request);
         $post = Post::find($request->postId);
         $post->update([
            'published'=> 1
         ]);

         $myPosts = Post::where('user_id', auth()->user()->id)->get();
         //dd($myPosts);

         return Inertia::render('MyPage', [
            'myPosts' => $myPosts
           ]);
         
     }
  
}

/*
updejt fukcija

public function update(Request $request) 
{
    $id = $request->postId;
    $post = Post::find($id);
      
    $dataToUpdate = [];

    if (!is_null($request->content)) {
        $dataToUpdate['content'] = $request->content;
    }

    if (!is_null($request->title)) {
        $dataToUpdate['title'] = $request->title;
    }

    if (!is_null($request->tag)) {
        $dataToUpdate['tag'] = $request->tag;
    }

    $post->update($dataToUpdate);
}





*/
