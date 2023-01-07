+++
title = "Optimizing lexicase selection in Rust! Episode 43 of Unhindered by Coding"
date = 2022-10-27
description = "We spent the entire session writing and benchmarking different versions of lexicase selection in Rust, and we definitely improved things over time, although that wasn't entirely obvious by the end of the stream (more below)."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "GqVfnCwpT5o"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=GqVfnCwpT5o&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="GqVfnCwpT5o", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

We spent the entire session writing and benchmarking different versions of lexicase selection in Rust, and we definitely improved things over time, although that wasn't entirely obvious by the end of the stream (more below).

I spent about half an hour going over the two implementations of lexicase that we already had (the simple two pass version, and the one that removes all the duplicates) and my initial benchmark results with just those two.

We then implemented two new versions, both based on the approach in Bill La Cava's Ellyn (https://github.com/cavalab/ellyn) that avoids two passes through the list of candidates. The second of these does some cool stuff to try to minimize memory allocation/deallocation; thanks a ton to esitsu@Twitch for the suggestion for the cool use of `mem::swap()`!

At the end of the stream, I was fairly surprised that all the results were pretty close to each other, with the `simple` version seeming about as good (or better) than anything else. It seemed that the one that reused vectors to minimize (de)allocation might be the best, but it's really not by much, and whatever win we do have probably comes from the use of `mem::swap()`, which I wouldn't thought about without esitsu's help!

After the stream ended I did a bunch of more comprehensive (and time-consuming) benchmarks, and it looks like the one that reused vectors does in fact win, being nearly twice as fast as the `simple` version. I think that the version that removes duplicates is so bad by comparison that it was skewing my view of the results that we were getting during the stream.

Now I'll need to take that back to my evolutionary computation colleagues and see what they think. I'll also try to write all this up as a blog post when I get around to actually setting up a Year of Programming blog! :-)

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Every Tuesday and Saturday from 10am-noon CDT . We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
