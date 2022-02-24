/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/

function cambiar_login() {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
  document.querySelector('.cont_form_login').style.display = "block";
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  
  setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
    
  setTimeout(function(){    
  document.querySelector('.cont_form_sign_up').style.display = "none";
  },200);  
}
  
function cambiar_sign_up(at) {
  document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
  document.querySelector('.cont_form_sign_up').style.display = "block";
  document.querySelector('.cont_form_login').style.opacity = "0";
    
  setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
  },100);  
  
  setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
  },400);  
  
}    
  
function ocultar_login_sign_up() {
  
  document.querySelector('.cont_forms').className = "cont_forms";  
  document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  document.querySelector('.cont_form_login').style.opacity = "0"; 
  
  setTimeout(function(){
  document.querySelector('.cont_form_sign_up').style.display = "none";
  document.querySelector('.cont_form_login').style.display = "none";
  },500);     
}

function active_login() {
  var accountId = document.getElementById('loginId').value;
  var accountPassword = document.getElementById('loginPassword').value;
  $.ajax({
   type : "GET",
   url : "https://vrc-api-demo.herokuapp.com/auth/check?user_id="+accountId+"&password="+accountPassword,
   dataType : "json",
   error : function() {
     alert("fail!");
   },
   success : function(data) {
     if (data.response.response_message === "OK") {
      // location.href = "./main.html"; 
      // console.log(data.check.account_no)

      function setCookie(NameKey, NameValue, ExpDate){
        let strCookie = "";
          strCookie = NameKey + '=' + encodeURIComponent(NameValue) + "; expires=" + ExpDate;
          document.cookie = strCookie;
      }
      
      function AddCookie() {
        let accountNo = data.check.account_no
        window.location.href = "./main.html?user=" + accountId + "&no=" + accountNo;	//그리고 다음 페이지로 간다
        let nameKey = "UserName";	//key값은 UserName으로 한다. 이건 변동 없음.
        let nameValue = accountId;	//입력한 값 가져옴
        let date = new Date();	//쿠키를 생성한 그 날의 날짜, 시간 생성
        date.setDate(date.getDate() + 30);	//getDate()로 일 만 가져오고 거기서 30일을 더한 값을 date로 정함
        let expDate = date.toUTCString();	//시간을 문자열로
        setCookie(nameKey, nameValue, expDate);	//아까 만들었던 쿠키 틀에 넣는다
      }
      AddCookie()
      // alert(document.cookie);

    } else {
      alert("fail!");
    }
   }
  });
}

function active_sign_up() {
  var accountId = document.getElementById('signUpID').value;
  var accountPassword = document.getElementById('signUpPassword').value;
  var confirmAccountPassword = document.getElementById('Confirm signUpPassword').value;
  var accountage = document.getElementById('signUpAge').value;
  var accountsex = document.getElementById('signUpGender').value;
  var accountjob = document.getElementById('signUpJob').value;
  if (accountId != "" && accountPassword != "" && confirmAccountPassword != "" && typeof(accountId) === "string" && typeof(accountPassword) === "string" && accountPassword === confirmAccountPassword){
    try{
      var requestData = fetch("https://vrc-api-demo.herokuapp.com/auth/accounts/",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: accountId,
          password: accountPassword,
          account_age: accountage,
          account_sex: accountsex,
          account_job: accountjob
        }),
      })
      .then((response) => response.text())
      .then((data) => console.log(data));
    } catch(error){

      }
      ocultar_login_sign_up()
      alert("회원가입이 완료되었습니다.")
  };
}

