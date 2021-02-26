import styles from './Lose.styles.module.css'
import loseImage from '../../assets/lose.png'

const Lose = () => {
  const {container, img} = styles
  return (
    <div className={`${container}`}>
      <img className={`${img}`} src={loseImage}/>
    </div>
  )
}

export default Lose