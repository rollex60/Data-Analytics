import styles from './Button.module.scss'
import cn from 'clsx';

const ButtonTrial = () => {
 return (
  <div className={styles.btns}>
    <a href='#' className={styles.btn}>Start free trial</a>
    <a href='#' className={cn(styles.btn, styles.btn_white)}>Learn More</a>
  </div>
 )
}

export default ButtonTrial