import type KanaGroup from '@/types/kanaGroup'

interface KanaDict {
  hiragana: KanaGroup[]
  katakana: KanaGroup[]
}

export const kanaDictionary: KanaDict = {
  hiragana: [
    {
      name: 'hiragana_group_1',
      kanas: [
        { kana: 'あ', romaji: ['a'] },
        { kana: 'い', romaji: ['i'] },
        { kana: 'う', romaji: ['u'] },
        { kana: 'え', romaji: ['e'] },
        { kana: 'お', romaji: ['o'] },
      ],
    },
    {
      name: 'hiragana_group_2',
      kanas: [
        { kana: 'か', romaji: ['ka'] },
        { kana: 'き', romaji: ['ki'] },
        { kana: 'く', romaji: ['ku'] },
        { kana: 'け', romaji: ['ke'] },
        { kana: 'こ', romaji: ['ko'] },
      ],
    },
    {
      name: 'hiragana_group_3',
      kanas: [
        { kana: 'さ', romaji: ['sa'] },
        { kana: 'し', romaji: ['shi', 'si'] },
        { kana: 'す', romaji: ['su'] },
        { kana: 'せ', romaji: ['se'] },
        { kana: 'そ', romaji: ['so'] },
      ],
    },
    {
      name: 'hiragana_group_4',
      kanas: [
        { kana: 'た', romaji: ['ta'] },
        { kana: 'ち', romaji: ['chi', 'ti'] },
        { kana: 'つ', romaji: ['tsu', 'tu'] },
        { kana: 'て', romaji: ['te'] },
        { kana: 'と', romaji: ['to'] },
      ],
    },
    {
      name: 'hiragana_group_5',
      kanas: [
        { kana: 'な', romaji: ['na'] },
        { kana: 'に', romaji: ['ni'] },
        { kana: 'ぬ', romaji: ['nu'] },
        { kana: 'ね', romaji: ['ne'] },
        { kana: 'の', romaji: ['no'] },
      ],
    },
    {
      name: 'hiragana_group_6',
      kanas: [
        { kana: 'は', romaji: ['ha'] },
        { kana: 'ひ', romaji: ['hi'] },
        { kana: 'ふ', romaji: ['fu', 'hu'] },
        { kana: 'へ', romaji: ['he'] },
        { kana: 'ほ', romaji: ['ho'] },
      ],
    },
    {
      name: 'hiragana_group_7',
      kanas: [
        { kana: 'ま', romaji: ['ma'] },
        { kana: 'み', romaji: ['mi'] },
        { kana: 'む', romaji: ['mu'] },
        { kana: 'め', romaji: ['me'] },
        { kana: 'も', romaji: ['mo'] },
      ],
    },
    {
      name: 'hiragana_group_8',
      kanas: [
        { kana: 'や', romaji: ['ya'] },
        { kana: 'ゆ', romaji: ['yu'] },
        { kana: 'よ', romaji: ['yo'] },
      ],
    },
    {
      name: 'hiragana_group_9',
      kanas: [
        { kana: 'ら', romaji: ['ra'] },
        { kana: 'り', romaji: ['ri'] },
        { kana: 'る', romaji: ['ru'] },
        { kana: 'れ', romaji: ['re'] },
        { kana: 'ろ', romaji: ['ro'] },
      ],
    },
    {
      name: 'hiragana_group_10',
      kanas: [
        { kana: 'わ', romaji: ['wa'] },
        { kana: 'を', romaji: ['wo', 'o'] },
        { kana: 'ん', romaji: ['n'] },
      ],
    },
    {
      name: 'hiragana_group_11_alternative',
      kanas: [
        { kana: 'が', romaji: ['ga'] },
        { kana: 'ぎ', romaji: ['gi'] },
        { kana: 'ぐ', romaji: ['gu'] },
        { kana: 'げ', romaji: ['ge'] },
        { kana: 'ご', romaji: ['go'] },
      ],
    },
    {
      name: 'hiragana_group_12_alternative',
      kanas: [
        { kana: 'ざ', romaji: ['za'] },
        { kana: 'じ', romaji: ['ji', 'zi'] },
        { kana: 'ず', romaji: ['zu', 'du'] },
        { kana: 'ぜ', romaji: ['ze'] },
        { kana: 'ぞ', romaji: ['zo'] },
      ],
    },
    {
      name: 'hiragana_group_13_alternative',
      kanas: [
        { kana: 'だ', romaji: ['da'] },
        { kana: 'ぢ', romaji: ['ji', 'di', 'dzi'] },
        { kana: 'づ', romaji: ['zu', 'dzu'] },
        { kana: 'で', romaji: ['de'] },
        { kana: 'ど', romaji: ['do'] },
      ],
    },
    {
      name: 'hiragana_group_14_alternative',
      kanas: [
        { kana: 'ば', romaji: ['ba'] },
        { kana: 'び', romaji: ['bi'] },
        { kana: 'ぶ', romaji: ['bu'] },
        { kana: 'べ', romaji: ['be'] },
        { kana: 'ぼ', romaji: ['bo'] },
      ],
    },
    {
      name: 'hiragana_group_15_alternative',
      kanas: [
        { kana: 'ぱ', romaji: ['pa'] },
        { kana: 'ぴ', romaji: ['pi'] },
        { kana: 'ぷ', romaji: ['pu'] },
        { kana: 'ぺ', romaji: ['pe'] },
        { kana: 'ぽ', romaji: ['po'] },
      ],
    },
    {
      name: 'hiragana_group_16_alternative',
      kanas: [
        { kana: 'きゃ', romaji: ['kya'] },
        { kana: 'きゅ', romaji: ['kyu'] },
        { kana: 'きょ', romaji: ['kyo'] },
      ],
    },
    {
      name: 'hiragana_group_17_alternative',
      kanas: [
        { kana: 'しゃ', romaji: ['sha', 'sya'] },
        { kana: 'しゅ', romaji: ['shu', 'syu'] },
        { kana: 'しょ', romaji: ['sho', 'syo'] },
      ],
    },
    {
      name: 'hiragana_group_18_alternative',
      kanas: [
        { kana: 'ちゃ', romaji: ['cha', 'cya', 'tya'] },
        { kana: 'ちゅ', romaji: ['chu', 'cyu'] },
        { kana: 'ちょ', romaji: ['cho', 'cyo'] },
      ],
    },
    {
      name: 'hiragana_group_19_alternative',
      kanas: [
        { kana: 'にゃ', romaji: ['nya'] },
        { kana: 'にゅ', romaji: ['nyu'] },
        { kana: 'にょ', romaji: ['nyo'] },
      ],
    },
    {
      name: 'hiragana_group_20_alternative',
      kanas: [
        { kana: 'ひゃ', romaji: ['hya'] },
        { kana: 'ひゅ', romaji: ['hyu'] },
        { kana: 'ひょ', romaji: ['hyo'] },
      ],
    },
    {
      name: 'hiragana_group_21_alternative',
      kanas: [
        { kana: 'みゃ', romaji: ['mya'] },
        { kana: 'みゅ', romaji: ['myu'] },
        { kana: 'みょ', romaji: ['myo'] },
      ],
    },
    {
      name: 'hiragana_group_22_alternative',
      kanas: [
        { kana: 'りゃ', romaji: ['rya'] },
        { kana: 'りゅ', romaji: ['ryu'] },
        { kana: 'りょ', romaji: ['ryo'] },
      ],
    },
    {
      name: 'hiragana_group_23_alternative',
      kanas: [
        { kana: 'ぎゃ', romaji: ['gya'] },
        { kana: 'ぎゅ', romaji: ['gyu'] },
        { kana: 'ぎょ', romaji: ['gyo'] },
      ],
    },
    {
      name: 'hiragana_group_24_alternative',
      kanas: [
        { kana: 'じゃ', romaji: ['ja', 'jya'] },
        { kana: 'じゅ', romaji: ['ju', 'jyu'] },
        { kana: 'じょ', romaji: ['jo', 'jyo'] },
      ],
    },
    {
      name: 'hiragana_group_25_alternative',
      kanas: [
        { kana: 'びゃ', romaji: ['bya'] },
        { kana: 'びゅ', romaji: ['byu'] },
        { kana: 'びょ', romaji: ['byo'] },
      ],
    },
    {
      name: 'hiragana_group_26_alternative',
      kanas: [
        { kana: 'ぴゃ', romaji: ['pya'] },
        { kana: 'ぴゅ', romaji: ['pyu'] },
        { kana: 'ぴょ', romaji: ['pyo'] },
      ],
    },
  ],
  katakana: [
    {
      name: 'katakana_group_1',
      kanas: [
        { kana: 'ア', romaji: ['a'] },
        { kana: 'イ', romaji: ['i'] },
        { kana: 'ウ', romaji: ['u'] },
        { kana: 'エ', romaji: ['e'] },
        { kana: 'オ', romaji: ['o'] },
      ],
    },
    {
      name: 'katakana_group_2',
      kanas: [
        { kana: 'カ', romaji: ['ka'] },
        { kana: 'キ', romaji: ['ki'] },
        { kana: 'ク', romaji: ['ku'] },
        { kana: 'ケ', romaji: ['ke'] },
        { kana: 'コ', romaji: ['ko'] },
      ],
    },
    {
      name: 'katakana_group_3',
      kanas: [
        { kana: 'サ', romaji: ['sa'] },
        { kana: 'シ', romaji: ['shi', 'si'] },
        { kana: 'ス', romaji: ['su'] },
        { kana: 'セ', romaji: ['se'] },
        { kana: 'ソ', romaji: ['so'] },
      ],
    },
    {
      name: 'katakana_group_4',
      kanas: [
        { kana: 'タ', romaji: ['ta'] },
        { kana: 'チ', romaji: ['chi', 'ti'] },
        { kana: 'ツ', romaji: ['tsu', 'tu'] },
        { kana: 'テ', romaji: ['te'] },
        { kana: 'ト', romaji: ['to'] },
      ],
    },
    {
      name: 'katakana_group_5',
      kanas: [
        { kana: 'ナ', romaji: ['na'] },
        { kana: 'ニ', romaji: ['ni'] },
        { kana: 'ヌ', romaji: ['nu'] },
        { kana: 'ネ', romaji: ['ne'] },
        { kana: 'ノ', romaji: ['no'] },
      ],
    },
    {
      name: 'katakana_group_6',
      kanas: [
        { kana: 'ハ', romaji: ['ha'] },
        { kana: 'ヒ', romaji: ['hi'] },
        { kana: 'フ', romaji: ['fu', 'hu'] },
        { kana: 'ヘ', romaji: ['he'] },
        { kana: 'ホ', romaji: ['ho'] },
      ],
    },
    {
      name: 'katakana_group_7',
      kanas: [
        { kana: 'マ', romaji: ['ma'] },
        { kana: 'ミ', romaji: ['mi'] },
        { kana: 'ム', romaji: ['mu'] },
        { kana: 'メ', romaji: ['me'] },
        { kana: 'モ', romaji: ['mo'] },
      ],
    },
    {
      name: 'katakana_group_8',
      kanas: [
        { kana: 'ヤ', romaji: ['ya'] },
        { kana: 'ユ', romaji: ['yu'] },
        { kana: 'ヨ', romaji: ['yo'] },
      ],
    },
    {
      name: 'katakana_group_9',
      kanas: [
        { kana: 'ラ', romaji: ['ra'] },
        { kana: 'リ', romaji: ['ri'] },
        { kana: 'ル', romaji: ['ru'] },
        { kana: 'レ', romaji: ['re'] },
        { kana: 'ロ', romaji: ['ro'] },
      ],
    },
    {
      name: 'katakana_group_10',
      kanas: [
        { kana: 'ワ', romaji: ['wa'] },
        { kana: 'ヲ', romaji: ['wo', 'o'] },
        { kana: 'ン', romaji: ['n'] },
      ],
    },
    {
      name: 'katakana_group_11_alike',
      kanas: [
        { kana: 'シ', romaji: ['shi', 'si'] },
        { kana: 'ツ', romaji: ['tsu', 'tu'] },
        { kana: 'ソ', romaji: ['so'] },
        { kana: 'ン', romaji: ['n'] },
        { kana: 'ノ', romaji: ['no'] },
      ],
    },
    {
      name: 'katakana_group_12_alike',
      kanas: [
        { kana: 'ウ', romaji: ['u'] },
        { kana: 'フ', romaji: ['fu', 'hu'] },
        { kana: 'ワ', romaji: ['wa'] },
        { kana: 'ラ', romaji: ['ra'] },
        { kana: 'す', romaji: ['su'] },
        { kana: 'ヌ', romaji: ['nu'] },
        { kana: 'ヲ', romaji: ['wo', 'o'] },
      ],
    },
    {
      name: 'katakana_group_13_alternative',
      kanas: [
        { kana: 'ガ', romaji: ['ga'] },
        { kana: 'ギ', romaji: ['gi'] },
        { kana: 'グ', romaji: ['gu'] },
        { kana: 'ゲ', romaji: ['ge'] },
        { kana: 'ゴ', romaji: ['go'] },
      ],
    },
    {
      name: 'katakana_group_14_alternative',
      kanas: [
        { kana: 'ザ', romaji: ['za'] },
        { kana: 'ジ', romaji: ['ji', 'zi'] },
        { kana: 'ズ', romaji: ['zu', 'du'] },
        { kana: 'ゼ', romaji: ['ze'] },
        { kana: 'ゾ', romaji: ['zo'] },
      ],
    },
    {
      name: 'katakana_group_15_alternative',
      kanas: [
        { kana: 'ダ', romaji: ['da'] },
        { kana: 'ジ', romaji: ['ji', 'di', 'dzi'] },
        { kana: 'ズ', romaji: ['zu', 'dzu'] },
        { kana: 'デ', romaji: ['de'] },
        { kana: 'ド', romaji: ['do'] },
      ],
    },
    {
      name: 'katakana_group_16_alternative',
      kanas: [
        { kana: 'バ', romaji: ['ba'] },
        { kana: 'ビ', romaji: ['bi'] },
        { kana: 'ブ', romaji: ['bu'] },
        { kana: 'ベ', romaji: ['be'] },
        { kana: 'ボ', romaji: ['bo'] },
      ],
    },
    {
      name: 'katakana_group_17_alternative',
      kanas: [
        { kana: 'パ', romaji: ['pa'] },
        { kana: 'ピ', romaji: ['pi'] },
        { kana: 'プ', romaji: ['pu'] },
        { kana: 'ペ', romaji: ['pe'] },
        { kana: 'ポ', romaji: ['po'] },
      ],
    },
    {
      name: 'katakana_group_18_alternative',
      kanas: [
        { kana: 'キャ', romaji: ['kya'] },
        { kana: 'キュ', romaji: ['kyu'] },
        { kana: 'キョ', romaji: ['kyo'] },
      ],
    },
    {
      name: 'katakana_group_19_alternative',
      kanas: [
        { kana: 'シャ', romaji: ['sha', 'sya'] },
        { kana: 'シュ', romaji: ['shu', 'syu'] },
        { kana: 'ショ', romaji: ['sho', 'syo'] },
      ],
    },
    {
      name: 'katakana_group_20_alternative',
      kanas: [
        { kana: 'チャ', romaji: ['cha', 'cya', 'tya'] },
        { kana: 'チュ', romaji: ['chu', 'cyu'] },
        { kana: 'チョ', romaji: ['cho', 'cyo'] },
      ],
    },
    {
      name: 'katakana_group_21_alternative',
      kanas: [
        { kana: 'ニャ', romaji: ['nya'] },
        { kana: 'ニュ', romaji: ['nyu'] },
        { kana: 'ニョ', romaji: ['nyo'] },
      ],
    },
    {
      name: 'katakana_group_22_alternative',
      kanas: [
        { kana: 'ヒャ', romaji: ['hya'] },
        { kana: 'ヒュ', romaji: ['hyu'] },
        { kana: 'ヒョ', romaji: ['hyo'] },
      ],
    },
    {
      name: 'katakana_group_23_alternative',
      kanas: [
        { kana: 'ミャ', romaji: ['mya'] },
        { kana: 'ミュ', romaji: ['myu'] },
        { kana: 'ミョ', romaji: ['myo'] },
      ],
    },
    {
      name: 'katakana_group_24_alternative',
      kanas: [
        { kana: 'リャ', romaji: ['rya'] },
        { kana: 'リュ', romaji: ['ryu'] },
        { kana: 'リョ', romaji: ['ryo'] },
      ],
    },
    {
      name: 'katakana_group_25_alternative',
      kanas: [
        { kana: 'ギャ', romaji: ['gya'] },
        { kana: 'ギュ', romaji: ['gyu'] },
        { kana: 'ギョ', romaji: ['gyo'] },
      ],
    },
    {
      name: 'katakana_group_26_alternative',
      kanas: [
        { kana: 'ジャ', romaji: ['ja', 'jya'] },
        { kana: 'ジュ', romaji: ['ju', 'jyu'] },
        { kana: 'ジョ', romaji: ['jo', 'jyo'] },
      ],
    },
    {
      name: 'katakana_group_27_alternative',
      kanas: [
        { kana: 'ビャ', romaji: ['bya'] },
        { kana: 'ビュ', romaji: ['byu'] },
        { kana: 'ビョ', romaji: ['byo'] },
      ],
    },
    {
      name: 'katakana_group_28_alternative',
      kanas: [
        { kana: 'ピャ', romaji: ['pya'] },
        { kana: 'ピュ', romaji: ['pyu'] },
        { kana: 'ピョ', romaji: ['pyo'] },
      ],
    },
    {
      name: 'katakana_group_29_alternative',
      kanas: [
        { kana: 'ファ', romaji: ['fa'] },
        { kana: 'フィ', romaji: ['fi'] },
        { kana: 'フェ', romaji: ['fe'] },
        { kana: 'フォ', romaji: ['fo'] },
        { kana: 'フュ', romaji: ['fyu'] },
      ],
    },
    {
      name: 'katakana_group_30_alternative',
      kanas: [
        { kana: 'ウィ', romaji: ['wi'] },
        { kana: 'ウェ', romaji: ['we'] },
        { kana: 'ウォ', romaji: ['wo'] },
        { kana: 'ヴァ', romaji: ['va'] },
        { kana: 'ヴィ', romaji: ['vi'] },
        { kana: 'ヴェ', romaji: ['ve'] },
        { kana: 'ヴォ', romaji: ['vo'] },
      ],
    },
    {
      name: 'katakana_group_31_alternative',
      kanas: [
        { kana: 'ツァ', romaji: ['tsa'] },
        { kana: 'ツィ', romaji: ['tsi'] },
        { kana: 'ツェ', romaji: ['tse'] },
        { kana: 'ツォ', romaji: ['tso'] },
      ],
    },
    {
      name: 'katakana_group_32_alternative',
      kanas: [
        { kana: 'チェ', romaji: ['che'] },
        { kana: 'シェ', romaji: ['she'] },
        { kana: 'ジェ', romaji: ['je'] },
      ],
    },
    {
      name: 'katakana_group_33_alternative',
      kanas: [
        { kana: 'ティ', romaji: ['ti'] },
        { kana: 'ディ', romaji: ['di'] },
        { kana: 'デュ', romaji: ['du'] },
        { kana: 'トゥ', romaji: ['tu'] },
      ],
    },
  ],
}
