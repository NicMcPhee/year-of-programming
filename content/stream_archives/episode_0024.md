+++
title = "Episode 24: Sort out archived state"
date = 2022-09-03
description = "After adding checkboxes on Tuesday morning, today we got the paginator state sorted so we can (hopefully) track the desired archival state of each repository."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "o8p7c6umFfc"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=o8p7c6umFfc&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="o8p7c6umFfc", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

After adding checkboxes on Tuesday morning, today we got the paginator state sorted so we can (hopefully) track the desired archival state of each repository.

We moved `ArchiveStateMap` out of the paginator `State`, and modified that map to have `(Repository, bool)` as the values so we will have access to the full `Repository` object later when we need it.

There's still vast oceans of cloning that I can't imagine is a Good Thing. I think we'll either need to use Yew's context hook, or wrap things like the `ArchiveStateMap::map` in an `Rc` (or `Arc`?) so that we don't have to clone the contents all the time.

Big thanks to esitsu@Twitch and Wgaffa@Twitch for a lot of useful advice and support in today's stream.

We still don't have the state updating when people click checkboxes, but hopefully we'll be able to deal with that fairly quickly in Tuesday morning's stream.

For the moment (probably through September 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
