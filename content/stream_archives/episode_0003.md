+++
title = "Episode 3: Going through the Rustlings exercises, part 3: Strings and Errors!"
date = 2022-05-31
description = "Here we go through some more of the Rustlings exercises (https://github.com/rust-lang/rustlings). Today we did the exercises on Strings (talking a lot about &str and String), did Quiz 2 (passed a quiz!), and went through the 6 exercises on Errors. I'd read/heard about error handling (the Option and Result types), but hadn't *used* them much, so I did a lot of learning in this section. Got to play with ?, matching, if-let, and mapping both values and errors across Results."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "MbY0NuFoDw4"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=MbY0NuFoDw4&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="MbY0NuFoDw4", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

Here we go through some more of the Rustlings exercises (https://github.com/rust-lang/rustlings). Today we did the exercises on Strings (talking a lot about &str and String), did Quiz 2 (passed a quiz!), and went through the 6 exercises on Errors. I'd read/heard about error handling (the Option and Result types), but hadn't *used* them much, so I did a lot of learning in this section. Got to play with ?, matching, if-let, and mapping both values and errors across Results.

Below is a pretty detailed set of time codes.

0:00 – Introduction and state of play with the Rustlings work
1:30 – Plug for my upcoming Minnebar talk
4:15 – Strings (2 exercises)
15:15 – Quiz 2
38:50 – Error handling (6 exercises). 

The "Error handling" sections goes all the way to the end of the stream, but I'll time code a few moments in that where there were potentially interesting discussions of particular features or concepts.

46:00 – Some ruminations on "mis-using" values like -1 and null as error codes in many languages, and the advantages of Rust's use of Option and Result.
48:40 – `errors2.rs` went on for quite a while because I ended up solving it three quite different ways, based in part on suggestions from viewers. We used an explicit map, the ? operator, and Result::map, all three versions were quite interesting, and I learned a *bunch* here. Thanks to my viewers for the great suggestions and feedback!
1:08:20 – `errors3.rs`, where I got to learn how to use an if-let 
1:16:20 – `errors4.rs`, where I learned a lot of new stuff about `match`, and found that half-open ranges aren't fully supported yet :(. Got a great suggestion to explore `std::cmp::Ordering`, which led to a very nice solution (although I still think that `&0` is some weird syntax).
1:35:20 – Some ruminations on learning languages, the "difficulty" of learning languages, and the difference between learning a language and learning it *well*.
1:40:00 – `errors5.rs` let to a fair bit of flailing before I figured out that I could use `Box&lt;dyn Error&gt;` to return a "generic" error.
1:57:10 – `errors6.rs` was a nice example of using conversions and a new `enum` to an error that could have either of two types. Also a nice use of `Result::map_err` that was new to me.

2:07:50 – Wrap up and another reminder about Minnebar and no stream next Satureday.

I won't be able to do next Saturday's stream (4 June 2022) because I'll be attending Minnebar and giving a talk there (https://sessions.minnestar.org/sessions/1307). I should return to the stream (https://twitch.tv/NicMcPhee) next Tuesday (7 June 2022) from 10-noon CDT, however, where we'll work through more of the Rustlings exercises.

Thanks for watching!
