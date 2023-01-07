+++
title = "Cool generalization of traits in Rust GA system! Episode 58 of Unhindered by Coding"
date = 2022-12-06
description = "Another really productive session, and esitsu@Twitch shared a nifty trick! :-)"

[extra]
subject = "rust-ga"
playlist = "PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl"
video_code = "Dls_WUBWxto"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=Dls_WUBWxto&list=PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl).
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
    youtube(id="Dls_WUBWxto", playlist="PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl", class="flex grow")
 }} 
</div>

Another really productive session, and esitsu@Twitch shared a nifty trick! :-)

There were two major parts to the session:
(
- Converting all the `selectors` from `Selector(G, R)` to `Selector(I)`
- Converting `ChildMaker(G, R)` to `ChildMaker(I)`

### Convert all the selectors to `(I)` instead of `(G, R)`

We started by converting everything in the `selectors` module to use the new `SelectorI(I)` trait that depends on just one generic `I` instead of the old `(G, R)` dependency. This removed all references to `EcIndividual` in that module.

The goal now would be to remove all "external" references to the `Selector` trait (i.e., references outside of the `selectors` module), ultimately renaming `SelectorI` to just `Selector`.

esitsu@Twitch suggested the nice technique in `mod.rs` of `impl`ing `Selector(G, R)` for all types `T` that also `impl` `SelectorI`. That was probably the coolest thing I learned in today's session.

This "trivially" allowed all our various implementation of `Selector` (`Best`, `Random`, etc.) to implement the "old" `Selector` trait as soon as we had them implementing the new `SelectorI` trait. This way all "outside" references to `Selector(G, R)` should still work without any changes, which is slick.

### Convert `Generation` to use new `SelectorI(I)` trait

It turns out that the only references to `Selector(G, R)` were in `Generation`, and they were very easy to replace with references to the new `SelectorI(I)` trait.

### Rename `SelectorI` to `Selector`

Now that all references to the old `Selector(G, R)` were gone, we removed that, and renamed `SelectorI` to `Selector`.

### Add `ChildMakerI(I)` trait

The idea here was to follow the same pattern we'd used with `SelectorI(I)` above. There turned out to be a twist, though, because `ChildMaker` takes `Generation(G, R)` as an argument, so we ended up with a cyclic type issue. A trait `ChildMaker(I)` wouldn't be able to refer to `Generation(G, R)` since it wouldn't have `G` and `R` at its disposal. esitsu@Twitch suggested thinking about whether `ChildMaker` _really_ needed the (whole) `Generation` to do its thing. This led to having the `make_child_i` method in `ChildMakerI` take the population and selector from the `Generation` as arguments instead of just taking the `Generation`. To be honest I'm not thrilled about having 2/3 of the `Generation` get passed in as arguments, and think there's probably a new trait to be added to deal with this, but this works for now.

Because we couldn't have two `make_child` methods with different signatures, we also had to rename the method in `ChildMakerI(I)` to something like `child_maker_i` to avoid the name collision.

### Replace all `ChildMaker` with `ChildMakerI`

There were only a few places (all in `Generation`) that referred to `ChildMaker`, so it was easy to replace all the instances of `ChildMaker` with `ChildMakerI`. 

### Rename `ChildMakerI` back to `ChildMaker`

Once there were no more uses of the old `ChildMaker(G, R)`, we could remove that trait, and rename `ChildMakerI` to `ChildMaker`, and rename the method `make_child_i` to `make_child`.

_In retrospect, I should have given the *old* versions (that I was going delete) the funky names, and probably deprecated them at the same time._ I should keep this in mind for the #blogpost_idea. 

## What to do next

I think the next step is to tratit-ify the idea of a `Population`. Then all three components of `Generation` will be traits, and we can hopefully change it to be `I` instead of `G, R`.

================

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Tuesday: 10am-noon CST
* Wednesday: 7-9pm CST
* Saturday: 10am-noon and 2-4pm CST

I've put the `ice-repos` project on ice for the moment and I'm going to focus all my energies on the `rust-ga` project. I _really_ want to get a basic genetic programming system implemented so we can evolve programs, and we'll get there faster if we stay focused on that.

Thanks for watching!
