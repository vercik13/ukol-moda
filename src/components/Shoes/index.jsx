import React from 'react';
import './style.css';
import Product from './../Product';

const Shoes = ({image, name, description, price}) => {
  return (
    <section>
			<h2>Boty</h2>
      <div class="products">

				<div class="product">
        <Product image='running-shoes.jpg' name="Běhací tenisky" description="Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost." price="1790 Kč" />
				</div>

        <div class="product">
        <Product image='shiny-shoes.jpg' name="Třpytivé lodičky" description="Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět." price="2950 Kč" />
				</div>

        <div class="product">
        <Product image='red-shoes.jpg' name="Červené botičky" description="Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet." price="6200 Kč" />
				</div>
			</div>
		</section>
  );
}

export default Shoes;