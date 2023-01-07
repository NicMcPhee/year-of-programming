+++
title = "Episode 12: Progress on ice-repos! DISPLAYING REPOS!"
date = 2022-07-19
description = "A very exciting day! We managed to display the fix the parsing problems so we can successfully grab all the (public) repositories from an organization and display them! We added some other properties to our repository struct, so we can now filter out previously archived repos and display when repositories were last updated and pushed to."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "A28iext55Ao"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=A28iext55Ao&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="A28iext55Ao", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

A very exciting day! We managed to display the fix the parsing problems so we can successfully grab all the (public) repositories from an organization and display them! We added some other properties to our repository struct, so we can now filter out previously archived repos and display when repositories were last updated and pushed to.

We've made a lot of progress, and it's starting to look something like an actual app. Now we "just" need to add checkboxes and authentication so we can actually select and archive repositories, and we could call this 1.0! :)

For the moment, at least, I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Thanks for watching!
