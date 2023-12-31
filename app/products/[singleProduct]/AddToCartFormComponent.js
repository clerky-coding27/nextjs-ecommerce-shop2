'use client';

import { useState } from 'react';
import { setQuantityInCookies } from './AddToCartFormAction.tsx';
import styles from './page.module.scss';

export default function AddToCartFormComponent(props) {
  const initialQuantity = 1;

  const [quantityValue, setQuantityValue] = useState(initialQuantity);

  return (
    <form className={styles.forms}>
      <legend>Zum Einkaufswagen hinzufügen</legend>
      <label htmlFor="quantity">Anzahl:</label>
      <input
        id="quantity"
        type="number"
        pattern="[1 - 9]*"
        className={styles.input}
        value={quantityValue}
        data-test-id="product-quantity"
        min={1}
        onInput={(event) => {
          setQuantityValue(Number(event.currentTarget.value));
        }}
      />
      <button
        className={styles.primarybutton}
        data-test-id="product-add-to-cart"
        formAction={async () => {
          await setQuantityInCookies(props.singleProductID, quantityValue);
        }}
      >
        Ticket hinzufügen
      </button>
    </form>
  );
}
