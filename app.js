$('.navbar .dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
  });
  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.navbar .dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(100);
  });
$('.rating').starRating({ initialRating: 3.5})
  let item1 = [
                 {
                    'name':"Maa santosh family dhabha", 
                    'category':"Chineese",
                    'rating': 3.9,
                    'price': 150,
                    'deliveryTime':33, 
                    'reviews': 23402, 
                    'offer':40,
                    'imgURL':'https://b.zmtcdn.com/data/pictures/5/18687555/67659e916abcbe6cf46b1591b38c56db_o2_featured_v2.jpg?output-format=webp',
                    'url':'https://www.zomato.com/hyderabad/maa-santosh-family-dhaba-tolichowki/order'
                }
              ]
  var items = []

  let item2 = [
    {
       'name':"Natural Ice cream", 
       'category':"hyderabadi, chineese, byriani",
       'rating': 4.5,
       'price': 100,
       'deliveryTime':25, 
       'reviews': 6134, 
       'offer':20,
       'imgURL':'https://b.zmtcdn.com/data/pictures/4/91784/77f473b5a422b3de51714aa9c82c2065_o2_featured_v2.jpg?output-format=webp',
       'url':'https://www.zomato.com/hyderabad/natural-ice-cream-srinagar-colony/order'
   }
 ]

 
 let item3 = [
    {
       'name':"Cafe 555 & Aqeeq Restaurant", 
       'category':"hyderabadi, chineese, byriani",
       'rating': 4.0,
       'price': 200,
       'deliveryTime':33, 
       'reviews': 95700, 
       'offer':30,
       'imgURL':'https://b.zmtcdn.com/data/pictures/2/90042/64942e71b04edc05ed25bf986a0807c2_o2_featured_v2.jpg?output-format=webp',
       'url':'https://www.zomato.com/hyderabad/cafe-555-aqeeq-restaurant-masab-tank/order'
   }
 ]

  
 let item4 = [
  {
     'name':"Hyderabad Zyqa Restaurant", 
     'category':"North Indian, chineese, byriani",
     'rating': 3.9,
     'price': 150,
     'deliveryTime':41, 
     'reviews': 50300, 
     'offer':20,
     'imgURL':'https://b.zmtcdn.com/data/pictures/chains/0/92410/9bd334d280c9e86c0a379ec0d8f0c9ad_o2_featured_v2.jpg?output-format=webp',
     'url':'https://www.zomato.com/hyderabad/hyderabad-zyqa-restaurant-panjagutta/order'
 }
]


let item5 = [
  {
     'name':"Sri Kanya", 
     'category':"chineese, byriani, Andhra",
     'rating': 4.1,
     'price': 250,
     'deliveryTime':47, 
     'reviews': 30301, 
     'offer':10,
     'imgURL':'https://b.zmtcdn.com/data/pictures/1/90421/93bdf2ab04e8a4a0d049e3fc64f830d2_o2_featured_v2.jpg?output-format=webp',
     'url':'https://www.zomato.com/hyderabad/sri-kanya-panjagutta/order'
 }
]


let item6 = [
  {
     'name':"Chicken Shawarma Hub", 
     'category':"Lebanese",
     'rating': 3.9,
     'price': 100,
     'deliveryTime':50, 
     'reviews': 4392, 
     'offer':10,
     'imgURL':'https://b.zmtcdn.com/data/pictures/8/19269138/126da84eb0413ec0ac33f171a7ee7f0e_o2_featured_v2.jpg',
     'url':'https://www.zomato.com/hyderabad/chicken-shawarma-hub-banjara-hills/order'
 }
]







 items.push(item1,item2, item3, item4, item5, item6)





  var  count = 1
  items.forEach(element => {
    
  var itemCard = '<div class="card border-light col-lg-4 col-md-6" id="item'+count+'"><div class="card-img position-relative"><img src="'+element[0].imgURL+'" class="card-img-top" alt="Item Image"> <span class="offer-card"><span class="offer">'+element[0].offer+'% OFF</span></span></div> <div class="card-body"><h5 class="card-title">'+element[0].name+'</h5><ul class="inline-list"><li class="rating"></li><li class="ratingValue fs-5 mt-1 ms-1"><b>'+element[0].rating+'</b> <span class="text-muted reviews">('+element[0].reviews+' Reviews)</span></li></ul><p class="category">'+element[0].category+'</p><ul class="list-inline"><li class="list-inline-item price">₹'+element[0].price+' for one</li><li class="list-inline-item text-muted">•</li><li class="list-inline-item deliveryTime">'+element[0].deliveryTime+' min</li></ul><a target="_blank" href="'+element[0].url+'" class="btn stretched-link">View</a></div></div>'
      $('.results .row').append(itemCard)
      $(".rating").starRating({ initialRating: element[0].rating})
        count++
    });


    $(document).ready(function(){
        $(".search").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#results .card").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });


