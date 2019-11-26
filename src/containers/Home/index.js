import React from 'react'
import PierreImg from 'assets/images/pierre.jpg'
import FeuilleImg from 'assets/images/feuille.jpg'
import CiseauxImg from 'assets/images/ciseaux.jpg'

import ChoiceDisplay from 'components/ChoiceDisplay'

const values = ['pierre', 'feuille', 'ciseaux']
const imgValues = {
  pierre: PierreImg,
  feuille: FeuilleImg,
  ciseaux: CiseauxImg,
}
const winFnuction = (mine, your) => {
  console.log('infonction:', mine, your)
  switch (mine) {
    case 'pierre':
      if (your === 'pierre') return 'égalité'
      if (your === 'feuille') return 'perdu'
      if (your === 'ciseaux') return 'gagné'
      break
    case 'feuille':
      if (your === 'pierre') return 'gagné'
      if (your === 'feuille') return 'égalité'
      if (your === 'ciseaux') return 'perdu'
      break
    case 'ciseaux':
      if (your === 'pierre') return 'perdu'
      if (your === 'feuille') return 'gagné'
      if (your === 'ciseaux') return 'égalité'
      break
    default:
      return 'perdu'
  }
  return 'perdu'
}

class chifoumi extends React.Component {
  state = {
    scoreUser1: 0,
    scoreUser2: 0,
    mine: false,
    your: false,
    message: null,
    disabled: false,
    history: [],
  }

  userChoice(mine) {
    const rand = values[Math.floor(Math.random() * values.length)]
    this.setState({
      mine,
      your: rand,
      disabled: true,
    })

    const winOrNot = winFnuction(mine, rand)
    if (winOrNot === 'gagné') {
      this.setState({
        scoreUser1: this.state.scoreUser1 + 1,
      })
    } else if (winOrNot === 'perdu') {
      this.setState({
        scoreUser2: this.state.scoreUser2 + 1,
      })
    }
    const newHistory = [...this.state.history, `${mine} vs ${rand} => ${winOrNot}`]
    this.setState({
      message: `${mine} vs ${rand} => ${winOrNot}`,
      history: newHistory,
    })
    setTimeout(() => {
      this.setState({ mine: false, your: false, message: null, disabled: false })
    }, 2000)
  }

  render() {
    const { scoreUser1, scoreUser2, mine, your, message, disabled, history } = this.state
    return (
      <div style={{ maxWidth: 500, display: 'flex', flexDirection: 'column' }}>
        Score : {scoreUser1} vs {scoreUser2}
        <ChoiceDisplay value={your} image={imgValues[your]} />
        <div style={{ alignSelf: 'center' }}>VS</div>
        <ChoiceDisplay value={mine} image={imgValues[mine]} style={{ alignSelf: 'flex-end' }} />
        <div>{message}</div>
        <div style={{ display: 'flex' }}>
          {values.map((value) => (
            <div
              style={{
                margin: 10,
                display: 'flex',
                border: mine === value ? '2px solid black' : 'none',
                opacity: disabled ? '0.5' : '1',
              }}
              onClick={() => !disabled && this.userChoice(value)}
            >
              <img style={{ width: 100, height: 100 }} src={imgValues[value]} />
            </div>
          ))}
        </div>
        <div>
          history :
          <br />
          {history && history.map((hist) => <div>{hist}</div>)}
        </div>
      </div>
    )
  }
}

export default chifoumi
