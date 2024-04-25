import React from "react";
import { useState } from "react";
import "./home.css"
import { Link } from "react-router-dom";
import imglogo from '../media/menu (5).png'
import close from '../media/close (1).png'
import cup from "../media/tea cup.png"
import relaxation from "../media/toast (1).png"
import energy from "../media/bomb (2).png"
import family from "../media/red-bean-soup (2).png"
import aboutimg from "../media/about-bcg.jpeg"
import product1 from "../media/product-1.jpeg"
import product2 from "../media/product-2.jpeg"
import product3 from "../media/product-3.jpeg"
import address from "../media/location.png"
import email from "../media/email.png"
import phone from "../media/phone-call (2).png"
import facebook from "../media/facebook (2).png"
import twitter from "../media/twitter (3).png"
import instagram from "../media/instagram (3).png"
import { motion, reverseEasing } from "framer-motion"
import { gsap } from "gsap/gsap-core";
let Home = () => {
  let [show, hide] = useState(false)
  let variant={slideLeft:{
    y:0,
    opacity:1,
    scale:1
  }
  ,slideRight:{
    opacity:0,
    y:-200,
    scale:0
  }}
  return (
    <>
      <nav>
        <div className="logo" onClick={() => { hide(!show) }}>
          <motion.img
            initial={{scale:0.5,
              opacity:0.5}}
            animate={{
              scale:1,
              opacity:1
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType:"loop"

            }}
            src={imglogo} />
        </div>
        <motion.div 
        animate={show?"slideLeft":"slideRight"}
        transition={{duration:0.5}}
        variants={variant}
        className="menu">
          <div className="closeicon" onClick={() => { hide(!show) }}>
              <img src={close} />
            </div>
          <ul>
            <li><Link to='/'> HOME</Link></li>
            <li><Link to='/Skills'>SKILLS </Link></li>
            <li><Link to='/About'>ABOUT</Link></li>
            <li><Link to='/Projects'>PROJECTS</Link></li>
          </ul>
        </motion.div>
      </nav>
      <header>
        <div className="heading">
          <motion.h2
            // initial={{ x:-600,opacity:0} }  

            animate={{ x: [600, -100, 40, 0], opacity: [0, 0.5, 1] }}
            transition={{
              // type: "spring", stiffness: 80,
              duration: 3
            }}
          > Over One Hundred Flavors Of </motion.h2>
          <motion.h1
            animate={{ x: [-600, 100, 30, 0], opacity: [0, 0.5, 1] }}
            transition={{ duration: 3 }}
          > SPECIALLY
            <br />
            CRAFTED TEA
          </motion.h1>
          <motion.a
            animate={{ opacity: [0, 0.3, 0.5, 1], scale: [1.5, 1.4, 1.3, 1.2, 1.1, 0.5, 1] }}
            transition={{
              duration: 3,
            }}
            className="btn banner-btn" hraf="#">EXPLORE</motion.a>
        </div>
      </header>
      <div className="allcards">
        <motion.div 
        initial={{y:100}}
        whileInView={{ y: 0 }}
     transition={{duration:1}}
        className="card" >
          <img src={cup} />
          <h2>Made in US</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum? </p>
        </motion.div>
        <motion.div 
               initial={{y:-100}}
               whileInView={{ y: -0 }}
            transition={{duration:3}}
        className="card" >
          <img src={relaxation} />
          <h2>Relaxation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum? </p>
        </motion.div>
        <motion.div 
               initial={{y:100}}
               whileInView={{ y: 0 }}
            transition={{duration:1}}
        className="card" >
          <img src={energy} />
          <h2>Energy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum? </p>
        </motion.div>
        <motion.div
                initial={{y:-100}}
                whileInView={{ y:-0 }}
             transition={{duration:3}}
         className="card" >
          <img src={family} />
          <h2>family recipe</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, rerum? </p>
        </motion.div>
      </div>
      <div className="aboutt">
        <motion.div 
        whileInView={{ x:30}}
        transition={{duration:1}}
        className="aboutpicture">
          <img src={aboutimg} />
        </motion.div>
        <motion.div
         whileInView={{ x:-20}}
         transition={{duration:1}}
        className="abouttea">
          <h3>about Our</h3>
          <h2>Tea Station</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellendus reprehenderit iure, vero nobis dolore!
          </p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi repellendus reprehenderit iure, vero nobis dolore!
          </p>
          <button>Learn More</button>
        </motion.div>
      </div>
      <div className="checkoutmain">
        <motion.div
        whileInView={{y: [0, 100, 0] }}
        transition={{
          duration: 2
       }}
            
        className="checkout">
          <h3>Check Out</h3>
          <h2>Our Products</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem, repellat praesentium esse ducimus odit alias nulla laborum doloremque voluptatum, a cum magnam iure accusamus. </p>
          <button>INVENTORY</button>
        </motion.div>
        <motion.div 
        //  animate={{ opacity: 1 }}
        //  exit={{ opacity: 0 }}
        // initial={{ x: 300, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        // exit={{ x: -500, opacity: 0 }}
        //  animate={{ opacity: 0.5 }}
        //  transition={{
        //    opacity: { ease: "linear" },
        //    layout: { duration: 6 }
        //  }}
        // layout transition={{ duration: 0.3 }}
        //  animate={{ transform: "translateX(50px)" }}
        animate={{ y: [null, 100, 0] }}
        className="pics">
          <motion.div 
whileInView={{opacity:[0,0.3,0.7,1],scale:[0,0.5,1]}}
transition={{
   duration: 1
}}
          className="picsprod">
            <img src={product1} />
            <h1>Ginger Peach Tea</h1>
            <h4>$6.99</h4>
          </motion.div>
          <motion.div 
          whileInView={{opacity:[0,0.3,0.7,1],scale:[0,0.5,1]}}
          transition={{
             duration: 1
          }}
          className="picsprod">
            <img src={product2} />
            <h1>Fruit Sangria</h1>
            <h4>$6.99</h4>
          </motion.div>
          <motion.div
          whileInView={{opacity:[0,0.3,0.7,1],scale:[0,0.5,1]}}
          transition={{
             duration: 1
          }}
               className="picsprod">
            <img src={product3} />
            <h1>White Tea</h1>
            <h4>$6.99</h4>
          </motion.div>
        </motion.div>
      </div>
      <div className="explore">
        <h2>Explore</h2>
        <h1> Our Services</h1>
      </div>
      <motion.div
  //     animate={{ y:[0, -10, 10, 0]  }}
  //   viewport={{once: true  }}
  //  transition={{
  //  repeat: Infinity,
  //   duration: 1
  //  }} 
//   animate={{ y:[0, -10, 10, 0]  }}
//   viewport={{once: true  }}
//  transition={{
//  repeat: Infinity,
//   duration: 1
//  }}
animate={{ y:[0, -10, 10, 0] , opacity:[0,1]}}
transition={{
repeat: 4,
 duration: 1
}}
         className="ourservice">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          className="services">
          <img src={product1} />
          <h1>Custom Recipes</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore sed deserunt, blanditiis error doloremque. </p>
          <button>Read More</button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          className="services">
          <img src={product2} />
          <h1>Home Delivery</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore sed deserunt, blanditiis error doloremque. </p>
          <button>Read More</button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          className="services">
          <img src={product3} />
          <h1>Tea Aging</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione labore sed deserunt, blanditiis error doloremque. </p>
          <button>Read More</button>
        </motion.div>
      </motion.div>
      <form>
        <div className="formset">
          <div className="addresskill">
            <h3><img src={address} /> Address</h3>
            <h4>523 N FAIRFAX AVE<br />
              LOS ANGELES, CA 90048</h4>
            <h3><img src={email} /> Email</h3>
            <h4>email@email.com</h4>
            <h3><img src={phone} /> Telephone</h3>
            <h4>+ 123 456 789</h4>
          </div>
          <div className="contt">
            <h1>Contact us</h1>
            <div className="continput">
              <input type="text" placeholder="  Name" />
              <input type="email" placeholder="  Email" />
              <textarea name="message" placeholder="  Message"   className="textmessage"/>
            </div>
            <button>SUBMIT HERE</button>
          </div>
        </div>
      </form>
      <footer>
        <div className="allfoot">
          <div className="foot">
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
          </div>
          <div className="last">
            <h3>&copy;  2024 <span> TEA STATION </span>  ALL RIGHTS RESERVED </h3>
          </div>
        </div>
      </footer>
    </>

  )
}
export default Home