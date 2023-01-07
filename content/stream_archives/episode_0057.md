+++
title = "(Con't) Encapsulation and module management in Rust GA system! Episode 57 of Unhindered by Coding"
date = 2022-12-04
description = "We continued the encapsulation and module management we'd started in the morning system, working to introduce traits for all the key components in our EC system."

[extra]
subject = "rust-ga"
playlist = "PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl"
video_code = "BmzWYWvJq34"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=BmzWYWvJq34&list=PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl).
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
    youtube(id="BmzWYWvJq34", playlist="PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl", class="flex grow")
 }} 
</div>

We continued the encapsulation and module management we'd started in the morning system, working to introduce traits for all the key components in our EC system.

One of the nifty things we did was introduce a new `Generate` trait for `Individual`s, that encapsulates the complexity of (randomly) generating new `Individuals`s, and introduced an `Individual` trait. The `EcIndividual` struct now implements both of those traits.

We also did a nifty thing where we introduce a new `VecPopI` struct that is generic on a _single_ type `I` (for `Individual`) instead of the old `VecPop` which is generic on two types (`G` and `R`). The goal ultimately is to get right of the old `VecPop` and then rename `VecPopI` to just be `VecPop`, but I wanted to do things more incrementally than we had the first time.

We then redefined `VecPop(G, R)` to be `VecPopI(EcIndividual(G, R))`, and the goal is to get rid of all of the instances of `VecPop(G, R)`, but we can do so more incrementally because everything will still compile and run at each step.

Implementing `Generate` for `VecPopI` was interesting. Since we now had `I: Generate` (and `Generate: Individual`), we knew that `I` implemented `Individual`, which gave us access to `I::Genome` and `I::TestResults`, which then became the `G` and `R` inside the old `generate` method.

In finishing the remaining conversion from `VecPop(G, R)` to `VecPop(I)`, there was a weird bit in `main.rs` where I had to add `::(i64)` to the `.sum()` calls (so `sum::(i64)()`). I'm really not at all sure why those were necessary. Everything looked like it "knew" that the test type was `i64`, so I don't get why it needed us to explicitly say that now, especially since we hadn't needed to before. That would be something to look into.

A bunch of searching and replacing got us from `VecPop(G, R)` to `VecPop(EcIndividual(G, R))`, and that eliminated all the references to the old two-generic version of `VecPop`.

The next step is to look for instances of `EcIndividual` that we can replace with the new `Individual` interface.

================

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Tuesday: 10am-noon CST
* Wednesday: 7-9pm CST
* Saturday: 10am-noon and 2-4pm CST

I've put the `ice-repos` project on ice for the moment and I'm going to focus all my energies on the `rust-ga` project. I _really_ want to get a basic genetic programming system implemented so we can evolve programs, and we'll get there faster if we stay focused on that.

Thanks for watching!
