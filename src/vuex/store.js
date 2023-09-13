import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        products: [],
        cart: [],
      }
    },
    mutations: {
      SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products
      },

      SET_CARD: (state, product) => {
        if (state.cart.length) {
          let isProductExist = false;
          state.cart.map(function(item) {
            if (item.article === product.article && item.sizeSelect === product.sizeSelect && item.colorSelect === product.colorSelect) {
              item.quantity++;
              isProductExist = true;
              } 
            })
            if(!isProductExist) {
              state.cart.push(product);
              
              
            }
        }  
        else {
          state.cart.push(product);
    
        } 
      },
      REMOVE_PRODUCT: (state, index) => {
        state.cart.splice(index, 1)
      },
      INCREMENT: (state, index) => {
        
        state.cart[index].quantity++
        
      },
      DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity--
        }
        
      },

    },
    actions: {
      async GET_PRODUCTS_FROM_API({commit}) {
        const products = await axios(' http://localhost:3000/products', {
          method: 'GET'
        })
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      },
      ADD_TO_CART ({commit}, product) {
        commit('SET_CARD', product);
      },

      INCREMENT_QUALITY ({commit}, index) {
        commit('INCREMENT', index)
      },
      DECREMENT_QUALITY ({commit}, index) {
        commit('DECREMENT', index)
      },
      DELETE_FROM_CART ({commit}, index) {
        commit('REMOVE_PRODUCT', index)
      }

    },
    getters: {
      PRODUCTS(state) {
        return state.products
      },
      CART(state){
        return state.cart
      }
    }
})

export default store