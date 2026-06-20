function showFigures(figures){

const container =
document.getElementById("figureContainer");

container.innerHTML="";

figures.forEach(figure=>{

container.innerHTML+=`

<div class="col-md-4">

<div class="card">

<img src="${figure.image}">

<div class="card-body">

<h5>${figure.name}</h5>

<p>${figure.price}</p>

<button class="btn btn-anime">
Comprar
</button>

</div>

</div>

</div>

`;

});

}