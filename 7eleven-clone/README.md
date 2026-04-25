# 7-Eleven Website Clone

A pixel-accurate HTML/CSS clone of the 7-Eleven homepage.

## How to Use

1. **Download and unzip** this folder
2. **Add your images** to the `assets/images/` folder with these filenames:
   - `logo.png` — 7-Eleven logo
   - `coffee-cup.png` — Hero coffee cup image
   - `gold-pass-woman.png` — Gold Pass promo woman
   - `rewards-phone.png` — 7Rewards app phone
   - `dew-bottles.png` — Mountain Dew bottles + Bronco
   - `espresso-girl.png` — What Is Espresso card
   - `coffee-beans.png` — Coffee beans card
   - `latte.png` — Latte card
   - `pumpkin.png` — Pumpkin Somethin' card
   - `collection-group.png` — 7Collection group photo
   - `collection-hat.png` — 7-Eleven hat close-up
3. **Open `index.html`** in your browser — no server needed!

## Features
- Fully responsive (desktop, tablet, mobile)
- CSS-only (no JavaScript except hamburger menu toggle*)
- Sticky navbar with mobile hamburger menu
- All sections from the original site
- Fallback displays if images are not added

> *Note: The hamburger menu toggle requires a small JS snippet. To enable it, add this before `</body>`:
> ```html
> <script>
>   document.getElementById('hamburger').addEventListener('click', function() {
>     document.getElementById('mobileMenu').classList.toggle('open');
>   });
> </script>
> ```

## Image Sizes (recommended)
| Image | Width | Height |
|-------|-------|--------|
| logo.png | 120px | 120px |
| coffee-cup.png | 600px | 800px |
| gold-pass-woman.png | 300px | 400px |
| rewards-phone.png | 300px | 400px |
| dew-bottles.png | 700px | 500px |
| espresso-girl.png | 400px | 533px |
| coffee-beans.png | 400px | 533px |
| latte.png | 400px | 533px |
| pumpkin.png | 400px | 533px |
| collection-group.png | 900px | 600px |
| collection-hat.png | 450px | 600px |
