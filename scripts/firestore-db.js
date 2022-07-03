const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')


function createUserCollection(user){
   firebase.firestore().collection('Admins')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       phone:"",
       whatsapp:"",
       regno:"",
     

   })
}


async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
    .collection('Admins')
    .doc(userID)
    .get()

   const userInfo = userInfoSnap.data()
   if(userInfo){
       userDetails.innerHTML = `
       <h3>${userInfo.name}</h3>
       <h3>${userInfo.email}</h3>
       <h3>${userInfo.phone}</h3>
       `
   }    
    }else{
      userDetails.innerHTML = ` <div class="container" style=" width: 47vh;
      height: 43vh;margin-top:180px">
      
      <div id="form_container" style="width: 100%;height: 100%;border: 1px solid grey;border-radius: 2%;overflow: hidden;">
      <div id="form_header_container" style="width: 100%;
      height: 5%;display: flex; justify-content: center;align-items: center;float: left;margin-top:25px">
         
         <h2 id="form_header" style="display: inline-block; font-size: 18px;font-weight: 900;">ADMIN PORTAL </h2>
      </div>


      <div id="form_content_container" style="width: 100%; height: 90%; display: flex;justify-content: center;align-items: center;padding-top: 30px;">
          
        <div id="form_content_inner_container" style="width: 86%;height: 100%">
           
          <form autocomplete="off" onsubmit="login(event)" >
              
            <input type="email" id="loginEmail" placeholder="Email" style="border: 1px solid #000;width: 100%;
            height: 40px;padding-left: 10px;margin-bottom: 20px;font-family: Montserrat;font-weight: 500;
            font-size: 12px; border-color: green;">
             
              <input type="password" id="loginPassword" placeholder="Password" style="border: 1px solid #000;width: 100%;
              height: 40px;padding-left: 10px;margin-bottom: 20px;font-family: Montserrat;font-weight: 500;
              font-size: 12px; border-color: green;">
             
             
             <a href="#" onclick="forgotPass()">Forgot Password</a><br>
             
             
             <div id="button_container" style="width: 100%;height: 45px;color: #fff;margin-top: 15px;" >
                  
                  <button class="btn btn-success" type="submit" style="width: 100%;height: 100%;font-family: Montserrat;letter-spacing: 1px;
                  font-weight: 900;font-size: 12px;cursor: pointer;align-items: center;">Login</button>
                  
              </div>

           </form>

          </div>
      </div></div>
  </div>
      `
    
       
    }


}



