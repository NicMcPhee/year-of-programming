+++
title = "Episode 36: Parsing UDP packets!"
date = 2022-09-24
description = "I felt like we had basically sorted out the echo client-server project last week, so this week we started a new project!"

[extra]
subject = "segmented"
playlist = "PLI9i5fpXEEc6_o2Xy0ozg_hrO4FgswkGG"
video_code = "lEVP6-euj0Y"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=lEVP6-euj0Y&list=PLI9i5fpXEEc6_o2Xy0ozg_hrO4FgswkGG).
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
    youtube(id="lEVP6-euj0Y", playlist="PLI9i5fpXEEc6_o2Xy0ozg_hrO4FgswkGG", class="flex grow")
 }} 
</div>

I felt like we had basically sorted out the echo client-server project last week, so this week we started a new project!

We're using Rust to implement a client that receives a flurry of UDP packets that collectively represent the contents of several files. The client has to collect the packets, realize when it has them all, organize and order them, and then write out the resulting files. See https://github.com/UMM-CSci-Systems/Segmented-file-system-client for a description of the project as a course lab write-up. Our Rust implementation is at https://github.com/NicMcPhee/rust-segmented-file-client

We started with some tools to parse the different packet structures. I really like how Rust enums and `TryFrom` traits are working here, as well as using `Result` types to have more useful error handling. We're also writing tests as we go. Not actually TDD (so far we've written the tests after the fact), but it's nice having the tests there to support the conversions. One way we could support/guide the students if we turn this into a lab is we could give them the unit tests; I'm guessing that the tests plus all the info implied by the type system would provide a lot of structure to the lab.

And I learned how to write tests that check for assertions! Thanks to the ever-helpful esitsu@Twitch for pointing me at the right tools there, and numerous other helpful suggestions!

=================

The schedule is gonna be kinda weird in the last week of September and October. In theory I'm sticking to the schedule below, but a dental appointment, a local film festival, and a trip to visit family are all upending the schedule in various ways. I'm not entirely sure what's going to happen, TBH, but I'll try to keep the schedule on Twitch (@NicMcPhee) up-to-date, and share the state of play on Twitter (@NicMcPhee) and on the Discord (https://discord.gg/ta747E5g). Sorry for the confusion.

=================

For the moment (probably through September 2022) I'm going to be streaming on Twitch (https://twitch.tv/NicMcPhee) every Saturday afternoon from 2-4pm CDT with a focus on these kinds of systems projects.

I'm also streaming on Twitch every Tuesday and Saturday from 10am-noon CDT. We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Lastly, I'm streaming on Twitch on Wednesday nights from 7-9pm CDT working on implementing an evolutionary computation system in Rust, in part to see what the performance is like.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
