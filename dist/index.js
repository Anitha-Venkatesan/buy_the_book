$(document).ready(function(){$(".modal").modal(),$(".cart-button").on("click",function(a){a.preventDefault();var b={bookId:+$(this).attr("value")};$.post("/api/cart",b).then(function(a){console.log(a),location.reload()})}),$(".checkout-button").on("click",()=>{$.ajax({url:"/api/cart/delete",type:"DELETE"})})});