# longshadow.less

---

a simple mixin creating a longshadow effect, inspired by ![http://mattlambert.ca/blog/create-a-flat-long-shadow-icon-with-css3/](Matt Lambert)

## short guide

```LESS
h1.shadow {
    // creates a #555 colored shadow, 50px long
    .longshadow(50,#555);
}

.awesomeIcon {
    // creates a #f19103 - colored icon
    .longshadowIcon(@color: #f19103);
}
```