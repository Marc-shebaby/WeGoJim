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
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();

// login sign in
const pages = {}

const base_url = "http://127.0.0.1:8000"
pages.loaderFunction = () => {
  


    const btn = document.getElementById('btn')
    const lbtn = document.getElementById('lbtn')
    btn.addEventListener('click', async function() {
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    
    const name = username.value //getting the value from the input
    const pass = password.value
    const url = base_url + "get_login_info.php?username=" + name + "&password=" + pass
    const resp = await pages.getAPI(url)
    const message = document.getElementById('title')
    if(resp.data[0] == null) {
      message.innerHTML = "<i><h6 style = \"color: red;\"> Incorrect Username or Password</h6></i>"
    } else {
      location.assign('./index.html')
    }
  })

}


  
  