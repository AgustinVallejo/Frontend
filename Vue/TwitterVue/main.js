var feed = new Vue({
    el: '.feed',
    data: {
        tweets: [],
    },
    methods: {
        Post(txt){
            this.tweets.push(txt);
            this.content = ''
        }
    }
})