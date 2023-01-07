+++
title = "Episode 31: Switching to Yewdux!"
date = 2022-09-17
description = "On Tuesday we'd started the process of switching to using Yewdux to manage our state across the app, and today we finished that!"

[extra]
subject = "ice-repos"
playlist = "PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN"
video_code = "C1oDfhIQSjk"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=C1oDfhIQSjk&list=PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN).
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
    youtube(id="C1oDfhIQSjk", playlist="PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN", class="flex grow")
 }} 
</div>

On Tuesday we'd started the process of switching to using Yewdux to manage our state across the app, and today we finished that!

I'd been rather hesitant to switch to Yewdux because I really don't like global state (or global anything, TBH) as that's just a good way to lose all sense of discipline and do Ungreat Things.

That said, I'm really happy with how this worked out. Using Yewdux was quite pleasant, with only one surprise (more in a second), and it really helped reduce the amount of `clone()`ing we were doing of `String`s and `HashMap`s. The cloning is now mostly of `Rc`s or things that wrap `Rc`s, so it's quite cheap and well behaved.

I think that we're not ready to create the Submit page that will let the user review their choices and hit the big "Submit" button that should cause the app to make all the archive requests to GitHub.

For the moment (probably through September 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
