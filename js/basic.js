function loginstatus(){
    let getLink = window.location.search;
    let getUserName = getLink.split('=');
    let getOnlyName = getUserName[2];
    if (getOnlyName != undefined){
        getHtml(getOnlyName);
    }
}

function getHtml(userName) {
    let getHtml = "LogOut"
    $('#loginStatus').text(getHtml)
}

function check_info() {
    let getLink = window.location.search;
    let getUserName = getLink.split('=');
    let getOnlyNo = getUserName[2];
    $.ajax({
        type : "GET",
        url : "https://vrc-api-demo.herokuapp.com/auth/accounts/" + getOnlyNo +"/",
        dataType : "json",
        error : function() {
            alert("fail!");
        },
        success : function(data) {
            let userID = data['account']['user_id']
            $('#hello').text(userID + " 님 안녕하세요!")
            console.log(data['account']['user_id'])
        }
    })
    var requestData = fetch("https://vrc-api-demo.herokuapp.com/auth/check/" + getOnlyNo +"/",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        })
        .then((response) => response.text())
        .then((data) => {if (data==0){
            var category = "AI";
            $.ajax({
                type : "GET",
                url : "https://vrc-api-demo.herokuapp.com/auth/find/?content_tag=AI",
                dataType : "json",
                error : function() {
                    alert("fail!");
                  },
                  success : function(result) {
                    $('#first_title').text(result[0].title)
                    $('#first_exp').text(result[0].explanation)
                    $('#first_click').text("조회수" + result[0].click_count)
                    $('#first_url').attr("href",result[0].url_path)
                    $('#first_thumb').attr("src",result[0].thumbnail_image)
                    $('#second_title').text(result[1].title)
                    $('#second_exp').text(result[1].explanation)
                    $('#second_click').text("조회수" + result[1].click_count)
                    $('#second_url').attr("href",result[1].url_path)
                    $('#second_thumb').attr("src",result[1].thumbnail_image)
                    $('#third_title').text(result[2].title)
                    $('#third_exp').text(result[2].explanation)
                    $('#third_click').text("조회수" + result[2].click_count)
                    $('#third_url').attr("href",result[2].url_path)
                    $('#third_thumb').attr("src",result[2].thumbnail_image)
                    console.log(result[0])
                  }})
        } else if (data==1){
            var category = "B2B"
            $.ajax({
                type : "GET",
                url : "https://vrc-api-demo.herokuapp.com/auth/find/?content_tag=B2B",
                dataType : "json",
                error : function() {
                    alert("fail!");
                  },
                  success : function(result) {
                    $('#first_title').text(result[0].title)
                    $('#first_exp').text(result[0].explanation)
                    $('#first_click').text("조회수" + result[0].click_count)
                    $('#first_url').attr("href",result[0].url_path)
                    $('#first_thumb').attr("src",result[0].thumbnail_image)
                    $('#second_title').text(result[1].title)
                    $('#second_exp').text(result[1].explanation)
                    $('#second_click').text("조회수" + result[1].click_count)
                    $('#second_url').attr("href",result[1].url_path)
                    $('#second_thumb').attr("src",result[1].thumbnail_image)
                    $('#third_title').text(result[2].title)
                    $('#third_exp').text(result[2].explanation)
                    $('#third_click').text("조회수" + result[2].click_count)
                    $('#third_url').attr("href",result[2].url_path)
                    $('#third_thumb').attr("src",result[2].thumbnail_image)
                    console.log(result[0])
                  }})
        } else if (data==2){
            var category = "부동산"
            $.ajax({
                type : "GET",
                url : "https://vrc-api-demo.herokuapp.com/find/?content_tag=ESTATE",
                dataType : "json",
                error : function() {
                    alert("fail!");
                  },
                  success : function(result) {
                    $('#first_title').text(result[0].title)
                    $('#first_exp').text(result[0].explanation)
                    $('#first_click').text("조회수" + result[0].click_count)
                    $('#first_url').attr("href",result[0].url_path)
                    $('#first_thumb').attr("src",result[0].thumbnail_image)
                    $('#second_title').text(result[1].title)
                    $('#second_exp').text(result[1].explanation)
                    $('#second_click').text("조회수" + result[1].click_count)
                    $('#second_url').attr("href",result[1].url_path)
                    $('#second_thumb').attr("src",result[1].thumbnail_image)
                    $('#third_title').text(result[2].title)
                    $('#third_exp').text(result[2].explanation)
                    $('#third_click').text("조회수" + result[2].click_count)
                    $('#third_url').attr("href",result[2].url_path)
                    $('#third_thumb').attr("src",result[2].thumbnail_image)
                    console.log(result[0])
                  }})
        } else if (data==3){
            var category = "자녀교육"
            $.ajax({
                type : "GET",
                url : "https://vrc-api-demo.herokuapp.com/auth/find/?content_tag=EDU",
                dataType : "json",
                error : function() {
                    alert("fail!");
                  },
                  success : function(result) {
                    $('#first_title').text(result[0].title)
                    $('#first_exp').text(result[0].explanation)
                    $('#first_click').text("조회수" + result[0].click_count)
                    $('#first_url').attr("href",result[0].url_path)
                    $('#first_thumb').attr("src",result[0].thumbnail_image)
                    $('#second_title').text(result[1].title)
                    $('#second_exp').text(result[1].explanation)
                    $('#second_click').text("조회수" + result[1].click_count)
                    $('#second_url').attr("href",result[1].url_path)
                    $('#second_thumb').attr("src",result[1].thumbnail_image)
                    $('#third_title').text(result[2].title)
                    $('#third_exp').text(result[2].explanation)
                    $('#third_click').text("조회수" + result[2].click_count)
                    $('#third_url').attr("href",result[2].url_path)
                    $('#third_thumb').attr("src",result[2].thumbnail_image)
                    console.log(result[0])
                  }})
        }
        $('#recommend').text(category + " 콘텐츠를 추천해드립니다!")})
    console.log(requestData)
    }
