# gta6-clipper-01 — clip 2: "Main GTA VI cuma jadi mandor"

Entry for the make.fun bounty "Clip GTA 6 for the most YouTube views"
($500, top 20 share). Places go by the video's views at the deadline.

## The clip

GTA VI gameplay: Jason painting a wall with a roller, under the meme
"Main GTA VI cuma jadi mandor" — the absurd contrast of GTA's criminal
fantasy with a boring painting job, plus the streamer's laughing reaction.
The clip then pitches make.fun on screen ("Bikin klip pakai AI / dapat
cuan di make.fun") in its last 5 seconds.

- Video (public Short): https://www.youtube.com/shorts/gNh8E0vn3-Y
- Channel: @hu2dzwynnn
- Format: vertical 576x1024, 19.13 s

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`, where the gate reads it. That is
all the program has to do — the entry is the video, and the house reads
its views through the YouTube Data API.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
