+++
title = "Episode 30: Evolutionary Computation in Rust! Adding iterators, and then removing them again."
date = 2022-09-14
description = "We got back into the evolutionary computation work tonight, ultimately doing a nice job of providing a flexible mechanism for specifying selection operators."

[extra]
subject = "rust-ga"
playlist = "PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl"
video_code = "ht4nOABYCnw"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=ht4nOABYCnw&list=PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl).
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
    youtube(id="ht4nOABYCnw", playlist="PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl", class="flex grow")
 }} 
</div>

We got back into the evolutionary computation work tonight, ultimately doing a nice job of providing a flexible mechanism for specifying selection operators.

We started by writing a function that took a vector of selectors (functions that take a population and return an individual) and turn that it into an iterator of individuals (parents for the next generation). That got into some weird stuff because it ended up encapsulating the random number generator, which made sharing it across threads impossible.

So we created a new `ParentSelector` train whose `get(rng)` method is similar to the `Iterator::next()` method, but it takes the random number generator as an argument. This avoids the encapsulation issue and cleans up the parallelism somewhat. I might see on the Rust user forum if someone else has a better idea. What we have works, but it's a minor bummer that we're no longer able to take advantage of all the goodies that `Iterator` provides.

We currently choose selection operators uniformly, which isn't great. (We choose the best as often as a random, which doesn't make much sense.) We need to change this so that we provide a weighted list of selection operators, so we can choose some more than others. I think there's a crate for making random selections from a weighted list, so I should look into that.

Huge thanks to esitsu@Twitch for all the suggestions and ideas!

For the moment (probably through September 2022) I'm streaming four times a week:

* Every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
