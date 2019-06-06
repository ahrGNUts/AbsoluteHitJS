# AbsoluteHit.js (AbsHit.js if brevity is your thing)

## Overview
One day I wondered what would happen if websites had a hitmarker similar to many modern FPS games. On another day, I stopped wondering and started building.
This is the result.

Please note: I've only tested this on a single page HTML website and a relatively simple Wordpress site. If you'd like to test this on your own website and contribute installation instructions or bug fixes for your particular setup, be my guest!

## Installation Instructions

### "Standard"
1. Copy AbsoluteHit.js and the assets folder to the directory in your site where JavaScript files live.
2. Ensure there is a `<script>` tag that references AbssoluteHit.js on every page that you want it to be active.
3. Enjoy a Web 2.0 experience like no other.

### Wordpress
1. Copy AbsoluteHit.js and the assets folder to the directory in your theme where JavaScript files live.
2. Enqueue AbsoluteHit.js in the `wp_enqueue_scripts` hook. AbsHit is written in vanilla JavaScript and requires no additional dependencies, but it should be enqueued in the footer and not `<head>`. See the [Wordpress Docs](https://developer.wordpress.org/reference/functions/wp_enqueue_script/) for more info.
3. Enjoy a Web 2.0 experience like no other.

### TODO: Testing/installation instructions for other site setups
### TODO: Installation via a package manager?

## Issues
+ This plugin doesn't seem to work all that well on Safari (I think due to the way Safari handles audio tags). There's too much of a lag between the click and the sound, though this appears to be the only affected browser.
