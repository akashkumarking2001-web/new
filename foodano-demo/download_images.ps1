<#
  download_images.ps1
  Downloads every image from the live Foodano demo site into the local template,
  replicating the exact same folder/file structure so placeholders are replaced.
#>

$BaseRemote = "https://html.vecurosoft.com/foodano/demo/assets/img"
$BaseLocal  = "d:\new 5\foodano-demo\main_file\foodano-ltr\assets\img"

# Full list of relative image paths scraped from the live site
# (all subfolders: hero, banner, blog, shop, category, bg, brand, gallery,
#  icons, logo, shape, team, testimonial, widget, about, video)

$images = @(
  # ── Logo ──
  "logo.svg",
  "logo-white.svg",
  "apple-touch-icon.png",
  "favicon.png",

  # ── Hero (index variants 1-8, slides 1-5) ──
  "hero/hero-1-1.jpg","hero/hero-1-2.jpg","hero/hero-1-3.jpg","hero/hero-1-4.jpg","hero/hero-1-5.jpg",
  "hero/hero-2-1.jpg","hero/hero-2-2.jpg","hero/hero-2-3.jpg",
  "hero/hero-3-1.png","hero/hero-3-2.png","hero/hero-3-3.png",
  "hero/hero-4-1.png","hero/hero-4-2.png","hero/hero-4-3.png",
  "hero/hero-5-1.jpg","hero/hero-5-2.jpg","hero/hero-5-3.jpg",
  "hero/hero-6-1.png","hero/hero-6-1-1.png","hero/hero-6-1-2.png","hero/hero-6-1-3.png",
  "hero/hero-7-1.jpg","hero/hero-7-2.jpg","hero/hero-7-3.jpg",
  "hero/hero-8-1.jpg","hero/hero-8-2.jpg","hero/hero-8-3.jpg",
  "hero/hero-bg-1-1.jpg","hero/hero-bg-2-1.jpg","hero/hero-bg-3-1.jpg",
  "hero/hero-bg-4-1.jpg","hero/hero-bg-5-1.jpg","hero/hero-bg-6-1.jpg",
  "hero/hero-bg-7-1.jpg","hero/hero-bg-8-1.jpg",

  # ── Banner ──
  "banner/banner-1-1.jpg","banner/banner-1-2.jpg","banner/banner-1-3.jpg",
  "banner/banner-2-1.jpg","banner/banner-2-2.jpg","banner/banner-2-3.jpg",
  "banner/banner-3-1.jpg","banner/banner-3-2.jpg","banner/banner-3-3.jpg",
  "banner/banner-4-1.jpg","banner/banner-4-2.jpg",
  "banner/banner-5-1.jpg","banner/banner-5-2.jpg",
  "banner/banner-6-1.jpg","banner/banner-6-2.jpg",
  "banner/banner-7-1.jpg","banner/banner-7-2.jpg",
  "banner/banner-8-1.jpg","banner/banner-8-2.jpg",

  # ── Categories ──
  "category/cat-1-1.png","category/cat-1-2.png","category/cat-1-3.png","category/cat-1-4.png",
  "category/cat-1-5.png","category/cat-1-6.png",
  "category/cat-2-1.png","category/cat-2-2.png","category/cat-2-3.png","category/cat-2-4.png",
  "category/cat-3-1.png","category/cat-3-2.png","category/cat-3-3.png",
  "category/cat-4-1.png","category/cat-4-2.png","category/cat-4-3.png","category/cat-4-4.png",
  "category/cat-5-1.jpg","category/cat-5-2.jpg","category/cat-5-3.jpg","category/cat-5-4.jpg",

  # ── Shop / Products (sets 1-5, up to 32 products) ──
  "shop/product-1-1.jpg","shop/product-1-2.jpg","shop/product-1-3.jpg","shop/product-1-4.jpg",
  "shop/product-1-5.jpg","shop/product-1-6.jpg","shop/product-1-7.jpg","shop/product-1-8.jpg",
  "shop/product-2-1.png","shop/product-2-2.png","shop/product-2-3.png","shop/product-2-4.png",
  "shop/product-2-5.png","shop/product-2-6.png","shop/product-2-7.png","shop/product-2-8.png",
  "shop/product-3-1.png","shop/product-3-2.png","shop/product-3-3.png","shop/product-3-4.png",
  "shop/product-3-5.png","shop/product-3-6.png","shop/product-3-7.png","shop/product-3-8.png",
  "shop/product-3-9.png","shop/product-3-10.png","shop/product-3-11.png","shop/product-3-12.png",
  "shop/product-3-13.png","shop/product-3-14.png","shop/product-3-15.png","shop/product-3-16.png",
  "shop/product-3-17.png","shop/product-3-18.png","shop/product-3-19.png","shop/product-3-20.png",
  "shop/product-3-21.png","shop/product-3-22.png","shop/product-3-23.png","shop/product-3-24.png",
  "shop/product-3-25.png","shop/product-3-26.png","shop/product-3-27.png","shop/product-3-28.png",
  "shop/product-3-29.png","shop/product-3-30.png","shop/product-3-31.png","shop/product-3-32.png",
  "shop/product-4-1.png","shop/product-4-2.png","shop/product-4-3.png","shop/product-4-4.png",
  "shop/product-5-1.jpg","shop/product-5-2.jpg","shop/product-5-3.jpg","shop/product-5-4.jpg",
  "shop/product-details-1.jpg","shop/product-details-2.jpg","shop/product-details-3.jpg",
  "shop/product-details-4.jpg","shop/product-details-5.jpg",

  # ── Blog ──
  "blog/blog-1-1.jpg","blog/blog-1-2.jpg","blog/blog-1-3.jpg","blog/blog-1-4.jpg",
  "blog/blog-2-1.jpg","blog/blog-2-2.jpg","blog/blog-2-3.jpg","blog/blog-2-4.jpg",
  "blog/blog-3-1.jpg","blog/blog-3-2.jpg","blog/blog-3-3.jpg","blog/blog-3-4.jpg",
  "blog/blog-4-1.jpg","blog/blog-4-2.jpg","blog/blog-4-3.jpg","blog/blog-4-4.jpg",
  "blog/blog-details-1.jpg","blog/blog-details-2.jpg","blog/blog-details-3.jpg",

  # ── Team ──
  "team/team-1-1.jpg","team/team-1-2.jpg","team/team-1-3.jpg","team/team-1-4.jpg",
  "team/team-1-5.jpg","team/team-1-6.jpg",

  # ── Testimonial ──
  "testimonial/testi-1-1.jpg","testimonial/testi-1-2.jpg","testimonial/testi-1-3.jpg",
  "testimonial/testi-1-4.jpg","testimonial/testi-1-5.jpg",
  "testimonial/testi-2-1.jpg","testimonial/testi-2-2.jpg","testimonial/testi-2-3.jpg",

  # ── Brand / Sponsors ──
  "brand/brand-1-1.png","brand/brand-1-2.png","brand/brand-1-3.png","brand/brand-1-4.png",
  "brand/brand-1-5.png","brand/brand-1-6.png","brand/brand-1-7.png","brand/brand-1-8.png",

  # ── Gallery ──
  "gallery/gal-1-1.jpg","gallery/gal-1-2.jpg","gallery/gal-1-3.jpg",
  "gallery/gal-1-4.jpg","gallery/gal-1-5.jpg","gallery/gal-1-6.jpg",

  # ── Background images ──
  "bg/newsletter-bg-1-1.jpg","bg/newsletter-bg-1-2.jpg",
  "bg/counter-bg-1-1.jpg",
  "bg/why-bg-1-1.jpg",
  "bg/cta-bg-1-1.jpg","bg/cta-bg-1-2.jpg",
  "bg/video-bg-1-1.jpg",

  # ── Shapes / Decoratives ──
  "shape/footer-1-1.jpg","shape/footer-2-1.jpg","shape/footer-3-1.jpg",
  "shape/footer-4-1.jpg","shape/footer-5-1.jpg","shape/footer-6-1.jpg",
  "shape/footer-7-1.jpg","shape/footer-8-1.jpg",
  "shape/shape-1.png","shape/shape-2.png","shape/shape-3.png","shape/shape-4.png",
  "shape/shape-5.png","shape/shape-6.png","shape/shape-7.png","shape/shape-8.png",
  "shape/leaf-1.png","shape/leaf-2.png","shape/leaf-3.png","shape/leaf-4.png",

  # ── Icons ──
  "icons/feature-icon-1-1.png","icons/feature-icon-1-2.png",
  "icons/feature-icon-1-3.png","icons/feature-icon-1-4.png",
  "icons/feature-icon-2-1.png","icons/feature-icon-2-2.png",
  "icons/feature-icon-2-3.png","icons/feature-icon-2-4.png",
  "icons/cart-icon.png","icons/wishlist-icon.png","icons/search-icon.png",

  # ── About ──
  "about/about-1-1.jpg","about/about-1-2.jpg","about/about-1-3.jpg",
  "about/about-2-1.jpg","about/about-2-2.jpg",
  "about/about-3-1.jpg","about/about-organic.png",

  # ── Widget / sidebar ──
  "widget/recent-1.jpg","widget/recent-2.jpg","widget/recent-3.jpg",
  "widget/widget-product-1.jpg","widget/widget-product-2.jpg",
  "widget/widget-product-3.jpg","widget/widget-product-4.jpg",

  # ── Video ──
  "video/video-1-1.jpg","video/video-bg-1.jpg"
)

# ── Download ──
$wc = New-Object System.Net.WebClient
$wc.Headers.Add("User-Agent","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36")
$wc.Headers.Add("Referer","https://html.vecurosoft.com/")

$ok = 0; $skip = 0; $fail = 0

foreach ($rel in $images) {
  $remoteUrl = "$BaseRemote/$rel"
  $localPath = "$BaseLocal\$($rel -replace '/','\' )"
  $dir = Split-Path $localPath

  if (!(Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }

  try {
    $wc.DownloadFile($remoteUrl, $localPath)
    $size = (Get-Item $localPath).Length
    if ($size -gt 500) {
      Write-Host "OK  [$size b] $rel"
      $ok++
    } else {
      Write-Host "TINY[$size b] $rel  (may be placeholder on remote too)"
      $skip++
    }
  } catch {
    Write-Host "FAIL $rel  -> $_"
    $fail++
  }
}

$wc.Dispose()
Write-Host "`n============================="
Write-Host "Downloaded OK : $ok"
Write-Host "Tiny/skip     : $skip"
Write-Host "Failed        : $fail"
Write-Host "============================="
