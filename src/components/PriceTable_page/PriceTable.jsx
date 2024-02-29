import './priceTable.scss';
import { prices } from './prices';

import { GiCheckMark } from 'react-icons/gi';
import { BsCurrencyDollar } from 'react-icons/bs';

const changePriceDataOutput = (price_property) => {
  if (price_property === 'memory_size') {
    return '2 GB of space';
  } else if (price_property === 'backups_days') {
    return '14 days of backups';
  } else if (price_property === 'all_day_support') {
    return '24 hours support';
  } else {
    let splitedPriceProperty = price_property.split('_');
    let outputPriceProperty =
      splitedPriceProperty[0][0].toUpperCase() +
      splitedPriceProperty[0].slice(1) +
      ' ' +
      splitedPriceProperty[1];
    return outputPriceProperty;
  }
};

const prices_container = (price_data, index) => {
  return (
    <div className="price_block" key={index + price_data.type}>
      <section>
        <header>
          <h1>{price_data.type}</h1>
          <h2>
            {price_data.price} <BsCurrencyDollar className="dollar_sign" />
          </h2>
        </header>
        <ul>
          {Array.from(price_data).map(([key, value]) => {
            if (value == true) {
              return (
                <li key={key + value + key}>
                  <GiCheckMark style={{ color: '#18C867' }} />
                  {changePriceDataOutput(key)}
                </li>
              );
            } else {
              return (
                <li style={{ opacity: 0.4 }} key={key + value + key}>
                  <div style={{ width: '16px', height: '16px' }} />
                  {changePriceDataOutput(key)}
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
