// - Product Component -
Vue.component("productComp", {
    template: ` <div v-show="info.id >= 0" :class="['rela-inline', 'product-card']" :key="info.id" :style="{'animation-delay':(info.delay*0.1)+'s'}">
                    <div class="rela-block product-pic" :style="{'background': 'url('+info.img+') center no-repeat'}">
                        <div class="product-view-button" @click="view(info.id)">View</div>
                    </div>
                    <div class="rela-block product-info">
                        <div class="rela-block">
                            <p>{{info.name}}</p>
                            <p class="product-artist">{{info.artist}}</p>
                        </div>
                        <div class="vert-center product-cost">\${{info.cost}}</div>
                    </div>
                </div>`,
    props: {
        info: {
            type: Object,
            default: {
                id: 0,
                name: "Untitled",
                artist: "Artist",
                desc: "Product description",
                delay: 0,
                cost: 0,
                catg: "test",
                img: "https://picsum.photos/600/?random"
            }
        }
    },
    methods: {
        view: function(id) {
            app.viewProduct(id);
        }
    }
});

// - Vue Stuff -
var app = new Vue({
    el: "#store",
    data: {
        productViewOpen: false,
        currentViewedProduct: 0, // Product's id
        viewedProduct: {},
        newItems: [],
        newItemPos: 0,
        products: [
            {
                id: -1,
                name: "Sticker",
                artist: "",
                desc: "",
                cost: 0,
                catg: "Stickers",
                img: "./store_items/item1.png",
                date: ""
            },
            {
                id: 0,
                name: "Stop Sucking",
                artist: "",
                desc:'Prevent the usage of straws with these trendy “Stop Sucking” stickers!',
                cost: 15,
                catg: "Stickers",
                img: "./store_items/item1.png",
                date: "May 27, 2018"
            },
            {
                id: 1,
                name: "Twist Straw",
                artist: "",
                desc:'Twist your straw and say no! We’re going to #BeStrawless.',
                cost: 15,
                catg: "Stickers",
                img: "./store_items/item2.png",
                date: "May 27, 2018"
            },
            {
                id: 2,
                name: "Fish are Friends",
                artist: "",
                desc:'The sticker speaks for itself: Help protect our fish friends!',
                cost: 15,
                catg: "Stickers",
                img: "./store_items/item3.png",
                date: "May 27, 2018"
            },
            {
                id: 3,
                name: "Turtle",
                artist: "",
                desc:'These cute turtle stickers come in multiple colors and are perfect for any water bottle or laptop!',
                cost: 15,
                catg: "Stickers",
                img: "./store_items/item4.png",
                date: "May 27, 2018"
            },
            {
                id: 4,
                name: "Turtle",
                artist: "",
                desc:'These cute turtle stickers come in multiple colors and are perfect for any water bottle or laptop!',
                cost: 15,
                catg: "Stickers",
                img: "./store_items/item5.png",
                date: "May 27, 2018"
            },
            {
                id: 5,
                name: "Turtle",
                artist: "",
                desc:'These cute turtle stickers come in multiple colors and are perfect for any water bottle or laptop!',
                cost: 15,
                catg: "Stickers",
                img: "./store_items/item6.png",
                date: "May 27, 2018"
            },
            {
                id: 6,
                name: "Turtle",
                artist: "",
                desc:'These cute turtle stickers come in multiple colors and are perfect for any water bottle or laptop!',
                cost: 15,
                catg: "Stickers",
                img: "./store_items/item7.png",
                date: "May 27, 2018"
            },
            {
                id: 7,
                name: "Turtle",
                artist: "",
                desc:'These cute turtle stickers come in multiple colors and are perfect for any water bottle or laptop!',
                cost: 15,
                catg: "Stickers",
                img: "./store_items/item8.png",
                date: "May 27, 2018"
            },
            {
                id: 8,
                name: "Stop Sucking",
                artist: "",
                desc:'Prevent the usage of straws with these trendy “Stop Sucking” stickers!',
                cost: 15,
                catg: "Stickers",
                img: "./store_items/item9.png",
                date: "May 27, 2018"
            },
            {
                id: 9,
                name: "Sea Whale",
                artist: "",
                desc:'Keep the sea plastic free with this whale sticker!',
                cost: 15,
                catg: "Stickers",
                img: "./store_items/item10.png",
                date: "May 27, 2018"
            },
            {
                id: 10,
                name: "Catastrawphes",
                artist: "",
                desc:'Don’t hurt the water our fish live in! Spread awareness with this sticker!',
                cost: 15,
                catg: "Stickers",
                img: "./store_items/item11.png",
                date: "May 27, 2018"
            },
            {
                id: 11,
                name: "Pocket Tee",
                artist: "",
                desc:'This cute pocket tee has a knot in its straw- so cute you can’t resist!',
                cost: 15,
                catg: "Merchandise",
                img: "./store_items/item12.png",
                date: "May 27, 2018"
            },
            {
                id: 12,
                name: "Volunteer Tee",
                artist: "",
                desc:'Volunteer with us in this shirt that sports our logo! and be part of the campaign.',
                cost: 15,
                catg: "Merchandise",
                img: "./store_items/item13.png",
                date: "May 27, 2018"
            },
            {
                id: 13,
                name: "Whale Tee",
                artist: "",
                desc:'When its peak straw season (aka Summer), wear this cute bro-tank in order to support our cause!',
                cost: 15,
                catg: "Merchandise",
                img: "./store_items/item14.png",
                date: "May 27, 2018"
            },
            {
                id: 14,
                name: "TLS Sweatshirt",
                artist: "",
                desc:'And.. when it’s too cold, don’t let people forget to #BeStrawless.',
                cost: 15,
                catg: "Merchandise",
                img: "./store_items/item15.png",
                date: "May 27, 2018"
            },
            {
                id: 15,
                name: "Metal Cup",
                artist: "",
                desc:'What better way to start the trend than with a reusable metal tumbler and straw. It features our hashtag to get everyone involved in the trend.',
                cost: 15,
                catg: "Tumbler",
                img: "./store_items/item16.png",
                date: "May 27, 2018"
            },
            {
                id: 15,
                name: "Bamboo Cup",
                artist: "",
                desc:'What better way to start the trend than with a reusable tumbler and straw. Aa cup made of bamboo, and a reusable plastic straw.',
                cost: 15,
                catg: "Tumbler",
                img: "./store_items/item17.png",
                date: "May 27, 2018"
            },
            {
                id: 17,
                name: "Summer Tee",
                artist: "",
                desc:'And.. when it’s too hot, don’t let people forget to #BeStrawless.',
                cost: 15,
                catg: "Merchandise",
                img: "./store_items/item18.png",
                date: "May 27, 2018"
            }
        ],
        filteredProducts: [],
        displayedProducts: [],
        displayPos: 0,
        catg: ["All", "Merchandise", "Tumbler", "Stickers"],
        currentCatg: "All"
    },
    methods: {
        init: function() {
            app.updateNewItems();
            app.updateFilteredProducts();
        },
        updateNewItems: function() {
            // sort all of the products by date and then take the 10 newest
            this.newItems = [];
            var arr = [];
            // 1 because of the test product (Need to fix that)
            for (var i = 1; i < this.products.length; i++) {
                arr.push(this.products[i]);
            }
            arr.sort(function(a, b) {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });

            for (var i = 0; i < 10 && i < arr.length; i++) {
                this.newItems.push(arr[i]);
            }
        },
        updateNewItemPos: function(num) {
            this.newItemPos += num;
            // Checks
            if (this.newItemPos < 0) {
                this.newItemPos = 0;
            }
            if (
                this.newItems.length > 1 &&
                this.newItemPos > this.newItems.length - 1
            ) {
                this.newItemPos = this.newItems.length - 1;
            }
        },
        updateFilteredProducts: function() {
            this.filteredProducts = [];
            for (var i in this.products) {
                if (
                    this.products[i].catg === this.currentCatg ||
                    this.currentCatg === "All"
                ) {
                    this.filteredProducts.push(this.products[i]);
                }
            }
            app.updateDisplayedProducts();
        },
        updateDisplayedProducts: function() {
            this.displayedProducts = [];
            this.displayPos = 0;
            app.addDisplayedProducts();
        },
        addDisplayedProducts: function() {
            if (this.filteredProducts.length - this.displayPos <= 12) {
                this.displayedProducts = JSON.parse(
                    JSON.stringify(this.filteredProducts)
                );
                for (var i = 0; i < this.displayedProducts.length; i++) {
                    this.displayedProducts[i].delay = i - this.displayPos;
                }
                this.displayPos = this.filteredProducts.length;
            } else {
                // The ternary is for the test product. I really need to fix that.... :/
                for (var i = 0; i < (this.displayPos === 0 ? 13 : 12); i++) {
                    this.displayedProducts.push(
                        this.filteredProducts[i + this.displayPos]
                    );
                    this.displayedProducts[i + this.displayPos].delay = i;
                }
                this.displayPos = this.displayedProducts.length;
            }
        },
        updateViewedProduct: function() {
            this.viewedProduct = app.products.filter(function(el) {
                return el.id === app.currentViewedProduct;
            })[0];
        },
        viewProduct: function(id) {
            this.currentViewedProduct = id;
            app.updateViewedProduct();
            this.productViewOpen = true;
        }
    }
});

app.init();