+++
title = "Episode 20: Evolutionary Computation in Rust!"
date = 2022-08-24
description = "A new night! A new topic! New participants!"

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "MffnSglIv3M"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=MffnSglIv3M&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="MffnSglIv3M", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

A new night! A new topic! New participants!

As an experiment, I'm trying a few additional streaming sessions per week, including Wednesdays from 7-9pm CDT, where I'll work on an evolutionary computation system in Rust. This was the first of those streaming sessions!

I spent a _ton_ of time going over what evolutionary computation is, and skimming over parts of the the existing code. (I've been working on this on and off for a few weeks.) We really only programmed for the last 15-20 minutes, so skip ahead if you don't want all that background.

The main achievement of the session was we parameterized the `next_generation` code so that we pass in a scoring function instead of having that hard coded in several places. Hopefully next week we'll get more actual coding done and I'll babble on less. :)

For the moment (probably through September 2022) I'm streaming four times a week:

* Every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