async function getuserInfoRealtime(userID){
    if(userID){
      const userdocRef = await  firebase.firestore()
        .collection('Admins')
        .doc(userID)
        userdocRef.onSnapshot((doc)=>{
            if(doc.exists){
                 const userInfo = doc.data()
                    if(userInfo){
                        userDetails.innerHTML = `
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">

    <style>
    .profile-img .pic {
        height: 90%;
        width: 90%;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: center;
        object-position: center;
      }
    </style>
    
    
                        <div class="sidebar" id="sidebar" style="background-color: #fff">
            <div class="sidebar-inner slimscroll">
                <div id="sidebar-menu" class="sidebar-menu">
                    <ul>
                        <li class="menu-title">Admin Panel</li>
                       
                        <li>
                            <a href="main.html"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a>
                        </li>
                        <li >
							<a href="Attendance/Attendance.html"><i class="fa fa-users"></i> <span>Attendance</span></a>
						</li>
				
						         
                       
                        <li>
                        <a href="Marks/marks.html"><i class="fa fa-book"></i> <span>Marks</span></a>
                       </li>

                    </ul>
                </div>
            </div>
        </div>
        
        
        <div class="page-wrapper">
        <div class="content" style="margin-top: -4vh">
        
            <div class="card-box profile-header" style="background-color: #fff";box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.336);">
                <div class="row" style="background-color: #fff">
                    <div class="col-md-12">
                        <div class="profile-view" style="background-color: #fff">
                          
                            
                            <div class="profile-basic">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="profile-info-left" style="text-align:justify">
                                            <h3 class="user-name m-t-0 mb-0" style="color: #2e6da4"><span style="color:grey;font-size: 15px">Name:</span> ${userInfo.name}</h3>

                                            <h4 class="text-muted" style="margin-top:5px"><span style="color:grey;font-size: 15px">ID:</span> ${userInfo.regno}</h4>
                                          
                                            
                                    
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <ul class="personal-info" style="text-align:left">
                                            <li>
                                                <span class="title">Phone:</span>
                                                <span class="text"><a>${userInfo.phone}</a></span>
                                            </li>
                                            <li>
                                                <span class="title">Whatsapp:</span>
                                                <span class="text"><a>${userInfo.whatsapp}</a></span>
                                            </li>
                                            <li>
                                                <span class="title">Email:</span>
                                                <span class="text"><a><span class="__cf_email__">${userInfo.email}</span></a></span>
                                            </li>
                                            
                                        
                                        </ul>
                                        
                                       
                                    </div>
                                    
                                    <button style="background-color: #fff;border-radius: 5px;height:35px;width:90px;border: 1px solid #df0f00;cursor: pointer;color: black;margin-left:22px" class="modal-trigger" href="#modal3">Edit details</button> 
                                    
                                    <button type="button" style="background-color: #df0f00;border-radius: 5px;height:35px;width:90px;border: none;cursor: pointer;color: white;margin-left:22px"  data-toggle="modal" data-target="#exampleModal">
                                    SignOut <i class="fa fa-sign-out" style="color:#fff"></i>
                                  </button>
                               
                               
                                    </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
            

        </div>


        <div class="container-fluid">

                 

                 <div class="row">

                 <div class="col">

                 <div class="card">
                 <div class="card-body">
                 <h5 class="card-title">Attendance</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="Attendance/Attendance.html" style="cursor:pointer;width:90px" class="btn btn-primary">View</a>
                 </div>
                 </div>

                 </div>

                 <div class="col">

                 <div class="card">
                 <div class="card-body">
                 <h5 class="card-title">Marks</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="./Marks/marks.html" style="cursor:pointer;width:90px" class="btn btn-primary">View</a>
                 </div>
                 </div>

                 </div>


                 <div class="col">

                 <div class="card">
                 <div class="card-body">
                 <h5 class="card-title">Complaints</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <a href="./Complaints.html" style="cursor:pointer;width:90px" class="btn btn-warning">View</a>
                 </div>
                 </div>

                 </div>




                 </div>
        
        </div>







                       
                        `
                        editProfile["name"].value = userInfo.name
                        editProfile["profileEmail"].value = userInfo.email
                        editProfile["phoneno"].value = userInfo.phone
                        editProfile["whatsapp"].value = userInfo.whatsapp
                       
                     


                    
                      

                }    
             }
        })


    }else{
        userDetails.innerHTML = ` <div class="container" style=" width: 47vh;
        height: 43vh;margin-top:180px">
        
        <div id="form_container" style="width: 100%;height: 100%;border: 1px solid grey;border-radius: 2%;overflow: hidden;">
        <div id="form_header_container" style="width: 100%;
        height: 5%;display: flex; justify-content: center;align-items: center;float: left;margin-top:25px">
           
           <h2 id="form_header" style="display: inline-block; font-size: 18px;font-weight: 900;">ADMIN PORTAL </h2>
        </div>


        <div id="form_content_container" style="width: 100%; height: 90%; display: flex;justify-content: center;align-items: center;padding-top: 30px;">
            
          <div id="form_content_inner_container" style="width: 86%;height: 100%">
             
            <form autocomplete="off" onsubmit="login(event)" >
                
              <input type="email" id="loginEmail" placeholder="Email" style="border: 1px solid #000;width: 100%;
              height: 40px;padding-left: 10px;margin-bottom: 20px;font-family: Montserrat;font-weight: 500;
              font-size: 12px; border-color: green;">
               
                <input type="password" id="loginPassword" placeholder="Password" style="border: 1px solid #000;width: 100%;
                height: 40px;padding-left: 10px;margin-bottom: 20px;font-family: Montserrat;font-weight: 500;
                font-size: 12px; border-color: green;">
               
               
               <a href="#" onclick="forgotPass()">Forgot Password</a><br>
               
               
               <div id="button_container" style="width: 100%;height: 45px;color: #fff;margin-top: 15px;" >
                    
                    <button class="btn btn-success" type="submit" style="width: 100%;height: 100%;font-family: Montserrat;letter-spacing: 1px;
                    font-weight: 900;font-size: 12px;cursor: pointer;align-items: center;">Login</button>
                    
                </div>

             </form>

            </div>
        </div></div>
    </div>
    </div></div>
    <div class="sidebar-overlay" data-reff=""></div>
    <script src="assets/js/jquery-3.2.1.min.js"></script>
	<script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.slimscroll.js"></script>
    <script src="assets/js/Chart.bundle.js"></script>
    <script src="assets/js/chart.js"></script>
    <script src="assets/js/app.js"></script>
        `
    }
}


function updateUserProfile(e){
    e.preventDefault()
    const userDocRef =  firebase.firestore()
    .collection('Admins')
    .doc(firebase.auth().currentUser.uid)


    userDocRef.update({
        name:editProfile["name"].value,
        email:editProfile["profileEmail"].value,
        phone:editProfile["phoneno"].value,
        whatsapp:editProfile["whatsapp"].value,
      
    

    })
    document.querySelector('.alert').style.display = 'block';

    // Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);
  
}




