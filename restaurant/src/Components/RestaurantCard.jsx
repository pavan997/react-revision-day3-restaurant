import React from 'react';
import styles from './RestaurantCard.module.css'

function RestaurantCard({e}) {
    return (
        // <div>
        //     <img className='image' src={e.image} alt='/'/>
        //     <div>{e.name}</div>
        //     <div>{e.specials}</div>
        //     <div>{e.oneprice}</div>
        //     <div>{e.mprice}</div>
        //     <div>{e.time}</div>
        //     <div>{e.rating}</div>
        //     <div>{e.votes}</div>
        //     <div>{e.treviews}</div>

        // </div>
        <div class={styles.main}>
        <div className={styles.parent}>
                    
                    <div className={styles.parent1}>
                    
                    <img className={styles.image} src={e.image} alt="jjdnj" />

                    <div className={styles.fchild}>
                        <div className={styles.name} >{e.name}</div>
                        <div className={styles.special}> {e.specials} </div>
                        <div className={styles.oneprice}> Cost ₹{e.oneprice} for one </div>
                        <div className={styles.mprice}> Min ₹{e.mprice} . Upto {e.time}mins </div>
                        <div>{e.all?'All payments accepted':e.card?'online payments only':'cash only'}</div>
                        </div>
                    
                    <div className={styles.schild}>
                        <div className={styles.rating}> {e.rating}</div>
                        <div className={styles.votes}> {e.votes} votes </div>
                        <div className={styles.reviews}> {e.treviews} reviews</div>
                    </div>
                    
                    </div>
                

                    <div className={styles.border1}>
                        <button className={styles.bton} >Order Online{' >'} </button> 
                    </div> 
                </div> 
                </div>
    )
}

export default RestaurantCard

