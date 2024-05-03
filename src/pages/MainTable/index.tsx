import cn from "classnames";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../api";
import { Button } from "../../components/button";
import { toPicture } from "../../helpers/pictures";
import styles from "./styles.module.scss";

export const MainTable = () => {
  const [products, setproPucts] = useState<any[] | null>([]);

  const fetchProducts = async () => {
    const { data } = await supabase.from("modelinfo").select();

    setproPucts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div className={cn("container")}>
      <table className={cn("table table-hover", styles.mainTable)}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Тип товару</th>
            <th scope="col">Назва товару</th>
            <th scope="col">Закупівельна ціна</th>
            <th scope="col">Ціна</th>
            <th scope="col">К-сть на складах</th>
          </tr>
        </thead>

        <tbody>
          {products?.map((item, idx) => {
            return (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>
                  <img src={toPicture(item.type_name)} alt={item.type_name} />
                </td>
                <td>{`${item.manufacturer_name} ${item.model_name}`}</td>
                <td>${item.sell_price}</td>
                <td>${item.stock_price}</td>
                <td>{item.total_items} шт</td>
                <td>
                  <Link to={`product/${item.id}`}>
                    <Button type="button">Деталі</Button>
                  </Link>
                </td>
                <td>
                  <Button type="button">Редагувати</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
