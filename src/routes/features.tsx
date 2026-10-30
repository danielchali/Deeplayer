import { createFileRoute } from "@tanstack/react-router";
import {
  Subtitles,
  Languages,
  Volume2,
  ListOrdered,
  Cloud,
  GraduationCap,
  Search,
  MessageCircle,
  BookOpen,
  Youtube,
  HardDrive,
  Server,
  Tv,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const SITE_URL = "https://deeplayer.vercel.app";
const FEATURES_TITLE = "DPlayer Features — AI Subtitles, Dubbing & Study Mode";
const FEATURES_DESCRIPTION =
  "AI subtitles, live translation, voice-matched dubbing, smart episode detection, universal streaming, and Study Mode inside one player.";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: FEATURES_TITLE },
      { name: "description", content: FEATURES_DESCRIPTION },
      {
        name: "keywords",
        content: "DPlayer, DredLabs, Daniel Chali, AI subtitles, video translation, AI dubbing, smart episode detection, study mode",
      },
      { property: "og:title", content: FEATURES_TITLE },
      { property: "og:description", content: FEATURES_DESCRIPTION },
      { property: "og:site_name", content: "DPlayer" },
      { property: "og:url", content: `${SITE_URL}/features` },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { name: "twitter:title", content: FEATURES_TITLE },
      { name: "twitter:description", content: FEATURES_DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/features` }],
  }),
  component: FeaturesPage,
});

const sections = [
  {
    tag: "Subtitles",
    icon: Subtitles,
    title: "Subtitles that just appear",
    body: "No more scouring the web for a matching .srt. DPlayer auto-searches, downloads, and syncs subtitles. If none exist, it generates them with AI — live, while you watch — and saves them for next time.",
    bullets: [
      "Auto search & download",
      "AI-generated when unavailable",
      "Live captions while playing",
      "Cached for future sessions",
    ],
  },
  {
    tag: "Translation & Dubbing",
    icon: Languages,
    title: "Watch anything, in your language",
    body: "Foreign film with no English track? DPlayer transcribes the original speech, translates it, and generates a natural-sounding dubbed audio track — preserving each actor's voice and emotional tone through AI voice matching.",
    bullets: [
      "Speech-to-text in the source language",
      "Translation into your preferred language",
      "AI voice-matched dubbing",
      "Preserves tone & emotion",
    ],
  },
  {
    tag: "Series",
    icon: ListOrdered,
    title: "Smart episode detection",
    body: "Traditional players sort files alphabetically, which is why episode 1 is often followed by episode 10. DPlayer detects series, seasons, and episode numbers so playback follows the correct order — automatically.",
  },
  {
    tag: "Sources",
    icon: Cloud,
    title: "Stream from anywhere",
    body: "Your media isn't just on your hard drive. DPlayer plays it all from one place.",
    grid: [
      { icon: Youtube, label: "YouTube" },
      { icon: HardDrive, label: "Google Drive" },
      { icon: Server, label: "FTP servers" },
      { icon: Server, label: "NAS / SMB" },
      { icon: Tv, label: "IPTV" },
      { icon: Cloud, label: "More sources" },
    ],
  },
  {
    tag: "Study Mode",
    icon: GraduationCap,
    title: "Turn any lecture into a searchable library",
    body: "Three-hour tutorial, one topic you actually need. Ask DPlayer and it jumps to the exact moment — or tells you the topic isn't there, so you don't waste hours scrubbing.",
    features: [
      { icon: MessageCircle, label: "Ask the Video chat" },
      { icon: Search, label: "Timestamp & scene search" },
      { icon: BookOpen, label: "AI lecture summaries" },
      { icon: Volume2, label: "Auto notes & bookmarks (planned)" },
    ],
  },
];

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-hero">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 sm:pt-20 pb-10 sm:pb-16 text-center">
        <p className="text-sm font-medium text-primary">Features</p>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-normal">
          Every problem a <span className="text-gradient">media player</span> ignored.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          DPlayer is what happens when the player itself becomes intelligent.
        </p>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 sm:pb-16 space-y-0">
        {sections.map(({ icon: Icon, tag, title, body, bullets, grid, features }) => (
          <article
            key={title}
            className="border-t border-border py-10 sm:py-14"
          >
            <div className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-3 sm:flex">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <span className="min-w-0 text-xs font-medium text-muted-foreground">
                {tag}
              </span>
            </div>
            <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-normal">
              {title}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-3xl">{body}</p>

            {bullets && (
              <ul className="mt-6 grid gap-2 md:grid-cols-2 max-w-2xl">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {grid && (
              <div className="mt-6 grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 gap-3">
                {grid.map(({ icon: I, label }) => (
                  <div
                    key={label}
                    className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-3 border-b border-border px-1 py-4 text-sm"
                  >
                    <I className="h-4 w-4 shrink-0 text-primary" />
                    {label}
                  </div>
                ))}
              </div>
            )}

            {features && (
              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {features.map(({ icon: I, label }) => (
                  <div
                    key={label}
                    className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-3 border-b border-border px-1 py-4 text-sm"
                  >
                    <I className="h-4 w-4 shrink-0 text-primary" />
                    {label}
                  </div>
                ))}
                <div className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] items-center gap-3 border-b border-dashed border-border px-1 py-4 text-sm text-muted-foreground">
                  Quiz & flashcard generation (planned)
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}
