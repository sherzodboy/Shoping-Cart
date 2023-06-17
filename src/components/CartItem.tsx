import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import FormatCurrency from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeCartQuantity } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        alt={item?.name}
        style={{ width: "125px", height: "75", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.6rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.7rem" }}>
          {FormatCurrency(Number(item?.price))}
        </div>
      </div>
      <div>{FormatCurrency(Number(item?.price) * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeCartQuantity(Number(item?.id))}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
