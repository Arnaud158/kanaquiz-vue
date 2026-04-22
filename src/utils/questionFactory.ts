import type Kana from '@/types/kana'
import type {
  LevelFourQuestion,
  LevelOneQuestion,
  LevelThreeQuestion,
  LevelTwoQuestion,
} from '@/types/questions'

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * max)
}

export const QuestionFactory = {
  level1(kanas: Kana[]): LevelOneQuestion {
    const correctKana = kanas[getRandomInt(kanas.length)]
    return {
      level: '1',
      correctAnswer: correctKana!,
      possibleAnswers: [kanas[0]!, kanas[1]!, kanas[2]!],
    }
  },

  level2(kanas: Kana[]): LevelTwoQuestion {
    const correctKana = kanas[getRandomInt(kanas.length)]
    return {
      level: '2',
      correctAnswer: correctKana!,
      possibleAnswers: [kanas[0]!, kanas[1]!, kanas[2]!],
    }
  },

  level3(kana: Kana): LevelThreeQuestion {
    return {
      level: '3',
      correctAnswer: kana,
    }
  },

  level4(kanas: Kana[]): LevelFourQuestion {
    return {
      level: '4',
      correctAnswer: [kanas[0]!, kanas[1]!, kanas[2]!],
    }
  },
}
