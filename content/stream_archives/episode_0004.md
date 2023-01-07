+++
title = "Episode 4: Going through the Rustlings exercises, part 4: Generics, options, traits, & tests"
date = 2022-08-13
description = "Here we go through some more of the Rustlings exercises (https://github.com/rust-lang/rustlings). Today we got through a lot, in part because many of the exercises were pretty straightforward. We got through the exercises on generics (figured out something that had been niggling at me), options, traits, and tests, and did Quiz 3. We started on the standard library exercises, but still have the last two exercises on iterators to do there. I learned some cool things about `collect()` on iterators, though."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "Nd8FDpvuqr8"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=Nd8FDpvuqr8&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="Nd8FDpvuqr8", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

Here we go through some more of the Rustlings exercises (https://github.com/rust-lang/rustlings). Today we got through a lot, in part because many of the exercises were pretty straightforward. We got through the exercises on generics (figured out something that had been niggling at me), options, traits, and tests, and did Quiz 3. We started on the standard library exercises, but still have the last two exercises on iterators to do there. I learned some cool things about `collect()` on iterators, though.

The quizzes continue to be a little odd. It was strange that Quiz 3 made no reference to anything except the testing tools, even though we'd covered errors, generics, options, and traits since Quiz 2. It would be nice if the quizzes were a little more comprehensive?

The `Arc` exercise seemed a bit of a jump if you'd never done anything with threads in Rust before. I had, and so it was OK, but I can imagine that exercise being a real stumbling block for folks with less or different experience.

Below is a pretty detailed set of time codes.

0:00 – Introduction and state of play with the Rustlings work
2:18 – Generics (3 exercises)
19:10 – Options (3 exercises)
 37:40 – Traits (2 exercises)
47:40 – Tests (3 exercises)
56:05 – Quiz 3
58:18 – Standard library types: Box and Arc (1 exercise each)
1:15:10 – Standard library types: Iterators (first 3 exercises)
1:56:00 – Wrap up

For the moment, at least, I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently just working through the Rustlings exercises, and I suspect we'll finish in one or two more sessions depending on the exercises and my mental capacity. After that I'll probably actually try to build a simple app in Rust to solve a problem that's annoying me. :)

Thanks for watching!
