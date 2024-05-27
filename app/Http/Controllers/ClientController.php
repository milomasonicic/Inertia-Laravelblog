<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    //
    public function index(){
        return Inertia::render('clientComp/FrontPage');
    }

    //showByCategory
    public function showCategory($tag){

        $title = $tag;
        $category = Post::where('tag', $tag)->with('files')->paginate(6);

        
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
}
