export type Sender = 'Abi' | 'Anju'

export type Quote = {
  text: string
  sender: Sender
  date: string
  time?: string
}

export type Chapter = {
  month: string
  title: string
  caption: string
  photo: string
  quotes: Quote[]
}

export const chapters: Chapter[] = [
  {
    month: 'May',
    title: 'Already yours',
    caption: 'A small yes, and then the real thing.',
    photo: 'photos/01.jpg',
    quotes: [
      { text: '0kay 🩷🩷', sender: 'Anju', date: '25 May', time: '10:57 AM' },
      { text: 'I love you 😍 💋 💗', sender: 'Abi', date: '29 May', time: '1:08 PM' },
    ],
  },
  {
    month: 'June',
    title: 'With a heart',
    caption: 'Even a short reply from you came soft.',
    photo: 'photos/02.jpg',
    quotes: [
      { text: 'Okay 🩷🩷', sender: 'Anju', date: '29 Jun', time: '7:07 PM' },
      { text: 'Babychuuu ummachuu ❤️🥰😘', sender: 'Abi', date: '26 Jun', time: '12:00 PM' },
    ],
  },
  {
    month: 'July',
    title: 'Be careful. Take care.',
    caption: 'You send me off like I matter.',
    photo: 'photos/03.jpg',
    quotes: [
      { text: 'Okay baby\nBe careful\nTakecare', sender: 'Anju', date: '6 Jul', time: '4:17 PM' },
      {
        text: 'No worry honey...remember you are the doctor there',
        sender: 'Abi',
        date: '6 Jul',
        time: '10:27 AM',
      },
    ],
  },
  {
    month: 'August',
    title: 'Rest first',
    caption: 'At 1 AM, you looked after me before yourself.',
    photo: 'photos/04.jpg',
    quotes: [
      { text: 'Venda abi\nRest edutho', sender: 'Anju', date: '11 Aug', time: '1:21 AM' },
      { text: 'Honey tired ano', sender: 'Anju', date: '14 Aug', time: '10:42 AM' },
    ],
  },
  {
    month: 'September',
    title: 'Missing u honey',
    caption: 'You said it first.',
    photo: 'photos/05.jpg',
    quotes: [
      { text: 'Missing u honey', sender: 'Anju', date: '12 Sep', time: '12:28 PM' },
      { text: 'Honeyyy', sender: 'Anju', date: '19 Sep', time: '12:59 PM' },
      { text: 'Miss you tooo', sender: 'Abi', date: '12 Sep', time: '12:28 PM' },
    ],
  },
  {
    month: 'October',
    title: 'My babyy',
    caption: 'Safe, sleepy, and still yours.',
    photo: 'photos/06.jpg',
    quotes: [
      { text: 'Be safe\nPayye povane', sender: 'Anju', date: '16 Oct', time: '11:24 PM' },
      { text: 'Kedano honey', sender: 'Anju', date: '21 Oct', time: '12:35 AM' },
      { text: 'Abi varundo njan urangi happy ayitu', sender: 'Anju', date: '21 Oct', time: '12:53 PM' },
      { text: 'My babyy', sender: 'Anju', date: '21 Oct', time: '1:29 PM' },
    ],
  },
]

export const careMessages: Quote[] = [
  { text: 'Pain undo', sender: 'Anju', date: '11 May', time: '11:08 AM' },
  { text: 'Honey tired ano', sender: 'Anju', date: '14 Aug', time: '10:42 AM' },
  { text: 'Difficult ayo honey', sender: 'Anju', date: '30 Aug', time: '1:16 PM' },
  { text: 'Payye vannal mathi honey', sender: 'Anju', date: '20 Sep', time: '11:44 AM' },
  { text: 'Kedano honey', sender: 'Anju', date: '21 Oct', time: '12:35 AM' },
]

export const littleWords: Quote[] = [
  { text: 'My babyy', sender: 'Anju', date: '21 Oct' },
  { text: 'Missing u honey', sender: 'Anju', date: '12 Sep' },
  { text: 'Honeyyy', sender: 'Anju', date: '19 Sep' },
  { text: 'Okay baby, be careful, takecare', sender: 'Anju', date: '6 Jul' },
  { text: 'Abi varundo njan urangi happy ayitu', sender: 'Anju', date: '21 Oct' },
]
