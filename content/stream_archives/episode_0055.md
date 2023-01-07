+++
title = "Converting `Population` from a Rust type to a trait! Episode 55 of Unhindered by Coding"
date = 2022-11-30
description = "Turning `Population` into a trait was the primary focus of tonight's stream. I think we're _nearly_ there, but there are still some compilation errors in `generation.rs` and `lib.rs` that need to be addressed, and I'm guessing that they may push a few more changes back into some of the currently 'working' modules. It was an exciting first stream after two weeks away!"

[extra]
subject = "rust-ga"
playlist = "PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl"
video_code = "zELPweIfP6Q"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=zELPweIfP6Q&list=PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl).
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
    youtube(id="zELPweIfP6Q", playlist="PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl", class="flex grow")
 }} 
</div>

Turning `Population` into a trait was the primary focus of tonight's stream. I think we're _nearly_ there, but there are still some compilation errors in `generation.rs` and `lib.rs` that need to be addressed, and I'm guessing that they may push a few more changes back into some of the currently "working" modules. It was an exciting first stream after two weeks away!

In moving towards making `Population` a trait, we made the `individuals` field private in the `Population` struct, thus hiding the `Vec` of `Individual` implementation detail from everyone and forcing us to better understand what things a `Population` needs to be able to do. Fixing the resulting compilation errors was mostly pretty straightforward (lots of uses of the existing and underused `is_empty` and `size` methods). The most complicated bit was implementing `FromIterator` and `FromParallelIterator` and adding an `iter` method to `Population`.

In the same vein, we also renamed the `Population` struct to `VecPop` so that the name `Population` would be free for our new trait.

We then created a new `Population` trait and start sketching out what it needs to do, which led to a _lot_ of changes and not a small amount of confusion along the way. Again esitsu@Twitch was an *enormous* help!

So far the new trait only has two methods, `is_empty()` and `size()`. We have a nifty default implementation of `is_empty()` that uses `size()`, so we only have to implement `size()` in types that impl this trait.

The biggest win in this trait is arguably the associated type `Individual`. That manages to hide all references to the old `G` and `R` generics throughout, e.g., the selectors, and once we do something similar for `ChildMaker` we should be able to get rid of `G` and `R` from `Generation` as well!

I suspect that most, if not all, implementations of `Population` will also need to implement `IntoIterator`, so we might want to somehow cook that into this trait?

We removed `best_individual` from both `Population` and `Generation` since we have a `Selector` that does that, so we'll just keep that logic in that selector.

The biggest change was then to the selectors, which now are generic in `P: Population` instead of `G` and `R`. This led to a _lot_ of changes through the code.

There's a `where` clause in *every* selector's `select` method that is a quite annoying repetition. Can't we somehow say that once and have everyone get the memo?

I think this is a huge win, though, as the dependencies are clearer, and the generics are definitely moving in the right direction.

================

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Every Tuesday and Saturday from 10am-noon CDT . We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
