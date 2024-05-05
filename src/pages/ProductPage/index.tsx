import { useEffect, useState } from "react";
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
  const [isCountOpen, setIsCountOpen] = useState<boolean>(false);
  const [sellCount, setSellCount] = useState<string | null>(null);

  const uptadeCount = async (id: string, count: number) =>
    await supabase.rpc("sell_items", {
      model_id_to_delete: id,
      count_to_delete: count,
    });

  useEffect(() => {
    if (isCountOpen) {
      setSellCount(window.prompt("Введіть к-сть товарів для продажу: "));
    }
  }, [isCountOpen]);

  useEffect(() => {
    if (sellCount && isCountOpen) {
      setIsCountOpen(false);
      uptadeCount(product.id, +(sellCount || 0));
    }
  }, [sellCount]);

  return (
    <Modal className={styles.infoModal}>
      <div className={styles.infoGroup}>
        <div className={styles.headerGroup}>
          <h2>{`${product.manufacturer_name} ${product.name}`}</h2>
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
        <Button
          onClick={() => {
            setIsCountOpen(true);
          }}
        >
          Продати
        </Button>
      </div>
    </Modal>
  );
};
