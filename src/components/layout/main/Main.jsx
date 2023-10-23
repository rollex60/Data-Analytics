import styles from './Main.module.scss'
import cn from 'clsx';

const Main = () => {
 return (
  <>
  <section className={cn(styles.info_1, styles.information)}>
    <div className='container mx-auto'>
      <div className='row d-flex align-items-center'>
        <div className='col-lg-6 col-md-4'><img src="/public/images/main/main1.svg" alt="" className={styles.img_responsive}/></div>
        <div className='col-lg-6 col-md-8'>
          <div className={styles.right_info}>
            <div className={styles.notif}>
              <img src="/public/images/main/electronic-circuit.svg" alt=""/>
              <p>For Product Teams</p>
            </div>
            <h3>Launch with the best stack</h3>
            <div className={styles.descr}>A centralized platform that integrates zillions of 
            data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className={cn(styles.info_2, styles.information)}>
    <div className='container mx-auto'>
      <div className='row d-flex align-items-center'>
      <div className='col-lg-6 col-md-8'>
          <div className={styles.right_info}>
            <div className={styles.notif}>
              <img src="/public/images/main/compass.svg" alt=""/>
              <p>For Engineering Teams</p>
            </div>
            <h3>Data-driven pipelines in minutes</h3>
            <div className={styles.descr}>Maintenance-free data pipelines with quick set-up and straight-forward 
            deployments that are powered by a modern & scalable platform.</div>
          </div>
        </div>
        <div className='col-lg-6 col-md-4'><img src="/public/images/main/main2.png" alt="" className={styles.img_responsive}/></div>
      </div>
    </div>
  </section>
  </>
 )
}

export default Main