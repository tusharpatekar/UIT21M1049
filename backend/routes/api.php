<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/categories/{categoryName}/products', [ProductController::class, 'getTopProducts']);
Route::get('/categories/{categoryName}/products/{productId}', [ProductController::class, 'getProductDetails']);
