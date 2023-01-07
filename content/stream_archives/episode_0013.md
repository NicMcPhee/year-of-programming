+++
title = "Episode 13: Progress on ice-repos! Improved understanding of Yew/React!"
date = 2022-07-30
description = "After a week off, a good day back in the code. We didn't write/change a _lot_, but the changes we did make were consequential, and I think I understand Yew/React hooks a lot better now than when I got up this morning."

[extra]
subject = "ice-repos"
playlist = "PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN"
video_code = "eJep98pxGKI"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=eJep98pxGKI&list=PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN).
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
    youtube(id="eJep98pxGKI", playlist="PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN", class="flex grow")
 }} 
</div>

After a week off, a good day back in the code. We didn't write/change a _lot_, but the changes we did make were consequential, and I think I understand Yew/React hooks a lot better now than when I got up this morning.

Got a *lot* of good questions from @DefineEvil on Twitch, who knows a lot more about React than I do. That really helped me get my head around some of the hooks stuff, and we did something nifty with keys that may have improved performance. I'm still not entirely sure how/where Yew supports keys, but it did do something useful and seemed to make things go faster, so that's cool.

From a user perspective, the two big additions are:

* The site now properly (re)loads when you change the organization.
* We display a "Loading…" message when we're waiting for the HTTP request to GitHub to return.

Now we "just" need to add checkboxes and authentication so we can actually select and archive repositories, and deal with paging of results from GitHub, and do something sensible about error handling, and we could call this 1.0! :)

For the moment, at least, I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Thanks for watching!
