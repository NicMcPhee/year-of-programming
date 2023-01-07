+++
title = "Finish review & submit UI!: Episode 37, Unhindered by Coding"
date = 2022-09-28
description = "We finished at least the UI for the `ReviewAndSubmit` component today, and then got part way into changing the pagination to use 'Prev'/'Next' instead of page numbers."

[extra]
subject = "rustlings"
playlist = "PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm"
video_code = "TAFPPxW8zVs"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=TAFPPxW8zVs&list=PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm).
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
    youtube(id="TAFPPxW8zVs", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm", class="flex grow")
 }} 
</div>

We finished at least the UI for the `ReviewAndSubmit` component today, and then got part way into changing the pagination to use "Prev"/"Next" instead of page numbers.

We got the UI for the `ReviewAndSubmit` sorted out today, with a (too) big "Archive" button and a warning about the consequences of hitting it. We also did some refactoring so we can re-use `RepositoryList` in `ReviewAndSubmit` instead of repeating that logic. This highlighted a gap in the previous work, where we hadn't displayed anything if there were no selected archives.

We made a `services/archive_repos.rs`. This currently just contains a stub for the `archive_repositories` method that only logs the intent to archive that repository. We won't be able to actually implement that until we have all the OAuth stuff in place.

We probably want to move a lot (or all) of the existing HTTP code into a service as well, which should help simplify the overly complicated `RepositoryPaginator` component. 

We then moved to changing the pagination UI from listing all the page numbers to a "Prev"/"Next" interface. We got a good start on that, but then got bogged down in some cloning faff and that will need to be addressed when we next work on this.

=================

The schedule is gonna be kinda weird in the last week of September and October. In theory I'm sticking to the schedule below, but a dental appointment, a local film festival, and a trip to visit family are all upending the schedule in various ways. I'm not entirely sure what's going to happen, TBH, but I'll try to keep the schedule on Twitch (@NicMcPhee) up-to-date, and share the state of play on Twitter (@NicMcPhee) and on the Discord (https://discord.gg/ta747E5g). Sorry for the confusion.

=================

For the moment (probably through September 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
