import type Kana from '../kana'
import type GameQuestion from './_gameQuestion'

export default interface LevelFourQuestion extends GameQuestion {
  correctAnswer: [Kana, Kana, Kana]
}
