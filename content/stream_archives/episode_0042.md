+++
title = "Refactoring state management!: Episode 42, Unhindered by Coding"
date = 2022-10-25
description = "Back after a 2 week vacation!"

[extra]
subject = "ice-repos"
playlist = "PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN"
video_code = "BFb4l_tiDHE"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=BFb4l_tiDHE&list=PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN).
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
    youtube(id="BFb4l_tiDHE", playlist="PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN", class="flex grow")
 }} 
</div>

Back after a 2 week vacation!

Thinking about the state of the code some over while I was away, it was clear to me that I'd been mis-using Yewdux global state a lot, and that was messing things up pretty seriously. Whenever you change the organization, for example, you need to reset *all* the global state since everything depends on the specific organization that you're using. By using Yewdux state, we have to reset all that state "by hand", when if we were more careful about localizing the state and just passing it to who needs it, we'd have better control.

So today's stream started the process of fixing that.

We added a new `AlreadyArchived` variant to the `DesiredState` enum so we could keep track of  and did a bunch of renaming (e.g., ArchiveState to DesiredState).

We changed things so that the organization is passed in to the paginator as a property instead of being read as a global variable. I think this will mean that we'll get new paginators whenever the organization changes, which is good.

We moved `PageRepoMap` into its own module, which will hopefully be a useful step to removing it from the global state and making it local to the paginator.

For the moment (probably through 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
