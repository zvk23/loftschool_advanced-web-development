import Vue from "vue";

const sliderControls = {
    template: '#p-slider-controls',
    methods: {
    }
}

const sliderThumbs = {
    template: '#p-slider-thumbs',
    props: {
        works: Array,
        currentWork: Object
    },
    comuted: {
    },
    methods: {
        previewClick() {
            return this.$emit('previewClick', this.currentWork.id)
        }
    },
    created() {
    }
}

const workSwitcher =  {
    template: '#p-slider-switcher',
    data() {
        return {
        }
    },
    props: {
        works: Array,
        currentWork: Object
    },
    computed: {
        reversedWorks() {
            const works = [...this.works]
            return works.reverse();
        }
    },
    components: {
      sliderControls,
      sliderThumbs
    },
    methods: {
    },
    created() {
    }
}

const sliderTags = {
    template: '#p-slider-tags',
    props: {
        skills: Array
    },
    methods: {
    },
    created() {
    }
}

const workInfo = {
    template: '#p-slider-info',
    components: {
        sliderTags
    },
    props: {
        currentWork: Object
    },
    computed: {
        skillsArray() {
            return this.currentWork.skills.split(',')
        }
    },
    created() {
        console.log(this.skillsArray);
    }
}

new Vue({
    el: '#portfolio-slider',
    template: '#p-slider',
    data() {
        return {
            works: [],
            currentIndex: 0
        }
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex ]
        }
    },
    watch: {
        currentIndex(value) {
            this.infiniteWorksLoop(value); 
        }
    },
    components: {
        workSwitcher,
        workInfo
    },
    methods: {
        clickOnThumbs(id) {
            this.currentIndex = id - 1;
        },
        infiniteWorksLoop(value) {
            const amounts = this.works.length - 1;
            if(value > amounts) this.currentIndex = 0;
            if(value < 0) this.currentIndex = amounts;
        },
        changeSlide(direction) {
            switch (direction) {
                case 'next':
                    this.currentIndex--
                    break;
                case 'prev':
                    this.currentIndex++
                    break;
            
                default:
                    break;
            }
        },
        getData() {
            const data = require('../data/works.json');

            this.works = this.makeArrayWithRequiredImages(data);
        },
        makeArrayWithRequiredImages(data) {
            return data.map(item => {
                const requiredPic = require(`../images/content/portfolio/${item.photo}`);
                item.photo = requiredPic;
                return item;
            })
        }
    },
    created() {
        this.getData();
    }
})