import { useEffect } from 'react';
import styles from './Reviews.module.scss'
import cn from 'clsx';

const Reviews = () => {

 return (
  <section className={styles.reviews} style={{backgroundImage: `url("/public/images/reviews/reviews.svg")`}}>
    <div className='container mx-auto'>
      <div className={cn(styles.rev_1, styles.item_rev, styles.active)}>
        <div className={styles.quotes}>"What I love about Qubly is the easy way we can collaborate 
        even if there is a lot of people involved in the process"</div>
        <img src="/public/images/reviews/Profile.svg" alt="" />
        <div className={styles.name}>Guillaume Cabane</div>
        <div className={styles.positions}>CTO @ Codium</div>
      </div>

      <div className={cn(styles.rev_2, styles.item_rev)}>
        <div className={styles.quotes}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."</div>
        <img src="/public/images/reviews/Profile.svg" alt="" />
        <div className={styles.name}>Mitchal Caban</div>
        <div className={styles.positions}>Owner @ BigSpring</div>
      </div>

      <div className={cn(styles.rev_3, styles.item_rev)}>
        <div className={styles.quotes}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."</div>
        <img src="/public/images/reviews/Profile.svg" alt="" />
        <div className={styles.name}>Robert Rodrigues</div>
        <div className={styles.positions}>CTO @ Drant</div>
      </div>

      <div className={cn(styles.rev_4, styles.item_rev)}>
        <div className={styles.quotes}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."</div>
        <img src="/public/images/reviews/Profile.svg" alt="" />
        <div className={styles.name}>Bob Dillan</div>
        <div className={styles.positions}>CTO @ Pulumi</div>
      </div>

      <div className={cn(styles.rev_5, styles.item_rev)}>
        <div className={styles.quotes}>"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."</div>
        <img src="/public/images/reviews/Profile.svg" alt="" />
        <div className={styles.name}>Vanesa Mey</div>
        <div className={styles.positions}>Owner @ Biome</div>
      </div>
      <div className={styles.nav_rev}>
        <div data-revid="#rev_1"><img src="/public/images/reviews/codium.svg" alt=""/></div>
        <div data-revid="#rev_2"><img src="/public/images/reviews/BigSpring1.svg" alt=""/></div>
        <div data-revid="#rev_3"><img src="/public/images/reviews/qdrant.svg" alt=""/></div>
        <div data-revid="#rev_4"><img src="/public/images/reviews/pulumi.svg" alt=""/></div>
        <div data-revid="#rev_5"><img src="/public/images/reviews/biomejs.svg" alt=""/></div>
      </div>
    </div>
  </section>
 )
}

export default Reviews