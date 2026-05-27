import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music,
  Plus,
  Search,
  Tag,
  CalendarDays,
  Info,
  Share2,
  Download,
  Trash2,
  X,
  ArrowRight,
  Lock,
  Sparkles,
  SlidersHorizontal,
  Check,
  Folder,
  Inbox,
  BarChart3,
  Settings,
  UserPlus,
  Play,
  ChevronDown,
} from "lucide-react";

const Diamond = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 21 20" fill="none" aria-hidden="true">
    <g clipPath="url(#proDiamondClip)">
      <path
        d="M5.26953 1.36719L6.35156 3.74805L8.18555 4.58203H15.7246L15.8096 4.58691C16.005 4.61152 16.1821 4.72048 16.293 4.88672L19.0273 8.98828C19.197 9.24307 19.1768 9.58007 18.9775 9.8125L10.7744 19.3828C10.6425 19.5365 10.4486 19.6238 10.2461 19.6211C10.0434 19.6181 9.85124 19.5256 9.72363 19.3682L1.97656 9.79785C1.80124 9.58124 1.77502 9.27883 1.91016 9.03516L3.0498 6.98438L3.19824 6.71484L0.945312 5.69141L0 5.26172L0.945312 4.83203L3.32715 3.74902L4.41016 1.36719L4.83984 0.421875L5.26953 1.36719ZM8.93555 9.35742L7.48242 10.0176L8.93555 10.6787L9.59668 12.1318L10.2568 10.6787L11.7109 10.0176L10.2568 9.35742L9.59668 7.9043L8.93555 9.35742ZM4.11426 4.30176L4.04102 4.46289L3.87988 4.53613L2.28125 5.26172L3.87988 5.98828L4.04102 6.06152L4.11426 6.22266L4.83984 7.82031L5.56641 6.22266L5.63965 6.06152L5.80078 5.98828L7.39844 5.26172L5.80078 4.53613L5.63965 4.46289L5.56641 4.30176L4.83984 2.70312L4.11426 4.30176Z"
        fill="#2F43DE"
      />
      <path
        d="M5.26953 1.36719L6.35156 3.74805L8.18555 4.58203H15.7246L15.8096 4.58691C16.005 4.61152 16.1821 4.72048 16.293 4.88672L19.0273 8.98828C19.197 9.24307 19.1768 9.58007 18.9775 9.8125L10.7744 19.3828C10.6425 19.5365 10.4486 19.6238 10.2461 19.6211C10.0434 19.6181 9.85124 19.5256 9.72363 19.3682L1.97656 9.79785C1.80124 9.58124 1.77502 9.27883 1.91016 9.03516L3.0498 6.98438L3.19824 6.71484L0.945312 5.69141L0 5.26172L0.945312 4.83203L3.32715 3.74902L4.41016 1.36719L4.83984 0.421875L5.26953 1.36719ZM8.93555 9.35742L7.48242 10.0176L8.93555 10.6787L9.59668 12.1318L10.2568 10.6787L11.7109 10.0176L10.2568 9.35742L9.59668 7.9043L8.93555 9.35742ZM4.11426 4.30176L4.04102 4.46289L3.87988 4.53613L2.28125 5.26172L3.87988 5.98828L4.04102 6.06152L4.11426 6.22266L4.83984 7.82031L5.56641 6.22266L5.63965 6.06152L5.80078 5.98828L7.39844 5.26172L5.80078 4.53613L5.63965 4.46289L5.56641 4.30176L4.83984 2.70312L4.11426 4.30176Z"
        fill="url(#proDiamondGradient)"
      />
    </g>
    <defs>
      <linearGradient id="proDiamondGradient" x1="-7.44105" y1="0.400929" x2="18.7489" y2="3.83733" gradientUnits="userSpaceOnUse">
        <stop offset="1" stopColor="#2F43DE" />
      </linearGradient>
      <clipPath id="proDiamondClip">
        <rect width="19.142" height="19.1993" fill="white" transform="translate(0 0.421875)" />
      </clipPath>
    </defs>
  </svg>
);

