+++
title = "Episode 32: Restructure and implement the echo client! CLAP!"
date = 2022-09-17
description = "We started by restructuring the app so that instead of two independent projects side-by-side in the same repository, this is now a single project with two binary crates."

[extra]
subject = "echo"
playlist = "PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d"
video_code = "YkWsw_besy4"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=YkWsw_besy4&list=PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d).
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
    youtube(id="YkWsw_besy4", playlist="PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d", class="flex grow")
 }} 
</div>

We started by restructuring the app so that instead of two independent projects side-by-side in the same repository, this is now a single project with two binary crates.

We then implemented the echo client, which was pretty straightforward, although we didn't do any of the nifty error handling using `error-stack` that we did for the server. I also didn't thread the client, as I'm not sure I'd learn much by doing that.

We did add the `clap` crate for command-line argument parsing, though, allowing the user to specify either of the IP and/or port that you want to listen on/communicate with. Mostly just so I'd understand it, we moved the (limited) shared code for `clap` into a new `lib` crate, so this project now has three crates. :)

This week we finished adding the error handling with the `error-stack` crate, and used `env_logging` to add some simple logging to the echo server!

This essentially is a wrap on the echo client-server project, and I'll have to come up with a new systems project for next Saturday's afternoon session.

There's also no testing at the moment, although we could use variations on the existing `bats` tests to extend that. We might be able to mock some of the Tokio responses, although I'm not sure how complicated that would be.

*Tons* of great help and suggestions from esitsu@Twitch and Wgaffa@Twitch, and I am super grateful for their contributions.

For the moment (probably through September 2022) I'm going to be streaming on Twitch (https://twitch.tv/NicMcPhee) every Saturday afternoon from 2-4pm CDT with a focus on these kinds of systems projects.

I'm also streaming on Twitch every Tuesday and Saturday from 10am-noon CDT. We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Lastly, I'm streaming on Twitch on Wednesday nights from 7-9pm CDT working on implementing an evolutionary computation system in Rust, in part to see what the performance is like.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
