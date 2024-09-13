let items = [
    { name : "Rishikesh" ,
        orgprice : 15400,
        id : 1,
        disprice : 6000,
        image2 : "https://media.gettyimages.com/id/499564333/photo/bridge-over-the-ganges.jpg?s=612x612&w=0&k=20&c=GN8ERpFOZNVqpmNvrUW9AysFu5GMIO47X2OGlhIRNe4= " ,
        image : "https://images.pexels.com/photos/13918457/pexels-photo-13918457.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    { name : "Kedarnath" ,
        orgprice : 18400,
        disprice : 8000,
        id : 2 ,
        image2 : "https://i.pinimg.com/236x/a8/15/52/a8155262ed3be0547451ae6d739b2d05.jpg " ,
        image : "https://images.pexels.com/photos/12151764/pexels-photo-12151764.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    { name : "Kanyakumari" ,
        orgprice : 20000,
        disprice : 11000,
        id : 3 ,
        image2 : "https://plus.unsplash.com/premium_photo-1697730420879-dc2a8dbaa31f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FueWFrdW1hcml8ZW58MHx8MHx8fDA%3D " ,
        image : "https://images.pexels.com/photos/19691929/pexels-photo-19691929/free-photo-of-statue-of-the-thiruvalluvar-on-an-island-in-kanyakumari-india.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    { name : "Goa" ,
        orgprice : 21000,
        disprice : 7000,
        id : 4 ,
        image2 : "https://media.istockphoto.com/id/186851891/photo/travel.jpg?s=612x612&w=0&k=20&c=UBCwLOdxU-PEcxZ4azqNnRwiEUClSClI1eCqdP7aRxQ= " ,
        image : "https://images.pexels.com/photos/15610234/pexels-photo-15610234/free-photo-of-boat-in-bay-in-goa-india.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    { name : "Puri" ,
        orgprice : 11000,
        disprice : 6000,
        id :  5,
        image2 : " https://media.istockphoto.com/id/458124357/photo/famous-hindu-temple.jpg?s=612x612&w=0&k=20&c=YnO-CSbU-JAQsaef6_KWeX2kShbQIwHGKjpWswWBhus=" ,
        image : "https://images.pexels.com/photos/20717204/pexels-photo-20717204/free-photo-of-stairs-to-temple-building.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    { name : "Rameshwaram" ,
        orgprice : 12000,
        disprice : 9000,
        id :  6,
        image2 : "https://thumbs.dreamstime.com/b/view-pamban-bridge-rameshwaram-first-indian-bridge-which-connects-pamban-island-india-view-pamban-bridge-181079546.jpg?w=768 " ,
        image : "https://i.pinimg.com/474x/21/87/61/2187612930d5d9c7ab072381b77ad4b6.jpg",
    },
    { name : "Kullu" ,
        orgprice : 11000,
        disprice : 5000,
        id :  7,
        image2 : " https://t4.ftcdn.net/jpg/07/74/94/05/240_F_774940573_cp0N5NiLcpdnyDXiZR1uiWORdi3NoUIw.jpg" ,
        image : "https://i.pinimg.com/236x/a2/c3/22/a2c322eb8c874c1bbd11df816f5c27be.jpg",
    },
    { name : "Mussoorie" ,
        orgprice : 14000,
        disprice : 8000,
        id : 8 ,
        image2 : "https://media.istockphoto.com/id/1403781341/photo/kempty-waterfall-in-mussoorie-india.jpg?s=612x612&w=0&k=20&c=5rp9YlU4zY4p02tR9skZXy2LGqe4WWT1cZeh4YXMG7Y= " ,
        image : "https://i.pinimg.com/236x/80/14/43/801443bf4cc857ce75c83e0fb027b6aa.jpg",
    },
    { name : "Manali" ,
        orgprice : 18000,
        disprice : 10000,
        id :  9,
        image2 : "https://i.pinimg.com/236x/96/b8/fd/96b8fd0b0170dbf2f9bcf082d93b5ca3.jpg",
        image : "https://images.pexels.com/photos/17118365/pexels-photo-17118365/free-photo-of-hidimba-devi-temple-in-snow.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    { name : "Darjelling" ,
        orgprice : 15000,
        disprice : 7000,
        id :  10,
        image2 : "https://media.istockphoto.com/id/1153991309/photo/darjeeling-city-with-mountain-range-at-background.jpg?s=612x612&w=0&k=20&c=760IHjNOr3TCF3bO74i54zFjvDyIPSchvOuJoDlSrrA= " ,
        image : "https://i.pinimg.com/236x/84/ff/b3/84ffb3a4145eb2979ec2df219379f573.jpg",
    },
    { name : "Kashmir" ,
        orgprice : 20000,
        disprice : 11000,
        id :  11,
        image2 : "https://images.pexels.com/photos/6487375/pexels-photo-6487375.jpeg?auto=compress&cs=tinysrgb&w=600 " ,
        image : "https://images.pexels.com/photos/6262924/pexels-photo-6262924.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    { name : "Somnath" ,
        orgprice : 14000,
        disprice : 8000,
        id : 12 ,
        image2 : "https://media.istockphoto.com/id/1385693804/photo/somnath-jyotirlinga-a-temple-of-lord-shiva-in-somnath-gujarat.jpg?s=612x612&w=0&k=20&c=jxofhcSw27SXXmAKm15tdDyIqUTYAnpij1Xxplx1RoU= " ,
        image : "https://i.pinimg.com/236x/77/74/f9/7774f9646e1b520a68de2dcd8f83bde2.jpg",
    },
    { name : "Mumbai" ,
        orgprice : 16000,
        disprice : 9000,
        id :  13,
        image2 : "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVtYmFpfGVufDB8fDB8fHww " ,
        image : "https://images.pexels.com/photos/17343501/pexels-photo-17343501/free-photo-of-skyscrapers-and-buildings-in-mumbai.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    { name : "Udaipur" ,
        orgprice : 12000,
        disprice : 11000,
        id :  14,
        image2 : " https://images.unsplash.com/photo-1630712224754-6d3eea30494f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVkYWlwdXJ8ZW58MHx8MHx8fDA%3D" ,
        image : "https://images.pexels.com/photos/17397822/pexels-photo-17397822/free-photo-of-towers-of-the-city-palace-udaipur-india.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    { name : "Kerala" ,
        orgprice : 22000,
        disprice : 12000,
        id :  15,
        image2 : "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2VyYWxhfGVufDB8fDB8fHww " ,
        image : "https://images.pexels.com/photos/9460418/pexels-photo-9460418.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
];

window.onload = function(){
    displayTour();
}



displayTour();

function openDetail(itemId){
    let packDet = document.querySelector('.alldetails');
    packDet.style.display = "block";
    let inht = '';

    
    items.forEach(item =>{
        if(itemId == item.id){
            
        inht += `   
                    <div class="part"> 
                    <div  class="pack-image">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="pack-det">
                        <h2>16.  The Best Selling ${item.name} Tour Packages For A Lavish Excursion</h2>
                        <h5 class="day">4 Days & 3 Nights</h5>
                        <h6>Starting from</h6>
                        <h3 class="disp">Rs ${item.disprice} </h3>
                        <h5 class="orgp"><del>Rs ${item.orgprice}</del></h5>
                        <h6 class="city">City : ${item.name}</h6>
                        <span class="mbtn" >
                            <button>View Details</button>
                            <button>Check Avilablity</button>
                        </span>
                        <span><ul class="ullist">
                            <li>Meals</li>
                            <li>Guide</li>
                            <li>Hotels (4 star) </li>
                            <li>Camping</li>
                            <li>traking</li>
                        </ul></span>
                    </div>
                    <div  class="pack2-image">
                        <img src="https://img.freepik.com/free-psd/travel-tourism-instagram-post-social-media-post-template_120329-2395.jpg?size=626&ext=jpg&ga=GA1.1.753517774.1718389033&semt=ais_user" alt="">
                    </div>
                    </div>
                    <div class="part"> 
                    <div  class="pack-image">
                        <img src="${item.image2}" alt="">
                    </div>

                    <div class="pack-det">
                        <h2> 23 Most Reasonable ${item.name} Packages For A Cherishable Vacation</h2>
                        <h5 class="day" >3 Days & 2 Nights  </h5>
                        <h6><br> Starting from</h6>
                        <h3 class="disp">Rs ${item.disprice-1500} </h3>
                        <h5 class="orgp"><del>Rs ${item.orgprice-3001}</del></h5>
                        <h6 class="city" >City : ${item.name}</h6>
                        <span class="mbtn" >
                            <button>View Details</button>
                            <button>Check Avilablity</button>
                        </span>
                        <span><ul class="ullist">
                            <li>Meals</li>
                            <li>Sightseeing</li>
                            <li>Hotels (3 star) </li>
                            <li>Camping</li>
                            <li>BornFire</li>
                        </ul></span>
                        </div>
                        <div  class="pack2-image">
                        <img src="https://img.freepik.com/premium-psd/travel-social-media-design_648505-539.jpg?size=626&ext=jpg&ga=GA1.1.753517774.1718389033&semt=ais_user" alt="">
                    </div>
                    </div>
                    
                
        `
        }
    });
    packDet.innerHTML = inht;
}



function displayTour(itemid){

    let tourContainer = document.querySelector('.packages-container');
    
    
    let innerHtml = '';

    items.forEach( item => {
        innerHtml += `
        
    <div class="package-container" onclick="openDetail(${item.id})">
                <div class="tour-image">
                    <a id ="hideme" href="#pack-details" >||||</a>
                    <img id="showit" src="${item.image}" alt="">
                </div>
                <div class="tour-details">
                    <h2>${item.name}</h2>
                    <div class="price">
                        <h3>₹ ${item.disprice}<br></h3>
                    <h4><del>₹ ${item.orgprice}</del></h4>
                    </div>
                </div>
            </div>
`
    });
    tourContainer.innerHTML = innerHtml;
}