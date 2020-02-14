# VocaNews
A [React-Native](https://facebook.github.io/react-native/) news app which collects articles to read of multiple blogs related to [VOCALOID](https://en.wikipedia.org/wiki/Vocaloid). 

---

# Installation
```
$ npm install -g expo-cli
```

```
$ npm install
```

```
$ expo start
```

Start iOS emulation:
```
$ exp start --ios [options]
```

Start Android emulation:
```
$ exp start --android [options]
```

---

# Features

The app automatically collects data from multiple pre-definied blogs via their RSS feeds. An option to provide the user to add their own sources is not intended yet since the app is focused around VOCALOID as a topic and should include such sources.

- **Home:**
Shows a list of all blogs. It gives information about the name and a short discription of given blogs. Clicking on those brings you to the feed screen.

- **Feed:**
Shows a list of all recent blog posts of given blog including a thumbnail image, title of said post, and publishing date. Clicking on those brings you to the entry screen.

- **Entry:**
Shows the full content of given blog posts including links and images. Clicking on links redirects you to your browser.

## Work in progress
### Delete & Save 
An option to delete and save blog posts from your feed with a swipe gesture.

### Categories
An option to sort blogs and blog posts via categories e.g. language.

# Copyright
The app grabs third party materials from [VNN](https://www.vocaloidnews.net/), [Paraíso Vocaloid](https://paraisovocaloid.wordpress.com/), [Piapro](http://blog.piapro.net/), [Crypton Future Media](https://ec.crypton.co.jp) and more. This includes all of their texts and images used in this app. I don't own any rights to given material despite the code and the app itself. 