<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
      <div id="navbar">
        <ul class="nav navbar-nav">
          <!-- { this.props.gameState == 'game' ? (
          <li id="nav-choosecharacters">
            <a href="javascript:;" onClick="{this.props.handleEndGame}">
              <span class="glyphicon glyphicon-small glyphicon-arrow-left"></span> Back to menu
            </a>
          </li>
          ) : -->
          <li id="nav-kanaquiz"><p class="nav navbar-text">Kana Pro</p></li>
          <!-- } -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
#navbar ul li {
  font-size: 1.2em;
  @media (max-width: 768px) {
    font-size: 1em;
  }
  .glyphicon {
    font-size: 0.9em;
    color: #d9534f;
  }
}
.navbar-inverse {
  background-color: #333;
}
.hidden-nano {
  @media (max-width: 390px) {
    display: none;
  }
}
.nav a {
  color: #fff !important;
}
.nav a:hover {
  color: #bbb !important;
}
.navbar-text {
  color: #fff !important;
  cursor: default;
  margin-bottom: 0;
}
#nav-kanaquiz a:hover {
  cursor: default;
}
// From http://getbootstrap.com/examples/non-responsive/non-responsive.css
.container .navbar-header,
.container .navbar-collapse {
  margin-right: 0;
  margin-left: 0;
}

/* Always float the navbar header */
.navbar-header {
  float: left;
}

/* Undo the collapsing navbar */
.navbar-collapse {
  display: block !important;
  height: auto !important;
  padding-bottom: 0;
  overflow: visible !important;
}

.navbar-toggle {
  display: none;
}
.navbar-collapse {
  border-top: 0;
}

.navbar-brand {
  margin-left: -15px;
}

/* Always apply the floated nav */
.navbar-nav {
  float: left;
  margin: 0;
}
.navbar-nav > li {
  float: left;
}
.navbar-nav > li > a {
  padding: 15px;
}

/* Redeclare since we override the float above */
.navbar-nav.navbar-right {
  float: right;
}

/* Undo custom dropdowns */
.navbar .navbar-nav .open .dropdown-menu {
  position: absolute;
  float: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-width: 0 1px 1px;
  border-radius: 0 0 4px 4px;
  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
}
.navbar-default .navbar-nav .open .dropdown-menu > li > a {
  color: #333;
}
.navbar .navbar-nav .open .dropdown-menu > li > a:hover,
.navbar .navbar-nav .open .dropdown-menu > li > a:focus,
.navbar .navbar-nav .open .dropdown-menu > .active > a,
.navbar .navbar-nav .open .dropdown-menu > .active > a:hover,
.navbar .navbar-nav .open .dropdown-menu > .active > a:focus {
  color: #fff !important;
  background-color: #428bca !important;
}
.navbar .navbar-nav .open .dropdown-menu > .disabled > a,
.navbar .navbar-nav .open .dropdown-menu > .disabled > a:hover,
.navbar .navbar-nav .open .dropdown-menu > .disabled > a:focus {
  color: #999 !important;
  background-color: transparent !important;
}
</style>
