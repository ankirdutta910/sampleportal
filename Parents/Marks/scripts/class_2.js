const userDetails  = document.querySelector('.userDetails')
const editProfile  = document.querySelector('#editProfile')


function createUserCollection(user){
   firebase.firestore().collection('Marks').doc('Classes').collection('class_II')
   .doc(user.uid)
   .set({
       uid:user.uid,
       name:user.displayName,
       email:user.email,
       regno:"",
       subA:"",
       subB:"",
       subC:"",
       subD:"",
       subE:"",
       t1A:"",
       t1B:"",
       t1C:"",
       t1D:"",
       t1E:"",
       hA:"",
       hB:"",
       hC:"",
       hD:"",
       hE:"",
       t2A:"",
       t2B:"",
       t2C:"",
       t2D:"",
       t2E:"",
      

       

   })
}


async function getuserInfo(userID){
    if(userID){
      const userInfoSnap = await  firebase.firestore()
      .collection('Marks').doc('Classes').collection('class_II')
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
         
         <h2 id="form_header" style="display: inline-block; font-size: 18px;font-weight: 900;">PARENT PORTAL </h2>
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
      .collection('Marks').doc('Classes').collection('class_II')
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
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    
    td, th {
      border: 1px solid #d4d4d4;
      text-align: left;
      padding: 8px;
      font-size: 12px;
    
    }
   
    
    tr:nth-child(even) {
      background-color: #e4e4e4;
   
    }
    </style>

 
         
           
                <div class="row" style="text-align:left">
                <div class="col"><h4><span style="color:grey; font-weight: 200">Name:</span> ${userInfo.name}</h4></div> 
                <div class="col"> <h4><span style="color:grey; font-weight: 200">Registration no.:</span> ${userInfo.regno}</h4></div>
                   
                <div class="col"> <h4><span style="color:grey; font-weight: 200">Class:</span> ${userInfo.class}</h4></div>
                </div>
                <hr>
                <h4 style="text-align: left; color: red;">Marks View</h4>
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-striped custom-table datatable mb-0">
                                <thead>
                               
                                    <tr>
                                        <th style="width:35vh">Subjects</th>
                                        <th style="width:20vh;text-align: center">Test 1</th>
                                    
                                        <th style="width:20vh;text-align: center">Half yearly</th>
                                        <th style="width:20vh;text-align: center">Test 2</th>
                                        <th style="width:20vh;text-align: center">Final</th>
                                  
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><h5>${userInfo.subA}</h5></td>
                                        <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.t1A}</span> / 50</h5></td>
                                        <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.hA}</span> / 100</h5></td>
                                        <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.t2A}</span> / 50</h5></td>
                                        <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.fA}</span> / 100</h5></td>
                                    </tr>
                                   
                                   
                                    
                                    <tr>
                                    <td><h5>${userInfo.subB}</h5></td>
                                    <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.t1B}</span> / 50</h5></td>
                                    <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.hB}</span> / 100</h5></td> 
                                    <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.t2B}</span> / 50</h5></td> 
                                    <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.fB}</span> / 100</h5></td>
                                    </tr>
                                   
                                   
                                   
                                    <tr>
                                    <td><h5>${userInfo.subC}</h5></td>
                                    <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.t1C}</span> / 50</h5></td>
                                    <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.hC}</span> / 100</h5></td>
                                    <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.t2C}</span> / 50</h5></td>
                                    <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.fC}</span> / 100</h5></td>
                                       
                                    </tr>


                                    <tr>
                                    <td><h5>${userInfo.subD}</h5></td>
                                    <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.t1D}</span> / 50</h5></td>
                                    <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.hD}</span> / 100</h5></td>
                                    <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.t2D}</span> / 50</h5></td>
                                    <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.fD}</span> / 100</h5></td>
                                </tr>


                                <tr>
                                <td><h5>${userInfo.subE}</h5></td>
                                <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.t1E}</span> / 50</h5></td>
                                <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.hE}</span> / 100</h5></td>
                                <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.t2E}</span> / 50</h5></td>
                                <td style="text-align:center"><h5><span style="font-weight: 700">${userInfo.fE}</span> / 100</h5></td>
                                   
                                </tr>

                               
                                </tbody>
                            </table>

                            <h3 style="margin-right:20px;text-align:right;color: grey; font-weight: 200; margin-top: 5px">CGPA : <span style="color: orange; font-weight: 700">${userInfo.cgpa}</span></h3>
                        </div>
                    </div>
                </div>
     
                       
                        `
                     

                }    
             }
        })


    }else{
        userDetails.innerHTML = ` <div class="container" style=" width: 47vh;
        height: 43vh;margin-top:180px">
        
        <div id="form_container" style="width: 100%;height: 100%;border: 1px solid grey;border-radius: 2%;overflow: hidden;">
        <div id="form_header_container" style="width: 100%;
        height: 5%;display: flex; justify-content: center;align-items: center;float: left;margin-top:25px">
           
           <h2 id="form_header" style="display: inline-block; font-size: 18px;font-weight: 900;">PARENT PORTAL </h2>
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
    <script src="../assets/js/jquery-3.2.1.min.js"></script>
	<script src="../assets/js/popper.min.js"></script>
    <script src="../assets/js/bootstrap.min.js"></script>
    <script src="../assets/js/jquery.slimscroll.js"></script>
    <script src="../assets/js/Chart.bundle.js"></script>
    <script src="../assets/js/chart.js"></script>
    <script src="../assets/js/app.js"></script>
        `
    }
}





