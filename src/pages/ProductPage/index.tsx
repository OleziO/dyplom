import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { supabase } from "../../api";
import { Button } from "../../components/button";
import { Modal } from "../../components/modal";
import styles from "./styles.module.scss";

interface ProductId {
  params: {
    id: string;
  };
}

interface Product {
  id: string;
  name: string;
  phone: string;
}

const fetchProductData = async (id: string) => {
  const { data } = await supabase.from("Models").select().eq("id", id);

  return data;
};

export async function loadProductData({ params }: any) {
  const product = await fetchProductData(params.id);
  return { product };
}

export const ProductPage = () => {
  const productFetchData: any = useLoaderData();
  const product = productFetchData.product[0];

  console.log(product);

  return (
    <Modal className={styles.infoModal}>
      <div className={styles.infoGroup}>
        <div className={styles.headerGroup}>
          <h2>{product.name}</h2>
          <div className={styles.priceGroup}>
            <span className={styles.priceItem}>
              <span className={styles.priceHeader}>Закупівля</span>
              <span>${product.stockPrice}</span>
            </span>
            <span className={styles.priceItem}>
              <span className={styles.priceHeader}>Продаж</span>
              <span>${product.sellPrice}</span>
            </span>
          </div>
        </div>

        <p>{product.description}</p>
      </div>

      <div className={styles.buttonGroup}>
        <Button>Закупити</Button>
        <Button>Продати</Button>
      </div>
    </Modal>
  );
};
