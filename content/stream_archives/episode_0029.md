+++
title = "Episode 29: Switching to Yewdux?"
date = 2022-09-13
description = "We spent a lot of time wrestling with the problem with the state update from last time, only to eventually realize (thanks to esitsu@Twitch and Wgaffa@Twitch) that it had probably been working all along!"

[extra]
subject = "ice-repos"
playlist = "PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN"
video_code = "J3W411_NAFI"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=J3W411_NAFI&list=PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN).
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
    youtube(id="J3W411_NAFI", playlist="PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN", class="flex grow")
 }} 
</div>

We spent a lot of time wrestling with the problem with the state update from last time, only to eventually realize (thanks to esitsu@Twitch and Wgaffa@Twitch) that it had probably been working all along!

We then moved on to the creation of the "Submit" component, and got bogged down in the question of how to pass state from the selection components to the submit component. After a lot of reading and thinking, I initially played with Yew's `context`, but ended up switching to Yewdux since I think it may be easier to set and modify state that way. It's all super global that way, which is kinda annoying, but this app is simple enough that having everything be in a single global state won't hurt too bad.

We got a start on bringing Yewdux, and it seems pretty plausible based on our initial work. Hopefully we can finish that transition in Saturday morning's stream.

For the moment (probably through September 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
