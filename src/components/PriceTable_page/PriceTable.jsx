import './priceTable.scss';
import { prices } from './prices';
import { GiCheckMark } from 'react-icons/gi';

const prices_container = (price_data, index) => {
  return (
    <div className="price_block" key={index + price_data.type}>
      <section>
        <header>
          <h1>{price_data.type}</h1>
          <h2>{price_data.price} $</h2>
        </header>
        <ul>
          {Array.from(price_data).map(([key, value]) => {
            if (value == true) {
              return (
                <li key={key + value + key}>
                  <GiCheckMark style={{ color: 'green' }} />
                  {key}
                </li>
              );
            } else {
              return (
                <li style={{ opacity: 0.4 }} key={key + value + key}>
                  <div style={{ width: '16px', height: '16px' }} />
                  {key}
                </li>
              );
            }
          })}
        </ul>
        <button className="btn btn-success price_block_btn">Get Started</button>
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
