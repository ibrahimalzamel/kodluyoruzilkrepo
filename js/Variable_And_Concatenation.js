let 
theTitle = "Elzero", 
 theDescription ="Elzero Web School" , 
 theDate ="25/10" ;


let markUp = ` 
<div class="card">
   <h3>Hello ${theTitle}</h3>
   <p>${theDescription}</p>
   <span>${theDate}</span>
</div>
`;

document.write(markUp.repeat(4));