
Responsive React Max Width built with Bootstrap 5. Learn how to make a container or an element max width within its parent.

Check out [React Bootstrap Max Width Documentation](https://mdbootstrap.com/docs/react/extended/max-width/) for detailed instructions & even more examples.


## Examples

Width utilities are generated from the utility API in `_utilities.scss`. Predefined classes support `25%`, `50%`, `75%`, `100%`, and `auto` by default. In order to make an element take the entire width of its parent add a `.w-100` class to it.

![Bootstrap Dark Mode](https://mdbootstrap.com/img/Marketing/github/max-width/basic.png)

```js
import React from 'react';

export default function App() {
  return (
    <>
      <div className="w-25 p-3" style={{ backgroundColor: "#eee" }}>Width 25%</div>
      <div className="w-50 p-3" style={{ backgroundColor: "#eee" }}>Width 50%</div>
      <div className="w-75 p-3" style={{ backgroundColor: "#eee" }}>Width 75%</div>
      <div className="w-100 p-3" style={{ backgroundColor: "#eee" }}>Width 100%</div>
      <div className="w-auto p-3" style={{ backgroundColor: "#eee" }}>Width auto</div>
    </>
  );
}
```

You can also use `max-width: 100%;` utilities as needed.

```js
import React from 'react';

export default function Image() {
  return (
    <>
      <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="mw-100" alt="wild landscape" />
    </>
  );
}
```

## Max width relative to viewport

You can also use utilities to set the width and height relative to the viewport with the `vw` (viewport width) values.

```js
import React from 'react';

export default function Viewport() {
  return (
    <>
      <div className="min-vw-100">Min-width 100vw</div>
      <div className="min-vh-100">Min-height 100vh</div>
      <div className="vw-100">Width 100vw</div>
      <div className="vh-100">Height 100vh</div>
    </>
  );
}
```

## How to use?

1. Download MDB React - free UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[?????? Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)



___

## More extended Bootstrap documentation

<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/code/">React Bootstrap Code</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gallery/">React Bootstrap Gallery</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/hamburger-menu/">React Bootstrap Hamburger Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/jumbotron/">React Bootstrap Jumbotron</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/maps/">React Bootstrap Maps</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/mega-menu//">React Bootstrap Mega Menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/media-object/">React Bootstrap Media object</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/multiselect/">React Bootstrap Multiselect</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/masonry/">React Bootstrap Masonry</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/contact/">React Bootstrap Contact form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/gradients/">React Bootstrap Gradients</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/pagination/">React Bootstrap Pagination</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/panels/">React Bootstrap Panels</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/social-media/">React Bootstrap Social Media icons & buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/search/">React Bootstrap Search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-sort/">React Bootstrap Table sort</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-responsive/">React Bootstrap Table responsive</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-scroll/">React Bootstrap Table scroll</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-search/">React Bootstrap Table search</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/textarea/">React Bootstrap Textarea</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/sidebar/">React Bootstrap Sidebar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/profiles/">React Bootstrap Profiles</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/dropdown-multilevel/">React Bootstrap Nested Dropdown</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/bootstrap-address-form/">React Bootstrap Address Form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/back-to-top">React Scroll Back to Top button</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/product-cards">React Product Cards</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/avatar">React Avatar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/carousel-with-thumbnails">React Carousel Slider with Thumbnails</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/chat">React Chat</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/comparison-table">React Comparison table</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/comments">React Comments</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/drawer">React Drawer</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/faq">React FAQ component / section</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/invoice">React Invoice</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/news-feed">React News feed</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/offcanvas">React Offcanvas</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/order-details">React Order details</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/page-transitions">React Page transitions</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/quotes">React Quotes</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/payment-forms">React Payment forms</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/select-with-custom-input">React Select with custom Input</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/square-buttons">React Square Buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/testimonial-slider">React Testimonial Slider</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/testimonials">React Testimonials / Reviews</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/bootstrap-survey-form">React Survey form</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/timeline">React Timeline</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/to-do-list">React To Do List</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/padding">React Padding</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/modal-size">React Modal Size</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/modal-backdrop">React Modal Backdrop</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/css-text-animations">React CSS Text Animations</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/video">React Video</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/modal-methods">React Modal Show, Close, Hide & Toggle</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/card-deck">React Card deck</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/table-filter">React Table filter</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/slider">React Slider</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/logo">React Logo</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/popup">React Popup</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/weather">React Weather</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/hero">React Hero</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/max-width">React Max Width</a></li>
</ul>