export const minus = (id, ...p, ) => {
    data = getCartData()
    console.log(data)
    let myitem
  
    data.cart.map((item, index) => {
      if (item.id == id) {
        if (data.cart[index].quantity > 0)
          data.cart[index].quantity--
      }
    })
  
    // write(data)
    // render()
  };
