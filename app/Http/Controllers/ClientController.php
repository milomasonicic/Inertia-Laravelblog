<?php

namespace App\Http\Controllers;

use App\Models\File;
use App\Models\Post;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class ClientController extends Controller
{
    //
    public function index(){
        return Inertia::render('clientComp/FrontPage');
    }

    //showByCategory
    public function showCategory($tag){

        $title = $tag;
        $category = Post::where('tag', $tag)->with('files')->orderBy('created_at', 'desc')->paginate(9);

        
        $formattedPosts = $category->getCollection()->map(function($c) {
            return [
                'id' => $c->id,
                'title' => $c->title,
                'content' => $c->content,
                'created_at' => $c->created_at->diffForHumans(),
                'files' => $c->files->map(function($file) {
                    return [
                        'id' => $file->id,
                        'name' => $file->name,
                        'filename' => $file->filename,
                        'tag' => $file->tag,
                        'img_url' => $file->img_url,
                    ];
                }),
               
            ];
        });
        
        return Inertia::render('clientComp/Tag', [
            'cat' => $formattedPosts,
            'title' => $title,
            'pagination' => $category->toArray()
        ] );

    }

    public function viewPost($id){

        $post = Post::find($id);
        $authorId = $post->user_id;
        $author = User::find($authorId);
        $files = File::where('post_id', $id)->get();
        return Inertia::render('clientComp/LayOut', [
            'post'=>$post,
            'files'=>$files,
            'author'=>$author
        ]);
    }
    
    public function frontPage(){

        $posts = Post::with('files')->orderBy('created_at', 'desc')->take(6)->get()->map(function ($post) {
            $post->created_at_diff = $post->created_at->diffForHumans();
            return $post;
        });;
       //   'created_at' => $c->created_at->diffForHumans(),
        // dd($posts);
        return Inertia::render('clientComp/FrontPage', [
            'posts'=>$posts,
        ]);
    }

    
}
