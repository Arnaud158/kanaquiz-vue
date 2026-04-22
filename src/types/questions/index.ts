import type LevelOneQuestion from './_levelOneQuestion'
import type LevelTwoQuestion from './_levelTwoQuestion'
import type LevelThreeQuestion from './_levelThreeQuestion'
import type LevelFourQuestion from './_levelFourQuestion'
import type GameQuestion from './_gameQuestion'

export type AllQuestionTypes =
  | LevelOneQuestion
  | LevelTwoQuestion
  | LevelThreeQuestion
  | LevelFourQuestion

export type {
  GameQuestion,
  LevelOneQuestion,
  LevelTwoQuestion,
  LevelThreeQuestion,
  LevelFourQuestion,
}
