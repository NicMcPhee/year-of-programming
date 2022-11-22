+++
date = 2022-11-21
title = "Streaming archives"
sort_by = "date"
template = "stream_archives.html"
page_template = "stream_archives_page.html"
insert_anchor_links = "right"
weight = 2
extra.index_title = "Streaming archives"
extra.index_show = true
extra.hidden_nav = false

extra.stream_types = [
  { title = "The Rustlings exercises", type = "rustlings", playlist="PLI9i5fpXEEc6g4tZJsnOPKVjnGkOCMKmm>" },
  { title = "The `ice-repos` web app", type = "ice-repos" },
  { title = "Evolutionary computation in Rust", type = "rust-ga" },
  { title = "Systems labs in Rust", type = "systems-labs" }
]
+++

## Archives of my Twitch live programming streams

As part of my [Year of Programming](/), I've been live coding several
times a week [on Twitch](https://Twitch.tv/NicMcPhee). I've been [archiving
the videos of those streams on YouTube](https://www.youtube.com/channel/UC5tGIQti2UYfCSI9aUeSZFQ),
and am posting short summaries of those videos here, organized by topic/project.

_**Pro tip**: I'd watch most of these at higher speeds (maybe 1.25x or 1.5x, or higher if
you're so inclined) as there can be a fair bit of pausing and thinking. You can always
slow down and back up if you zip past something you decide you need to watch more carefully._

So far there have been four projects that I've worked on:

- [The Rustlings exercises](https://github.com/rust-lang/rustlings),
  which I found to be probably the best "learn language X"
  set of exercises I've ever gone through. Not perfect, but they introduced me to most
  of the key concepts in a pretty effective way. I think that threading is probably
  the biggest hole. These were my first streams, and I was definitely learning the ropes,
  so be prepared for some rough edges. On the other hand, if you don't already know Rust,
  these will be the easiest to follow and probably the most informative.
- [The `ice-repos` web app](https://github.com/NicMcPhee/ice-repos),
  which will hopefully help scratch an itch that I have. As a
  CSci faculty, I regularly generate GitHub organizations that (through GitHub Classroom)
  get populated with dozens of repositories (often between 50 and 100). All those repositories
  really ought to be archived at the end of the semester, but doing that by hand through
  the GitHub web interface is _way_ too slow for several dozen repositories. So I'm using
  [the Yew framework](https://yew.rs) to write a WASM web app in Rust that will let me
  select the repos I want to archive and then make the necessary GitHub API calls to do
  the archiving.
- Implementing [a basic evolutionary computation system in Rust](https://GitHub.com/NicMcPhee/rust-ga).
  My primary research area is in evolutionary computation, and most of my coding in that space
  for the past decade or so has been in Clojure. The Clojure implementations
  ([Propeller](https://github.com/lspector/propeller), [Clojush](https://github.com/lspector/Clojush))
  have a lot of nice flexibility, but they are really slow, and I want to see how much faster
  similar systems would be if implemented in Rust, and how using Rust would impact the flexibility.
- I've also rewritten or implemented in Rust several of the labs from our systems lab course.
