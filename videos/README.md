# Intro films

Each page of the book can open with a short silent film, made with
[praxinoscope](https://github.com/emptymalei/praxinoscope) in its Bauhaus theme.

- `<page>.yaml` is the film's storyboard. The name is the page path with `/` as `-`:
  `history-sail.yaml` is the film for `/history/sail/` (content/cn/history/sail.md).
- `render.sh` turns every storyboard here into `static/videos/<page>.mp4` (1280x720, no sound,
  about 0.5 to 1 MB) and a poster `static/videos/<page>.jpg`. `render.sh history-sail` renders one.
- The page shows the film above its text when the mp4 exists (layouts/partials/video.html).
  It loops silently; a button pauses it, and it stays still for visitors who ask for less motion.

To add a film: copy a storyboard, keep every claim to what the chapter says, run
`praxinoscope check <page>.yaml`, then `./render.sh <page>` and commit the yaml, mp4 and jpg.
