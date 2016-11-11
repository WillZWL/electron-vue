<style scoped>
.sidebar .sidebar-nav.navbar-collapse {
  padding-left: 0;
  padding-right: 0;
}
.sidebar .sidebar-search {
  padding: 15px;
}
.sidebar ul li {
  border-bottom: 1px solid #e7e7e7;
}
.sidebar ul li a.active {
  background-color: #eeeeee;
}
.sidebar .arrow {
  float: right;
}
.sidebar .fa.arrow:before {
  content: "\f104";
}
.sidebar .active > a > .fa.arrow:before {
  content: "\f107";
}
.sidebar .nav-second-level li,
.sidebar .nav-third-level li {
  border-bottom: none !important;
}
.sidebar .nav-second-level li a {
  padding-left: 37px;
}
.sidebar .nav-third-level li a {
  padding-left: 52px;
}
</style>
<template>
  <div class="navbar-default sidebar" role="navigation">
    <div class="sidebar-nav navbar-collapse collapse">
      <ul class="nav" id="side-menu">
        <li class="sidebar-search">
          <div class="input-group custom-search-form">
            <input type="text" class="form-control" placeholder="Search...">
            <span class="input-group-btn">
            <button class="btn btn-default" type="button">
              <i class="fa fa-search"></i>
            </button>
          </span>
          </div>
          <!-- /input-group -->
        </li>
        <li>
          <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
        </li>
        <li>
          <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Order<span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <router-link to="/order-fulfilment">Order Fulfilment</router-link>
            </li>
          </ul>
          <!-- /.nav-second-level -->
        </li>
        <li>
          <a href="#"><i class="fa fa-sitemap fa-fw"></i>Product<span class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li>
              <a href="#">Price Overview</a>
            </li>
            <li>
              <a href="#">Product Overview</a>
            </li>
            <li>
              <a href="#">Upload Tool<span class="fa arrow"></span></a>
              <ul class="nav nav-third-level collapse">
                <li>
                  <a href="#">Upload Product</a>
                </li>
                <li>
                  <a href="#">Upload Marketplace SKU Mapping</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  var $ = window.$ = window.jQuery = require('jquery')
  export default {
    created () {
      $(function () {
        $('#side-menu').metisMenu()
      })

      $(function () {
        $(window).bind('load resize', function () {
          var topOffset = 50
          var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width
          if (width < 768) {
            $('div.navbar-collapse').addClass('collapse')
            topOffset = 100
          } else {
            $('div.navbar-collapse').removeClass('collapse')
          }

          var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1
          height = height - topOffset
          if (height < 1) height = 1
          if (height > topOffset) {
            $('#page-wrapper').css('min-height', (height) + 'px')
          }
        })

        var url = window.location

        var element = $('ul.nav a').filter(function () {
          return this.href === url
        }).addClass('active').parent()

        while (true) {
          if (element.is('li')) {
            element = element.parent().addClass('in').parent()
          } else {
            break
          }
        }
      })
    }
  }
</script>