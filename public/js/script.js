(function() {
  "use strict";

  // Declare global variables
  var body = document.body,
      navBar = document.createElement("nav"),
      content = document.querySelector(".content"),
      menuButton = document.getElementById("toggle"),
      menuOpen = false,
      activeSubmenu;

  //Get JSON DATA    
  var getJSON = function(url, callback) {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState !== 4 || req.status !== 200) {
        return;
      }
      if (req.readyState === 4) {
        callback(JSON.parse(req.responseText));
      }
    };

    req.open("GET", url);
    req.send();
  };

  //Create ul from list vble    
  var  buildList = function (listItems) {
    var ul = document.createElement('ul');

    listItems.forEach(function (item) {
      //create li
      var li = document.createElement('li');
      //create link
      var a = document.createElement('a');
      a.text = item.label;
      if (item.items && item.items.length) {
          a.classList.add('chevron');
      } else   {
        a.href = item.url;
      }
      li.appendChild(a);

      if (item.items && item.items.length > 0) {
        //primary item
        li.classList.add('primary-item');
        li.appendChild(buildList(item.items));
      } 
      ul.appendChild(li);
    });

    return ul;
  };

  // Add li with image to top navigation
  var addImageItem = function (list, source, title, itemclass,pos) {
    var img = document.createElement('img');
    var li = document.createElement('li');

    img.src = source;
    img.title = title;
    li.appendChild(img);
    li.classList.add(itemclass);
    if(pos=='first'){
      list.insertBefore(li, list.firstChild);
    }else{
      list.appendChild(li);
    }    
  };

  // Add li with button to top navigation 
  var addButtonItem = function(list) {
	var li = document.createElement('li');
    	li.innerHTML='<table><tbody><tr><td><input type="button" value="REQUEST A DEMO" class="btn btn-solid"></td></tr><tr><td><span>Product Inquiries: <strong>(866) 723-9067</strong></span></td></tr></tbody></table>';
    	li.classList.add('topbuttonbox');
    	list.appendChild(li);
  };

  // Build Navigation
  var buildNav = function (navBarSpec) {
    var list = buildList(navBarSpec.items);

    addImageItem(list, 'img/livevox-logo.png', 'LIVEVOX','logo','first');
    navBar.appendChild(list);
    navBar.classList.add('navbar');
    navBar.querySelector('ul').classList.add('primary-nav');

    var lis = Array.prototype.slice.call(navBar.querySelectorAll('li > ul'), 0);
      lis.forEach(function (li) {
        li.classList.add('secondary-nav');
    });

    addImageItem(list, 'img/img_search.png', 'Search Icon','search','last');
    addButtonItem(list);

    body.insertBefore(navBar, body.firstChild);
    initDropDownMenu();
  };
  

  //animation nav in mobile
  var animate = function (event) {
    var activeListItem = document.querySelector('.primary-item.active');
    var logo = document.querySelector('.mobile-bar > img');
    var target = event.target;
    var elements = [logo, target, navBar, body, content];

    elements.forEach(function (elem) {
      elem.classList.toggle('active');
    });

    menuOpen = !!body.classList.contains('active');
    if (activeListItem) {
      //Clean menu
      var activess = Array.prototype.slice.call(document.querySelectorAll('ul .active'), 0);
      actives.forEach(function (activeitem) {
        activeitem.classList.remove('active');
      });
    }
  };

  //Show secondary menu
  var showSecNav = function (event) {

    var link = event.target.querySelector('a');
    var nextSibling = event.target.nextSibling;

    // Recursive event delegation from the <li" Element to the <a>
    if (event.target.tagName === 'LI') {
      event.preventDefault();
      link.click();
      return;
    }

    if (nextSibling) {
       //Disable other active menu
      if (activeSubmenu && activeSubmenu !== nextSibling) {
        activeSubmenu.classList.remove('active');
        nextSibling.classList.remove('active');
        //clean menu
        var actives = Array.prototype.slice.call(document.querySelectorAll('ul .active'), 0);
        actives.forEach(function (elem) {
          elem.classList.remove('active');
        }); 
      }
      //Enable clicked menu
      nextSibling.parentElement.classList.toggle('active');
      event.target.classList.toggle('active');
      nextSibling.classList.toggle('active');
      activeSubmenu = nextSibling;

    }
  };

  //On click on secondary navigation shows an alert with the second section name
  var alertSubmenu = function (event) {
    alert(event.target.text);
  };

  //Show mobile menu
  var toggleMenu = function (event) {
    if (menuOpen) {
      menuButton.click();
    }
    menuOpen = false;
  };

  // Initializer
  var initDropDownMenu = function () {
    var mainList = document.querySelector('.primary-nav');
    var secondaryList = document.querySelector('.secondary-nav');
    menuButton.addEventListener('click', animate, false);
    content.addEventListener('click', toggleMenu, false);
    mainList.addEventListener('click', showSecNav, false);
    secondaryList.addEventListener('click', alertSubmenu, false);
  };

  //Load navigation when DOM ready
  document.addEventListener("DOMContentLoaded", function() {
    getJSON("/api/nav.json", buildNav);
  });

}());
