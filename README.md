<!DOCTYPE html>
<html lang="en">
  <head>
   <style>
       .parent{
           background-color:hsla(200, 100%, 20%);
           height: 400px;
           width: 400px;
       }
       .child{
           background-color : red;
           height: 50%;
           width:50%;
           animation:left-to-right 1s ease-in forwards infinite alternate;
        
       }
       .parent:hover .child{
         animation-play-state: paused;
       }
       @keyframes left-to-right {
           0%{
               background-color:yellow;
               transform: translateX(0) ;
           }
           33%{
            background-color:red;
            transform: translateY(100%);
           }
           50%{
               background-color:green;
               transform: translateX(100%) translateY(100%);

           }
           66%{
            background-color:blue;
            transform: translateX(100%) translateY(0%);

           }
            100%{
            background-color: pink;
            transform: translateX(0%) translateY(0%);

            }
       }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class ="child"></div>
    </div>
  </body>
  </html>
