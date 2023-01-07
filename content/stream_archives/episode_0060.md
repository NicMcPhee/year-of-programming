+++
title = "Converting `Population::iter()` method to trait implementations! Episode 60 of Unhindered by Coding"
date = 2022-12-10
description = "The first half of another really productive day!"

[extra]
subject = "rust-ga"
playlist = "PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl"
video_code = "wx8OijoNdkU"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=wx8OijoNdkU&list=PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl).
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
    youtube(id="wx8OijoNdkU", playlist="PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl", class="flex grow")
 }} 
</div>

The first half of another really productive day!

One dangling bit from last time was we had a `Population::iter()` method that tied us down to some particular ways of accessing members of a population. This was particularly unfortunately, since `iter()` is by nature linear time access, and selectors like `Random` and `Tournament` really want O(1) access.

In the first session, we got rid of the `Population::iter()` method, instead adding a requirement to `Best` and `Tournament` that the `Population` implement `IntoIterator()`:

```rust
impl(P) Selector(P) for Best
where
 P: Population,
 for('pop) &'pop P: IntoIterator(Item = &'pop P::Individual),
 P::Individual: Ord,
{ … }
```

We then realized that using `IntoIterator` wasn't a great choice for selectors that need fast random access (`Random` and `Tournament`), so for those we instead required that the `Population` implement `AsRef([P::Individual])`, which gives us O(1) random access. Only populations like `Vec` (or wrappers of them) will be able to implement those, but that might be OK since it helps make it clear that you may not want to be using tournament selection if you can't implement slices.

Once all that was done, we got rid of the `Population::iter()` method, achieving the goal of this bit of work!

### Getting rid of `VecPop`

Now that all we need for selection is to implement `IntoIterator` and `AsRef([P::Individual])`, we can just use "raw" vectors since they implement both of those types. This allows us to get rid of `VecPop`, replacing all references to it with `Vec`.

I did this by deprecating `VecPop`, which told us everywhere it was being used. Most of the logic in `VecPop` was already in `Vec` or very easy to add. The one complicated bit was `VecPop::generate`, which we addressed by creating a `Generation: Population` trait similar to what we did for `Generate: Individual` earlier. (There was some wierdness of two traits with the same name, but being able to do `use individual::Generate as _` cleaned a lot of that up – I had no idea you could do that!) Implementing that new trait for `Vec` was mostly a matter of relabelling that code, so that was nice.

This led to issues with the `new_bitstring_population` function, which we ultimately just changed into a free-floating function, updating the calls to it.

After replacing all the references to `VecPop` in `lib.rs`, we were able to remove `VecPop` altogether, and that wrapped up the first session!

================

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Tuesday: 10am-noon CST
* Wednesday: 7-9pm CST
* Saturday: 10am-noon and 2-4pm CST

I've put the `ice-repos` project on ice for the moment and I'm going to focus all my energies on the `rust-ga` project. I _really_ want to get a basic genetic programming system implemented so we can evolve programs, and we'll get there faster if we stay focused on that.

Thanks for watching!
