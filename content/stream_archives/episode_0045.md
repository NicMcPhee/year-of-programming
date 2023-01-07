+++
title = "Organizing data packets! Episode 45 of Unhindered by Coding"
date = 2022-10-29
description = "This was another really productive stream, and we're near to done on this lab; I think we can probably finish it in the next stream depending on how much we want to do on the frills."

[extra]
subject = "segmented"
playlist = "PLI9i5fpXEEc6_o2Xy0ozg_hrO4FgswkGG"
video_code = "CEu8914F3dY"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=CEu8914F3dY&list=PLI9i5fpXEEc6_o2Xy0ozg_hrO4FgswkGG).
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
    youtube(id="CEu8914F3dY", playlist="PLI9i5fpXEEc6_o2Xy0ozg_hrO4FgswkGG", class="flex grow")
 }} 
</div>

This was another really productive stream, and we're near to done on this lab; I think we can probably finish it in the next stream depending on how much we want to do on the frills.

We started by sketching out the missing parts of the loop in `main`, constructing and calling the various (unimplemented) methods in a new `FileManager` type. This did a nice job of outlining the structure of the problem and then doing a kind of functionality-driven-development for the rest. Sadly I didn't write any tests; more on that below.

The one interesting thing in finalizing `main` was the error handling. Before this we just had `main` returning an `io::Result`, but our packet parsing returned a `PacketParseError`.  I just went with a "simple" solution here of creating a new `ClientError` enum with `IoError` and `PacketParseError` variants. esitsu@Twitch suggested looking at the `anyhow` crate; I didn't want to wander down that road today, but it might be something to return to if we want to spend some additional time on this.

We then went into `FileManager` and worked through implementations of the methods we'd needed in `main`. 

The `received_all_packets()` method was pretty straightforward, especially since `HashMap::values()` returns an iterator, and the `all()` method on iterators did exactly what I needed.

We spent quite a while on `process_packet`. I started with a simple `if-else` statement, but I knew there was a more Rusty way to do that. Once again Wgaffa@Twitch came through with a cool suggestion and with a number of suggestions from both Wgaffa and esitsu, we it down to a single line! The `Entry` types returned by `HashMap::entry()` are really interesting and allow some cool things that you just couldn't do in a non-side-effecting language.

I started by adding `::new()` for both `FileManager` and `PacketGroup` , but Wgaffa pointed out that we just just derive `Default` and use `::default()` instead.

I got all bogged down in the difference between `Packet::Data` (i.e. the variant `Data` in the enum `Packet`) and `Data` as a struct. That was arguably a sign that I was (a) tired and (b) don't know Rust as well as I would sometimes like to think.

The process of working through `received_all_packets` was fun. I started going with an `if-let`. I then tried something cool, but it was only available in nightly, so it didn't work. :cry: Wgaffa again shared a cool version using `map()`; I just don't think about `map()` and friends quickly enough when I have `Option` and `Result` types. We then went through three or four versions of `unwrap_or…` before we settle on just `unwrap_or()`. Then esitsu pointed out that we could just wrap the actual number of packets in `Some` and compare them with a simple equality test, bringing everything down to a single line!

`process_packet` was quite straightforward, with a basic `match` taking care of things.

`process_header_packet` turned out to be quite simple, but we went through some ownership fog to get there. esitsu saw it the most clearly, and I was slow to catch up. We made the `Header::file_name` field `pub(crate)` so it was visible throughout the (lib) crate, and then we were just able to capture ownership of it with `self.file_name = Some(header.file_name)`. I had expected to have to do some cloning (as did Wgaffa), but as esitsu saw/explained, `process_header_packet` takes complete ownership of `header`, so we can pass ownership of the `header.filename` string into the `PacketGroup` (i.e., `self.filename`).

We were already running long when we figured that out, but I realized that `process_data_packet` would also be _really_ short since we'd already copied the bytes out of the buffer and into `Vec` in the parsing process. All the same ownership issues applied, making that really straightforward. There's an annoying `+1` in this method that _really_ indicates how important it is to write tests for this type. We should also write tests for `FileManager` as well.

For the moment (probably through 2022) I'm going to be streaming on Twitch (https://twitch.tv/NicMcPhee) every Saturday afternoon from 2-4pm CDT with a focus on these kinds of systems projects.

I'm also streaming on Twitch every Tuesday and Saturday from 10am-noon CDT. We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Lastly, I'm streaming on Twitch on Wednesday nights from 7-9pm CDT working on implementing an evolutionary computation system in Rust, in part to see what the performance is like.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
