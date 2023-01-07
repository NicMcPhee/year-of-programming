+++
title = "Using Rust EC-specific traits instead of `Fn`s! Episode 54 of Unhindered by Coding"
date = 2022-11-15
description = "A really successful session – a nice way to end things before a two week vacation! We did a lot of cool work changing my use of 'raw' `Fn`s to evolutionary computation specific traits. I felt like I was writing 'real' rust, and just writing well-designed code."

[extra]
subject = "rust-ga"
playlist = "PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl"
video_code = "GrU_4dGo6r0"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=GrU_4dGo6r0&list=PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl).
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
    youtube(id="GrU_4dGo6r0", playlist="PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl", class="flex grow")
 }} 
</div>

A really successful session – a nice way to end things before a two week vacation! We did a lot of cool work changing my use of "raw" `Fn`s to evolutionary computation specific traits. I felt like I was writing "real" rust, and just writing well-designed code.

I started by going over the changes I made in introducing the `ChildMaker` trait on my own outside of the stream. esitsu@Twitch had a nice idea for fixing a problem I'd had with my types in `lib.rs` and that moved the `Error`/`Score` specification into the type declaration for `Generation`, which was nice.

We talked some more about the tradeoffs of all my lifetime annotations and using things like `Arc` as an alternative. I might want to come back to that later.

The big win then was turning `Selector` into a proper trait. This allows us to

- Move all the selectors out of `Population` and into a new `selectors` module.
- Make `Weighted` an implementation of `Selector`
 - This let us have `Generator` hold a single `Selector`, which could then be a single selector or a composite like `Weighted`. _So_ much nicer.
 - I also got to implement the builder pattern for the first time in Rust, which was quite fun.
- Store "shared" information in the shared instance of that type so we don't have to keep passing it around. The tournament size in `Tournament` is a nice example of that.

At one point in implementing `Lexicase` I tried storing the `case_indices` in the `Lexicase` struct. In theory that shouldn't have worked, though, because then all the threads would be sharing a reference to a single `Lexicase` object, and thus sharing a sorting of the test case indices. We didn't get far enough to figure out where Rust would have complained about that, but I'm hoping/assuming it would have? Otherwise we don't really have "fearless concurrency", do we?

================

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Every Tuesday and Saturday from 10am-noon CDT . We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
