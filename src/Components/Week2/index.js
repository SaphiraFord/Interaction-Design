import react from 'react';
import styled from 'styled-components';
import cat from "./Assets/Avatar.png"

const StyledOutWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: #E5E5E5;
    }


`

const PhoneFrame = styled.div`

  
    color:white;
    background: #E0F1F2;
    transition: background 0.4s, color 0.4s;
    color:black;
    text-align:center;
    width: 411px;
    height: 731px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #0000000;
    flex-direction:"row-reverse";
    overflow:hidden;

    section{
      width: 280px;
      height: auto;
      background: white;
      display: flow-root;
      justify-content: center;
      font-size: 14px;
      align-items: center;
      text-align: left;
      padding: 1.5em;
      position: absolute;
      top: 24px;
      border-radius: 6px;
      a:first-child{ 
        display: flex;
        justify-content: left;
        align-items: center;
      }
      a:first-child>svg, a:first-child>span{margin-right:1em;}

      .hide>div:first-child{display: flex;align-items: center;}
      .hide>div:first-child img{width: 20%;}
      .hide>div:first-child h4, .hide>div:first-child p{margin:10px;}
      .hide>div:first-child p{font-size: 13px;}
      .hide{display:none;}

      .hide a{margin-right:1em;margin-bottom:1em}

      .hide>div:first-child{margin: 1em 0px;}

    }
`;



function alert() {
  var popup = document.getElementById("popup"); 
  if (popup.style.display === "none") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}

export  const Switch = () => {
  return [
      <StyledOutWrapper>
      <PhoneFrame>

      <section>
        <a href="#" onClick={alert}>

          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9999 7.47448C12.9999 7.47448 6.24216 0.696811 4.55273 2.22417C2.44094 4.13338 1.91302 10.3383 6.66452 11.7702C11.416 13.2021 12.9999 7.47448 12.9999 7.47448ZM5.56874 4.13337C5.45213 4.33329 5.3335 4.59285 5.23285 4.91546C5.0381 5.53971 4.95372 6.26862 5.02485 6.97606C5.16371 8.35691 5.82942 9.42968 7.2416 9.85525C8.01504 10.0883 8.5312 10.0042 8.89876 9.85318C9.30456 9.68642 9.68988 9.36852 10.0447 8.91942C10.2829 8.6179 10.481 8.29029 10.6397 7.982C10.613 7.95713 10.5858 7.93189 10.5582 7.90631C9.92006 7.31498 9.06409 6.55317 8.16902 5.84512C7.25205 5.11974 6.38612 4.52494 5.71568 4.20121C5.66348 4.17601 5.61451 4.15346 5.56874 4.13337ZM11.075 6.93154C11.0751 6.93121 11.0751 6.93133 11.0749 6.9319Z" fill="#7F55B3"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.47448C11 7.47448 17.7577 0.696811 19.4471 2.22417C21.5589 4.13338 22.0869 10.3383 17.3354 11.7702C12.5839 13.2021 11 7.47448 11 7.47448ZM18.4311 4.13337C18.5477 4.33329 18.6664 4.59285 18.767 4.91546C18.9618 5.53971 19.0462 6.26862 18.975 6.97606C18.8362 8.35691 18.1705 9.42968 16.7583 9.85525C15.9848 10.0883 15.4687 10.0042 15.1011 9.85318C14.6953 9.68642 14.31 9.36852 13.9552 8.91942C13.7169 8.6179 13.5189 8.29029 13.3602 7.982C13.3869 7.95713 13.4141 7.93189 13.4417 7.90631C14.0798 7.31498 14.9358 6.55317 15.8309 5.84512C16.7478 5.11974 17.6138 4.52494 18.2842 4.20121C18.3364 4.17601 18.3854 4.15346 18.4311 4.13337ZM12.9249 6.93154C12.9248 6.93121 12.9248 6.93133 12.925 6.9319Z" fill="#7F55B3"/>
            <path d="M20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14C4 9.58172 7.58172 6 12 6C16.4183 6 20 9.58172 20 14Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C15.3137 20 18 17.3137 18 14C18 10.6863 15.3137 8 12 8C8.68629 8 6 10.6863 6 14C6 17.3137 8.68629 20 12 20ZM12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" fill="#7F55B3"/>
          </svg>
          <span>Cativity - Now</span> 
          <svg width="13" height="7" viewBox="0 0 13 7">
            <path d="M1.21643 1L6.40821 5.5L11.6 1" stroke="black" stroke-width="2"/>
          </svg>
          
        </a>

        <div id="popup" class="hide">
          <div>
            <img src={cat} />
            <div>
              <h4>CleverCat81</h4>
              <p>What Stages have you unlocked?</p>
            </div>
          </div>
          
 
          <a href="#">Reply</a>
          <a href="#">Archive</a>
        </div>

      </section>

      </PhoneFrame>
      </StyledOutWrapper> 
  ] 
}



const Week2 = () => {
    return (
        <Switch />
    )
}



export default Week2;