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
    title: 'Okay',
    caption: 'Just a small okay. It was enough.',
    photo: 'media/firstchat.webp',
    quotes: [
      { text: '0kay 🩷🩷', sender: 'Anju', date: '25 May', time: '10:57 AM' },
      { text: 'I love you 😍 💋 💗', sender: 'Abi', date: '29 May', time: '1:08 PM' },
    ],
  },
  {
    month: 'June',
    title: 'Babychuuu',
    caption: 'Some days were only this.',
    photo: 'media/photo-1.webp',
    quotes: [
      { text: 'Okay 🩷🩷', sender: 'Anju', date: '29 Jun', time: '7:07 PM' },
      { text: 'Babychuuu ummachuu ❤️🥰😘', sender: 'Abi', date: '26 Jun', time: '12:00 PM' },
    ],
  },
  {
    month: 'July',
    title: 'Be careful, take care',
    caption: 'You say this every time I leave.',
    photo: 'media/photo-2.webp',
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
    title: 'Rest edutho',
    caption: 'It was late. You told me to sleep.',
    photo: 'media/olamcafe.webp',
    quotes: [
      { text: 'Venda abi\nRest edutho', sender: 'Anju', date: '11 Aug', time: '1:21 AM' },
      { text: 'Honey tired ano', sender: 'Anju', date: '14 Aug', time: '10:42 AM' },
    ],
  },
  {
    month: 'September',
    title: 'Missing u honey',
    caption: 'A normal day. You missed me.',
    photo: 'media/us.webp',
    quotes: [
      { text: 'Missing u honey', sender: 'Anju', date: '12 Sep', time: '12:28 PM' },
      { text: 'Honeyyy', sender: 'Anju', date: '19 Sep', time: '12:59 PM' },
      { text: 'Miss you tooo', sender: 'Abi', date: '12 Sep', time: '12:28 PM' },
    ],
  },
  {
    month: 'October',
    title: 'My babyy',
    caption: 'You checked if I reached. Then you slept.',
    photo: 'media/photo-1.webp',
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
