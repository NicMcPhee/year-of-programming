+++
title = "So much (OAuth) flailing!: Episode 46, Unhindered by Coding"
date = 2022-11-01
description = "_Soooo_ much flailing – I really don't know what the heck I'm doing here, TBH. We got the basic Cloudflare Workers app running, but wasted a _ton_ of time because I (think I) entirely swapped out code bases under VS Code and it didn't seem to notice? Basically all the changes I was making didn't seem to have any effect, and we probably wasted a half hour or more because of that. My suspicion is that I did `rm -rf ice-repos-worker` in the terminal and then rebuilt it (in the terminal) while VS Code was open the whole time. I'm not really sure, though."

[extra]
subject = "ice-repos"
playlist = "PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN"
video_code = "Z1AQjuzyOB8"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=Z1AQjuzyOB8&list=PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN).
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
    youtube(id="Z1AQjuzyOB8", playlist="PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN", class="flex grow")
 }} 
</div>

_Soooo_ much flailing – I really don't know what the heck I'm doing here, TBH. We got the basic Cloudflare Workers app running, but wasted a _ton_ of time because I (think I) entirely swapped out code bases under VS Code and it didn't seem to notice? Basically all the changes I was making didn't seem to have any effect, and we probably wasted a half hour or more because of that. My suspicion is that I did `rm -rf ice-repos-worker` in the terminal and then rebuilt it (in the terminal) while VS Code was open the whole time. I'm not really sure, though.

We then managed to start the build on the response URI in the worker and managed to successfully get the code and the state from that URL.

After the stream was over I tried to add code to make the request to get a token, and that totally biffed. I can construct that request fine, but it never seems to return and I have no idea why. I can't seem to get any debugging to do anything useful. Sometimes it seems like there might be an error generated, but it's not consistent, and I'm really not sure what's happening.

Sigh. I obviously need to do some homework, and hopefully things will be more productive on Saturday!

================

For the moment (probably through 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
