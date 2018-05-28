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
                name: "Test",
                artist: "Test",
                desc: "",
                cost: 0,
                catg: "Test",
                img: "https://picsum.photos/600/?random",
                date: "0"
            },
            {
                id: 0,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "T-shirts",
                img: "https://picsum.photos/400/?image=1069",
                date: "May 27, 2018"
            },
            {
                id: 1,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "T-shirts",
                img: "https://picsum.photos/400/?image=106",
                date: "May 27, 2018"
            },
            {
                id: 2,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "T-shirts",
                img: "https://picsum.photos/400/?image=107",
                date: "May 27, 2018"
            },
            {
                id: 3,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "T-shirts",
                img: "https://picsum.photos/400/?image=169",
                date: "May 27, 2018"
            },
            {
                id: 4,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "T-shirts",
                img: "https://picsum.photos/400/?image=179",
                date: "May 27, 2018"
            },
            {
                id: 5,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "T-shirts",
                img: "https://picsum.photos/400/?image=199",
                date: "May 27, 2018"
            },
            {
                id: 6,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "T-shirts",
                img: "https://picsum.photos/400/?image=19",
                date: "May 27, 2018"
            },
            {
                id: 7,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "T-shirts",
                img: "https://picsum.photos/400/?image=69",
                date: "May 27, 2018"
            },
            {
                id: 8,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "Caps",
                img: "https://picsum.photos/400/?image=299",
                date: "May 27, 2018"
            },
            {
                id: 9,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "Caps",
                img: "https://picsum.photos/400/?image=109",
                date: "May 27, 2018"
            },
            {
                id: 10,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "Caps",
                img: "https://picsum.photos/400/?image=279",
                date: "May 27, 2018"
            },
            {
                id: 11,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "Caps",
                img: "https://picsum.photos/400/?image=149",
                date: "May 27, 2018"
            },
            {
                id: 12,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "Caps",
                img: "https://picsum.photos/400/?image=116",
                date: "May 27, 2018"
            },
            {
                id: 13,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "Permanenet Straws",
                img: "https://picsum.photos/400/?image=189",
                date: "May 27, 2018"
            },
            {
                id: 14,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "Permanenet Straws",
                img: "https://picsum.photos/400/?image=161",
                date: "May 27, 2018"
            },
            {
                id: 15,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "Permanenet Straws",
                img: "https://picsum.photos/400/?image=160",
                date: "May 27, 2018"
            },
            {
                id: 16,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "Permanenet Straws",
                img: "https://picsum.photos/400/?image=129",
                date: "May 27, 2018"
            },
            {
                id: 17,
                name: "abc",
                artist: "xyz",
                desc:'desciption Here',
                cost: 15,
                catg: "Permanenet Straws",
                img: "https://picsum.photos/400/?image=1",
                date: "May 27, 2018"
            }
        ],
        filteredProducts: [],
        displayedProducts: [],
        displayPos: 0,
        catg: ["All", "T-shirts", "Caps", "Permanenet Straws"],
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