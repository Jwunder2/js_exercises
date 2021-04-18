
/*function heehaw()
{

    for (let i = 1; i <= 100; i++)
    {
        if(i % 5 === 0 && i % 3 === 0)
         {
            document.write("HeeHaw!<br>")
         } else if(i % 3 === 0 )
         {
            document.write("Hee!<br>");
         } else if(i % 5 === 0)
         {
             document.write("Haw!<br>");
         } else
         {
            document.write(i + "<br>");
         }
    }

}

 */
document.getElementById("number").onsubmit= "heehaw";

function heehaw()
{
    let number = document.getElementById("number").value;

    if (number < 0)
    {
        document.write("Please choose a number above zero")
    }

    if (isNaN(number)) {
        document.write("Please enter a number");
    }

    for (let i = 1; i <= number; i++)
    {
        if(i % 5 === 0 && i % 3 === 0)
        {
            document.write("HeeHaw!<br>")
        } else if(i % 3 === 0 )
        {
            document.write("Hee!<br>");
        } else if(i % 5 === 0)
        {
            document.write("Haw!<br>");
        } else
        {
            document.write(i + "<br>");
        }
    }

}

heehaw();