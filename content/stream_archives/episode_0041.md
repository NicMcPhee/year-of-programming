+++
title = "Implementing lexicase selection in Rust! Episode 41 of Unhindered by Coding"
date = 2022-10-05
description = "Well, that was interesting. We spent most of this stream implementing lexicase selection in Rust. I had thought I'd be able to do it just using iterators in a nice way, but that went boom because Rust iterators include the closure (the test) as part of their type, so you can't just chain them together in the way that I'd anticipated. I still think there might be a way to do something like this, but I'm definitely not sure how."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "QHY-6jlK7i0"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=QHY-6jlK7i0&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="QHY-6jlK7i0", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

Well, that was interesting. We spent most of this stream implementing lexicase selection in Rust. I had thought I'd be able to do it just using iterators in a nice way, but that went boom because Rust iterators include the closure (the test) as part of their type, so you can't just chain them together in the way that I'd anticipated. I still think there might be a way to do something like this, but I'm definitely not sure how.

So we just waved a big hammer at it and constructed a bunch of sub-vectors as we went through the different test cases. That works, but it *really* slows things down.

I then tried filtering out duplicate score vectors like the Clojush and Propeller implementations, but that made it worse, especially in the early generations where there are lots of distinct score vectors.

Hmph. I'll definitely need to think about this quite a bit more, as we really want lexicase selection to be fast (in Rust), and it's possible that what I learn here can speed things up in other implementations of lexicase as well.

The code is at https://GitHub.com/NicMcPhee/rust-ga; the `Planning.md` document has more details and ideas for how we might move forward.

=================

The schedule is gonna be kinda weird in October. In theory I'm sticking to the schedule below, but a trip to visit family are all upending the schedule in various ways. I'm not entirely sure what's going to happen, TBH, but I'll try to keep the schedule on Twitch (@NicMcPhee) up-to-date, and share the state of play on Twitter (@NicMcPhee) and on the Discord (https://discord.gg/ta747E5g). Sorry for the confusion.

=================

For the moment (probably through September 2022) I'm streaming four times a week:

* Every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
