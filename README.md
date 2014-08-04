## How long was that drive?

A simple golf app to measure your shot distance

Try it out here: [https://fitztrev.github.io/how-long-was-that-drive/](https://fitztrev.github.io/how-long-was-that-drive/)

### About

This is a test of the HTML5 geolocation API to measure the straight-line distance between 2 points.

***Currently not very accurate. Don't rely on it. In my tests, the Geolocation API is not even remotely accurate enough to measure distance like this.***

### How to use

First, set the tee location. Then, go up to your ball and set where it landed. It will calculate the distance (in yards + meters) for how far the bar travelled.

### Why another golf app?

I don't like to use my phone on the course. I didn't want a full blown app to keep track of my score and every shot I hit. But for the few times I hit a monster shot off the tee and want to know how far it went, I wanted a simple solution.

## Development

```
$ git clone https://github.com/fitztrev/how-long-was-that-drive.git
$ cd how-long-was-that-drive
$ git submodule update --init
$ python -m SimpleHTTPServer 8000
```

Go to [http://localhost:8000](http://localhost:8000)