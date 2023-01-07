+++
title = "Writing the files and finishing the app! Episode 49 of Unhindered by Coding"
date = 2022-11-05
description = "This was really productive stream, and we basically finished this lab!. It's arguably shorter and cleaner than the Java version, and the testing was pretty straightforward, especially with quickcheck."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "bEspvA_HpWk"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=bEspvA_HpWk&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="bEspvA_HpWk", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

This was really productive stream, and we basically finished this lab!. It's arguably shorter and cleaner than the Java version, and the testing was pretty straightforward, especially with quickcheck.

I realized I didn't have all the Clippy tests turned on, so I added those, and we made most of them (except for `unwrap` and `expect`) go away.

I think one of the nice things about the Rust implementation is that it does force us to be clearer about our error handling than folks would often be in, e.g., a Java universe. We spent about 30 minutes adding `anyhow` error handling, which I then "finished" after the stream ended. There was some weirdness in the test code where I didn't know how to look inside an `anyhow::Error`, but other than that I think things are pretty good.

One thing that came up during the stream was having a useful UI. Right now it just prints out a bunch of dots as "proof of life", but it would be nice to convert to something like a curses UI that would tell us how many packets for each file had been downloaded, etc. Not sure if I want to devote a stream for that or not. Some potential resources:

============

For the moment (probably through 2022) I'm going to be streaming on Twitch (https://twitch.tv/NicMcPhee) every Saturday afternoon from 2-4pm CDT with a focus on these kinds of systems projects.

I'm also streaming on Twitch every Tuesday and Saturday from 10am-noon CDT. We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Lastly, I'm streaming on Twitch on Wednesday nights from 7-9pm CDT working on implementing an evolutionary computation system in Rust, in part to see what the performance is like.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
