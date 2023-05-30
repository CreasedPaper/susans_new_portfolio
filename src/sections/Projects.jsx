import React from 'react'

function Projects() {
  return (
    <div className='projectsDiv'>
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
                <h3 className='projectTitle'>Project 2</h3>
                {/* <h4 className='projectSubtitle'> Description</h4> */}
                <p className='projectDesciption'>
                    she lorem on my ipsum til i dolor
   
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default Projects