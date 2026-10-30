// Parses the WhatsApp export and writes stats + romantic candidate messages.
// Usage: npm run extract   (reads Anju.zip -> chat.txt via `unzip -p`)
import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const raw = existsSync('chat.txt')
  ? readFileSync('chat.txt', 'utf8')
  : execSync('unzip -p Anju.zip chat.txt', { encoding: 'utf8', maxBuffer: 1 << 26 })

type Msg = { date: string; time: string; sender: string; text: string }

const header = /^\[(\d{1,2})\/(\d{1,2})\/(\d{2}), ([^\]]+)\] (?:(You|Anju): |- )(.*)$/
const messages: Msg[] = []
let calls = 0

for (const line of raw.split(/\r?\n/)) {
  const m = line.match(header)
  if (m) {
    const [, mo, d, y, time, sender, text] = m
    if (!sender) {
      if (text.includes('[Call]')) calls++
      continue
    }
    const date = `20${y}-${mo.padStart(2, '0')}-${d.padStart(2, '0')}`
    messages.push({ date, time, sender: sender === 'You' ? 'Abi' : 'Anju', text })
  } else if (messages.length && line.trim()) {
    messages[messages.length - 1].text += '\n' + line
  }
}

const all = messages.map((m) => m.text).join('\n')
const count = (re: RegExp) => (all.match(re) ?? []).length

const stats = {
  firstDate: messages[0]?.date,
  lastDate: messages[messages.length - 1]?.date,
  messages: messages.length,
  honey: count(/honey/gi),
  baby: count(/baby/gi),
  miss: count(/miss/gi),
  love: count(/love/gi),
  calls,
  photos: count(/<image omitted>/g),
  videos: count(/<video omitted>/g),
  kisses: count(/😘|💋/gu),
  hearts: count(/❤️|🩷|💗|💕|💖|🥰|😍/gu),
}

const romantic =
  /love|miss|❤|🩷|💗|💕|💖|😘|💋|🥰|😍|ummach|babych|thank|focus on ourself|no worr|dont worry|we'll|kayicharno|kayiku|kanan|rest ed|tension/i

const candidates = messages.filter(
  (m) => romantic.test(m.text) && !/omitted|https?:\/\//.test(m.text) && m.text.length < 220,
)

mkdirSync('src/data', { recursive: true })
writeFileSync('src/data/stats.json', JSON.stringify(stats, null, 2) + '\n')
writeFileSync('src/data/candidates.json', JSON.stringify(candidates, null, 2) + '\n')
console.log(stats)
console.log(`${candidates.length} romantic candidates -> src/data/candidates.json`)
