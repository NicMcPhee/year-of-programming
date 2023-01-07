+++
title = "Episode 10: Progress on ice-repos! Trouble with crabs!"
date = 2022-07-19
description = "Buckets of flailing. Tried to use the Octocrab library to help manage the GitHub API interactions, but nothing compiled. Turns out that Octocrab doesn't support WASM, nor do any other Rust GitHub API libraries that I looked at. :("

[extra]
subject = "ice-repos"
playlist = "PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN"
video_code = "Q4tBcqRjI0Y"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=Q4tBcqRjI0Y&list=PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN).
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
    youtube(id="Q4tBcqRjI0Y", playlist="PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN", class="flex grow")
 }} 
</div>

Buckets of flailing. Tried to use the Octocrab library to help manage the GitHub API interactions, but nothing compiled. Turns out that Octocrab doesn't support WASM, nor do any other Rust GitHub API libraries that I looked at. :(

There are also _major_ sound issues for a while in the second hour. Doing full builds clearly ate too much of my computer's resources and the stream audio disappeared as a result. Sorry about that.

For the moment, at least, I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Thanks for watching!
