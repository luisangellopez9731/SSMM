import styles from './Win.styles.module.css'
import winImage from '../../assets/win.jpg'

const Win = () => {
  const {container, img} = styles
  return (
    <div className={`${container}`}>
      <img className={`${img}`} src={winImage}/>
    </div>
  )
}

export default Win