//console.log(module);
 



exports.getDate = function() //assigns the function to a variable and keeps it anonymous.
{
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);;
}    


exports.getDay  = function()
{
    var theday = new Date();

    var options = {
        weekday: "long"
    };

   return today.toLocaleDateString("en-US", options);;
}