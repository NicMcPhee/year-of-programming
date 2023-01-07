+++
title = "Finishing the simple GA in Clojure! Episode 47 of Unhindered by Coding"
date = 2022-11-02
description = "We started with the simple GA I'd begun in Clojure over the summer (https://github.com/NicMcPhee/clojure-ga), and got it 'finished' to the point that we can now meaningfully compare the timing for the Rust and Clojure versions (although there was definitely some non-trivial confusion along the way). Based on some simple command-line tests, Rust is definitely *quite* a lot faster (at least 40-50x, maybe over 100x?). I'll need to actually run the serious benchmarks so we can see what all this actually means."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "t4_yWhyuVfk"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=t4_yWhyuVfk&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="t4_yWhyuVfk", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

We started with the simple GA I'd begun in Clojure over the summer (https://github.com/NicMcPhee/clojure-ga), and got it "finished" to the point that we can now meaningfully compare the timing for the Rust and Clojure versions (although there was definitely some non-trivial confusion along the way). Based on some simple command-line tests, Rust is definitely *quite* a lot faster (at least 40-50x, maybe over 100x?). I'll need to actually run the serious benchmarks so we can see what all this actually means.

We got all of the new Clojure code done around the end of the first hour, but something was way off because the Clojure seemed _faster_, and the runs weren't making any progress (e.g., they weren't improving the scores). The first issue was that I'd forgotten to flip less-than for greater-than when comparing scores (instead of errors). The _big_ problem, though, was two-fold:

* I had totally forgotten to change `count-ones` and `hiff` so they returned _lists_ of scores instead of a single score.
* I also hadn't changed the names of the keys in the `individual` map.

These mistakes (especially the problem with the key names) meant that lexicase was getting an _empty_ list of scores to work with, so it basically (a) used no computation to (b) return a random individual. No wonder it was both fast and unproductive.

I quick implemented `count-ones` as a vector during the stream (and fixed the other problems), and that got things working. It also _seriously_ slowed down the Clojure code, making the Rust code look a _lot_ better than it had.

The short, command-line tests suggest that Rust is going to be at least 40-50 times faster than Clojure, but it's also possible that the improvement might be in the 100+x range. I'll have to actually run the benchmarks to tell.

================

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Every Tuesday and Saturday from 10am-noon CDT . We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
