import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductActions.css";

const ProductActions = (props) => {
  const navigate = useNavigate();
  const [storageCode, setStorageCode] = useState(undefined);
  const [colorCode, setColorCode] = useState(undefined);

  const product = props.product;
  const storagesLength = product.options.storages.length;
  const colorsLength = product.options.colors.length;

  useEffect(() => {
    if (storagesLength === 1) setStorageCode(product.options.storages[0].code);
    if (colorsLength === 1) setColorCode(product.options.colors[0].code);
  }, [colorsLength, product, storagesLength]);

  const onSubmit = () => {
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="product-actions-container">
        <div className="product-actions-selectors">
          <select
            onChange={(value) => setStorageCode(value)}
            required
            defaultValue={storagesLength === 1 ? storageCode : ""}
            className="selector"
          >
            <option value="" disabled>
              Select a storage
            </option>
            {product.options.storages.map((storage) => (
              <option value={storage.code} key={storage.code}>
                {storage.name}
              </option>
            ))}
          </select>
          <select
            onChange={(value) => setColorCode(value)}
            required
            defaultValue={colorsLength === 1 ? colorCode : ""}
            className="selector"
          >
            <option value="" disabled>
              Select a color
            </option>
            {product.options.colors.map((color) => (
              <option value={color.code} key={color.code}>
                {color.name}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" value="Add to cart" className="submit-button" />
      </div>
    </form>
  );
};

export default ProductActions;
