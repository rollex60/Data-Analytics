import styles from './PreFooter.module.scss'

const PreFooter = () => {
 return (
  <section className={styles.pre_footer}>
    <div className='container mx-auto'>
      <div className='row d-flex align-items-center'>
        <div className='col-lg-6'>
          <div className={styles.pf_info}>
            <h4>See why the world’s best companies use Qubly to become truly data-driven.</h4>
              <img className={styles.line_image} src="/public/images/pre_footer/trusted_by.svg" alt="" />
              <img className={styles.client_logo} src="/public/images/pre_footer/client_logos.svg" alt="Client Logo" />
      
          </div>
        </div>
        <div className='col-lg-6'>
          <div className={styles.form_wrapper}>
            <form>
              <h4>Sign Up</h4>
              <input type="email" placeholder='Your primary email' name='email' required/>
              <input type="password" placeholder='Password' name='password' required/>
              <input type="password" placeholder='Re-type password' name='re_password' required/>
              <button className={styles.btn_form}>Start your free trial</button>
              <div className={styles.or}>OR</div>
              <a href=''><img src='/public/images/pre_footer/btn_google.png' alt=''/></a>
              <div className={styles.footer_form}>
              <div className={styles.line}></div>
                <p>Already have an account?<a href='#'>Login</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
 )
}

export default PreFooter