+++
title = "Episode 28: Finish error handling and add logging to the echo server"
date = 2022-09-10
description = "This week we finished adding the error handling with the `error-stack` crate, and used `env_logging` to add some simple logging to the echo server!"

[extra]
subject = "echo"
playlist = "PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d"
video_code = "ndFUH2_sRE0"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=ndFUH2_sRE0&list=PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d).
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
    youtube(id="ndFUH2_sRE0", playlist="PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d", class="flex grow")
 }} 
</div>

This week we finished adding the error handling with the `error-stack` crate, and used `env_logging` to add some simple logging to the echo server!

We used enums in a nice way to handle two separate (but closely related) error cases when reading from/writing to the socket.

We spent a lot of time on the logging, and I'm still not convinced I have a very clear sense of how one might best connect `error-stack` errors to a logging system. Just printing them with something like `error!({err:?})` works, but doesn't generate the prettiest logging output (e.g., it won't be super easy to parse). I think we could extract the frame info from the `error-stack` report and format our own error report, but that seems like rather a lot of work for minimal reward.

I tried "forcing" an I/O error in the code that reads from and writes to the socket, but it turns out that didn't work, so I'm really not sure how I can generate one of those errors. Maybe some kind of mocking system would be useful/necessary?

There's also no testing at the moment, although we could use variations on the existing `bats` tests to extend that. We might be able to mock some of the Tokio responses, although I'm not sure how complicated that would be.

*Tons* of great help and suggestions from esitsu@Twitch and Wgaffa@Twitch, and I am super grateful for their contributions.

For the moment (probably through September 2022) I'm going to be streaming on Twitch (https://twitch.tv/NicMcPhee) every Saturday afternoon from 2-4pm CDT with a focus on these kinds of systems projects.

I'm also streaming on Twitch every Tuesday and Saturday from 10am-noon CDT. We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Lastly, I'm streaming on Twitch on Wednesday nights from 7-9pm CDT working on implementing an evolutionary computation system in Rust, in part to see what the performance is like.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
