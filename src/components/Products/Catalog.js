class Products {

  render() {
    let htmlCatalog = ''
    API.forEach(({ id, title, price,img}) => {
      console.log(id, title, price,img);
      htmlCatalog += `
        <li class="catalog-elements">
          <span class="catalog-elements__name">${title}</span>
          <img class="catalog-elements__img" src="${img}" />
          <span class="catalog-elements__price">${price.toLocaleString()}</span> <!--переделать-->
          <button class="catalog-elements__add_btn">Добавить</button>
          <button class="catalog-elements__addToCartBtn">В корзину</button>
        </li>
        `;
    });
    const html = `
    <ul class="catalog-container">
      ${htmlCatalog}
    </ul>
    `;
    ROOT_PRODUCTS.innerHTML = html;

  }
}

const productsPage = new Products();
productsPage.render();