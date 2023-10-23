import styles from './Advantages.module.scss'
import cn from 'clsx';

const Advantages = () => {
 return (
  <section className={styles.advantages}>
    <div className='container mx-auto'>
      <div className={styles.notif}>
        <img src="/public/images/advantages/why_icon.svg" alt='' />
        <p>Why Qubly</p>
      </div>
      <div className={styles.heading_main}>
        <h2>Get actionable insights from Big Data in 3 steps</h2>
        <div className={styles.descriptions}>Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
        ut labore et dolore magna aliquyam erat, sed diam voluptua.</div>
      </div>
      <div className={cn(styles.row, styles.row_adv)}>
        <div className='col-md-4'>
          <div className={styles.item_adv}>
            <img src="/public/images/advantages/icon1.svg" />
            <div className={styles.heading}>Data in real-time</div>
            <div className={styles.descr}>Collect data in real-time from multiple channels and move it into a data lake, in its original format.</div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className={styles.item_adv}>
            <img src="/public/images/advantages/icon2.svg" />
            <div className={styles.heading}>Powerful Algorithms</div>
            <div className={styles.descr}>With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data.</div>
          </div>
        </div>

        <div className='col-md-4'>
          <div className={styles.item_adv}>
            <img src="/public/images/advantages/icon3.svg" />
            <div className={styles.heading}>Valuable business insights</div>
            <div className={styles.descr}>Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
 )
}

export default Advantages