import React from 'react'
import "../index.css"

function Intro() {
  return (
    <div className='introDiv' id="intro">
        <h1 className='introTitle'>About Me</h1>
        <p>Hi! I'm Susan Brethauer! In May of 2023 I completed my BS in Computer Science at the University at Buffalo with a concentration in software. 
          In my time at university, I developed my love for front-end web development as I built many applications, mostly webapps. 
          In Spring of 2023, I collaborated in a team of four students to develop BetterReads, a new book web app for readers to document their latest reads, 
          find and make reviews, and have an all around better user experience than Goodreads. This application earned me and my team an award of Third Place 
          at the Computer Science Department Annual Demo Day event at which we competed against other undergraduate students with long term, multi-semester 
          projects as well as graduate students.
        </p>
        <h1 className='intro2Title'>Personal Interests</h1>
        <p>
        Outside of programming I have a lot of hobbies. I love to read, crochet, paint, play video games, and hang out with my cat, Luna. My favorite book 
        genre is Fantasy and my favorite series is Rick Riordan's books featuring Percy Jackson. They are the books that made me fall in love with reading! 
        I crochet a lot of different things, but my favorite things to make are fingerless gloves and amigurumi octopi. My most recent accomplishment is 
        the completion of a blanket and decorative flowers for my office. While my favorite video game of all time is Minecraft, my favorite genre is MMORPGS. 
        I love working in a rich virtual world with lots of other people with whom I can interact. I am currently playing Guild Wars 2, Cult of the Lamb, 
        Minecraft, and Counter-Strike: Global Offensive.
        </p>
        {/* <h3>Before University: My Journey</h3>
        <p>
            My introduction to web development came to me through tumblr themes. In middle school I was very into tumblr, just got my first laptop,
            and was obcessed with trying to make the best tumblr themes. I would find free ones and try and reverse engineer what was happening when I changed
            numbers, removed lines, and tried to add my own. This curiosity lead me to minecraft command blocks, they were relativly new but learning the 
            language of the blocks was something I had a lot of fun doing when I was young. At my high school the first computer science course was added when i was
            a sophomore, it was AP Computer Science Princeples, all in a block based programming language that I hated, but we did have a section where we made our
            own webpages with HTML, and I was hooked. It immidiatly became my new favorite hobby and after a while I had a whole network of both earnest attempts at 
            a nice looking site and some of the most intentially hard to look at pages on the planet. I continuted this hobby through most of college, whenever I was bored
            I would make a simple webpage clicker game, or a blog for the hobby that I had picked up that week. I never did anything with them, but it helped me to hone my
            skilled with web development. Junior year of high school my school added AP Computer Science A, a class in Java. I had never touched real code before and I was
            so excited, this class taught me a lot, though the teacher was also learning along with us, so it was a lot of self teaching, which was great pratice for later on.
            The summer after Junior year I went to a week long bootcamp at Stevens University and learned a ton. We mostly did python and that week went through most of my 
            first semester at university. For most of my senior year I designed websites and helped write a bot to fill out surveys in python. 
        </p> */}
    </div>
  )
}

export default Intro