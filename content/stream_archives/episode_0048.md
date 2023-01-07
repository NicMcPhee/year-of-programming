+++
title = "Even more (OAuth) flailing!: Episode 48, Unhindered by Coding"
date = 2022-11-05
description = "_Soooo_ much flailing – I really don't know what the heck I'm doing here, TBH, and it really shows."

[extra]
subject = "echo"
playlist = "PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d"
video_code = "WtfOJSXMYMM"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=WtfOJSXMYMM&list=PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d).
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
    youtube(id="WtfOJSXMYMM", playlist="PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d", class="flex grow")
 }} 
</div>

_Soooo_ much flailing – I really don't know what the heck I'm doing here, TBH, and it really shows.

In the (limited) good news, I got the `yew-oauth2` crate set up in the web app, which was quite cool. 

After that, though, I made zero progress. I was _totally_ incapable of getting that to talk successfully to the GitHub OAuth tools. I kept getting a `redirect_uri_mismatch` error, where it seems that it's trying to talk to an edge server (perhaps through a redirect?)

If I could get `yew-oauth2` to not require a redirect URI then it would just use the one registered with GitHub and life would be good, but it doesn't look like I can do that. I could try forking their project and just hacking out that component of the configuration? Or making it an `Option` type? Not sure how to best proceed.

================

For the moment (probably through 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
