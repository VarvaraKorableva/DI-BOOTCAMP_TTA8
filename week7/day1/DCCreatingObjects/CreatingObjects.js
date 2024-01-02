/*
In this exercise, you will use object oriented programming concepts to define and 
use a custom object in JavaScript.

Create a class named Video. The class should be constructed with the following parameters:
title (a string)
uploader (a string, the person who uploaded it)
time (a number, the duration of the video - in seconds)
Create a method called watch() which displays a string as follows:
“uploader parameter watched all time parameter of title parameter!”
Instantiate a new Video instance and call the watch() method.
Instantiate a second Video instance with different values.
Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
Think of the best data structure to save this information within the array.
Bonus: Loop through the array to instantiate those instances.
*/
class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch() {
        return `${this.uploader} watched all ${this.time} of ${this.title}!`
    }
}
/*
const littleVideo = new Video('Small video', 'Varvara', 180)
console.log(littleVideo.watch())

const secondVideo = new Video('Long video', 'Maxim', 2400)
console.log(secondVideo.watch())

const thirdVideo = new Video('Travel', 'Ilia', 300)
const fourthVideo = new Video('TLV', 'Sergey', 260)
const fifthVideo = new Video('Moscow', 'Natella', 1400)*/

const videosData = [
    { title: 'Travel', uploader: 'Ilia', time: 300 },
    { title: 'TLV', uploader: 'Sergey', time: 260 },
    { title: 'Moscow', uploader: 'Natella', time: 1400 },
    { title: 'Long video', uploader: 'Maxim', time: 1600 },
    { title: 'Small video', uploader: 'Varvara', time: 800 },
]

const videos = videosData.map(video => new Video(video.title, video.uploader, video.time))

videos.forEach(video => console.log(video.watch()));