+++
title = "Episode 27: Evolutionary Computation in Rust! Higher-Rank Trait Bounds!"
date = 2022-09-07
description = "We got back into the evolutionary computation work tonight, separating out the bit manipulation from the scoring, and getting quite bogged down in pulling out the selection operators so they're parameters instead of baked in."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "TZVLgXAgcTE"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=TZVLgXAgcTE&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="TZVLgXAgcTE", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

We got back into the evolutionary computation work tonight, separating out the bit manipulation from the scoring, and getting quite bogged down in pulling out the selection operators so they're parameters instead of baked in.

We started by doing some interesting work in creating traits for both crossover and mutation operators. It turns out that the crossover operators don't care about the kinds of things in the vectors, so they were put in a different trait from the mutation operators, which _do_ care about what type is in the vectors since we can't mutate things without knowing what they are.

So I made my first traits! & provided implementations of them, which was quite fun.

Then we separated out the bit manipulation from the scoring in a pretty nice way, which I suspect will have substantially speeded up the system.

After that, we got deep in the swamp of trying to extract the logic for selecting parents so that users can specify that dynamically in their config code. At the moment we have some fragments that compile and I _think_ can form the basis of a working system, although TBH I don't fully understand some of what we have and asked some questions about that over on the Discord (https://discord.gg/kaeTCrB3).

There's also a pretty complicated set of questions coming up about how we deal with pipelines of genetic operators (combinations of things like crossover and mutation operators) in Rust, which I've tried to explain over on the Discord as well.

Huge thanks to esitsu@Twitch for all the suggestions and ideas!

Note that I've cancelled the Saturday morning (10 Sep, 10-noon) ice-repos stream so I can attend our monthly climate group meeting, but all the rest should be good for this week.

For the moment (probably through September 2022) I'm streaming four times a week:

* Every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
