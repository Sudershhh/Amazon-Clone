import React from 'react';
import "./Home.css";
import Product from "./Product"


function Home() {
    return (
        
        <div className="home">
            <div className="home-container">
               
                
                    <img className="primeimg" 
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg" 
                        alt="banner"
                   
                   />

                    
                
                
                
                <div className="home_row">
                    <Product 
                            id="1"
                            title="Big Magic: Creative Living Beyond Fear"
                            price={4.99}
                            image="/bigmagic.jpg"
                            rating = {5}
                            quantity ={1}
                    />
                    <Product 
                            id="2"
                            title="White Hoodie"
                            price={17.99}
                            image="/hoodie.jpg"
                            rating = {4}
                            quantity ={1}

                    />
                    
                    
                </div>

                <div className="home_row">
                    <Product    id="3"
                                title="boAt Rockerz 510 Bluetooth On-Ear Headphone with Mic(Jazzy Blue)"
                                price={99.0}
                                image="/boat.jpg"
                                quantity ={1}

                                rating = {4}/>
                    <Product    id="4"
                                title="iPhone 11(64 GB)"
                                price={699.0}
                                image="/iphone.jpg"
                                quantity ={1}

                                rating = {5}/>
                    <Product    id="5"
                                title="Rayon Designer Kurti in Black"
                                price={24.56}
                                image="/kurti.jpg"
                                quantity ={1}

                                rating = {3}/>
                </div>

                <div className="home_row">
                    <Product    id="6"
                                title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                                price={1560.89}
                                image="/monitor.jpg"
                                quantity ={1}

                                rating = {5}/>
                </div>

                <div className="home_row">
                    <Product    id="7"                       
                                title="Classmate Soft Cover 6 Subject Spiral Binding Notebook, Single Line, 300 Pages"
                                price={3.99}
                                image="/nb.jpg"
                                quantity ={1}

                                rating = {4}/>
                
                    <Product    id="8"
                                title="Rolex Men's Automatic Submarine Daytona Watch"
                                price={199.99}
                                image="/rolex.jpg"
                                quantity ={1}

                                rating = {5}/>

                    <Product   id="9"
                               title="Mi Band 4"
                               price={30}
                               image="/band4.jpg"
                               quantity ={1}

                               rating ={4}/>

                    <Product   id="10"
                               title="Samsung Galaxy S20 (Supreme Edition)"
                               price={799.55}
                               image="/galaxy.jpg"
                               quantity ={1}

                               rating ={5}/>           
                </div>

                <div className="home_row">

                    <Product   id="11"
                               title="Tupperware Large Handy Bowl Set, 500ml, Set of 2 (193),color may vary"
                               price={5}
                               image="/tw.jpg"
                               quantity ={1}

                               rating ={4}/>

                    <Product   id="12"
                               title="Click4Deal Soft Teddy Bear With Neck Bow - 4 Feet (122 Cm,Cream)"
                               price={19.99}
                               image="/teddy.jpg"
                               quantity ={1}

                               rating ={4}/>
                </div>

                <div className="home_row">

                    <Product   id="13"
                               title=" Canon EOS M50 Mark II (EF-M15-45mm f/3.5-6.3 IS STM)"
                               price={799.59}
                               quantity ={1}

                               image="https://2.img-dpreview.com/files/p/E~TS520x520~articles/2076115500/700d.jpeg"
                               rating ={5}/>
                    
                    <Product   id="14"
                               title="G.SKILL Trident Z 16GB (2 x 8GB) DDR4 3200Mhz RGB Series Memory - F43200C16D16GTZR"
                               price={13.99}
                               quantity ={1}

                               image="https://cdn.shopify.com/s/files/1/1780/7915/products/05_efac3bc0-78ca-40f2-992b-2db80d5d69c9_1024x1024.jpg?v=1597134463"
                               rating ={5}/>

                    <Product   id="15"
                               title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Blue)"
                               price={89.99}
                               quantity ={1}

                               image="/echo.jpg"
                               rating ={4}/>

                    <Product   id="16"
                               title="ComicSense.xyz Red-Haired Shanks 8cm PVC Action Figure"
                               price={6.99}
                               quantity ={1}

                               image="/shanks.jpg"
                               rating ={3}/>

                    <Product   id="17"
                               title="AmazonBasics Room Darkening Blackout Curtain (7 Feet - Door) Dark Grey"
                               price={29.99}
                               quantity ={1}

                               image="https://cf.shopee.com.my/file/26dc77dd2fbdf330b9f89f9613bd8f76"
                               rating ={4}/>


                </div>

                <div className="home_row">

                    <Product   id="18"
                               title="Apple MacBook Pro 16-inch"
                               price={2199.89}
                               quantity ={1}

                               image="/macbook.jpg"
                               rating ={5}/>

                 </div>   

                 <div className="home_row">

                    <Product   id="19"
                               title="MDS UNLIMITED CYCLES-K8 Daredevil 20 Inch Cycle Fat Tyre No Gear Kids MTB Both Boys and Girls - Sky Blue"
                               price={199.99}
                               quantity ={1}

                               image="/cycle.jpg"
                               rating ={4}/>

                    <Product   id="20"
                               title="OMEN Laptop - 15-ek0019nr"
                               price={1049.99}
                               quantity ={1}

                               image="/omen.png"
                               rating ={5}/>           

                 </div>   







            </div>      
            
        </div>
    )
}

export default Home
