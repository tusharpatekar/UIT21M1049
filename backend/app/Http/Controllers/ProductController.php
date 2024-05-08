<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    public function getTopProducts(Request $request, $categoryName)
    {
        $company = $request->query('company');
        $top = $request->query('top');
        $minPrice = $request->query('minPrice');
        $maxPrice = $request->query('maxPrice');
        $page = $request->query('page', 1);
        $sortBy = $request->query('sortBy', 'rating');
        $sortOrder = $request->query('sortOrder', 'desc');

        $accessToken = config('services.test_server.access_token');

        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $accessToken
        ])->get("http://20.244.56.144/test/companies/$company/categories/$categoryName/products", [
                    'top' => $top,
                    'minPrice' => $minPrice,
                    'maxPrice' => $maxPrice
                ]);
        $products = $response->json();
        foreach ($products as $key => &$product) {
            $product['product_id'] = "{$company}-{$categoryName}-{$key}";
        }

        $perPage = $top > 10 ? $top : 10;
        $startIndex = ($page - 1) * $perPage;
        $paginatedProducts = array_slice($products, $startIndex, $perPage);

        if ($sortBy === 'price' || $sortBy === 'rating' || $sortBy === 'discount') {
            usort($paginatedProducts, function ($a, $b) use ($sortBy, $sortOrder) {
                if ($sortOrder === 'asc') {
                    return $a[$sortBy] <=> $b[$sortBy];
                } else {
                    return $b[$sortBy] <=> $a[$sortBy];
                }
            });
        }
        return response()->json($paginatedProducts);
    }

    public function getProductDetails(Request $request, $categoryName, $productId)
    {
        $company = $request->query('company'); 
        $accessToken = config('services.test_server.access_token');
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $accessToken
        ])->get("http://20.244.56.144/test/categories/$categoryName/products/$productId");
        $productDetails = $response->json();
        return response()->json($productDetails);
    }

}
