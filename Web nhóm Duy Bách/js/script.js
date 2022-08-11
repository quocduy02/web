
//Code phần giỏ hàng

var listClass = document.getElementsByClassName("add-circle-outline");
var listbutton = document.getElementsByClassName("addproduct");
var listRemove;
var title = "Sản phẩm của bạn đã có trong giỏ hàng";
var cardTable = document.getElementById("product")
var t = 0;
const pricePr = 299000;

for(var i = 0; i < listbutton.length; i++)
{
        listbutton[i].addEventListener("click", function(event){{
            var item = event.target;
            var indexI = listClass[item.value];
            var product1 = indexI.parentElement;
            var getproduct = product1.parentElement;
            //console.log(getproduct);
            var prImg = getproduct.querySelector("img");
            var prContent = getproduct.querySelector("h3").innerHTML;
            //pricePr =  pricePr.toLocaleString('vi', {style : 'currency', currency : 'VND'});//đinhang
            //console.log(prImg, prContent, pricePr)
            addCard(prImg, prContent, pricePr);
        }})
}
function removeElement(){ 
        listRemove = document.querySelectorAll("tbody tr");
        for(var i = 0; i < listRemove.length; i++){ 
            listRemove[i].addEventListener("click", function(event){
                var item = event.target
                if(item == event.target){
                var $product = item.parentElement;
                var del_element = $product.parentElement
                del_element.remove();
                updatePrice();
                }    
            });
        }    
}

function addCard(prImg, prContent, pricePr)
{
    var linkImage = prImg.getAttribute("src")
    var addTr = document.createElement("tr");
    var listLinkImg = document.getElementsByClassName("linkimg");
    for(var i = 0; i < listLinkImg.length; i++){
        if(listLinkImg[i].getAttribute("src") == linkImage){
            alert(title);
            return;
        }
    }
    var trcontent = '<tr class = "$tr" style="margin-left: 30%";><td><img class="linkimg" style="margin-top= 10px; margin-left= 10px; width: 120px; height: 70px; object-fit: cover;" src="'+linkImage+'" alt=""></td><td><i class ="price" style="margin-right: 15%;margin-left: 15px">'+pricePr+'</i></td><td style="cursor: pointer;"><span class="removeelement">Xóa</span></i></td></tr> <br>';
    addTr.innerHTML = trcontent;
    cardTable.append(addTr);
    updatePrice();
    removeElement();
}
function updatePrice()
{
    var sumprice = 0;
    var listtr = document.querySelectorAll("tbody tr");
    for(var i = 0; i < listtr.length; i++){
        var getPrice = listtr[i].querySelector(".price")
        var $price = getPrice.innerHTML;
        var fnumber = parseInt($price);
        sumprice = sumprice + fnumber;
    }
    document.getElementById("displaysumprice").innerHTML = sumprice.toLocaleString('vi', {style : 'currency', currency : 'VND'});
}


function displayOn(){
    var isCheck = document.getElementById("shopping").style.transform = "translateX(0%)";
}
function displayOff(){
    var isCheck = document.getElementById("shopping").style.transform = "translateX(100%)";
}
