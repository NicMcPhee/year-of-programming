+++
title = "Encapsulation and module management in Rust GA system! Episode 56 of Unhindered by Coding"
date = 2022-12-03
description = "I wasn't super happy with how Wednesday night ended up. I think we'd pushed too hard, there was a lot I didn't understand as well as I'd like, and things were definitely undertested."

[extra]
subject = "rust-ga"
playlist = "PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl"
video_code = "25d9_Ep4NCQ"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=25d9_Ep4NCQ&list=PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl).
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
    youtube(id="25d9_Ep4NCQ", playlist="PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl", class="flex grow")
 }} 
</div>

I wasn't super happy with how Wednesday night ended up. I think we'd pushed too hard, there was a lot I didn't understand as well as I'd like, and things were definitely undertested.

One specific thing I found was that changes we were making in, e.g., `Population`, were bleeding all over the place, and because there wasn't any testing there were features that weren't getting "checked" until we used them in `Generation` or `lib.rs`. This meant that compiler errors were often fairly removed from the actual source of the problem, which certainly confused me.

I also found it confusing to have our associated `Individual` type in `Population` had the same name as the `struct Individual {…}`. There were error messages that refered to `Individual` and I wasn't always sure which type it was refering to, especially if I tried to just skim over the error.

So we started over. :-)

The goal was to get to converting some existing types to traits, but we in fact spend the whole session encapsulating data, writing tests, and moving some code into a new module. The highlights include:

- Renamed `Population` to `VecPop` to free up `Population` in the namespace for the upcoming trait.
- Encapsulated the fields in `VecPop` so they're private.
 - These two steps were almost exact repeats of what we did Wednesday.
- Added some simple tests for `VecPop`.
- Encapsulated the fields in `Individual`.
- Renamed `Individual` to `EcIndividual` and put it in its own new module.

We're going to continue all this in the afternoon session.

================

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Every Tuesday and Saturday from 10am-noon CDT . We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
