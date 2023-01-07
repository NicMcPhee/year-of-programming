+++
title = "Episode 26: Continue to wrestle with desired archive state in ice-repos"
date = 2022-09-06
description = "A day full of false hope and great participation. :-) Several times I felt like we were close to having the checkboxes and their state work, only to find that life was again more complicated than anticipated. I do feel like we're close, but we're still having problems managing and updating the state properly."

[extra]
subject = "ice-repos"
playlist = "PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN"
video_code = "uXAlhM6zdB4"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=uXAlhM6zdB4&list=PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN).
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
    youtube(id="uXAlhM6zdB4", playlist="PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN", class="flex grow")
 }} 
</div>

A day full of false hope and great participation. :-) Several times I felt like we were close to having the checkboxes and their state work, only to find that life was again more complicated than anticipated. I do feel like we're close, but we're still having problems managing and updating the state properly.

The problem might be from an experiment; we tried passing a Yew `UseStateHandle` in as a component property, but in retrospect that might not have been a great choice. We might have a problem where we're not updating a reference properly because of this, but we'll have to see next week when we next work on this.

There was lots of excellent participation today, with quite a few people contributing in valuable ways. The section where I was figuring out how to best update a HashMap entry was a great example of the value of having a fine group of folks sharing ideas.

I WON'T BE STREAMING SATURDAY MORNING (10 Sep) because of a conflict with another event. I will be doing all my other scheduled streams this week.

For the moment (probably through September 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
