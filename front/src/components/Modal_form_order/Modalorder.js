import React from "react";

export default function ModalOrder() {
  return (
    <>
      <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="female" />
        <input type="tel" placeholder="phone" />
        <input type="email" placeholder="email" />
        <button type="submit">Подтвердить заказ</button>
      </form>
    </>
  );
}
