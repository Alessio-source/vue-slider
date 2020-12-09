var app = new Vue({
  el: '#app',
  data: {
    imageIndex: 0,
    images: [
      "https://www.jovittorio.com/wp-content/uploads/2018/01/fotografare-paesaggi-1.jpg",
      "https://www.jovittorio.com/wp-content/uploads/2018/02/v%C3%B6lkermarkt_stausee.jpg",
      "https://www.altraeta.it/over50/wp-content/uploads/2018/11/dolomites-2580866_1920-1024x638.jpg",
      "https://www.marathonclubtrento.com/wp/wp-content/uploads/2018/07/riva-hm-2017-0-1024x638.jpg"
    ]
  },
  methods: {
    nextClick: function (){
      clearInterval(this.interval);
      this.nextImg();
    },
    prevClick: function (){
      clearInterval(this.interval);
      this.prevImg();
    },
    nextImg: function (){
      this.imageIndex++;

      if (this.imageIndex == this.images.length) {
        this.imageIndex = 0;
      }
    },
    prevImg: function (){
      this.imageIndex--;

      if (this.imageIndex < 0) {
        this.imageIndex = this.images.length - 1;
      }

    }
  },
  created () {
    this.interval = setInterval(this.nextImg, 3000)
  },
})
