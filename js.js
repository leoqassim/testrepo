$(document).ready(function()
{
    $("#btn").click(function(){
        $.ajax({
            "url" : "ajax.php",
            "method" : "get",
            success:function(response)
            {
                $("#result").html(response);
            }
        });
    });
});