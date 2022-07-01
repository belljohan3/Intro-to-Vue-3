const app = Vue.createApp({
    data() {
        return{
            cart:0,
            product: 'Socks',
            image: '/assets/images/socks_blue.jpg',
            url: 'https://www.vuemastery.com/',
            inStock: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 1234, color: 'green', image: '/assets/images/socks_green.jpg'},
                {id: 5678, color: 'blue', image: '/assets/images/socks_blue.jpg'},
            ],
            sizes: ['38','40', '42', '43']
       }
    },

    methods: {
        addToCart() {
            this.cart += 1
        },

        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
