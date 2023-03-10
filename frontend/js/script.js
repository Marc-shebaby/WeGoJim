let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


 let swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
    
});



 swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});
 // adding posts #################################
const base_url="http://localhost:8000/api"
const pages = {};
const id = window.localStorage.getItem('id')
const img = document.getElementById("real-file")
let arr=[]


const customBtn = document.getElementById("custom-button")
customBtn.addEventListener("click",  function() {
    img.click();
});
const up_btn=document.getElementById("upload");
up_btn.addEventListener("click",async function(){
    const content=document.getElementById("input1")
    if(img.value && content.value){
        const val=content.value
const name=img.files[0].name
    const formData = new FormData()
    formData.append('img_src', name )
    formData.append('content',val)
    url=base_url + "/add/"+id;
    const response = await pages.postAPI(url, formData)
    const message = document.getElementById('title')
if(response){
    message.innerHTML = "<i><h2 style = \"color: green;\"> Success! you have earned an extra score</h2></i>"
}
    
    else{
        message.innerHTML = "<i><h2 style = \"color: red;\"> You didnt choose a file yet to upload</h2></i>"
    }

  }}  ); 
  pages.postAPI = async(api_url, api_data, api_token = null) => {  
    try {
        return await axios.post(
            api_url, 
            api_data,
            {
                headers:{
                    'Authorization': "token" + api_token
                }
            }
        )
    } catch (error) {
        console.log("Error from linking (POST)", error);
    }

  };
  // rest api to retrieve posts
  const link="http://localhost:8000/api/get"
  pages.getAPI=async(api_url,api_token=null)=>{
    try{return await axios.get(api_url,
        { headers:{
            'Authorization':"token"+api_token
        }
    })
  }
  catch(error){
    console.log("Error from linking (GET)", error)
  }
}
pages.populate=async()=>{
    const posts=document.getElementById("imgs")
    const response = await pages.getAPI(link)

  if(response){
   
    let l = response.data.posts.length
       for (let i = 0;i < l ; i++) {
        
      
            let post = response.data.posts[i];
        
            let name=post.img_src
            let src="images/"+name
            if(i==0){
            posts.innerHTML ="<div class=\"swiper-slide slide\">"+"<div class=\"image\">"+"<img src="+src+">"+"</div>"+ "<div class=\"content\">"+
                    "<div class=\"link\">"+ "<a href=\"#\"> "+post.username+" </a>"+ "<span>|</span>"+ "<a href=\"#\"> "+post.created_at+ " </a>"+ "</div>"+"<h3>"+post.content+"</h3>"+ "</div>"+
                    "</div>"
            }
            else{
                posts.innerHTML =posts.innerHTML+"<div class=\"swiper-slide slide\">"+"<div class=\"image\">"+"<img src="+src+">"+"</div>"+ "<div class=\"content\">"+
                "<div class=\"link\">"+ "<a href=\"#\"> "+post.username+" </a>"+ "<span>|</span>"+ "<a href=\"#\"> "+post.created_at+ " </a>"+ "</div>"+"<h3>"+post.content+"</h3>"+ "</div>"+
                "</div>"
             }
            
   }
}
}

pages.populate()



// music player

let player = document.getElementById("player");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");

let playpause = function () {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
}

playbtn.addEventListener("click", playpause);

player.onplay = function () {
  playbtn.classList.remove("fa-play");
  playbtn.classList.add("fa-pause");
}

player.onpause = function () {
  playbtn.classList.add("fa-play");
  playbtn.classList.remove("fa-pause");
}

player.ontimeupdate = function () {
  let ct = player.currentTime;
  current.innerHTML = timeFormat(ct);
  //progress
  let duration = player.duration;
  prog = Math.floor((ct * 100) / duration);
  progress.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
  minutes = Math.floor(ct / 60);
  seconds = Math.floor(ct % 60);

  if (seconds < 10) {
    seconds = "0"+seconds;
  }

  return minutes + ":" + seconds;
}
const direct=document.getElementById("redirect-1")
const direct2=document.getElementById("redirect-2")
const direct3=document.getElementById("redirect-3")

direct.addEventListener("click",function() {
  localStorage.clear();
  location.assign('./WeGoJim.html')
})
direct2.addEventListener("click",function() {
    localStorage.clear();
    location.assign('./WeGoJim.html')
  })
  direct3.addEventListener("click",function() {
    localStorage.clear();
    location.assign('./WeGoJim.html')
  })
  // make countdown
  let target_date = new Date().getTime() + (5500*3600*48); // set the countdown date
let days, hours, minutes, seconds; // variables for time units

let countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	let current_date = new Date().getTime();
	let seconds_left = (target_date - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

