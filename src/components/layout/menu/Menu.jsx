import styles from './Menu.module.scss'

const Menu = () => {
 return (
  <ul className={styles.menu_top}>
    <li className={styles.arrow_sub_menu}>
      <a href='#'>About</a>
      <ul className={styles.sub_menu}>
        <li><a href='#'>Certification</a></li>
        <li><a href='#'>Team</a></li>
        <li><a href='#'>Contact</a></li>
      </ul>
    </li>
    <li><a href='#'>Pricing</a></li>
    <li><a href='#'>Contact Us</a></li>
    <li><a href='#'>Login</a></li>
  </ul>
 )
}

export default Menu