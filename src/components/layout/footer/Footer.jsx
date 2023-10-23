import styles from './Footer.module.scss'

const Footer = () => {
 return (
  <footer className={styles.footer}>
    <div className='container mx-auto'>
      <div className='row'>
        <div className='col-lg-3'>
          <div className={styles.logo_info}>
            <a href="#" ><img src='/public/images/footer/Logo.png' alt='Qubly' /></a>
            <div className={styles.descr}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy 
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim</div>
            <ul className={styles.social}>
              <li><a href='#' target='_blank'><img src='/public/images/footer/facebook-icon.png' alt='' /></a></li>
              <li><a href='#' target='_blank'><img src='/public/images/footer/twitter.png' alt='' /></a></li>
              <li><a href='#' target='_blank'><img src='/public/images/footer/instagram.png' alt='' /></a></li>
            </ul>
          </div>
        </div>
        <div className='col-lg-7'>
          <div className={styles.menu_footer_wrapper}>
            <div className={styles.menu_footer}>
              <b>Product</b>
              <ul>
                <li>
                  <a href=''>Connections</a>
                  <a href=''>Protocols</a>
                  <a href=''>Personas</a>
                  <a href=''>Integrations</a>
                  <a href=''>Catalog</a>
                  <a href=''>Pricing</a>
                  <a href=''>Security</a>
                  <a href=''>GDPR</a>
                </li>
              </ul>
            </div>
            <div className={styles.menu_footer}>  
              <b>For Developers</b>
              <ul>
                <li>
                  <a href=''>Docs</a>
                  <a href=''>API</a>
                  <a href=''>Open Source</a>
                  <a href=''>Engineering Team</a>
                </li>
              </ul>
            </div>
            <div className={styles.menu_footer}>  
              <b>Company</b>
              <ul>
                <li>
                  <a href=''>Careers</a>
                  <a href=''>Blog</a>
                  <a href=''>Press</a>
                </li>
              </ul>
            </div>
            <div className={styles.menu_footer}>
              <b>Support</b>
              <ul>
                <li>
                  <a href=''>Help Center</a>
                  <a href=''>Contact Us</a>
                  <a href=''>Security Bulletins</a>
                  <a href=''>Partner Portal</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-2'>
          <div className={styles.newsletter}>
            <b>Newsletter</b>
            <form action=''><input type='email' placeholder='Email'/>
            <button><img src='/public/images/footer/icon_send.svg' alt=''/></button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>Rahul Rao</div>
    </div>
  </footer>
 )
}

export default Footer