<?php

namespace App\Models;

use App\Models\Post;
use PhpParser\Node\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
      'name', 'post_id', 'filename', "tag", "img_url"
    ];

    //model

    public function post()
    {
        return $this->belongsTo(Post::class);
    }

 

    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => url('uploads/'.$value),
        );
    }
}
