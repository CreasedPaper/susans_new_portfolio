import React from 'react'
import brds from './betterreads.png'
import mc from './mc2.png'
import collage from './collage2.png'


import b from './ratioBR.png'
import c from './ratioCL.png'
import m from './ratioMC.png'
import { useState } from 'react'


function Projects() {

    const [projectSelect, setProjectSelect] = useState(0)


    function changePanelA() {
        setProjectSelect(1)
    }
    function changePanelB() {
        setProjectSelect(2)
    }
    function changePanelC() {
        setProjectSelect(3)
    }
    function goBack() {
        setProjectSelect(0)
    }

    function choosePanel() {
        const currentState = projectSelect

        if(currentState == 0){
            return(
            <div className='flex-container2'>
            <div class="pica"><img src={b} alt="better reads screen shot" class="image3a" onClick={() => changePanelA()}/></div>
            <div class="picb"><img src={m} alt="better reads screen shot" class="image3b" onClick={() => changePanelB()}/></div>
            <div class="picc"><img src={c} alt="better reads screen shot" class="image3c" onClick={() => changePanelC()}/></div>
            </div>)
        } else if(currentState == 1) {
            return(
                <div class="flex-container">

                <div class="pic"><img src={brds} alt="better reads screen shot" class="image2"/>
                <div className='buttonHolder'>
                            <div className='littleButton' onClick={() => goBack()}>
                                Back
                            </div>
                    </div></div>
                <div class="text2">
                <h2 className='projectTitle'>BetterReads</h2>
                <div className='special'>
                    <p className='projectDesciption'>
                BetterReads is a social platform for readers to keep track of the books they have read, find new books to read, write and read reviews, connect with friends, collect BookMarks (reading achievements), and see their reading statistics. I worked within a team of 4 undergraduate students over the course of a semester using React and Swagger API to create what I once described as "Goodreads but Better" hence the name BetterReads. The initial inspiration came from my love of reading and fiery hatred for Goodreads. My team wanted to create a platform that had an easier to use UI, a simplified book finding process, a really great recommendation system, and reading statistics. Over the course of 4 months, we worked with a project manager who guided our vision and helped us manage our SCRUM board. At the end of the semester, we were nominated to participate in the Annual Computer Science Department Demo Day. This event hosts a full range of project participants, such as multi-semester projects that have seen multiple development teams, graduate projects for real world clients, and exemplary single semester projects from department courses. Our project was awarded Third Place at the event! It was an honor to stand beside my teammates to receive an award that so few undergraduates ever earn. This project is our team's collective ‘baby’ and we are continuing to work on it outside of the context of the course we took. We hope to find BetterReads a new home off of the university servers but for the moment, BetterReads can be found here
                    found <a href="https://webdev.cse.buffalo.edu/hci/teams/echidna/">here</a>
   
                </p>
                </div>
                </div>
            </div>
            )
        } else if(currentState == 2) {
            return(
                <div class="flex-container">

                <div class="pic"><img src={mc} alt="better reads screen shot" class="image2"/>
                <div className='buttonHolder'>
                            <div className='littleButton' onClick={() => goBack()}>
                                Back
                            </div>
                    </div></div>
                <div class="text2">
                <h2 className='projectTitle'>Medusa Cafe</h2>
                <div className='special'>
                    <p className='projectDesciption'>
                    Medusa Cafe is a casual cozy game where you play as a barista in a coffee shop owned by Greek mythological legend, Medusa. In the game you can serve coffee to various patrons who are all Greek mythological figures, such as Artemis, Thanatos, Dionysus, and the Minotaur. Each day you serve them, you are given another conversation that builds on your relationship. I worked on this project in a team of 4 over the course of one semester in a class called 3D Game Development. The class was  a 4-week crash course in Unreal Engine 5, followed by pitching game ideas, forming teams, constructing gantt charts, and creating various tutorials for things we all learned how to do that we had to discover ourselves. One of my tutorials  (that you can see <a href="https://youtu.be/m2x69sxNoGk">here</a>)
                was about creating an in-game clock that was not a timer, but  the current time in game. There did not seem to be any tutorials that I could find that did what I wanted to do, so I made it myself. For the game, I did the bulk of the game system creation. I built the conversation system from scratch by using math to turn an array into (functionally) a 2d array to hold dialog based on current day and relationship value. I also built the clock, character interaction system, the relationship system, and the menus for all of those things. I really enjoyed working on this project, and it worked out to be a really great learning experience. Luckily one of my teammates was quite the artist so we were able to have very cool custom art for all of our characters and logos so if you want to check Medusa Cafe out you can find it
                     <a href="https://xcreasedpaper.itch.io/medusa-cafe">here</a>!
   
                </p>
                </div>
                </div>
            </div>
            )
        } else if(currentState == 3) {
            return(
                <div class="flex-container">

                <div class="pic"><img src={collage} alt="better reads screen shot" class="image2"/>
                <div className='buttonHolder'>
                            <div className='littleButton' onClick={() => goBack()}>
                                Back
                            </div>
                    </div></div>
                <div class="text2">
                    <h2 className='projectTitle'>This Portfolio</h2>
                    <div className='special'>
                        <p className='projectDesciption'>
                        Before the Spring 2023 semester I still was not entirely sure what I wanted to do after college. Over my time at UB, I took a data mining class that I really enjoyed, a video game development class that I also liked, and a backend web development class that I loved. I didn’t have an immediate interest in grad school, which would be a good choice if I wanted to pursue data science. We had many guest speakers in my video game development class warning us off of the industry. In addition, I had knowledge of the crunch time crisis at most major game studios which made me wary to pursue that avenue. 
   
                        </p>
                    <p className='projectDesciption'>
                        In my final semester of college, I took Applied Human Computer Interaction, which was focused primarily on frontend web development through the use of React. Developing BetterReads (see description above) was when I realized how much I  love web development! 
                    </p>
                    </div>
                </div>
            </div>
            )
        }
    }

  return (
    <div className='projectsDiv' id='projects'>
        <h1 className='projects'>
            Projects
        </h1>
        <div className='projectList'>

            {/* <div class="flex-container">
                
                <div className='leftHolder'>
                    <div className="pic">
                        <img src={brds} alt="better reads screen shot" class="image2"/>
                        
                    </div>
                    <div className='buttonHolder'>
                            <div className='littleButton'>
                                Back
                            </div>
                    </div>
                    
                </div>
                <div class="text2">
                <h2 className='projectTitle'>BetterReads</h2>
                <div className='special'>
                    <p className='projectDesciption'>
                BetterReads is a social platform for readers to keep track of the books they have read, find new books to read, write and read reviews, connect with friends, collect BookMarks (reading achievements), and see their reading statistics. I worked within a team of 4 undergraduate students over the course of a semester using React and Swagger API to create what I once described as "Goodreads but Better" hence the name BetterReads. The initial inspiration came from my love of reading and fiery hatred for Goodreads. My team wanted to create a platform that had an easier to use UI, a simplified book finding process, a really great recommendation system, and reading statistics. Over the course of 4 months, we worked with a project manager who guided our vision and helped us manage our SCRUM board. At the end of the semester, we were nominated to participate in the Annual Computer Science Department Demo Day. This event hosts a full range of project participants, such as multi-semester projects that have seen multiple development teams, graduate projects for real world clients, and exemplary single semester projects from department courses. Our project was awarded Third Place at the event! It was an honor to stand beside my teammates to receive an award that so few undergraduates ever earn. This project is our team's collective ‘baby’ and we are continuing to work on it outside of the context of the course we took. We hope to find BetterReads a new home off of the university servers but for the moment, BetterReads can be found here
                    found <a href="https://webdev.cse.buffalo.edu/hci/teams/echidna/">here</a>
   
                </p>
                </div>
                </div>
            </div>
            <div class="flex-container">

                <div class="pic"><img src={mc} alt="better reads screen shot" class="image2"/></div>
                <div class="text2">
                <h2 className='projectTitle'>Medusa Cafe</h2>
                <div className='special'>
                    <p className='projectDesciption'>
                    Medusa Cafe is a casual cozy game where you play as a barista in a coffee shop owned by Greek mythological legend, Medusa. In the game you can serve coffee to various patrons who are all Greek mythological figures, such as Artemis, Thanatos, Dionysus, and the Minotaur. Each day you serve them, you are given another conversation that builds on your relationship. I worked on this project in a team of 4 over the course of one semester in a class called 3D Game Development. The class was  a 4-week crash course in Unreal Engine 5, followed by pitching game ideas, forming teams, constructing gantt charts, and creating various tutorials for things we all learned how to do that we had to discover ourselves. One of my tutorials  (that you can see <a href="https://youtu.be/m2x69sxNoGk">here</a>)
                was about creating an in-game clock that was not a timer, but  the current time in game. There did not seem to be any tutorials that I could find that did what I wanted to do, so I made it myself. For the game, I did the bulk of the game system creation. I built the conversation system from scratch by using math to turn an array into (functionally) a 2d array to hold dialog based on current day and relationship value. I also built the clock, character interaction system, the relationship system, and the menus for all of those things. I really enjoyed working on this project, and it worked out to be a really great learning experience. Luckily one of my teammates was quite the artist so we were able to have very cool custom art for all of our characters and logos so if you want to check Medusa Cafe out you can find it
                     <a href="https://xcreasedpaper.itch.io/medusa-cafe">here</a>!
   
                </p>
                </div>
                </div>
            </div>
            <div class="flex-container">

                <div class="pic"><img src={collage} alt="better reads screen shot" class="image2"/></div>
                <div class="text2">
                    <h2 className='projectTitle'>This Portfolio</h2>
                    <div className='special'>
                        <p className='projectDesciption'>
                        Before the Spring 2023 semester I still was not entirely sure what I wanted to do after college. Over my time at UB, I took a data mining class that I really enjoyed, a video game development class that I also liked, and a backend web development class that I loved. I didn’t have an immediate interest in grad school, which would be a good choice if I wanted to pursue data science. We had many guest speakers in my video game development class warning us off of the industry. In addition, I had knowledge of the crunch time crisis at most major game studios which made me wary to pursue that avenue. 
   
                        </p>
                    <p className='projectDesciption'>
                        In my final semester of college, I took Applied Human Computer Interaction, which was focused primarily on frontend web development through the use of React. Developing BetterReads (see description above) was when I realized how much I  love web development! 
                    </p>
                    </div>
                </div>
            </div> */}

            
            {choosePanel()}
            

            {/* <div className='flex-container2'>
            <div class="pica"><img src={brds} alt="better reads screen shot" class="image3a"/></div>
            <div class="picb"><img src={mc} alt="better reads screen shot" class="image3b"/></div>
            <div class="picc"><img src={collage} alt="better reads screen shot" class="image3c"/></div>
            </div> */}


            {/* <div class="container">
                <img src={brds} alt="better reads screen shot" class="image"/>
                <div class="overlay">
                    <div class="text">
                    <div className='projectItem'>
                <h2 className='projectTitle'>BetterReads</h2>
                <p className='projectDesciption'>
                BetterReads is a social platform for readers to keep track of the books they have read, find new books to read, write and read reviews, connect with friends, collect BookMarks (reading achievements), and see their reading statistics. I worked within a team of 4 undergraduate students over the course of a semester using React and Swagger API to create what I once described as "Goodreads but Better" hence the name BetterReads. The initial inspiration came from my love of reading and fiery hatred for Goodreads. My team wanted to create a platform that had an easier to use UI, a simplified book finding process, a really great recommendation system, and reading statistics. Over the course of 4 months, we worked with a project manager who guided our vision and helped us manage our SCRUM board. At the end of the semester, we were nominated to participate in the Annual Computer Science Department Demo Day. This event hosts a full range of project participants, such as multi-semester projects that have seen multiple development teams, graduate projects for real world clients, and exemplary single semester projects from department courses. Our project was awarded Third Place at the event! It was an honor to stand beside my teammates to receive an award that so few undergraduates ever earn. This project is our team's collective ‘baby’ and we are continuing to work on it outside of the context of the course we took. We hope to find BetterReads a new home off of the university servers but for the moment, BetterReads can be found here
                    found <a href="https://webdev.cse.buffalo.edu/hci/teams/echidna/">here</a>
   
                </p>
            </div>
                </div>
            </div>
            </div> */}
{/* 
            <div className='projectItem'>
                <h2 className='projectTitle'>BetterReads</h2>

                <p className='projectDesciption'>
                BetterReads is a social platform for readers to keep track of the books they have read, find new books to read, write and read reviews, connect with friends, collect BookMarks (reading achievements), and see their reading statistics. I worked within a team of 4 undergraduate students over the course of a semester using React and Swagger API to create what I once described as "Goodreads but Better" hence the name BetterReads. The initial inspiration came from my love of reading and fiery hatred for Goodreads. My team wanted to create a platform that had an easier to use UI, a simplified book finding process, a really great recommendation system, and reading statistics. Over the course of 4 months, we worked with a project manager who guided our vision and helped us manage our SCRUM board. At the end of the semester, we were nominated to participate in the Annual Computer Science Department Demo Day. This event hosts a full range of project participants, such as multi-semester projects that have seen multiple development teams, graduate projects for real world clients, and exemplary single semester projects from department courses. Our project was awarded Third Place at the event! It was an honor to stand beside my teammates to receive an award that so few undergraduates ever earn. This project is our team's collective ‘baby’ and we are continuing to work on it outside of the context of the course we took. We hope to find BetterReads a new home off of the university servers but for the moment, BetterReads can be found here
                    found <a href="https://webdev.cse.buffalo.edu/hci/teams/echidna/">here</a>
   
                </p>
            </div>
            <div className='projectItem'>
                <h2 className='projectTitle'>Medusa Cafe</h2>

                <p className='projectDesciption'>
                Medusa Cafe is a casual cozy game where you play as a barista in a coffee shop owned by Greek mythological legend, Medusa. In the game you can serve coffee to various patrons who are all Greek mythological figures, such as Artemis, Thanatos, Dionysus, and the Minotaur. Each day you serve them, you are given another conversation that builds on your relationship. I worked on this project in a team of 4 over the course of one semester in a class called 3D Game Development. The class was  a 4-week crash course in Unreal Engine 5, followed by pitching game ideas, forming teams, constructing gantt charts, and creating various tutorials for things we all learned how to do that we had to discover ourselves. One of my tutorials  (that you can see <a href="https://youtu.be/m2x69sxNoGk">here</a>)
                was about creating an in-game clock that was not a timer, but  the current time in game. There did not seem to be any tutorials that I could find that did what I wanted to do, so I made it myself. For the game, I did the bulk of the game system creation. I built the conversation system from scratch by using math to turn an array into (functionally) a 2d array to hold dialog based on current day and relationship value. I also built the clock, character interaction system, the relationship system, and the menus for all of those things. I really enjoyed working on this project, and it worked out to be a really great learning experience. Luckily one of my teammates was quite the artist so we were able to have very cool custom art for all of our characters and logos so if you want to check Medusa Cafe out you can find it
                     <a href="https://xcreasedpaper.itch.io/medusa-cafe">here</a>!
   
                </p>
            </div>
            <div className='projectItem'>
                <h2 className='projectTitle'>This Portfolio</h2>

                <p className='projectDesciption'>
                Before the Spring 2023 semester I still was not entirely sure what I wanted to do after college. Over my time at UB, I took a data mining class that I really enjoyed, a video game development class that I also liked, and a backend web development class that I loved. I didn’t have an immediate interest in grad school, which would be a good choice if I wanted to pursue data science. We had many guest speakers in my video game development class warning us off of the industry. In addition, I had knowledge of the crunch time crisis at most major game studios which made me wary to pursue that avenue. 
   
                </p>
                <p className='projectDesciption'>
                In my final semester of college, I took Applied Human Computer Interaction, which was focused primarily on frontend web development through the use of React. Developing BetterReads (see description above) was when I realized how much I  love web development! 
                </p>
            </div> */}
        </div>

        
    </div>
  )
}

export default Projects