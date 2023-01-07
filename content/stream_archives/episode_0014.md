+++
title = "Episode 14: Progress on ice-repos! DaisyUI! Starting pagination!"
date = 2022-08-02
description = "Made some excellent progress today, with a ton of help from @esitsu on Twitch (https://www.twitch.tv/esitsu)!"

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "85inT7-5aQ0"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=85inT7-5aQ0&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="85inT7-5aQ0", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

Made some excellent progress today, with a ton of help from @esitsu on Twitch (https://www.twitch.tv/esitsu)!

We first added the DaisyUI component library, and used that to replace my hacked up header content with a nice Hero component, and then did some refactoring to clean up that code.

After that I felt like we were in a good place to add pagination since DaisyUI has support for pagination components. We got rather bogged down, though, in figuring out how to determinate how many repositories an organization had so we'd know how many pages there were. This is where @esitsu was a huge help, and was able to figure out that we could get that from the `link` field in the response headers. The parsing on that isn't yet done, but we're heading in a useful direction, and I'm pretty confident we can get the pagination working in the next episode.

It's clear in all this that I still really don't "know" Rust. I have to look up the syntax for all kinds of "simple" things like matching. Weirdly, this is a place where something like GitHub CoPilot would probably increase my speed, because I could presumably just start something and it would fill in something that at least had legal syntax.

For the moment, at least, I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Thanks for watching!
