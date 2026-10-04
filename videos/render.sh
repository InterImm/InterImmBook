#!/usr/bin/env bash
# Render the intro films with praxinoscope (https://github.com/emptymalei/praxinoscope).
# Each <page>.yaml here becomes static/videos/<page>.mp4 and .jpg (poster), 1280x720,
# silent, and the page /<page with - as />/ shows it at the top (see layouts/partials/video.html).
#   pip install praxinoscope && praxinoscope fonts     # Pango + ffmpeg needed, see its README
#   videos/render.sh                 # all films
#   videos/render.sh history-sail    # one film
set -euo pipefail
cd "$(dirname "$0")"
out=../static/videos
mkdir -p "$out"
names=("$@")
[ ${#names[@]} -eq 0 ] && names=($(ls *.yaml | sed 's/\.yaml$//'))
for n in "${names[@]}"; do
  praxinoscope check "$n.yaml"
  praxinoscope render "$n.yaml" "$out/$n.mp4" --scale 0.6667 --no-audio
  # poster: the title card once it has settled
  ffmpeg -loglevel error -y -ss 2.5 -i "$out/$n.mp4" -frames:v 1 -q:v 4 "$out/$n.jpg"
done
ls -la "$out"
