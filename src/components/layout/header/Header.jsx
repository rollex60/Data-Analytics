import ButtonMenu from '../button/ButtonMenu'
import ButtonTrial from '../button/ButtonTrial'
import Menu from '../menu/Menu'
import styles from './Header.module.scss'

const Header = () => {
 return (
  <section className={styles.top_banner} style={{backgroundImage: `url("public/images/bg_main_banner.svg")`}} >
    <header className={styles.header}>
      <div className='container mx-auto'>
        <div className={styles.inner_header}>
          <a href='/' className={styles.logo}><img src='/public/images/logo.svg' alt='Data Analytics'/></a>
          <div className={styles.right_side_header}>
            <Menu />
            <ButtonMenu />
          </div>
        </div>
      </div>
    </header>

    <div className={styles.main_banner}>
    <div className='container mx-auto'>
      <div className="row">
        <div className="col-lg-6 col-md-7 order-lg-1 order-2">
        <div className={styles.mb_info}>
          <div className={styles.notif}>
            <img src='/public/images/stars.svg'/>
            <p>v3.1 released.<a href='#'>Learn more</a></p>
          </div>
          <h1>Your data with real-time analytics</h1>
          <div className={styles.desc}>
            Harness the potential of Big Data Analytics & Cloud Services and
            become a data-driver organization with Needle tail
          </div>
          <ButtonTrial />
        </div>
        </div>
        <div className='col-lg-6 col-md-5 order-lg-2 order-1'>
          <img src='images/image_mb.png' className={styles.img_responsive} />
        </div>
      </div>
    </div>
    </div>
  </section>
 )
}

export default Header