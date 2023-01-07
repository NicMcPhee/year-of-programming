+++
title = "Episode 5: Going through the Rustlings exercises, part 5: Iterators, threads, macros, clippy, Quiz 4"
date = 2022-06-11
description = "Here we go through some more of the Rustlings exercises (https://github.com/rust-lang/rustlings). Today we covered another 10% of the exercises, getting pretty close to the end. We finished up the exercises on iterators (some nice stream processing/higher-order function work there), threads (pretty simple use of threads, but still interesting), macros (*lots* of questions and struggle there), Quiz 4, and the two clippy exercises."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "frn1NrTQkQs"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=frn1NrTQkQs&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="frn1NrTQkQs", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

Here we go through some more of the Rustlings exercises (https://github.com/rust-lang/rustlings). Today we covered another 10% of the exercises, getting pretty close to the end. We finished up the exercises on iterators (some nice stream processing/higher-order function work there), threads (pretty simple use of threads, but still interesting), macros (*lots* of questions and struggle there), Quiz 4, and the two clippy exercises.

The big stumbling block today was exporting a macro out of a module in `macros3.rs`. This StackOverflow post (https://stackoverflow.com/a/31749071) suggested the kind of solution that I was looking for, but it didn't work for me. It *did* work for one of the other participants, though, so I'm not sure what's happening there.

I said some fairly nonsensical things at the beginning of the threads exercise before I realized that we did actually Mutex there. :) I think I decided the compiler was an all-knowing genius, which isn't exactly supportable. Once I got that sorted (and remember/looked up various bits of necessary syntax), we got there.

All that's left are the 5 exercises on conversions (which should be interesting, as I'm often unclear about what conversations are happening when and why) and two on advanced errors.

Below is a pretty detailed set of time codes.

0:00 – Introduction and state of play with the Rustlings work (I got a little chatty this time)
5:10 – Iterators (last 2 exercises)
31:25 – Threads (1 exercises)
1:07:00 – Macros (4 exercises)
1:39:30 – Quiz 4 (basically just on macros)
1:45:00 – Clippy  (2 exercises)
1:52:00 – Wrap up

For the moment, at least, I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently just working through the Rustlings exercises, and I suspect we'll finish in the next session. After that I'll probably actually try to build a simple app in Rust to solve a problem that's annoying me. :)

Thanks for watching!
