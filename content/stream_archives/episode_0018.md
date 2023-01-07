+++
title = "Episode 18: Improving our error handling in ice-repos!"
date = 2022-08-20
description = "I'd frankly gotten really twisted up about how we were handling the potential errors that came from parsing the `link` field in the HTTP response from GitHub. This cleaned that mess up a lot, and I think made things a lot cleaner than they were before. Huge thanks to esitsu@Twitch and Wgaffa@Twitch for the many suggestions and corrections as I flailed through all this. (I was a bit tired still, and this wasn't my smartest day.)"

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "gtruQBwGIqE"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=gtruQBwGIqE&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
> YouTube doesn't allow angle brackets, which are frequently used
> in Rust generics. To make the YouTube parser happy I replaced the
> angle brackets with parentheses when writing this description.
> So, yes, I know that a lot of the Rust snippets below are broken.
>
> In theory I should go through these and replace
> the appropriate parentheses with angle brackets, but I don't
> know if/when that will ever happen. Pull requests always
> welcome, though. :-)
>
> Thanks – Nic

<div>
 {{ 
    youtube(id="gtruQBwGIqE", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

I'd frankly gotten really twisted up about how we were handling the potential errors that came from parsing the `link` field in the HTTP response from GitHub. This cleaned that mess up a lot, and I think made things a lot cleaner than they were before. Huge thanks to esitsu@Twitch and Wgaffa@Twitch for the many suggestions and corrections as I flailed through all this. (I was a bit tired still, and this wasn't my smartest day.)

We managed to also resolve a small ownership issue that was preventing things from compiling, so everything builds and runs now. The functionality of the page buttons still isn't correct, but I'm hoping we can fix that soon.

For the moment, at least, I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Thanks for watching!
