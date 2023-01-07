+++
title = "Episode 17: Rewriting pagination parsing in ice-repos!"
date = 2022-08-13
description = "A really interesting day. It sorta seemed like not a lot happened, but we actually changed, discussed, and (I at least) learned a lot."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "ijkde6uw3V4"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=ijkde6uw3V4&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="ijkde6uw3V4", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

A really interesting day. It sorta seemed like not a lot happened, but we actually changed, discussed, and (I at least) learned a lot.

I decided that I didn't like my use of regex to parse the last page from the link field in the HTTP response from GitHub. I'd had two errors because of that, and there was no way for the Rust compiler to help me understand what was happening there.

So I went with esitsu@Twitch's suggestion from a few episodes ago to instead use `String` tools like `split()` and iterator tools like `find_map()`. This was really nice, and ended up with a structure were I was much more confident that it in fact worked.

One other thing that it highlighted, though, were the many ways that could fail, as we had `unwrap()`s all over the place. After some discussion, we decided that it would make sense to return a `Result` type instead of just a `usize`. In fact we returned a `Result` containing an `Option`, using the `Option` to indicate the possibility of there being no `rel="last"` entry (which happens when we're on the last page), and the `Result` to handle the various error conditions.

We then created a custom error type and implemented some `From` traits so we could use `?` to simplify things.

We finished getting that function to compile near the end of scheduled stream time, so the code that calls it is still broken and there are some other issues to be resolved, but I think we made really good progress. Bit thanks to esitsu@Twitch and Patatas_del_papa@Twitch for all their great help today!

For the moment, at least, I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Thanks for watching!
