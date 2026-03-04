$BaseRemote = "https://html.vecurosoft.com/foodano/demo"
$BaseLocal = "d:\new 5\foodano-demo\main_file\foodano-ltr"
$assetsDir = "$BaseLocal\assets\img"

$images = @(
    "assets/img/shop/product-1-1.png", "assets/img/shop/product-1-2.png", "assets/img/shop/product-1-3.png", 
    "assets/img/shop/product-1-4.png", "assets/img/shop/product-1-5.png", "assets/img/shop/product-1-6.png", 
    "assets/img/shop/product-1-7.png", "assets/img/shop/product-1-8.png", "assets/img/shop/product-1-9.png",
    "assets/img/shop/product-2-1.png", "assets/img/shop/product-2-2.png", "assets/img/shop/product-2-3.png", 
    "assets/img/shop/product-2-4.png", "assets/img/shop/product-2-5.png", "assets/img/shop/product-2-6.png", 
    "assets/img/shop/product-2-7.png", "assets/img/shop/product-2-8.png",
    "assets/img/shop/product-3-1.png", "assets/img/shop/product-3-2.png", "assets/img/shop/product-3-3.png",
    "assets/img/shop/product-3-4.png", "assets/img/shop/product-3-5.png", "assets/img/shop/product-3-6.png",
    "assets/img/shop/product-3-10.png", "assets/img/shop/product-3-15.png", "assets/img/shop/product-3-20.png",
    "assets/img/category/cat-1-1.png", "assets/img/category/cat-1-2.png", "assets/img/category/cat-1-3.png", "assets/img/category/cat-1-4.png",
    "assets/img/banner/banner-1-1.jpg", "assets/img/banner/banner-1-2.jpg", "assets/img/banner/banner-1-3.jpg",
    "assets/img/hero/hero-bg-6-1.jpg", "assets/img/hero/hero-6-1.png", "assets/img/hero/hero-6-1-1.png", "assets/img/hero/hero-6-1-2.png", "assets/img/hero/hero-6-1-3.png",
    "assets/img/hero/hero-6-leaf-1.png", "assets/img/hero/hero-6-leaf-2.png", "assets/img/hero/hero-6-leaf-3.png", "assets/img/hero/hero-6-leaf-4.png",
    "assets/img/shop/shop-details-1.jpg", "assets/img/shop/shop-details-2.jpg", "assets/img/shop/shop-details-3.jpg", "assets/img/shop/shop-details-4.jpg", "assets/img/shop/shop-details-5.jpg",
    "assets/img/shop/shop-thumb-1.jpg", "assets/img/shop/shop-thumb-2.jpg", "assets/img/shop/shop-thumb-3.jpg", "assets/img/shop/shop-thumb-4.jpg", "assets/img/shop/shop-thumb-5.jpg",
    "assets/img/blog/blog-4-1.jpg", "assets/img/blog/blog-4-2.jpg", "assets/img/blog/blog-4-3.jpg", "assets/img/blog/blog-4-4.jpg"
)

$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
$wc.Headers.Add("Referer", "https://html.vecurosoft.com/")

foreach ($img in $images) {
    $remoteUrl = "$BaseRemote/$img"
    $localFile = "$BaseLocal\$($img -replace '/', '\')"
    $directory = Split-Path $localFile -Parent
    
    if (-not (Test-Path $directory)) {
        New-Item -ItemType Directory -Path $directory -Force | Out-Null
    }
    
    Write-Host "Downloading $remoteUrl ..."
    try {
        $wc.DownloadFile($remoteUrl, $localFile)
        $fileSize = (Get-Item $localFile).Length
        if ($fileSize -lt 3000) {
            Write-Host "Warning: File size small ($fileSize bytes) for $img" -ForegroundColor Yellow
        }
    }
    catch {
        Write-Host "Failed to download $img" -ForegroundColor Red
    }
}
$wc.Dispose()
Write-Host "Batch download complete."
