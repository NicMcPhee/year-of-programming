+++
title = "Making scores and errors more generic! Episode 50 of Unhindered by Coding"
date = 2022-11-08
description = "This was episode 50 – pretty amazing, eh?!?"

[extra]
subject = "rust-ga"
playlist = "PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl"
video_code = "im1w0thYZiM"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=im1w0thYZiM&list=PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl).
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
    youtube(id="im1w0thYZiM", playlist="PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl", class="flex grow")
 }} 
</div>

This was episode 50 – pretty amazing, eh?!?

Since I'm super stuck on the OAuth business, I decided to focus mostly on the evolutionary computation project today.

We did however spend about 1/2 an hour talking about OAuth and how complicated that is. There were some good ideas shared in the chat, so I'll go back and see if I can get that going again.

After we stepped away from OAuth, I reviewed the timing results from last week (spoiler alert – Rust beats Clojure by a fair bit), and went over the basics of PushGP for a while. After about another 1/2 hour we got back into the code. In the end we never actually got to PushGP, though, because we spent the hour exploring ways to handle ordering in score/error values. 

The problem is that in some contexts we want "bigger is better" (what I'm currently calling scores) and in other cases we want "smaller is better" (what I'm currently calling errors).

We explored several different ways of addressing this and I think came up with some good ideas. None of them are "complete" and propagated through the entire system, though.

What we've got at the moment is:

* A pair of `Score` and `Error` structs that both hold a (currently `i64`) value, where the assumption is that for  `Scores` higher is better and for `Errors` lower is better. (I really like this idea.)
* We also have a `TestResult` enum that holds either a `Score` or an `Error`.
* I would like to abstract out the `i64` from `Score` and `Error`.
* I don't know how we're going to handle vectors of `TestResults`.

================

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Every Tuesday and Saturday from 10am-noon CDT . We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
