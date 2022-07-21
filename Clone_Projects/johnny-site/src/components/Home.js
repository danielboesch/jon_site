


function Home() {
    window.addEventListener("load", () => {
        autoSlide();
      })
      function autoSlide(){
        setInterval(() => {
          slide(getItemActiveIndex() + 1);
        }, 4000)
      }
    
      function slide(toIndex) {
        const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
        const itemActive = document.querySelector(".carousel_item__active");
    
        if(toIndex >= itemsArray.length) {
          toIndex = 0;
        }
    
        const newItemActive = itemsArray[toIndex];
    
        newItemActive.classList.add("carousel_item__pos_next");
        setTimeout(() => {
          newItemActive.classList.add("carousel_item__next");
          itemActive.classList.add("carousel_item__next");
        }, 20);
    
        newItemActive.addEventListener("transitionend", () => {
          itemActive.className = "carousel_item";
          newItemActive.className = "carousel_item carousel_item__active";
        }, {
          once: true
        })
    
      }
    
      function getItemActiveIndex() {
        const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
        const itemActive = document.querySelector(".carousel_item__active");
        const itemActiveIndex = itemsArray.indexOf(itemActive);
        return itemActiveIndex;
      }
    
    
      return (
        <div className="App">
          <div className='sec1'>
    
          
    
          <div className='carousel carousel__fade page1'>
                <div className='carousel_inner'>
                  <div className='carousel_item carousel_item__active'>
                    <img src={'/imgs/img1.jpg'} alt='img1' className='carousel_img img1'></img>
                  </div>
                  <div className='carousel_item'>
                    <img src={'/imgs/img5.jpg'} alt='img5' className='carousel_img img2'></img>
                  </div>
                  <div className='carousel_item'>
                    <img src={'/imgs/img11.jpg'} alt='img5' className='carousel_img img3'></img>
                  </div>
                  <div className='carousel_item'>
                    <img src={'/imgs/img13.jpg'} alt='img5' className='carousel_img img1'></img>
                  </div>
                  <div className='carousel_item'>
                    <img src={'/imgs/img12.jpg'} alt='img5' className='carousel_img img4'></img>
                  </div>
                  <div className='carousel_item last_img'>
                    <img src={'/imgs/img3.jpg'} alt='img3' className='carousel_img img5'></img>
                  </div>
                </div>
              </div>
              </div>
              
              <div className = 'page pageInfo'>
                <div className='infoContainer'>
                  <div className='infoContainerInner1'></div>
                  <div className='infoLine1'></div>
                  <div className='infoContainerInner2'></div>
                </div>
    
              </div>
    
              <div className = 'page pageAbout'>
                <div className='AboutHeaderContainer'>
                  <div className='pageAboutHeader'>
                    <div className='infoHeaderLogo'>
                    <img src="./imgs/jonLogoWhite.png" alt="jon-Logo-White"  className='aboutLogo'></img>
                    </div>
                    <div>
                      <h3 className='infoHeaderText'>GET TO KNOW ME</h3>
                    </div>
                  </div>
                </div>
                <div className='aboutContainer'>
                  <div className='aboutExtra'>
                    <div className='aboutContainerPic'>
                      <img src="./imgs/jonImage.jpg" alt="jon-Logo-White"  className='aboutImage'></img>
                    </div>
                    <div className='aboutInfoBox'>
                      <div className='aboutInfoBox2'>
                        <div className='aboutText'>
                          <h3 className='hello'>Hi There!</h3>
                          <div className='line'></div>
                          <h1 className='imJon'>I'm Jon Sepchinski,<br></br>a Cincinnati-based<br></br>photographer</h1>
                          <h3 className='learnMore'>Learn More About Me</h3>
                          <div className='line'></div>
                          <h3 className='arrow'>→</h3>
    
                        </div>
                      </div>
                    </div>
                    <div className='aboutContainerBox'></div>
                  </div>
                </div>
    
              </div>
            <div className = 'page page2'>
            <div className='sportsHover'>
              <h1 className='sportsText2'>SEE MORE →</h1>
              <h2 className='sportsText'>Sports</h2>
              <div className='btmFade'></div>
            </div>
          <div className='page2Container'>
            <div className='page2MiniContainer1'>
            </div>
            <div className='page2MiniContainer2'>
            </div>
          </div>
          </div>
          <div className = 'page page3'>
          <div className='sportsHover'>
              <h1 className='sportsText2'>SEE MORE →</h1>
              <h2 className='sportsText'>Live Music</h2>
              <div className='btmFade'></div>
            </div>
          <div className='page2Container'>
            <div className='page3MiniContainer1'></div>
            <div className='page3MiniContainer2'></div>
          </div>
          </div>
          <div className = 'page page4'>
          <div className='sportsHover'>
              <h1 className='sportsText2'>SEE MORE →</h1>
              <h2 className='sportsText'>Portraits</h2>
              <div className='btmFade'></div>
            </div>
          <div className='page2Container'>
            <div className='page4MiniContainer1'></div>
            <div className='page4MiniContainer2'></div>
          </div>
          </div>
          <footer>
            <h1 className='follow'>FOLLOW</h1>
            <ul className='footerLinks'>
            <li><img src='https://cdn-icons-png.flaticon.com/512/59/59439.png' className='facebook icon'></img></li>
            <li><img src="https://i.ibb.co/qy7f5dp/insta-Logo.png" alt="insta-Logo" className='instagram icon'></img></li>
            <li><img src='https://cdn-icons-png.flaticon.com/512/733/733635.png' className='twitter icon'></img></li>
            </ul>
          </footer>
    
        </div>
      );
    }
    


export default Home;