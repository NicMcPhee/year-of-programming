+++
title = "Episode 7: Finishing the Rustlings exercises!: Conversions and advanced errors"
date = 2022-06-21
description = "We finished the Rustlings exercises (https://github.com/rust-lang/rustlings) today!"

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "Rs4j3ntIq9Q"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=Rs4j3ntIq9Q&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="Rs4j3ntIq9Q", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

We finished the Rustlings exercises (https://github.com/rust-lang/rustlings) today!

Last week, in Episode 6, I got really bogged down today in the `TryFrom` conversion exercises. I had a chance to look at that some "offline", and realized that I had basically been programming with my hands instead of my head. After some sleep and reading, I remembered how to program again and it turned out to be reasonably straightforward.

That said, the "reasonably straightforward" approach led to a _lot_ of code duplication, so after getting the tests to pass (going from red to green), I spent a while refactoring that solution, ending up with a substantially shorter version. (I may actually make a scripted, stand-alone video of that refactoring for my "primary" YouTube channel.)

After that I was able to finish up the remaining 3 Rustlings exercises (one more conversion exercise and two on advanced error handling)!

We had about 15 minutes left at the end, so I went over my plan for the project that I'd like to implement in the upcoming episodes of the stream: ice-repos (https://github.com/NicMcPhee/ice-repos), a tool for archiving collections of repositories on GitHub. My goal is to use Rust + Yew to build a simple WASM webapp to help me manage an otherwise tedious process.

Apologies for the fan background noise. It's stupid hot here at the moment, and we have a bunch of fans trying to keep the room I record in from melting entirely.

Below are a the time codes:

0:00 – Introduction and state of play with the Rustlings work, with a lot of discussion of my problems with the `TryFrom` conversion exercise
4:20 – Returning to Conversions: `TryFrom`
9:20 – Actually starting the solution to the `TryFrom` exercise
30:10 – Refactoring the `TryFrom` exercise solution
56:30 – Conversions: `AsRef` (lots of good audience suggestions here)
1:12:45 – Advanced Errors 1
1:25:45 – Advanced Errors 2
1:47:45 – We've finished the Rustlings exercises! (& I babble on some about my experience with that)
1:49:50 – Quick overview of my idea for the next project for the stream: ice-repos (https://github.com/NicMcPhee/ice-repos), a tool for archiving collections of repositories on GitHub.

For the moment, at least, I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently just working through the Rustlings exercises, and I'm hoping we'll finish in the next session. After that I'll probably actually try to build a simple app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Thanks for watching!
