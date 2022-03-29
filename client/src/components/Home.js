import React from 'react'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <div className='hero'>
            <div>
            <h1>Featured Shoe of The Month</h1>
            <h2>Coming April 9th</h2>
            <img src='https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/6c909290-79a8-4c89-9de1-0c6d75d7f717/air-jordan-5-jade-dc7501-300-release-date.jpg' />
            
            </div>
            

            <div className='shoe-angles'>
            <img style={{width: '200px'}} src='https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/6c909290-79a8-4c89-9de1-0c6d75d7f717/air-jordan-5-jade-dc7501-300-release-date.jpg' />
            <img style={{width: '200px'}} src='https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/33eb78b6-8f59-4cac-9b71-d5fd579c47db/air-jordan-5-jade-dc7501-300-release-date.jpg' />
            <img style={{width: '200px'}} src='https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/c8652b63-62f7-4e15-bc28-7c3f52176bd1/air-jordan-5-jade-dc7501-300-release-date.jpg' />
            <img style={{width: '200px'}} src='https://static.nike.com/a/images/t_prod_sc/w_640,c_limit,f_auto/5136e9ad-91d2-4133-bad2-f53085f698a8/air-jordan-5-jade-dc7501-300-release-date.jpg' />
            </div>
            
        </div>
        <div className='btns'>
            <h1>Jordan Retro 5 Jade Horizon</h1>
            <h2>$200</h2>
        <button>Get Notified</button>
        <button>More Retro 5s</button>
        </div>

        <div className='newsletter'>
            <h1>Join Our Newsletter!</h1>
            <h3>Stay up to date with our latest news and products</h3>
            <div>
            <input placeholder='email' type={"text"}></input>
            <button>JOIN</button>
            </div>
        </div>

        <br /><br /><br /><br /><br /><br /><br /><br />

        
        <Footer />
    </div>
  )
}

export default Home