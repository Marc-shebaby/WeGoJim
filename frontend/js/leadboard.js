const tabs = document.querySelectorAll(".lboard_tabs ul li");
const today = document.querySelector(".today");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const items = document.querySelectorAll(".lboard_item");

tabs.forEach(function(tab){
	tab.addEventListener("click", function(){
		var currenttab = tab.getAttribute("data-li");
		
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})

		tab.classList.add("active");

		items.forEach(function(item){
			item.style.display = "none";
		})

		if(currenttab == "today"){
			today.style.display = "block";
		}
		else if(currenttab == "month"){
			month.style.display = "block";
		}
		else{
			year.style.display = "block";
		}

	})
})
const ranks = {};
const url="http://localhost:8000/api/top"
ranks.populate=async()=>{
    const top=document.getElementById("fill")
    const response = await ranks.getAPI(url)
	if(response){
   
		let l = response.data.users.length
		for (let i = 0;i < l ; i++) {
				 let user = response.data.users[i];
				 console.log(user.score)
				 if(i==0){
					top.innerHTML="<div class=\"lboard_mem\">"+"<div class=\"img\">"+"<img src=images/barbell.png>"+"</div>"+ "<div class=\"name_bar\">"+"<p><span>"+(i+1)+"</span>"+user.username+"</p>"+
                    "<div class=\"bar_wrap\">"+ "<div class=\"inner_bar\"style=\"width: 95% \"></div></div></div>"+"<div class=\"points\" <h2>"+ user.score+ "points </h2></div></div>"
				 }
				 else{
					top.innerHTML=top.innerHTML+"<div class=\"lboard_mem\">"+"<div class=\"img\">"+"<img src=images/barbell.png>"+"</div>"+ "<div class=\"name_bar\">"+"<p><span>"+(i+1)+"</span>"+user.username+"</p>"+
                    "<div class=\"bar_wrap\">"+ "<div class=\"inner_bar\"style=\"width: 95% \"></div></div></div>"+"<div class=\"points\" <h2>"+ user.score+ "points </h2></div></div>"
				 }
				 }
}
}
ranks.getAPI=async(api_url,api_token=null)=>{
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
ranks.populate()
