<?php

use App\Models\File;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\FileController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//postsStore
Route::post('/pstore', [PostController::class, 'store'])->name('post.store');
//Img Part of form
Route::get('newPost/{id}', function($id) {
    return Inertia::render('NewPost', [
        'postId'=> $id,
        'post'=> Post::find($id),
        'files'=> File::where('post_id', $id) ?? []
    ]);
})->name('newPost');

//yourPost
Route::get('/yourPost/{id}', [PostController::class, 'show'])->name('yourPost');

Route::post('/file-upload', [FileController::class, 'store'])->name('upload');

require __DIR__.'/auth.php';
