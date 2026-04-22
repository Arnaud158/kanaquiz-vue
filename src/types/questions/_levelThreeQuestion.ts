import type Kana from '../kana'
import type GameQuestion from './_gameQuestion'

export default interface LevelThreeQuestion extends GameQuestion {
  correctAnswer: Kana
}
