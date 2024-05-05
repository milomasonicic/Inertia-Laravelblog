<?php

namespace App\Models;

use App\Models\File;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{
    use HasFactory;

    protected $guarded = [ ];

      //model

      public function files()
      {
          return $this->hasMany(File::class);
      }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
