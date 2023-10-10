'use client';

import { useState } from 'react';
import { setQuantityInCookies } from './AddToCartFormAction';
import styles from './page.module.scss';

export default function AddToCartFormComponent(props) {
  const [quantityValue, setQuantityValue] = useState(1);

  return (
    <form className={styles.forms}>
      <legend>Zum Einkaufswagen hinzufügen</legend>
      <label htmlFor="quantity">Anzahl:</label>
      <input
        id="quantity"
        type="number"
        pattern="[0-9]*"
        className={styles.input}
        value={quantityValue}
        data-test-id="product-quantity"
        min="1"
        onChange={(event) => {
          setQuantityValue(event.currentTarget.value);
        }}
      />
      <button
        className={styles.primarybutton}
        data-test-id="product-add-to-cart"
        formAction={async () =>
          await setQuantityInCookies(props.singleProductID, quantityValue)
        }
      >
        Ticket hinzufügen
      </button>
    </form>
  );
}