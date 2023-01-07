+++
title = "The pagination works!: Episode 44, Unhindered by Coding"
date = 2022-10-29
description = "We got the pagination to work today!"

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "kYSmwk8iAk8"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=kYSmwk8iAk8&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="kYSmwk8iAk8", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

We got the pagination to work today!

We changed `RepoPageMap` to be internal state for the paginator. Since that is _only_ used inside the paginator, it made a lot more sense to have it be internal state to the paginator instead of global state in Yewdux. That worked quite nicely, actually.

Then we removed `loaded` from the paginator `State` and use `RepoPageMap::has_loaded_page()` instead. I think we actually want to split out the two remaining parts of the paginator `State` (current page and last page) into separate state objects so they can be managed separately, but that's not a high priority.

We ended up keeping `repository::DesiredStateMap` as a "global" state using Yewdux since that simplified sharing between the paginator and the review-and-submit components. We cleaned up the `use_effect_with_deps` calls, though, to make sure we were resetting everything appropriately, and that took care of the redrawing problems. esitsu@Twitch was a big help in one place where I was hesitating about adding `page_map` to the dependencies, but they were right and that was totally the thing to do!

Along the way we continued to rename a bunch of functions and variables, as many of the original names don't really make sense anymore.

Now the big thing is to work on actually authenticating and using the Cloudflare tools!

For the moment (probably through 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
