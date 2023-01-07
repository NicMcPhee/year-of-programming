+++
title = "Making scores and errors more generic! Episode 51 of Unhindered by Coding"
date = 2022-11-10
description = "That was quite productive, in a somewhat grinding sort of way. The big thing was adding the second generic type `R` to `Individual` (for test `r`esults). In the process I renamed the weird 'internal' `R` type to `H` (to free up `R` for test results), and while I was there I renamed `T` to `G` (for the type of the `g`enome). We then had to refactor these changes out across the entire system, which was really tedious and took over an hour. We did get it done, though, and were able to run the system successfully!"

[extra]
subject = "rust-ga"
playlist = "PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl"
video_code = "zZX9KGlYyY4"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=zZX9KGlYyY4&list=PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl).
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
    youtube(id="zZX9KGlYyY4", playlist="PLI9i5fpXEEc7E8W7wkWYuzXgvPAv8Emkl", class="flex grow")
 }} 
</div>

That was quite productive, in a somewhat grinding sort of way. The big thing was adding the second generic type `R` to `Individual` (for test `r`esults). In the process I renamed the weird "internal" `R` type to `H` (to free up `R` for test results), and while I was there I renamed `T` to `G` (for the type of the `g`enome). We then had to refactor these changes out across the entire system, which was really tedious and took over an hour. We did get it done, though, and were able to run the system successfully!

A #blogpost_idea would be to think about how one might have managed that refactoring in a more "controlled" way so one didn't have to change _everything_ when one made the change, but could do it in a more stepwise manner. My guess is that you could have created a type `ParameterizedIndividual` , and then defined `Individual` in terms of that? Then the rest of the code would still compile and run. You could deprecate `Individual` and then chase the implications of that?

esitsu@Twitch helped me understand why I needed to implement both `Ord` and `PartialOrd` for various types instead of implementing one and `#derive`ing the other. `#derive` is a macro and _only_ has access to the type definition, and doesn't know what other traits you might implement elsewhere. So it has no way of implementing something like `PartialOrd` using a later definition of `Ord` somewhere else. Thus I have to implement both of them.

================

For the moment (probably through 2022) I'm streaming at https://twitch.tv/NicMcPhee four times a week:

* Every Tuesday and Saturday from 10am-noon CDT . We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

* Wednesday nights from 7-9pm CDT, implementing an evolutionary computation system in Rust to see what the performance is like. https://github.com/NicMcPhee/rust-ga

* Saturday afternoons from 2-4pm CDT, working on some possible lab exercises in Rust for our Systems Practicum course.

Thanks for watching!
