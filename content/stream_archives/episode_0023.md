+++
title = "Episode 23: Add checkboxes to ice-repos!"
date = 2022-08-30
description = "After mostly refactoring on Saturday morning, today we actually (finally!) got around to adding checkboxes to our repos!"

[extra]
subject = "ice-repos"
playlist = "PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN"
video_code = "yfr4RRJmYag"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=yfr4RRJmYag&list=PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN).
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
    youtube(id="yfr4RRJmYag", playlist="PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN", class="flex grow")
 }} 
</div>

After mostly refactoring on Saturday morning, today we actually (finally!) got around to adding checkboxes to our repos!

I started with a little formatting work using Tailwinds CSS and DaisyUI, and improved the layout of the repos a little bit. I then used DaisyUI to add checkboxes, which let to the somewhat complex question of what to *do* when a checkbox was clicked.

After some considerable thought and discussion (thanks esitsu@Twich!) we got the checkbox events bubbled up to the `RepositoryPaginator` component, at least to the level of being successfully shared via `console.log`.

This raised the question of what and how to save the checkbox states in the paginator. We created a HashMap from repo IDs to boolean states and started the process of incorporating that into the paginator logic, but ran out of time before that was all done. We made good progress, though, and there are several quite specific things to address when we come back to this on Saturday morning.

For the moment (probably through September 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
