+++
title = "Episode 35: Refactoring boolean archive state to an enum!"
date = 2022-09-24
description = "Today was quite nifty. We needed to change the UI for the 'Review & Submit' component so that could review the repositories that had been marked for archiving, but still provide a way to uncheck/recheck those that had been selected in the first pass. We had been just keeping track of a single boolean for archive vs. don't-archive, and we expanded that to a proper enum with three states: Archive (saying we want to archive this repo), Skip (saying we chose to not archive this repo in the initial pass through in the pagination component), and SkippedInReview to indicate that we'd unchecked a repo in the 'Review & Submit' component."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "HyASCOyYBkE"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=HyASCOyYBkE&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="HyASCOyYBkE", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

Today was quite nifty. We needed to change the UI for the "Review & Submit" component so that could review the repositories that had been marked for archiving, but still provide a way to uncheck/recheck those that had been selected in the first pass. We had been just keeping track of a single boolean for archive vs. don't-archive, and we expanded that to a proper enum with three states: Archive (saying we want to archive this repo), Skip (saying we chose to not archive this repo in the initial pass through in the pagination component), and SkippedInReview to indicate that we'd unchecked a repo in the "Review & Submit" component.

This made me happy on several levels. I wasn't super thrilled about the raw `bool` in `ArchiveStateMap`, and this now gives us a named, domain specific `ArchiveState` type. We were also able to add some context specific conversion methods to convert the boolean state of a checkbox into an appropriate `ArchiveState` value depending on whether we're in the pagination or the review-and-submit components.

Changing the `bool` to `ArchiveState` in ArchiveStateMap` then pushed out errors to the various places we had to update because of this change, and there really weren't many.

esitsu@Twitch gets _loads_ of credit for the structure of this refactoring. They recommended pretty much all the key parts of this, which was really excellent.

This largely resolves the Review & Submit component, although it needs a bit "Archive the selected repos!" button, and logic to back that up. We also need to create some kind of frame around the Review & Submit component, because it's currently just floating on a page on its own. Lastly, we need to change the pagination UI to use the prev/next design proposed by esitsu@Twitch.

=================

The schedule is gonna be kinda weird in the last week of September and October. In theory I'm sticking to the schedule below, but a dental appointment, a local film festival, and a trip to visit family are all upending the schedule in various ways. I'm not entirely sure what's going to happen, TBH, but I'll try to keep the schedule on Twitch (@NicMcPhee) up-to-date, and share the state of play on Twitter (@NicMcPhee) and on the Discord (https://discord.gg/ta747E5g). Sorry for the confusion.

=================

For the moment (probably through September 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
