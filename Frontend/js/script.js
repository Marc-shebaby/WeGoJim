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

// used var because variable is redeclared
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
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
       for (let i = 0, l = response.data.posts.length; i < l; i++) {
            let post = response.data.posts[i];
            let name=post.img_src
            let src="images/"+name
            
            posts.innerHTML ="<div class=\"swiper-slide slide\">"+"<div class=\"image\">"+"<img src="+src+">"+"</div>"+ "<div class=\"content\">"+
                    "<div class=\"link\">"+ "<a href=\"#\"> "+post.username+" </a>"+ "<span>|</span>"+ "<a href=\"#\"> "+post.created_at+ " </a>"+ "</div>"+"<h3>"+post.content+"</h3>"+"</div>"+
                    "</div>"
             }
            
    }
}
pages.populate()




    