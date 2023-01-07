+++
title = "Making scores and errors more generic! Episode 52 of Unhindered by Coding"
date = 2022-11-12
description = "What a great session! I felt like we made a lot of excellent progress and are really using traits in a very 'Rusty' way that I like. I feel like I can _read_ all the code, but I'm not sure how much of that I could _write_ yet without help. But that's what learning is all about, right? esitsu@Twitch and Wgaffa@Twitch were, as always, the real heros of the stream, providing great ideas and patiently getting me unstuck."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "tEHf_nfnRPc"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=tEHf_nfnRPc&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="tEHf_nfnRPc", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

What a great session! I felt like we made a lot of excellent progress and are really using traits in a very "Rusty" way that I like. I feel like I can _read_ all the code, but I'm not sure how much of that I could _write_ yet without help. But that's what learning is all about, right? esitsu@Twitch and Wgaffa@Twitch were, as always, the real heros of the stream, providing great ideas and patiently getting me unstuck.

We used the `num_traits` to nicely solve the Clippy warning about converting from `usize` to `f32` in `mutate_one_over_length`, with a nifty use of `map` and `unwrap_or` to defaults to `f32::MIN_POSITIVE` when the `usize` length is too big to fit in an `f32`. I doubt this will _ever_ happen in practice, but it's cool that Rust caught the issues and encouraged us to be thoughtful about it.

`num_traits` is part of [a whole family of numeric traits](https://github.com/rust-num/num), and we could probably use these to genericize the `i64` that is currently inside `Score` and `Error`.

We moved the test results types (`Score`, `Error`, `TestResults`, etc.) over to a new `test_results.rs` module, which reduced the clutter in `individual.rs`.

I think the big win of the day was implementing `From` and `Sum` traits on `Score` and `Error`, and a nifty implementation of the `Sum` trait for `TestResults`. This really cleaned up the creation of `TestResults` values in `lib.rs`, and 

In retrospect, I do think that `Sum` wasn't the perfect trait to implement for `TestResults` since a `TestResults` value isn't really the "sum" of a bunch of individual errors. `.collect()` from the `FromIterator` trait is probably the better choice, but that wouldn't be hard to do (& `Sum` is working well for now).

We then modified things in `lib.rs` so that in the end we only needed to change `Score` to `Error` (or vice versa) in _only one place_ to switch between better is up or better is down. Super nifty!

I agree with #esitsu that the directionality should probably be in the `scorer` and not in `make_child`, so that's another refactoring that we probably want to look into later.

================

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Every Tuesday and Saturday from 10am-noon CDT . We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
