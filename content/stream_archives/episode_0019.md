+++
title = "Episode 19: Complete the pagination in ice-repos!"
date = 2022-08-23
description = "After several weeks on pagination for ice-repos, I think we have that working! I'm even going to merge in that branch. :)"

[extra]
subject = "ice-repos"
playlist = "PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN"
video_code = "5iUGFkDGdvs"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=5iUGFkDGdvs&list=PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN).
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
    youtube(id="5iUGFkDGdvs", playlist="PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN", class="flex grow")
 }} 
</div>

After several weeks on pagination for ice-repos, I think we have that working! I'm even going to merge in that branch. :)

The main thing we had to do with the pagination was fix an error where I was setting the current page to 1 every time we made an HTTP request instead of preserving the current page across those calls. Fixing that was pretty trivial, and seemed to get everything going again.

We also extracted the card display out into its own component, which wasn't a big deal, but did require cloning `Repository` structs in an annoying way. (We tried passing in references, but then we got into lifetime hell, so we wandered away.)

There was some nice discussion with esitsu@Twitch about the big pile of cloning that's going on, which makes me think we might want to come back to the idea of using Yew contexts to save the "share data" across a number of contexts. I think I should really try to sketch the DOM and data flow out on a piece of paper so I have a better idea of who needs what/when/why.

For the moment (probably through September 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