const ProBadge = ({ small = false }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white text-[#2F43DE] shadow-sm ${
      small ? "px-1.5 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"
    } font-semibold`}
  >
    <Diamond className={small ? "h-3 w-3" : "h-4 w-4"} /> Pro
  </span>
);

const tracks = [
  ["Swamp Bait", "Paul Lenart  Gregg A. Allen", "Electro Blues", "2:17"],
  ["Dive Bar", "Paul Lenart  Gregg A. Allen", "Electro Blues", "2:40"],
  ["Whiskey Days", "Paul Lenart  Gregg A. Allen", "Electro Blues", "2:29"],
  ["Cigarette Suzy", "Paul Lenart  Gregg A. Allen", "Electro Blues", "2:15"],
  ["Can’t Catch Me", "Paul Lenart  Gregg A. Allen", "Electro Blues", "2:35"],
  ["Highway at Midnight", "Paul Lenart  Gregg A. Allen", "Electro Blues", "2:35"],
  ["Sweet Tea", "Paul Lenart  Gregg A. Allen", "Electro Blues", "2:24"],
  ["Raw Deal", "Paul Lenart  Gregg A. Allen", "Electro Blues", "2:06"],
  ["No Vacancy", "Paul Lenart  Gregg A. Allen", "Electro Blues", "3:06"],
  ["Out of Touch", "Laurent Dury", "Arts and Culture", "1:47"],
];

const autoTags = [
  { group: "Genre", count: 5, color: "bg-sky-600", sections: [["Electronic", ["Electro"]], ["Pop", ["Alternative Pop"]], ["Rock", ["Alternative Rock", "Indie Rock", "Rock"]]] },
  { group: "Vocal", count: 1, color: "bg-orange-500", sections: [["Lead", ["Male Lead"]]] },
  { group: "Instruments", count: 7, color: "bg-green-600", sections: [["Beats & Percussions", ["Drums"]]] },
];

const customExamples = ["Festival Ready", "Sync Priority", "TikTok Viral"];

function Sidebar() {
  const items = [
    [Music, "Library", true],
    [Folder, "Projects"],
    [Share2, "Shared"],
    [Inbox, "Received"],
    [BarChart3, "Analytics", false, true],
  ];

  return (
    <aside className="flex w-[108px] shrink-0 flex-col border-r border-neutral-200 bg-[#FAFAFB]">
      <div className="shrink-0 px-4 pb-2 pt-5">
        <div className="flex justify-center">
          <img
            src="https://images.bridge.audio/6it9k4Qas5Ft9fKpBkMTn6CApWkQRALQYlnTwPHPOiE/fill/400/400/ce/0/czM6Ly9iZGdhLXByZC1wdWIvZDAvMWEvZjYvNzUvNmI2ZTA3M2EtZDU5Ny00NjE3LWFiYWUtYTQ1Njc1ZjYxYWQwLg.jpg"
            alt="Workspace"
            className="h-12 w-12 rounded-xl object-cover outline outline-2 outline-offset-2 outline-[#D9DCE8]"
          />
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm transition hover:bg-neutral-50 hover:shadow-md">
          <Plus className="h-6 w-6 text-neutral-700" />
        </button>
      </div>

      <nav className="mt-8 flex flex-col items-center">
        {items.map(([Icon, label, active, beta]) => (
          <a key={label} className="relative mb-5 flex flex-col items-center text-sm no-underline">
            {beta && (
              <span className="absolute -right-2 -top-2 rounded-full border border-neutral-200 bg-white px-1.5 py-0.5 text-[8px] font-bold tracking-wide text-neutral-700">
                BETA
              </span>
            )}

            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                active
                  ? "bg-[#2F43DE] text-white"
                  : "text-neutral-400 hover:bg-neutral-100"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>

            <span
              className={`mt-1 text-sm ${
                active
                  ? "font-semibold text-neutral-900"
                  : "text-neutral-400"
              }`}
            >
              {label}
            </span>
          </a>
        ))}
      </nav>

      <div className="mt-auto mx-5 border-t border-neutral-200 py-4">
        <div className="flex items-center justify-around text-neutral-400">
          <Settings className="h-5 w-5" />
          <UserPlus className="h-5 w-5" />
        </div>
      </div>
    </aside>
  );
}

function FilterButton({ icon: Icon, children, pro = false }) {
  return (
    <button className="flex h-12 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 text-[15px] font-semibold text-neutral-900 shadow-sm transition hover:border-[#2F43DE]/30 hover:bg-indigo-50/40">
      <Icon className="h-5 w-5" /> {children} {pro && <ProBadge small />} <ChevronDown className="h-4 w-4" />
    </button>
  );
}

function TracksTable() {
  return (
    <section className="min-w-0 flex-1 overflow-hidden bg-white">
      <header className="flex h-24 items-center border-b border-neutral-200 px-7">
        <div className="flex items-center text-sm text-neutral-500">
          <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-md bg-[#2F43DE] text-white"><Music className="h-4 w-4" /></span>
          Library <span className="mx-1.5">/</span> <b className="text-neutral-900">Tracks</b>
        </div>
      </header>
      <div className="border-b border-neutral-200 px-7 py-4">
        <div className="mb-3 flex h-12 items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-neutral-400">
          <Search className="h-6 w-6" />
          <span className="text-lg">Search here, or use filters below</span>
        </div>
        <div className="flex gap-2">
          <FilterButton icon={Tag}>Tags</FilterButton>
          <FilterButton icon={CalendarDays}>Release year</FilterButton>
          <FilterButton icon={Info}>Metadata</FilterButton>
          <FilterButton icon={Sparkles} pro>Custom tags</FilterButton>
        </div>
      </div>
      <div className="flex h-16 items-center gap-6 px-7 text-neutral-800">
        <span className="font-semibold"><input type="checkbox" checked readOnly className="mr-3 accent-[#2F43DE]" />1 track selected</span>
        <Share2 className="h-5 w-5" /><Info className="h-5 w-5" /><Download className="h-5 w-5" /><Trash2 className="h-5 w-5 text-red-500" />
      </div>
      <div className="overflow-auto">
        {tracks.map((t, i) => (
          <div key={t[0]} className={`grid grid-cols-[34px_52px_1.5fr_1.2fr_80px] items-center px-7 py-2 text-sm ${i === 0 ? "bg-indigo-200/70" : "hover:bg-neutral-50"}`}>
            <input type="checkbox" checked={i === 0} readOnly className="accent-[#2F43DE]" />
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-cyan-500 to-rose-500 text-white">
              {i === 0 ? <span className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-900"><Play className="ml-0.5 h-5 w-5 fill-white" /></span> : <Music className="h-5 w-5" />}
            </div>
            <div><p className="font-semibold text-neutral-900">{t[0]}</p><p className="text-neutral-500">{t[1]}</p></div>
            <p className="text-neutral-700">{t[2]}</p>
            <p className="text-neutral-800">{t[3]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TagPill({ children, premium = false }) {
  return (
    <span className={`mr-2 mt-2 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm ${premium ? "border border-indigo-200 bg-white text-[#2F43DE] shadow-sm" : "bg-sky-50 text-sky-700"}`}>
      {premium && <Diamond className="h-3.5 w-3.5" />} {children} <X className="h-3 w-3 opacity-60" />
    </span>
  );
}

function TagsPanel() {
  const [upgradeOpen, setUpgradeOpen] = useState(false);
  return (
    <aside className="flex w-[610px] shrink-0 flex-col border-l border-neutral-200 bg-white">
      <div className="flex items-start gap-4 border-b border-neutral-200 px-8 py-7">
        <div className="h-16 w-16 rounded bg-gradient-to-br from-cyan-500 to-rose-500" />
        <div className="min-w-0 flex-1">
          <h2 className="font-semibold text-neutral-900">Swamp Bait</h2>
          <p className="text-sm text-neutral-500">Paul Lenart, Gregg A. Allen</p>
        </div>
        <button className="rounded border border-neutral-300 p-2"><ArrowRight className="h-5 w-5" /></button>
        <button><X className="h-5 w-5" /></button>
      </div>

      <div className="flex gap-7 border-b border-neutral-200 px-8 text-[15px] text-neutral-500">
        {['Details','Album','Tags','Credits','File','Projects','Hubs'].map(tab => (
          <button key={tab} className={`relative py-4 ${tab === 'Tags' ? 'font-semibold text-[#2F43DE]' : ''}`}>
            {tab}{tab === 'Tags' && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#2F43DE]" />}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-auto px-8 py-7">
        <div className="mb-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
          <div className="flex items-start gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-neutral-950">Custom tags</h3>
                <ProBadge small />
              </div>
              <p className="mt-1 text-sm leading-5 text-neutral-500">Create your own tags to organize tracks by workflow, priority or team usage.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {customExamples.map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1 rounded-md border border-neutral-200 bg-white px-2 py-1 text-xs font-medium text-neutral-600">
                    <Lock className="h-3 w-3 text-neutral-400" /> {tag}
                  </span>
                ))}
              </div>
            </div>
            <button onClick={() => setUpgradeOpen(true)} className="shrink-0 rounded-lg bg-neutral-900 px-3 py-2 text-sm font-semibold text-white hover:bg-black">
              Unlock
            </button>
          </div>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <button className="rounded-md bg-neutral-900 px-5 py-3 font-semibold text-white shadow-sm hover:bg-black">+ Add tags</button>
          <button onClick={() => setUpgradeOpen(true)} className="flex items-center gap-1.5 rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50">
            Manage custom tags
          </button>
        </div>
        <div className="mb-7 rounded-md bg-blue-50 px-4 py-3 text-sm text-blue-700 underline">Give your feedback on the auto-tagging</div>

        {autoTags.map((g) => (
          <section key={g.group} className="mb-6">
            <h3 className="flex items-center gap-2 font-semibold text-neutral-900"><span className={`h-2.5 w-2.5 rounded-sm ${g.color}`} />{g.group} <span className="text-neutral-500">({g.count})</span><ChevronDown className="h-4 w-4" /></h3>
            {g.sections.map(([name, tags]) => <div key={name} className="ml-5 mt-3"><p className="text-sm text-neutral-500">{name}</p>{tags.map(tag => <TagPill key={tag}>{tag}</TagPill>)}</div>)}
          </section>
        ))}
      </div>

      <footer className="flex justify-end gap-3 border-t border-neutral-200 bg-white px-8 py-3">
        <button className="rounded-lg px-4 py-3 font-semibold">Cancel</button>
        <button className="rounded-lg bg-neutral-400 px-6 py-3 font-semibold text-white">Save</button>
      </footer>
      <UpgradeModal open={upgradeOpen} onClose={() => setUpgradeOpen(false)} />
    </aside>
  );
}

function UpgradeModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/45 p-6 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div initial={{ scale: .96, y: 18 }} animate={{ scale: 1, y: 0 }} exit={{ scale: .96, y: 18 }} className="w-full max-w-[780px] overflow-hidden rounded-[28px] bg-white shadow-2xl">
            <div className="relative bg-[#111327] px-8 py-8 text-white">
              <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-indigo-500/30 blur-3xl" />
              <button onClick={onClose} className="absolute right-5 top-5 rounded-full p-2 text-white/70 hover:bg-white/10"><X className="h-5 w-5" /></button>
              <ProBadge />
              <h2 className="mt-5 text-3xl font-black tracking-tight">Unlock Custom Tag Studio</h2>
              <p className="mt-2 max-w-xl text-white/70">Organize your catalog with custom workflows, team labels and advanced filtering.</p>
            </div>
            <div className="grid gap-6 p-8 md:grid-cols-[1.05fr_.95fr]">
              <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="mb-3 text-sm font-bold text-neutral-500">Workflow preview</p>
                {['Sync Priority', 'Needs Review', 'Festival Ready', 'Approved for Pitch'].map((t, i) => (
                  <div key={t} className="mb-3 flex items-center justify-between rounded-2xl bg-white p-3 shadow-sm">
                    <span className="flex items-center gap-2 font-semibold"><Diamond className="h-4 w-4" />{t}</span>
                    <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs font-bold text-[#2F43DE]">{12 - i * 2} tracks</span>
                  </div>
                ))}
              </div>
              <div>
                <ul className="space-y-3 text-neutral-700">
                  {['Create unlimited custom tags', 'Organize tracks by workflow', 'Build team-specific systems', 'Filter faster across your catalog'].map(item => (
                    <li key={item} className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-4 w-4" /></span>{item}</li>
                  ))}
                </ul>
                <button className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2F43DE] px-5 py-4 text-lg font-black text-white shadow-lg shadow-indigo-500/25 hover:bg-[#2334BF]">
                  Upgrade to Pro <ArrowRight className="h-5 w-5" />
                </button>
                <button onClick={onClose} className="mt-3 w-full rounded-2xl px-5 py-3 font-semibold text-neutral-500 hover:bg-neutral-100">Maybe later</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function BridgeCustomTagsPaywallPrototype() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-white font-sans text-neutral-900">
      <Sidebar />
      <TracksTable />
      <TagsPanel />
    </div>
  );
}
