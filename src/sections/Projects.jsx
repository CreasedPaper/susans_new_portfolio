import React from 'react'

function Projects() {
  return (
    <div className='projectsDiv' id='projects'>
        <h1>
            Projects
        </h1>
        <div className='projectList'>
            <div className='projectItem'>
                <h2 className='projectTitle'>BetterReads</h2>
                {/* <h3 className='projectSubtitle'> Description: </h3> */}
                <p className='projectDesciption'>
                    BetterReads is a social platform for readers to keep track of the books they have read, find new
                    books to read, write and read reviews, connect with friends, collect BookMarks(reading achievements),
                    and see their reading stats. I worked within a team of 4 over the course of a semester using React and Swagger API
                    to create what I once descibed as "goodreads but better" hence the name BetterReads. The inital inspriation came from 
                    my love of reading and firey hatred for goodreads. We wanted to create a platform that had easier to use UI, a simplified
                    book finding process, a really great recoomendation system, and reading statistics. Over the course of 4 months we worked
                    with a project manager who guided our vision and helped us manage our SCRUM board. At the end of the semester we were nominated
                    for the computer science department demo day where tons of projects, ranging from multi-semester projects that have seen multiple
                    development teams, graduate projects for real world clients, to exemplary single semester projects from courses. Our project won 
                    third place at demo day, it was an honor to stand beside my team to recieve an award that so few undergraduates ever do. This project
                    is our team's collective baby and we are continuing work on it outside of the context of the course we all took. We are working to find
                    BetterReads a new home off of the university servers but for the moment, BetterReads can be 
                    found <a href="https://webdev.cse.buffalo.edu/hci/teams/echidna/">here</a>
   
                </p>
            </div>
            <div className='projectItem'>
                <h2 className='projectTitle'>Medusa Cafe</h2>
                {/* <h4 className='projectSubtitle'> Description</h4> */}
                <p className='projectDesciption'>
                    Medusa Cafe is a casual cozy game where you play as a barista in a coffee shop owned by greek 
                    mythological legend, Medusa. In the game you can serve coffee to various patrons who are all
                    greek mythological figures, Artemis, Thanatos, Dionysus, and the Minotaur. Each day that you serve
                    them you are given another conversation that builds on your relationship over the course of 4 days. I worked
                    on this project in a team of 4 over the course of 1 semester in a class called "3D Game Developlment". The class had 
                    us all run through a 4 week crash course in Unreal Engine 5, followed by pitching game ideas, forming teams, constructing
                    gantt charts, and creating various tutorials for things we all learned how to do that we had to discover ourselves.
                    One of my tutorials (that you can see <a href="https://youtu.be/m2x69sxNoGk">here</a>) was about creating an in game 
                    clock that was not a timer, but like the current time in game. There did not seem to be any tutorials that I could find that 
                    did what I wanted so I made it! For the game I did the bulk of the game system creation. I built the conversation system from 
                    scratch by using math to turn an array into(functionally) a 2d array to hold dialog based on current day and relationship value. 
                    I also built the clock, character interaction system, the relationship system, and the menus for all of those things. I really
                    enjoyed working on this project and it worked out to be a really great learning experience. Luckily one of my teammates was quite 
                    the artist so we were able to have very cool custom art for all of our characters and logos so if you want to check Medusa Cafe 
                    out you can find it <a href="https://xcreasedpaper.itch.io/medusa-cafe">here</a>!
   
                </p>
            </div>
            <div className='projectItem'>
                <h2 className='projectTitle'>This Portfolio</h2>
                {/* <h4 className='projectSubtitle'> Description</h4> */}
                <p className='projectDesciption'>
                    Before the Spring 2023 semester I still was not entirly sure what I wanted to do out of college. I took a data mining class 
                    that I really enjoyed, a video game development class that I also liked, and a backend web development class that I loved, but 
                    I was not sure which was right for me. I did not want to continue on to grad school which would be a good 
                    choice if I wanted to persue data science and we had many guest speakers in my video game development class warning us off of
                    the industry (plus my knowlege of the crunch time crisis at most major game studios) made me wary to persue that. I really loved 
                    web development, learning how to do it from scratch in backend web development was a lot of fun, but getting to use 
                    frameworks to make bigger projects later was a lot of fun especially when I got to work in the frontend. In Spring 2023 I took 
                    Applied Human Computer Interaction, which was frontend web development and I loved it, the main issue I had was lack of backend control. 
                    The class was in react and where I found my team and made BetterReads. I have now used this knowlege to revamp and rebuild my portfolio into 
                    something I actually love to update!
   
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default Projects