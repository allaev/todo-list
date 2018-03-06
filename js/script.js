//check off specific lis by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass('completed');
})

//click on X to delete a Todo
$("ul").on('click', "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();//removes Todo after it fades out
  });
  event.stopPropagation();
})

//hit 'Enter' to create a Todo
$("input[type='text']").on('keypress', function(event){
  if(event.which === 13){
    //grabbing new Todo text from input
    var todoText = $(this).val();
    //create a new li and add to ul
    $("ul").append("<li><span>X</span> "+todoText+"</li>");
    //clear the input
    $(this).val("");
  }
})
