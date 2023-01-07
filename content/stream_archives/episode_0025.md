+++
title = "Episode 25: Experiment with error-stack with an echo server"
date = 2022-09-03
description = "Last week we implemented a simple, threaded echo server in Rust using Tokio for the threading. There were numerous places where that code could generate errors, and we really didn't deal with any of them in a meaningful way. So this week I wanted to experiment with the error-stack crate and see what it would be like to use it to provide a somewhat more useful error handling system."

[extra]
subject = "echo"
playlist = "PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d"
video_code = "9lNpXyP-1zU"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=9lNpXyP-1zU&list=PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d).
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
    youtube(id="9lNpXyP-1zU", playlist="PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d", class="flex grow")
 }} 
</div>

Last week we implemented a simple, threaded echo server in Rust using Tokio for the threading. There were numerous places where that code could generate errors, and we really didn't deal with any of them in a meaningful way. So this week I wanted to experiment with the error-stack crate and see what it would be like to use it to provide a somewhat more useful error handling system.

I got turned around at the start and created an overly complex error type, but luckily esitsu@Twitch and Wgaffa@Twitch helped get me pointed in the right direction and *substantially* simplied the code as a result.

We now have all the basic binding and connection errors sorted out, and the next step is to handle I/O errors that occur while we're reading from and writing to the socket. Hopefully that won't take _too_ long, and then we can move to logging and command line arguments, and then (eventually) implementing the client as well.

There's also no testing at the moment, although we could use variations on the existing `bats` tests to extend that. We might be able to mock some of the Tokio responses, although I'm not sure how complicated that would be.

For the moment (probably through September 2022) I'm going to be streaming on Twitch (https://twitch.tv/NicMcPhee) every Saturday afternoon from 2-4pm CDT with a focus on these kinds of systems projects.

I'm also streaming on Twitch every Tuesday and Saturday from 10am-noon CDT. We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Lastly, I'm streaming on Twitch on Wednesday nights from 7-9pm CDT working on implementing an evolutionary computation system in Rust, in part to see what the performance is like.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
