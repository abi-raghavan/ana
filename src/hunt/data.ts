import { config } from '../config'

export type QuestionType = 'trivia' | 'number' | 'riddle'

export type Stage = {
  id: string
  time: string
  emoji: string
  title: string
  question: string
  type: QuestionType
  accept: string[]
  hint: string
  reveal: string[]
  photo?: string
}

// How many days since startDate, measured on the day of the hunt itself.
// Edit huntDate if you ever reuse this for a different day.
const huntDate = new Date('2026-10-31T00:00:00')
const startDate = new Date(config.startDate)
export const daysTogether = Math.round((huntDate.getTime() - startDate.getTime()) / 86400000)

export const stages: Stage[] = [
  {
    id: 'breakfast',
    time: '8:30 AM',
    emoji: '🥐',
    title: 'Stop One',
    question: 'You send me off with two words. Be careful, ____.',
    type: 'trivia',
    accept: ['takecare', 'take care', 'take caree'],
    hint: '6 July, right after you spotted me.',
    reveal: [
      'Breakfast at Vivanta.',
      'lets go honey!',
    ],
    photo: '/media/photo-1.webp',
  },
  {
    id: 'shopping',
    time: '11:00 AM',
    emoji: '💍',
    title: 'Stop Two',
    question: 'Exactly how many days has it been since 31 Oct 2021? Just the number.',
    type: 'number',
    accept: [String(daysTogether)],
    hint: '5 years, counted in days, not years.',
    reveal: [
      'Gold & diamonds.',
      'Point at whatever catches your eye today.',
    ],
    photo: '/media/photo-2.webp',
  },
  {
    id: 'cafe',
    time: '1:30 PM',
    emoji: '☕',
    title: 'Stop Three',
    question: 'Our comfort cafe. Just the short name.',
    type: 'trivia',
    accept: ['coz'],
    hint: 'Three letters. Where we always end up.',
    reveal: ['Our comfort cafe.', 'Coz.'],
  },
]

export const wheelOptions = [
  'A slow dance',
  'A love letter, read out loud',
  'Dessert, your choice',
  'A surprise gift',
  'One long hug',
  'Your favourite song, right now',
]
