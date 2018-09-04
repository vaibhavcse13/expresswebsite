$(function(){
    // submit the feedback 
    $('.feedback-form').submit(function(evt){
        evt.preventDefault();
        $.post('api' , {
            name : $("#feedback-form-name").val(),
            title : $("#feedback-form-title").val(),
            message : $("#feedback-form-message").val()

        } , updateFeedback)
    });

    function clearForm() {
        if($("#feedback-form-name").val()){
            $("#feedback-form-name").val( "");
            $("#feedback-form-title").val( "");
            $("#feedback-form-message").val( "");
        }
       
    }

    $('.feedback-messages').on('click' , function(evt){
        if(evt.target.className === 'glyphicon glyphicon-remove' ){
            $.ajax({
                url : 'api/' + evt.target.id ,
                type : 'DELETE',
                success : updateFeedback

            });
        }
    })
    $.getJSON('api' , updateFeedback);

    function updateFeedback(data){
        var output = ''; 
        $.each(data , function(key  , item ){
            output += '     <div class="feedback-item item-list media-list">';
            output += '       <div class="feedback-item media">';
            output += ' <div class="media-left"> <button class="feedback-delete btn btn-xs btn-danger" ><span id = "' + key +'"  class="glyphicon glyphicon-remove"></span></button>'
            output += '         <div class="feedback-info media-body">';
            output += '           <div class="feedback-head">';
            output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info">' + item.name + '</small></div>';
            output += '           </div>';
            output += '           <div class="feedback-message">' + item.message + '</div>';
            output += '         </div>';
            output += '       </div>';
            output += '     </div>';
        });
        $('.feedback-messages').html(output);
        clearForm();
    }
});