+++
title = "Episode 34: Evolutionary Computation in Rust! Creating a `Generation` type!"
date = 2022-09-21
description = "I had realized after last week's stream that the `ParentSelector` logic could really be moved into `Population` and we wouldn't need the new type. After explaining that, `esitsu@Twitch` suggested moving the `ParentSelector` logic into a new `Generation` type, which would then have a `next()` method to generate the next generation from the current one. We then spent pretty much the entire stream implementing this (good) idea."

[extra]
subject = "rust-ga"
playlist = "PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl"
video_code = "SDEuqN2yyMw"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=SDEuqN2yyMw&list=PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl).
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
    youtube(id="SDEuqN2yyMw", playlist="PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl", class="flex grow")
 }} 
</div>

I had realized after last week's stream that the `ParentSelector` logic could really be moved into `Population` and we wouldn't need the new type. After explaining that, `esitsu@Twitch` suggested moving the `ParentSelector` logic into a new `Generation` type, which would then have a `next()` method to generate the next generation from the current one. We then spent pretty much the entire stream implementing this (good) idea.

Most of it was pretty straightforward, but we got really bogged down at
the end because of a problem with the Rust compiler's understanding of a
closure's types. `esitsu` also had a really cool idea of extracting the bit string specific parts of the `next` generation logic into a closure that we'd pass in when we construct the generation. This worked, but I didn't explicitly type the arguments to the closure initially, and that let to all kinds of weird confusion. We flailed pretty hard trying to resolve the issues, doing all sorts of things with lifetimes. In the end it turned out that all we _really_ needed to do was explicitly type that closure, and once we did that everything worked.

After the stream ended I removed the `next_generation()` logic and
`ParentSelector` type from `Population`, moving the former into
`Generation` and deleting the latter altogether.

Huge thanks to esitsu@Twitch for all the suggestions and ideas!

The code is at https://GitHub.com/NicMcPhee/rust-ga; the `Planning.md` document has more details and ideas for how we might move forward.

For the moment (probably through September 2022) I'm streaming four times a week:

* Every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
