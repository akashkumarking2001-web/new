<#
  download_images_batch2.ps1
  Downloads the remaining images discovered from page-by-page scraping
#>

$BaseRemote = "https://html.vecurosoft.com/foodano/demo/assets/img"
$BaseLocal = "d:\new 5\foodano-demo\main_file\foodano-ltr\assets\img"

$images = @(
    # ── Cart ──
    "cart/cart-img-1-1.jpg", "cart/cart-img-1-2.jpg", "cart/cart-img-1-3.jpg",
    "cart/cart-img-1-4.jpg", "cart/cart-img-1-5.jpg",

    # ── Icons (extra) ──
    "icons/info-icon-1.png", "icons/sec-icon-1.png", "icons/sec-icon-2.png",

    # ── Hero (index 6 specific - extended set) ──
    "hero/hero-6-1-4.png", "hero/hero-6-1-5.png",
    "hero/hero-6-leaf-1.png", "hero/hero-6-leaf-2.png",
    "hero/hero-6-leaf-3.png", "hero/hero-6-leaf-4.png",
    "hero/hero-bg-6-1.jpg",

    # ── About (extended) ──
    "about/ab-6-1.png", "about/ab-6-2.png", "about/ab-6-3.png",
    "about/ab-7-1.png", "about/ab-8-1.png", "about/ab-8-2.png",
    "about/about-img-1.png", "about/about-img-1-2.png",
    "about/shape-1.png", "about/shape-1-1.png",
    "about/about-organic.png", "about/about-bg-1-1.png",

    # ── Shape (extended) ──
    "shape/filter-icon-bg-1-1.png", "shape/filter-icon-bg-1-2.png",
    "shape/newsletter-s-008.png", "shape/newsletter-bg-1-1.png",
    "shape/feature-shape.png",
    "shape/service-s-1-1.png", "shape/service-s-1-2.png",
    "shape/bg-00778.png", "shape/bg-00779.png",
    "shape/pack-bg.png", "shape/footer-5-2.png",

    # ── Shop (product-1 as PNG, shop-details, shop-thumb, shop-desc) ──
    "shop/product-1-1.png", "shop/product-1-2.png", "shop/product-1-3.png",
    "shop/product-1-4.png", "shop/product-1-5.png", "shop/product-1-6.png",
    "shop/product-1-7.png", "shop/product-1-8.png", "shop/product-1-9.png",
    "shop/shop-details-1.jpg", "shop/shop-details-2.jpg", "shop/shop-details-3.jpg",
    "shop/shop-details-4.jpg", "shop/shop-details-5.jpg",
    "shop/shop-thumb-1.jpg", "shop/shop-thumb-2.jpg", "shop/shop-thumb-3.jpg",
    "shop/shop-thumb-4.jpg", "shop/shop-thumb-5.jpg",
    "shop/shop-desc-1.jpg", "shop/shop-desc-2.jpg",

    # ── Package / deals ──
    "package/p-1-1.jpg", "package/p-1-2.jpg", "package/p-1-3.jpg", "package/p-1-4.jpg",

    # ── Brand (logo set) ──
    "brand/logo-1-1.png", "brand/logo-1-2.png", "brand/logo-1-3.png", "brand/logo-1-4.png",
    "brand/logo-1-5.png", "brand/logo-1-6.png", "brand/logo-1-7.png", "brand/logo-1-8.png",

    # ── Gallery (set 2) ──
    "gallery/gal-2-1.jpg", "gallery/gal-2-2.jpg", "gallery/gal-2-3.jpg",
    "gallery/gal-2-4.jpg", "gallery/gal-2-5.jpg", "gallery/gal-2-6.jpg",

    # ── Blog (extended list) ──
    "blog/blog-list-1-1.jpg", "blog/blog-list-1-2.jpg", "blog/blog-list-1-3.jpg",
    "blog/blog-list-1-4.jpg", "blog/blog-list-1-5.jpg",
    "blog/comment-author-1.jpg", "blog/comment-author-2.jpg",
    "blog/blog-details-1.jpg", "blog/blog-details-2.jpg", "blog/blog-details-3.jpg",

    # ── Best Seller ──
    "best-seller/seller-1-1.jpg", "best-seller/seller-1-2.jpg",
    "best-seller/seller-bg-1-1.jpg",

    # ── Service ──
    "service/service-img-1.png", "service/service-img-2.png",
    "service/service-img-3.png", "service/service-img-4.png",
    "service/service-bg-1-1.jpg",

    # ── Team (PNG variant) ──
    "team/team-1-1.png", "team/team-1-2.png", "team/team-1-3.png",
    "team/team-1-4.png", "team/team-1-5.png",

    # ── Breadcrumb ──
    "breadcumb/breadcumb-img-1.jpg", "breadcumb/breadcumb-img-2.jpg",
    "breadcumb/breadcumb-img-3.jpg",

    # ── Footer background ──
    "footer/footer-bg-1.jpg",

    # ── Bg (extra) ──
    "bg/newsletter-bg-1-1.png", "bg/about-bg-1-1.png",

    # ── Video ──
    "video/video-1-1.jpg", "video/video-bg-1.jpg",

    # ── Widget (product) ──
    "widget/widget-product-1.jpg", "widget/widget-product-2.jpg",
    "widget/widget-product-3.jpg", "widget/widget-product-4.jpg",
    "widget/recent-1.jpg", "widget/recent-2.jpg", "widget/recent-3.jpg",

    # ── Testimonial (extended) ──
    "testimonial/testi-1-1.jpg", "testimonial/testi-1-2.jpg", "testimonial/testi-1-3.jpg",
    "testimonial/testi-1-4.jpg", "testimonial/testi-1-5.jpg",

    # ── Counter / CTA bg ──
    "bg/counter-bg-1-1.jpg", "bg/cta-bg-1-1.jpg", "bg/cta-bg-1-2.jpg",
    "bg/why-bg-1-1.jpg", "bg/video-bg-1-1.jpg",

    # ── Extra hero variants that may exist ──
    "hero/hero-1-1.jpg", "hero/hero-1-2.jpg", "hero/hero-1-3.jpg",
    "hero/hero-2-1.jpg", "hero/hero-2-2.jpg", "hero/hero-2-3.jpg",
    "hero/hero-3-1.png", "hero/hero-3-2.png", "hero/hero-3-3.png",
    "hero/hero-4-1.png", "hero/hero-4-2.png", "hero/hero-4-3.png",
    "hero/hero-5-1.jpg", "hero/hero-5-2.jpg", "hero/hero-5-3.jpg",
    "hero/hero-7-1.jpg", "hero/hero-7-2.jpg", "hero/hero-7-3.jpg",
    "hero/hero-8-1.jpg", "hero/hero-8-2.jpg", "hero/hero-8-3.jpg",
    "hero/hero-bg-1-1.jpg", "hero/hero-bg-2-1.jpg", "hero/hero-bg-3-1.jpg",
    "hero/hero-bg-4-1.jpg", "hero/hero-bg-5-1.jpg",
    "hero/hero-bg-7-1.jpg", "hero/hero-bg-8-1.jpg",

    # ── Banner (extended) ──
    "banner/banner-2-1.jpg", "banner/banner-2-2.jpg", "banner/banner-2-3.jpg",
    "banner/banner-3-1.jpg", "banner/banner-3-2.jpg", "banner/banner-3-3.jpg",
    "banner/banner-4-1.jpg", "banner/banner-4-2.jpg",
    "banner/banner-5-1.jpg", "banner/banner-5-2.jpg",
    "banner/banner-6-1.jpg", "banner/banner-6-2.jpg",
    "banner/banner-7-1.jpg", "banner/banner-7-2.jpg",
    "banner/banner-8-1.jpg", "banner/banner-8-2.jpg",

    # ── Favicon ──
    "favicon.png", "favicon.ico", "apple-touch-icon.png"
)

