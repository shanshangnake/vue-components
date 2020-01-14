<template>
  <div>
    <div class="bar">
      <a class="list-icon" :class="{'active': layout == 'list'}" @click="layout = 'list'"></a>
      <a class="grid-icon" :class="{'active': layout == 'grid'}" @click="layout = 'grid'"></a>
    </div>
    <ul :class="layout">
      <li v-for="(a, index) in articles" :key="index">
        <a :href="a.url" target="_blank">
          <img :src="layout == 'grid' ? a.image.large : a.image.small" alt="">
          <p v-if="layout == 'list'">{{a.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Deatl",
  data: () => ({
    layout: 'list',
    articles: [
      {
        title: 'first',
        url: "https://www.runoob.com/html/html-tutorial.html",
        image: {
            "large": "https://static.runoob.com/images/mix/htmlbig.png",
            "small": "https://static.runoob.com/images/icon/html.png"
        }
      },
      {
        title: 'first',
        url: "https://www.runoob.com/html/html-tutorial.html",
        image: {
            "large": "https://static.runoob.com/images/mix/htmlbig.png",
            "small": "https://static.runoob.com/images/icon/html.png"
        }
      },
      {
        title: 'first',
        url: "https://www.runoob.com/html/html-tutorial.html",
        image: {
            "large": "https://static.runoob.com/images/mix/htmlbig.png",
            "small": "https://static.runoob.com/images/icon/html.png"
        }
      }
    ]
  }),
}
</script>
<style scoped>
a, a:visited {
  outline: none;
  color: #389dc1;
}
a:hover {
  text-decoration: none;
}
.bar {
  /* background-color: #5597b4; */
  background-image:linear-gradient(bottom, #5597b4 #6e93a0);
  /* background-position: 45edg; */
  /* box-shadow: 0 1px 1px #ccc; */
  /* border-radius: 2px; */
  width: 580px;
  padding: 10px;
  margin: 0px auto 25px;
  position: relative;
  line-height: 1;
  text-align: right;
}

.bar a {
  background: #4987a1 center center no-repeat;
  width: 32px;
  height: 32px;
  display: inline-block;
  text-decoration: none !important;
  margin-right: 5px;
  border-radius: 2px;
  cursor: pointer;
}
.bar a.active {
  background-color: #c14694;
}
.bar a.list-icon{
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzNkFCQ0ZBMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzNkFCQ0ZCMTBCRTExRTM5NDk4RDFEM0E5RkQ1NEZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM2QUJDRjgxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM2QUJDRjkxMEJFMTFFMzk0OThEMUQzQTlGRDU0RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7h1bLqAAAAWUlEQVR42mL8////BwYGBn4GCACxBRlIAIxAA/4jaXoPEkMyjJ+A/g9MDJQBRhYg8RFqMwg8RJIUINYLFDmBUi+ADQAF1n8ofk9yIAy6WPg4GgtDMRYAAgwAdLYwLAoIwPgAAAAASUVORK5CYII=);
}

.bar a.grid-icon{
  background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBEQkMyQzE0MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBEQkMyQzE1MTBCRjExRTNBMDlGRTYyOTlBNDdCN0I4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MERCQzJDMTIxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MERCQzJDMTMxMEJGMTFFM0EwOUZFNjI5OUE0N0I3QjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4MjPshAAAAXklEQVR42mL4////h/8I8B6IGaCYKHFGEMnAwCDIAAHvgZgRyiZKnImBQsACxB+hNoDAQyQ5osQZIT4gH1DsBZABH6AB8x/JaQzEig++WPiII7Rxio/GwmCIBYAAAwAwVIzMp1R0aQAAAABJRU5ErkJggg==);
}
ul.list {
  list-style: none;
  width: 500px;
  margin: 0 auto;
  text-align: left;
} 
ul.list li {
  border-bottom: 1px solid #dddddd;
  padding: 10px;
  overflow: hidden;
}
 ul.list li img {
   width: 120px;
   height: 120px;
   float: left;
   border: none;
 }
 ul.list li p {
   margin-left: 135px;
   font-weight: bold;
   color: #6e7a7f;
 }
 ul.grid {
   list-style: none;
   width: 570px;
   margin: 0 auto;
   text-align: center;
 }
 ul.grid li {
   padding: 2px;
   float: left;
 }
 ul.grid li.img {
   width: 280px;
   height: 280px;
   object-fit: cover;
   display: block;
   border: none;
 }
</style>