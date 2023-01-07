+++
title = "Episode 33: Eeek! OAuth problems! Most of ReviewAndSubmit component"
date = 2022-09-20
description = "As we were clearly getting close to to needing to do authenticated things (actually archiving repos), I spent some time looking into how we'd do that and it got weird. GitHub really wants you to do use their GitHub App setup _or_ have an external server, and I really didn't want to do either."

[extra]
subject = "echo"
playlist = "PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d"
video_code = "rQNm_r9Wn9E"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=rQNm_r9Wn9E&list=PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d).
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
    youtube(id="rQNm_r9Wn9E", playlist="PLI9i5fpXEEc6GHl9wyZUWm9UwtO-1Qj7d", class="flex grow")
 }} 
</div>

As we were clearly getting close to to needing to do authenticated things (actually archiving repos), I spent some time looking into how we'd do that and it got weird. GitHub really wants you to do use their GitHub App setup _or_ have an external server, and I really didn't want to do either.

We spent about half an hour discussing the options, which seem to me to be three:

* GitHub App – Must be connect to org by admin; probably easy to authenticate (no server)
* GitHub OAuth w/ device flow – individual authentication, no server, only 50 submissions per hour
* GitHub OAuth w/ Cloudflare – individual authentication, (hopefully) simple server, 100K/day free requests

Based on that discussion I'm currently leaning towards the last approach. It's a little more infrastructure than I intended, but I'm never likely to hit 100K request in a day and I think the server code should be really simple. They have support for Rust/WASM code, so we should be able to write the server in Rust and stay in the same universe. I think I could even make that a separate binary in the same repo, which would be nifty.

After that lengthy discussion, we started building out the (final?) ReviewAndSubmit component. We got the basic functionality working, but there are some look-and-feel and functionality pieces still to resolve.

esitsu@Twitch suggested a potentially useful/important change to the UI that we'll need to consider. Currently we have a bunch of buttons, one for each page of repos. @Esitsu's idea is to _just_ have "Prev"/"Next" so they _have_ to go through the repos in order (which will simplify avoiding repetitious calls to GitHub). The "Next" would turn into "Review & Submit" when we get the last page. This will ensure that we've loaded every page by the time that we get there, and reduce the likelihood of surprising results.

I learned about `bool.then_some()` today from @esitsu, which was really cool, and there were numerous other places where folks shared helpful tips and suggestions when I was stuck.

We switched from `HashMap` to `BTreeMap` for the storage of repos and their desired state. `BTreeMap` keeps things sorted by key, which works nicely here since (I _think_) the GitHub IDs (which we're using for keys) are numeric in increasing order as repos are created.

For the moment (probably through September 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
