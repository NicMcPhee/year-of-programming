+++
title = "Parsing data packets! Episode 39, part 1, of Unhindered by Coding"
date = 2022-09-30
description = "For reasons known only to the hardware deities, my computer decided to freeze and reboot right in the middle of this stream. I've spent too long stitching the two halves of the recording together to no avail, so I'm going to post them separately, with this being the first half. Sighz."

[extra]
subject = "segmented"
playlist = "PLI9i5fpXEEc6_o2Xy0ozg_hrO4FgswkGG"
video_code = "JBvEOiE3Srw"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=JBvEOiE3Srw&list=PLI9i5fpXEEc6_o2Xy0ozg_hrO4FgswkGG).
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
    youtube(id="JBvEOiE3Srw", playlist="PLI9i5fpXEEc6_o2Xy0ozg_hrO4FgswkGG", class="flex grow")
 }} 
</div>

For reasons known only to the hardware deities, my computer decided to freeze and reboot right in the middle of this stream. I've spent too long stitching the two halves of the recording together to no avail, so I'm going to post them separately, with this being the first half. Sighz.

We're using Rust to implement a client that receives a flurry of UDP packets that collectively represent the contents of several files. In last week's stream we wrote the code for parsing the header packets, and in this part of this stream we wrote the code (& tests) for parsing the data packets.

There's a lengthy discussion at the end about alternatives to standard `if-then-else` statements using `.then()` and `.or_else`. I didn't end up replacing my `if-then-else`, but it was certainly interesting to see the alternative approach. In doing that I learned about the `.not()` operator, which I actually prefer to `!` in some cases, especially since `!` is also used to indicate macro-ness. Thanks to Wgaffa@Twitch for the suggestions and ideas.

See https://github.com/UMM-CSci-Systems/Segmented-file-system-client for a description of the project as a course lab write-up. Our Rust implementation is at https://github.com/NicMcPhee/rust-segmented-file-client

=================

The schedule is gonna be kinda weird in the last week of September and October. In theory I'm sticking to the schedule below, but a dental appointment, a local film festival, and a trip to visit family are all upending the schedule in various ways. I'm not entirely sure what's going to happen, TBH, but I'll try to keep the schedule on Twitch (@NicMcPhee) up-to-date, and share the state of play on Twitter (@NicMcPhee) and on the Discord (https://discord.gg/ta747E5g). Sorry for the confusion.

=================

For the moment (probably through September 2022) I'm going to be streaming on Twitch (https://twitch.tv/NicMcPhee) every Saturday afternoon from 2-4pm CDT with a focus on these kinds of systems projects.

I'm also streaming on Twitch every Tuesday and Saturday from 10am-noon CDT. We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Lastly, I'm streaming on Twitch on Wednesday nights from 7-9pm CDT working on implementing an evolutionary computation system in Rust, in part to see what the performance is like.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
