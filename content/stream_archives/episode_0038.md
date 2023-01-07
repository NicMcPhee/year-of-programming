+++
title = "Weighted selection & vectors scores in Evol Computation in Rust! Episode 38 of Unhindered by Coding"
date = 2022-09-28
description = "After last week's stream, I added support for command-line arguments using the `clap` crate, so I started tonight by going over that briefly."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "EUH-Q39zpV0"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=EUH-Q39zpV0&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="EUH-Q39zpV0", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

After last week's stream, I added support for command-line arguments using the `clap` crate, so I started tonight by going over that briefly.

I then implemented weighted selection, using esitsu@Twitch's excellent suggestion of using the `choose_weighted` method from `SliceRandom`. This substantially improved the performance of the system, at least on problems like HIFF.

Then, at esitsu's fine suggestion, we implemented the `Display` trait for `Individual`s of `Bitstring`s so they print out as 0s and 1s instead of `true`s and `false`s, which makes them much easier to read.

Lastly, I wanted to get us going on the implementation of lexicase selection. There are probably cleaner ways to go about this (e.g., having a generic score type on `Individual`), but I went with just adding a `Vec` of scores along with a `total_score` for each individual. This rippled all over the place, but really wasn't that bad to fix, with the compiler guiding me to all the places where I had to change things.

We now have all that infrastructure in place so that we can actually implement lexicase selection next week!

The code is at https://GitHub.com/NicMcPhee/rust-ga; the `Planning.md` document has more details and ideas for how we might move forward.

=================

The schedule is gonna be kinda weird in the last week of September and October. In theory I'm sticking to the schedule below, but a dental appointment, a local film festival, and a trip to visit family are all upending the schedule in various ways. I'm not entirely sure what's going to happen, TBH, but I'll try to keep the schedule on Twitch (@NicMcPhee) up-to-date, and share the state of play on Twitter (@NicMcPhee) and on the Discord (https://discord.gg/ta747E5g). Sorry for the confusion.

=================

For the moment (probably through September 2022) I'm streaming four times a week:

* Every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
