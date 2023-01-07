+++
title = "Some slick tricks with dynamic references in Rust! Episode 61 of Unhindered by Coding"
date = 2022-12-10
description = "The second half of another really productive day!"

[extra]
subject = "rust-ga"
playlist = "PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl"
video_code = "w5txUqNEbMg"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=w5txUqNEbMg&list=PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl).
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
    youtube(id="w5txUqNEbMg", playlist="PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl", class="flex grow")
 }} 
</div>

The second half of another really productive day!

After tidying up the whole `Population::iter` business and getting rid of `VecPop` in the first session, we came back to the `&dyn Selector` and &dyn ChildMaker` types in `Generation`.

Both the `selector` and `child_maker` fields in `Generation` were `&dyn`s, which led to a lot of clutter throughout `Generation` and a bit in `ChildMaker`. So we used #esitsu's idea of having `Generation` be generic in `P, S, C` (for `Population`, `Selector`, and `ChildMaker`), moving the dependencies to the specific `impl` blocks so can be as specific as we need to be.

This forced a similar change to `ChildMaker`, which is now generic in two types (`P` and `S`).

The real "trick", then, was to have dynamic references to `Selector` and `ChildMaker` also implement the relevant trait:

```rust
impl('a, P: Population) Selector(P) for &'a dyn Selector(P) {
 fn select('pop)(&self, rng: &mut ThreadRng, population: &'pop P) 
  - &'pop P::Individual
 {
  (*self).select(rng, population)
 }
}
```

This lets us pass in a dynamic reference when we construct the first `Generation`, and then only that reference gets cloned (which is cheap) as we move from one generation to the next.

We could then pass references to, e.g., the selector when we construct the initial generation. We had to explicitly say that we wanted to pass it in as a `&dyn Selector`, though:

```rust
let mut generation = Generation::new(
 population,
 &selector as &dyn Selector,
 &child_maker as &(dyn ChildMaker + Sync + Send),
);
```
 It sort of feels like the compiler should have been able to figure that out for us, but there we are. Note that we also had to explicitly list `+ Sync + Send` for the `ChildMaker`, but not for the `Selector`, which seems weird to me.

================

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Tuesday: 10am-noon CST
* Wednesday: 7-9pm CST
* Saturday: 10am-noon and 2-4pm CST

I've put the `ice-repos` project on ice for the moment and I'm going to focus all my energies on the `rust-ga` project. I _really_ want to get a basic genetic programming system implemented so we can evolve programs, and we'll get there faster if we stay focused on that.

Thanks for watching!
