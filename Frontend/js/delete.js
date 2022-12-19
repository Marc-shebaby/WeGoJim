const base_url="http://localhost:8000/api"
const id = window.localStorage.getItem('id')
const del= document.getElementById("del")
const obj={}
del.addEventListener("click",async function(e){
    e.preventDefault()
    const name=document.getElementById("name")
    if(name.value){
       
        const find_name=name.value
        console.log(find_name)
        const url=base_url+"/rem/"+id+"/"+find_name
        const response = await obj.getAPI(url)
        const message=document.getElementById('title')
        if(response){
            message.innerHTML = "<i><h2 style = \"color: green;\"> Success! you have Deleted the post and lost one point</h2></i>"
        }
            
            else{
                message.innerHTML = "<i><h2 style = \"color: red;\"> Image not found</h2></i>"
            }
        
          }}  ); 


obj.getAPI=async(api_url,api_token=null)=>{
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