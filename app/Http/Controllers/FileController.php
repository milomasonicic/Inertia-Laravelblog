<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    //

    public function store(Request $request)
    {
       
       $validated = $request->validate([
        'name' => 'required|string',
       // 'tag'=> 'required',
        'file'=> 'required|file|mimes:jpeg, png, mp4|max:5000'
       ], [
        'name' => 'Name is required',
      //  'tag' => 'Tag is required',
        'file' => 'File is required',
        'file.mimes' => 'Supported files are: jpeg, png',
        'file.max' => 'Maximum file size is 5MB',
        
       ]); 

      // Provjeri broj slika po postu
      $postId = $request->postId;
      $imageCount = File::where('post_id', $postId)->count();
      //dd($imageCount);


       if($imageCount >= 2) {
       
        return redirect()->back()->withErrors(['file' => 'Maximum 2 images allowed per post']);
       } else {
        $fileName = time().'.'.$request->file->extension();  
        $request->file->move(public_path('uploads'), $fileName);
        File::create([
            'name' => $request->name,
            'filename' => $fileName,
            'img_url'=>  "/uploads/".$fileName,
            'post_id' => $request->postId,
           // "tag" => $request->type
            "tag" => "video"
        ]);

       // return redirect()->route('yourPost', ['id'=> $postId]);
       
       };       
    
        //$postId = $request->postId;
      
        //return redirect()->route('yourPost', ['id'=> $postId]);
    }
    
    //api route Index

    public function show($postId)
    {
        // Retrieve all files where the post_id column equals 2
        $item = File::where('post_id', $postId)->get();
        return response()->json($item);
    }

    public function store2(Request $request) {
        dd($request);
        $fileName = time().'.'.$request->file->extension();  
        $request->file->move(public_path('uploads'), $fileName);
    }

    //delete

    public function delete(Request $request)
    {
        $file = File::find($request->fileId);
        
        if ($file) {
            
            Storage::delete($file->img_url);
            $file->delete();

        } else {
            return response()->json(['message' => 'File not found'], 404);
        }
    }

    public function updatename(Request $request){

       // dd($request);
        $id= $request->fileId;
        $file= File::find($id);

        $file->update([
            'name' => $request->title,
        ]); 
    }

}