$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
$wc.Headers.Add("Referer", "https://html.vecurosoft.com/")
$wc.Headers.Add("Accept", "image/webp,image/apng,image/*,*/*;q=0.8")

$ok = 0; $skip = 0; $fail = 0

foreach ($rel in $images) {
    $remoteUrl = "$BaseRemote/$rel"
    $localPath = "$BaseLocal\$($rel -replace '/','\' )"
    $dir = Split-Path $localPath

    # Create directory if missing
    if (!(Test-Path $dir)) {
        New-Item -ItemType Directory -Force -Path $dir | Out-Null
    }

    # Skip if already downloaded and large enough
    if ((Test-Path $localPath) -and (Get-Item $localPath).Length -gt 2000) {
        Write-Host "SKIP (exists) $rel"
        $skip++
        continue
    }

    try {
        $wc.DownloadFile($remoteUrl, $localPath)
        $size = (Get-Item $localPath).Length
        if ($size -gt 500) {
            Write-Host "OK  [$([math]::Round($size/1024,1)) KB] $rel"
            $ok++
        }
        else {
            Write-Host "TINY[$size b]  $rel  (404 or empty on remote)"
            $fail++
        }
    }
    catch {
        Write-Host "FAIL $rel"
        $fail++
    }
}

$wc.Dispose()

Write-Host ""
Write-Host "=============================="
Write-Host "Downloaded OK : $ok"
Write-Host "Skipped       : $skip"
Write-Host "Failed/404    : $fail"
Write-Host "=============================="
Write-Host ""

# Report what we actually have now
$total = (Get-ChildItem "$BaseLocal" -Recurse -File).Count
$bigOnes = (Get-ChildItem "$BaseLocal" -Recurse -File | Where-Object { $_.Length -gt 2000 }).Count
Write-Host "Total files in assets/img : $total"
Write-Host "Real images (>2KB)        : $bigOnes"
