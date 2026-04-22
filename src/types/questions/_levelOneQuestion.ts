import type Kana from '../kana'
import type GameQuestion from './_gameQuestion'

export default interface LevelOneQuestion extends GameQuestion {
  correctAnswer: Kana
  possibleAnswers: [Kana, Kana, Kana]
}
