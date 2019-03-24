import Vue from "vue";

const sliderControls = {
    template: '#p-slider-controls'
}

const sliderThumbs = {
    template: '#p-slider-thumbs',
    props: {
        works: Array
    },
    comuted: {
    },
    methods: {
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
    components: {
      sliderControls,
      sliderThumbs
    },
    created() {
    }
}

const sliderTags = {
    template: '#p-slider-tags',
    props: {
        skills: String
    },
    created() {
        console.log('this.skills', this.skills);
    }
}

const workInfo = {
    template: '#p-slider-info',
    components: {
        sliderTags
    },
    props: {
        data: Array,
        currentWork: Object
    }
}

new Vue({
    el: '#portfolio-slider',
    template: '#p-slider',
    data() {
        return {
            works: [],
            currentWork: {}
        }
    },
    computed: {
        
    },
    components: {
        workSwitcher,
        workInfo
    },
    methods: {
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

        this.currentWork = this.works[0]
    }
})