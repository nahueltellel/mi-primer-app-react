import React, { useState ,useEffect } from "react";

export const CartContext = React.createContext();

function CartProvider({children}){
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [money, setMoney] = useState(0)
    const [delivery, setDelivery] = useState()

        useEffect(() => {
            var t = 0
            const total = cart.map( p => p.price * p.amount)
            total.map( p => t = t + p)
            setMoney(t)
            const cartQuantity = cart.length
            setQuantity(cartQuantity)
        }, [cart])

    function CartAdd(product, count, id) {
            const newItem = { id: product.id, title: product.title, img: product.img, price: product.price, amount: count }
            setCart([...cart, newItem]);
        }
        function deleteFromCart(id){
        const newCart = cart.filter(product => product.id !== id)
            setCart(newCart)
        }
        
        function deliveryTime() {
            var now = new Date();
            var hr = now.getHours();
            if(hr<=14){
                setDelivery('Llega hoy')
            }
            else{
                setDelivery('Llega mañana')
            }

        }
        return <>
     
            <CartContext.Provider value ={{ cart, quantity, money, delivery, CartAdd, deleteFromCart, deliveryTime}}>
                { children }
            </CartContext.Provider>
    </>

    }

    export default CartProvider;