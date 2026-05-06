document.addEventListener('DOMContentLoaded', function()
{
    let body = document.querySelector('body');

    document.querySelector ('#green').addEventListener('click',
        function(){ body.style.backgroundColor='green';}
    );

    document.querySelector ('#aqua').addEventListener('click',
        function(){ body.style.backgroundColor='aqua';}
    );
});
