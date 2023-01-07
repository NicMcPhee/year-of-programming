+++
title = "Episode 15: Adding DaisyUI pagination buttons to ice-repos!"
date = 2022-08-06
description = "More good progress today, and we have the proper pagination buttons being displayed!"

[extra]
subject = "ice-repos"
playlist = "PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN"
video_code = "IdGDVWry_70"
+++

> This description was scraped from
> [the YouTube video page](https://www.youtube.com/watch?v=IdGDVWry_70&list=PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN).
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
    youtube(id="IdGDVWry_70", playlist="PLI9i5fpXEEc40_5gjSO--whmr_5Yp-aJN", class="flex grow")
 }} 
</div>

More good progress today, and we have the proper pagination buttons being displayed!

I started with a bunch of refactoring that extracted the display of repository lists into a new `RepositoryList` child component, renaming the old `RepositoryList` to a `RepositoryPaginator` parent component. `RepositoryPaginator` then makes the HTTP request, and passes the list of repositories in to the `RepositoryList` component for display.

(Later on the `RepositoryList` component will need to also include the checkboxes and emit the state of those check boxes to the parent, but we're not there yet.)

We then used the last page info that we parsed out last week to determine the correct number of page buttons to display. These are now displayed, and the current page is highlighted with the `btn-active` class.

Currently none of the buttons *do* anything, and fixing that is probably the next step. We'll need to add an `onclick` to each of the buttons, and update the current page state component as appropriate.

For the moment, at least, I'm streaming every Tuesday and Saturday from 10am-noon CDT (https://twitch.tv/NicMcPhee). We're currently working on a simple web app in Rust to solve a problem that's annoying me. :) See this repo for a description of the problem: https://github.com/NicMcPhee/ice-repos

Thanks for watching!
