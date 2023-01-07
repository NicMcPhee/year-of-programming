+++
title = "More generalization using traits in our Rust GA system! Episode 59 of Unhindered by Coding"
date = 2022-12-08
description = "Another really productive session, and I think we have all/most of the trait-ification of the Rust-GA system done! `Generation`, `Selector`, and `ChildMaker` all now depend on a single generic type `P` instead of the old `G, R` dependency. Huzzah!"

[extra]
subject = "rust-ga"
playlist = "PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl"
video_code = "Xk6OGeAcj3Q"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=Xk6OGeAcj3Q&list=PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl).
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
    youtube(id="Xk6OGeAcj3Q", playlist="PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl", class="flex grow")
 }} 
</div>

Another really productive session, and I think we have all/most of the trait-ification of the Rust-GA system done! `Generation`, `Selector`, and `ChildMaker` all now depend on a single generic type `P` instead of the old `G, R` dependency. Huzzah!

We started by adding the new `Population` trait, and having `VecPop` implement that trait. This required that every module that used `VecPop` now also import `Population` so it would have access to the trait methods.

We removed the `best_individual()` method from both `Population` and `Generation`, and converted the few places that used those methods to use the `Best` selector instead esitsu@Twitch pointed out that if we don't have `{}` in our definition of a struct (e.g., `struct Best;`), when we can refer to `impl`ed methods with just `Best.select(…)` and don't need to "construct" an instance. Very cool! So I removed the `{}` from both `Best` and `Random` and eliminated the few "constructions" of instances of `Best`.

We changed the definition of `Selector` to depend on `P: Population` instead of `I`. This then bled out all across the universe, essentially forcing us to make the related changes in `Generation` and `ChildMaker`. That makes me a _little_ sad, because it didn't seem as incremental as I'd prefer, but it wasn't too bad. In a larger system, though, it would be nice to be able to control that better.

After that was all done, we then changed `Generation` so that it was generic in `P: Population` instead of in `G, R` as before. This really simplified a bunch of things, so I'm wondering if we should have made `Generation` generic first instead of last? I'm not sure.

esitsu@Twitch noticed that our `Generation::population` field was public, and suggested we encapsulate it, so we did. We added a getter that returns the `population`, which bugged me at first, but given that _all_ that reveals is that we have (or can make) something that implements the new (quite limited) `Population` trait, that really doesn't tie us to much.

Finally, in our rather mechanical refactoring, we'd ended up with `P: Population(Individual = EcIndividual(G, TestResults(R)))` in our `Lexicase` selector. esitsu@Twitch noted that we could clean that up with:

```rust
P: Population,
P::Individual: Individual(TestResults = TestResults(R)),
R: Ord
```

I'd been all hot to make a new trait and require that `P::Individual` implement that new trait, but it turns out that all we needed to do was say what type the associated `TestResults` type in `Individual` needed to be!

## What to do next

There are (at least) two things to try to address in the next session:

- Figure out how to access individuals in a population? At the moment we have an `iter()` method in the `Population` trait, but esitsu@Twitch doesn't like that solution. I'm not entirely sure what other options would make much sense, though? We could require that populations implement some trait that lets us get slices from them?

- Get rid of the two uses of `&'a dyn` in `Generation`. esitsu@Twitch had a nifty trick that allowed us to replace those with just `Selector` and `ChildMaker`, where, e.g., we say that `&'a dyn Selector` implements `Selector`.

================

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Tuesday: 10am-noon CST
* Wednesday: 7-9pm CST
* Saturday: 10am-noon and 2-4pm CST

I've put the `ice-repos` project on ice for the moment and I'm going to focus all my energies on the `rust-ga` project. I _really_ want to get a basic genetic programming system implemented so we can evolve programs, and we'll get there faster if we stay focused on that.

Thanks for watching!
