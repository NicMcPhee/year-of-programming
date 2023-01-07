+++
title = "Manage pages of repos!: Episode 40, Unhindered by Coding"
date = 2022-10-04
description = "I realized after the last ice-repos episode that if we went back and forth over the pages of repositories, we were downloading the same pages from GitHub over and over. This didn't seem good, either for us or for GitHub."

[extra]
subject = "ice-repos"
playlist = "PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN"
video_code = "PqJFLh5br6k"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=PqJFLh5br6k&list=PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN).
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
    youtube(id="PqJFLh5br6k", playlist="PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN", class="flex grow")
 }} 
</div>

I realized after the last ice-repos episode that if we went back and forth over the pages of repositories, we were downloading the same pages from GitHub over and over. This didn't seem good, either for us or for GitHub.

So today's stream started the process of keeping track of each page separately so that we can avoid re-downloading pages. This involved adding a new `PageRepoMap` type, along with a couple of type aliases (`RepoId` and `PageNumber`) to improve readability. There was various other refactoring that went along with that, as that changed what data we had and how we accessed it.

I think this was a significant improvement, except that it broke the project. :-(. To be fair, I think it just revealed a problem that was already there, but it's true that things don't actually work at the moment. :-)

I think we need to add an `AlreadyArchived` variant to our `ArchiveState` type, and update things accordingly. I also think we need to our `use_effects_with_deps` code, as we need to have updates when both the organization changes _and_ when the current page changes, and those updates need to be at least semi-separate. They're currently all muddled together, and I think that's causing us problems with the updates. I think the thing to do is have some "outer" component update when the organization changes (which will lead to a redraw of its child components), and then have the paginator _only_ depend on the current page for its updates.

Previously, we made a `services/archive_repos.rs`, and I think we still want to move a lot (or all) of the existing HTTP code into a service as well, which should help simplify the overly complicated `RepositoryPaginator` component. 

=================

The schedule is gonna be kinda weird in October. In theory I'm sticking to the schedule below, but a trip to visit family means that there will probably be no streaming from Wednesday, 12 Oct, to sometime late in the following week, maybe through the weekend (23 Oct). I'll try to keep the schedule on Twitch (@NicMcPhee) up-to-date, and share the state of play on Twitter (@NicMcPhee) and on the Discord (https://discord.gg/ta747E5g). Sorry for the confusion.

=================

For the moment (probably through 2022) I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

I'm also going to be streaming on Twitch on Wednesday nights from 7-9pm CDT and Saturday afternoons from 2-4pm CDT. I'm going to be using those streaming slots to work on implementing an evolutionary computation system in Rust to see what the performance is like, and working on some possible lab exercises in Rust for our Systems Practicum course.

I've also created a Discord server for Unhindered by Coding. There's an invite link QR code in the video, but that's only good for a week. If you stumble across this later and would like to join, let me know in the comments and I can share a working invite link.

Thanks for watching!
