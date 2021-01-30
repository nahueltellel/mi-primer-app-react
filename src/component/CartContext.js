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

        function isInCart(id){
            const item = cart.find(p => p.id === id)
            if (item === undefined){
                return false
            }
            else {
                return true
            }
        }

    function CartAdd(product, count, id) {
        if (isInCart(id)){
            const oldProduct = cart.find(p => p.id === id)
            const newQuantity = oldProduct.amount + count           
            const newProduct = { id: oldProduct.id, name: oldProduct.name, image: oldProduct.image, price: oldProduct.price, amount: newQuantity}
            const cartWithoutOld = cart.filter(product => product.id =! id)
            const cartWithNew = [...cartWithoutOld, newProduct]
            setCart(cartWithNew)
        }            
            else{
            const newItem = { id: product.id, title: product.title, img: product.img, price: product.price, amount: count }
            setCart([...cart, newItem]);
        }
    }
        function deleteFromCart(id){
        const newCart = cart.filter(product => product.id !== id)
            setCart(newCart)
        }

        function clearCart(){
            setCart([])
            setQuantity(0)
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
     
            <CartContext.Provider value ={{ cart, quantity, money, delivery, CartAdd, deleteFromCart, deliveryTime, clearCart}}>
                { children }
            </CartContext.Provider>
    </>

    }

    export default CartProvider;