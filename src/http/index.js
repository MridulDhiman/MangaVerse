
const api_url = `${import.meta.env.VITE_API_URL}`;

export const fetchProducts = async () => {
const response = await fetch(`${api_url}/products`);

if(!response.ok) {
    throw new Error("Products couldn't be fetched.");
}

const products = await response.json();
return products;
}

export const addItemToCart = async (data) => {
const response = await fetch(`${api_url}/cart`, {
method: "POST",
body: JSON.stringify({
    ...data
}),
headers: {
    "Content-Type" : "application/json"
}
});

if(!response.ok) {
    throw new Error("Item(s) couldn't be added to the cart.");
}

const cartItem = await response.json();
return cartItem;
}


export const getCartItems = async () => {
    const response = await fetch(`${api_url}/cart`);

    if(!response.ok) {
        throw new Error("Cart Items couldn't be fetched...");
    }

    const cart = await response.json();
    console.log(cart);
    return cart;
}

export const getProductById = async (id) => {
    const response = await fetch(`${api_url}/products/${id}`);

    if(!response.ok) {
        throw new Error(`Product with id ${id} could not be fetched...`);
    }

    const data = await response.json();
    return data;
}

export const deleteCartItem = async (id, productId) => {
    const response = await fetch(`${api_url}/cart/${id}/p/${productId}`, {
        method: "DELETE"
    });

    if(!response.ok) {
        throw new Error("Cart Item couldn't be deleted");
    }


    return true;
}


// export const checkoutCart =  async (checkoutData) => {
// const response = await fetch(`${api_url}/checkout`, {
// method: 'POST',
// body: JSON.stringify(checkoutData),
// headers: {
//     "Content-Type": "application/json"
// }
// });

// if(!response.ok) {
//     console.error("Error occurred in checking out");
// }

// const order = await response.json();

// let options = {
//     key: "rzp_test_rcMxuZbKVSmRXv", // Enter the Key ID generated from the Dashboard
//     amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     currency: "INR",
//     name: "Manga Verse",
//     description: "Online Anime & Manga Ecommerce MarketPlace",
//     image: "https://avatars.githubusercontent.com/u/60432617?s=400&u=3e7dcd371db35dee1938a00e38440933a7581392&v=4",
//     order_id: order.id,
//     callback_url: "${api_url}/paymentVerification",
//     prefill: {
//         "name": "John Doe",
//         "email": "johndoe@gmail.com",
//         "contact": "2342342348"
//     },
//     notes: {
//         "address": "Razorpay Corporate Office"
//     },
//     theme: {
//         "color": "#3399cc"
//     }
// };

// const razorpay = new window.Razorpay(options);
// razorpay.open();

// }

export const emptyCart =async  () => {
    const response = await fetch(`${api_url}/cart`, {
        method: "DELETE"
    });

    if(!response.ok) {
        throw new Error("Cart could not deleted")
    }

    const data = response.json();


    return data.success;
}

export const patchCartItems = async (cartItems) => {
    const response = await fetch(`${api_url}/cart`, {
        method: 'PUT',
        body: JSON.stringify({
            items: cartItems
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!response.ok) {
        throw new Error("couldn't patch the items");
    }


    const data = response.json();

    return data.success;
}


export const filterProducts = async (searchStr) => {
const response = await fetch(`${api_url}/products/filter`, {
    method: "POST",
    body: JSON.stringify({searchStr}),
    headers: {
        "Content-Type": "application/json"
    }
});


if(!response.ok) {
    throw new Error("Couldn't filter items");

}

const data =await response.json();

return data.products;
}