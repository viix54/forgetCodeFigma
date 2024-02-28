import './priceTable.scss';
import { prices } from './prices';
import { GiCheckMark } from 'react-icons/gi';

const checkPriceFields = (price_data) => {
  let priceList = document.createElement('ul');
  for (let field in price_data) {
    if (field !== 'type' && field !== 'price' && price_data[field]) {
      let elContent = document.createTextNode(field);
      let newListEl = document.createElement('li');
      newListEl.appendChild(elContent);
      priceList.appendChild(newListEl);
    }
  }
  return priceList;
};

const prices_container = (price_data, index) => {
  return (
    <div className="price_block" key={index + price_data.type}>
      <section>
        <header>
          <h1>{price_data.type}</h1>
          <h2>{price_data.price} $</h2>
        </header>
        {checkPriceFields(price_data)}
      </section>
    </div>
  );
};

export const PriceTable = () => {
  return (
    <div className="priceTable_container">
      <article>
        <header>
          <h1>Plans & Pricing</h1>
          <p>
            Startup Framework is free forever — you only pay for custom domain hosting or to export
            your site.
          </p>
        </header>
        <div className="price_blocks_container">
          {prices.map((price, index) => prices_container(price, index))}
        </div>
      </article>
    </div>
  );
};
