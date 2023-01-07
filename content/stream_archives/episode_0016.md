+++
title = "Episode 16: Adding DaisyUI pagination buttons to ice-repos!"
date = 2022-08-09
description = "More good progress today, and we're getting close to having the paginator button logic working! Lots of folks showed up today, and there was some excellent discussion and help from the team."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "H2m9ZQsQdI0"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=H2m9ZQsQdI0&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="H2m9ZQsQdI0", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

More good progress today, and we're getting close to having the paginator button logic working! Lots of folks showed up today, and there was some excellent discussion and help from the team.

I started by cleaning up a several Clippy warnings, including a nice use of `map_or_else` to replace an `if-else` block.

esitsu@Twitch made a nice suggestion for how to only compile the regex that extracts the last page number once, and in a lazy way at that! We had to bring in the `once_cell` crate because I'm not using the absolute latest version of everything (where `once_cell` is now in `std`), so we'll probably want to switch to the `std` version when I upgrade.

Related to that, there was also a nice discussion of whether to use `unwrap()` or `expect()` on the `Regex::new()` call, and Patatas_del_papa@Twitch suggested "Using unwrap() in Rust is Okay" by Andrew Gallant (https://blog.burntsushi.net/unwrap/), which explicit lists `Regex::new()` as a case where `unwrap()` might just be the best option. That made me feel a lot better about using `unwrap()` there, and might give me some better understanding of my options for error handling in other places.

We updated the paginator to only display pagination controls if there are at least two pages, and in the process found a bug in my regular expression. I thought I'd fixed the bug, but later work made it clear that I haven't, and I really need to decide how I want to handle this given that the regex has failed twice now.

I think we're _nearly_ done with adding the logic to the pagination buttons. It may even be correct, but that's not clear because we still seem to have regex issues. I ended up making a separate callback function for every button, which seems a bit heavy, but digging around in the DOM seems worse. We also had to add the `current_page` to the set of dependencies in `use_effect_with_deps` so that it will update the view when the current page changes.

Hopefully we can get all that fixed in the next stream, and then maybe think about error handling for a bit before moving on to the bits that will require authentication..

For the moment, at least, I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Thanks for watching!
