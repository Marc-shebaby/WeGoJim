// parallax
(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        
        elem.style.backgroundPosition = x;
    }

})();

// login sign in
const pages = {}

const base_url = "http://127.0.0.1:8000"
pages.loaderFunction = (page) => {
  eval("pages.load_"+page+"()")
}
pages.load_user=()=>{
  const form = document.getElementById("myForm")
    const btn = document.getElementById('btn')
    const sbtn = document.getElementById('sbtn')
    btn.addEventListener("click",  async function(e) {
      e.preventDefault()
   
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const formData = new FormData();
    const user=username.value
    const pass=password.value
    const url = base_url + "/api/auth/login"
    formData.append("username", user)
   
    formData.append("password", pass)
    
    const resp = await pages.postAPI(url,formData)
    const message = document.getElementById('title')
    if (resp){
      window.localStorage.setItem('id', resp.data.user.id)
      window.location.href = "index.html";
    }
    else{
      message.innerHTML = "<i><h6 style = \"color: red;\"> Incorrect Username or Password</h6></i>"
    }

  
  
}  )
sbtn.addEventListener("click",  function(){
 form.addEventListener("submit",async function(event){
   event.preventDefault()
const username = document.getElementById('new_username')

  const password = document.getElementById('new_password')
  const email = document.getElementById('email')
  const formData = new FormData();
  const user=username.value
  const pass=password.value
  const e=email.value

  const url = base_url + "/api/auth/register"
  
  formData.append("username", user)
  formData.append("email", e)
  formData.append("password", pass)
  
  const resp = await pages.postAPI(url, formData)
  if(resp){
  window.localStorage.setItem('id', resp.data.user.id)
  location.assign('./index.html')
  }
 

} )
} )
}
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
    
  }



  
