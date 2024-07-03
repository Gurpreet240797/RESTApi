const express = require('express')
const app = express()
const cors = require('cors');
const { v4: uuidv4 } = require('uuid')

app.use(cors());

const projects = {
    Items: [
	    {   
            github: 'https://github.com/Gurpreet240797/Mental-Health-Well-Being',
            ID: uuidv4(),
            description: "Created a web-based mental health support app with efficient patient access and support management using Aglie and Scrum methodology.",
            featured: true,
            projectName: "Mental Health Well Being",
            thumbnail: "https://cmha.ca/wp-content/uploads/2023/03/MicrosoftTeams-image-5.png",
            configuration: [], 
            tagLine: "Elevating Mental Health Support with Innovative Technology",
            conceptsUsed: ["Developed an application that accelerates patient access to mental health support while optimizing the handling of support requests from counselors and doctors, contributing to enhanced patient care and healthcare professional efficiency.","Modelled web service with a three-tier architecture using ReactJS, Java Spring Boot, and MongoDB, collaborated closely with the team to implement features, enhance functionality, and troubleshoot issues.","Collaborated with teams to optimize production strategies and devised a systematic approach for organizing and documenting future system requirements.","Successfully delivered the project utilizing Scrum methodology, resulting in the development of a web-based mental health support system."],
            tags: ["Spring Boot"], 
            images: ["https://www.planstreetinc.com/wp-content/uploads/2021/07/what-is-mental-health-1130x675.png"],
            isFeatured: true
        },
        {   
            github: 'https://github.com/Gurpreet240797/Automated-Hospital-Path-Labelling',
            ID: uuidv4(),
            description: "Developed an algorithm for Victoria Hospital that generates paths on floor maps while adhering to social distancing guidelines.",
            featured: false,
            projectName: "Hospital Path Labelling",
            thumbnail: "https://camo.githubusercontent.com/0d82889190f2cd08022b28be57575c617bed73464dd949a09b6fa962cdc28c6e/68747470733a2f2f73617265656e762d70726f6a656374732e73332e616d617a6f6e6177732e636f6d2f696d616765732f666c6f6f72506c616e2e706e67",
            configuration: [], 
            tagLine: "Intelligent Labelling Algorithm for generating and labelling paths.",
            conceptsUsed: ["Analyzed the Victoria Hospital floor map with over 300 rooms and transformed data points into a structured data model for labelling path to design optimal route for guiding patients to the rooms.","Utilized Java 11 to construct a graph data structure, reading data points from the file system. Researched and executed a graph connectivity algorithm to establish relationships.","Designed and executed an algorithm to identify cycles and bridges within the floor map graph.","Achieved an intelligent graph labeling strategy rooted in Robin's Theorem from graph theory."],
            tags: ["Graphs"], 
            images: ["https://camo.githubusercontent.com/0d82889190f2cd08022b28be57575c617bed73464dd949a09b6fa962cdc28c6e/68747470733a2f2f73617265656e762d70726f6a656374732e73332e616d617a6f6e6177732e636f6d2f696d616765732f666c6f6f72506c616e2e706e67"],
            isFeatured: false
        },
        {   
            github: 'https://github.com/Gurpreet240797/SOEN-6441-Winter-22-Let-s-Play',
            ID: uuidv4(),
            description: "Created an Java app using Freelancer RESTful API for projects with real-time search, secure sessions, and Agile management.",
            featured: false,
            projectName: "RESTful Search Engine",
            thumbnail: "https://www.f-cdn.com/assets/main/en/assets/app-icons/icon-512x512.png",
            configuration: [], 
            tagLine: "Elevating Freelancer Project Discovery with Java Innovation",
            conceptsUsed: ["Collaborated and brainstormed in a team to design a robust Java application, incorporating RESTful API, to identify ongoing projects on Freelancer platform, utilizing Functional Programming, AKKA, and Sockets technology.","Implemented an intelligent search algorithm capable of retrieving projects based on specific keywords with asynchronous updates for real-time project information.","Integrated session management for handling multiple user sessions across different browsers, accomplished secure and seamless user interactions within the application.","Effectively managed the delivery of the project by using Agile project management methodologies and prepared detailed documentation and a presentation of the application."],
            tags: ["Java"], 
            images: ["https://www.f-cdn.com/assets/main/en/assets/app-icons/icon-512x512.png"],
            isFeatured: false
        },
        {   
            github: 'https://github.com/Gurpreet240797/Pacman',
            ID: uuidv4(),
            description: "Implemented a variety of search algorithms, both heuristic and non-heuristic, to autonomously playing the popular Pacman game.",
            featured: false,
            projectName: "Pacman",
            thumbnail: "https://user-images.githubusercontent.com/22547513/269021043-4fd640e4-87a1-4dea-8d4c-8a830c87cb34.jpg",
            configuration: [], 
            tagLine: "Created an Intellignet agent for playing PACMAN game.",
            conceptsUsed: ["Implemented various state search algorithms in Python 3, including A*, BFS, DFS, and USC.", "Enhanced search space exploration with the use of Manhattan heuristics.", "Conducted rigorous testing following specified unit test criteria.", "Acknowledgment to UC Berkeley CS188 (Starter Project) for project foundation."],
            tags: ["Graphs"], 
            images: ["https://user-images.githubusercontent.com/22547513/269021043-4fd640e4-87a1-4dea-8d4c-8a830c87cb34.jpg"],
            isFeatured: false
        },
        {   
            github: 'https://github.com/Gurpreet240797/e-resume',
            ID: uuidv4(),
            description: "Comprehensive portfolio showcasing frontend and backend skills with RESTful API integration for projects and experience.",
            featured: false,
            projectName: "Gurpreet Singh- Portfolio",
            thumbnail: "https://user-images.githubusercontent.com/22547513/269364367-70296ba6-2326-40c0-94f9-5a4d64120013.png",
            configuration: [], 
            tagLine: "Portfolio showcasing professional experience, skills, expertise, and acadmic projects",
            conceptsUsed: ["Developed portfolio using frontend and backend technology to represent industry experience utilizing REST Api for projects.", "Utilized React Hooks for efficient state management within the application, ensuring smooth data handling and reactivity.", "Configured React-Router to enable seamless navigation and serve multiple components, enhancing user experience by organizing content into separate tabs.", "Developed functional components that interact seamlessly with RESTful APIs, enabling dynamic data retrieval and display, Employed the Bootstrap library to create a mobile-responsive and user-centric design, ensuring a consistent and engaging user interface across various devices."],
            tags: ["React.js", "Node.js", "RESTApi"], 
            images: ["https://user-images.githubusercontent.com/22547513/269364367-70296ba6-2326-40c0-94f9-5a4d64120013.png"],
            isFeatured: false
        },
        {   
            github: 'https://github.com/Gurpreet240797/PlagiarismDetectionTool',
            ID: uuidv4(),
            description: "Developed a plagiarism checker, focused on an accurate similarity algorithm, improved search with the Longest Common Substring Approach.",
            featured: false,
            projectName: "Plagiarism Detection Tool",
            thumbnail: "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1422603210/oi2uqmiqjxp9oyhwlevc.png",
            configuration: [], 
            tagLine: "Plagiarism checker app for text and code files",
            conceptsUsed: ["Built an application using Java, utilizing the dynamic programming approach to identifying plagiarism in text and code files.","Designed and implemented a practical and intelligent algorithm, achieved accuracy in determining the percentage of similarity between the two file types.","Improved the amount of search for similarity exploration using Longest Common Substring Approach with cosine similarity metrics.","Tested the efficacy using the unit tests and different files with abnormal structure and text."],
            tags: ["Java"], 
            images: ["https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1422603210/oi2uqmiqjxp9oyhwlevc.png"],
            isFeatured: false
        }
    ],
    count: 1,
    ScannedCount: 1
}

app.get('/api/projects', async(req, res) => {
    try {
        const data = await projects
        res.status(200).json(data)
    } catch (error) {
        app.response.status(400).send({error})
    }
})

app.get('/api/project/:pid', async(req, res) => {
    const id = req.params.pid
    try {
        const project = await projects.Items.find(project => project.ID === id);
        if (project) {
            const data = {content: project}
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: "Project not found" });
        }
    } catch (error) {
        res.status(400).send({ error });
    }
})

app.listen(8000)