import type Kana from '../kana'
import type GameQuestion from './_gameQuestion'

export default interface LevelTwoQuestion extends GameQuestion {
  correctAnswer: Kana
  possibleAnswers: [Kana, Kana, Kana]
}
