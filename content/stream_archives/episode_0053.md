+++
title = "Adding `anyhow` error handling to segmented file transfer client! Episode 53 of Unhindered by Coding"
date = 2022-11-12
description = "This was a very productive stream, even if it leaned a little towards the 'grinding' side of things at times. The main outcome was adding contexts to most of the (many) potential errors in the client using the `anyhow` crate. Adding the contexts themselves was often pretty straightforward, although time consuming, but there were some interesting opportunities to think about the error handling and improve things in places."

[extra]
subject = "segmented"
playlist = "PLI9i5fpXEEc6_o2Xy0ozg_hrO4FgswkGG"
video_code = "06xW0L3yEJA"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=06xW0L3yEJA&list=PLI9i5fpXEEc6_o2Xy0ozg_hrO4FgswkGG).
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
    youtube(id="06xW0L3yEJA", playlist="PLI9i5fpXEEc6_o2Xy0ozg_hrO4FgswkGG", class="flex grow")
 }} 
</div>

This was a very productive stream, even if it leaned a little towards the "grinding" side of things at times. The main outcome was adding contexts to most of the (many) potential errors in the client using the `anyhow` crate. Adding the contexts themselves was often pretty straightforward, although time consuming, but there were some interesting opportunities to think about the error handling and improve things in places.

There was a wee bit of flailing in the middle because the connection to the server fails considerably later than I expected if the server isn't running. I thought it would fail as soon as we try to connect to it, but it doesn't fail until we actually try to _read_ from that socket. We were even able to _write_ to the socket without generating an error. I suspect this is because UDP is so relaxed about things, but I'm not at all sure.

We looked at three different versions of a conditional in `FileManager::write_all_files` that was interesting. I liked the `match` we ended up with, but the other options were definitely worth look at and thinking about, so I'm glad we did that.

I think the biggest improvement to the code besides the error handling was in `PacketGroup::write_file`. I hadn't really liked the handling of the range of packet numbers there, and thinking about the error handling pushed me to clean that up. I think the big win was moving the error checkout outside the loop, so we only check it once instead of converting and checking every `packet_number` on each pass through the loop.

I still need to finishing add contexts to `packets.rs` (or decide that I don't need contexts there because of the `thiserror` messages).

I should consider adding more tests that specifically flush out as many of these errors as possible. I don't know, for example, how to make sure that we're generating the "right" error if a `PacketGroup` doesn't have a file name when we try to write that file. To cause that to fail "in the real world" I'd basically have to write a special server that deliberately sends an incomplete set of packets. I could write tests that "simulate" that scenario by not sending all the necessary packets. I could also see if I can mock the server if I want to test things like the connection errors.

There will be no streams for two weeks starting next Wednesday (16-29 Nov) as I'll be away visiting family.

============

For the moment (probably through 2022) I'm going to be streaming on Twitch (https://twitch.tv/NicMcPhee) every Saturday afternoon from 2-4pm CDT with a focus on these kinds of systems projects.

I'm also streaming on Twitch every Tuesday and Saturday from 10am-noon CDT. We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Lastly, I'm streaming on Twitch on Wednesday nights from 7-9pm CDT working on implementing an evolutionary computation system in Rust, in part to see what the performance is like.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
