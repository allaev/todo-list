var inputField = $("input[type='text']");

//create a Todo
function addTodo(){
  var todoText = $(inputField).val();
  //create a new li and add to ul
  if (todoText!="") {
    $("ul").append("<li>"+todoText+" <span><i class='fa fa-trash-alt'></i></span></li>");
    //clear the input
    $(inputField).val("").css("border", '3px solid rgba(0, 0, 0, 0)');
  }
  else {
    //set a red border if it's empty
    $(inputField).css("border", '#FF0000 3px solid');
  }
}

//hit 'Enter' to create a Todo
$("input").keypress(function() {
    if (event.which == 13){
      addTodo();
    }
})

//or click on a plus icon to create a Todo
$(".icon-plus").on('click', function(){
  addTodo();
})

//check off specific lis by clicking
$("ul").on("click", "li", function(){//when 'li' is clicked inside of a 'ul'
  $(this).toggleClass('completed');//run this
})

//click on X to delete a Todo
$("ul").on('click', "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();//removes Todo after it fades out
  });
  event.stopPropagation();
})

var quotes=[
  "“Winners never quit and quitters never win” ― Vince Lombardi",
  "“It always seems impossible until it’s done” ― Nelson Mandela",
  "“Champions keep playing until they get it right” ― Billie Jean King",
  "“Victory is always possible for the person who refuses to stop fighting” ― Napoleon Hill",
  "“Whatever you do, do with all your might” ― Marcus Tullius Cicero",
  "“Do or do not, there is no try” ― Yoda",
  "“It does not matter how slowly you go as long as you do not stop” ― Confucius",
  "“If you can dream it, you can do it” ― Walt Disney",
  "“The secret of getting ahead is getting started” ― Mark Twain",
  "“Never, never, never give up” ― Winston Churchill",
  "“Without a goal, you can’t score” ― Casey Neistat",
  "“Remember, success is a journey not a destination. Have faith in your ability. You will do just fine” ― Bruce Lee",
  "“Everything will be okay in the end. If it's not okay, it's not the end” ― John Lennon",
  "“Plan ahead: It wasn't raining when Noah built the ark.” ― Richard Cushing",
  "“If you find a path with no obstacles, it probably doesn't lead anywhere.” ― Frank A. Clark"
];
var rand=Math.floor(Math.random() * quotes.length); ;

//add a random quote from the array
$("p").text(quotes[rand]);
