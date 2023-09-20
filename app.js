const express = require('express')
const app = express()
const cors = require('cors');
const { v4: uuidv4 } = require('uuid')

app.use(cors());

const projects = {
    Items: [
	    {   
            github: 'https://github.com/Gurpreet240797/e-resume',
            ID: uuidv4(),
            description: "Created a comprehensive industry portfolio by blending frontend and backend technologies, leveraging RESTful API integration for showcasing projects.",
            featured: true,
            projectName: "Gurpreet Singh Portfolio",
            thumbnail: "https://user-images.githubusercontent.com/22547513/269080923-1e7a2cef-cb15-40aa-8992-2a7fe40f8149.png",
            configuration: [], 
            tagLine: "Portfolio showcasing professional experience, skills, expertise, and acadmic projects",
            conceptsUsed: ["Developed portfolio using frontend and backend technology to represent industry experience utilizing REST Api for projects.", "Utilized React Hooks for efficient state management within the application, ensuring smooth data handling and reactivity.", "Configured React-Router to enable seamless navigation and serve multiple components, enhancing user experience by organizing content into separate tabs.", "Developed functional components that interact seamlessly with RESTful APIs, enabling dynamic data retrieval and display, Employed the Bootstrap library to create a mobile-responsive and user-centric design, ensuring a consistent and engaging user interface across various devices."],
            tags: ["React.js", "Node.js", "RESTApi"], 
            images: ["https://user-images.githubusercontent.com/22547513/269080923-1e7a2cef-cb15-40aa-8992-2a7fe40f8149.png"],
            isFeatured: true
        },
        {   
            github: 'https://github.com/Gurpreet240797/Mental-Health-Well-Being',
            ID: uuidv4(),
            description: "Test E-Resume",
            featured: true,
            projectName: "Mental Health Well Being",
            thumbnail: "https://skfreelancers.com/wp-content/uploads/2020/04/freelancer.png",
            configuration: [], 
            tagLine: "Portfolio",
            conceptsUsed: ["Exception Handling", "Software Develoment Life Cycle"],
            tags: ["React.js", "Spring Boot"], 
            images: ["https://skfreelancers.com/wp-content/uploads/2020/04/freelancer.png"],
            isFeatured: true
        },
        {   
            github: 'https://github.com/Gurpreet240797/Mental-Health-Well-Being',
            ID: uuidv4(),
            description: "Test E-Resume",
            featured: true,
            projectName: "Mental Health Well Being",
            thumbnail: "https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/mental-health-month-hub.jpg",
            configuration: [], 
            tagLine: "Portfolio",
            conceptsUsed: ["Exception Handling", "Software Develoment Life Cycle"],
            tags: ["React.js", "Spring Boot"], 
            images: ["https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/mental-health-month-hub.jpg"],
            isFeatured: true
        },
        {   
            github: 'https://github.com/Gurpreet240797/Automated-Hospital-Path-Labelling',
            ID: uuidv4(),
            description: "Pacman",
            featured: false,
            projectName: "Pacman",
            thumbnail: "https://camo.githubusercontent.com/0d82889190f2cd08022b28be57575c617bed73464dd949a09b6fa962cdc28c6e/68747470733a2f2f73617265656e762d70726f6a656374732e73332e616d617a6f6e6177732e636f6d2f696d616765732f666c6f6f72506c616e2e706e67",
            configuration: [], 
            tagLine: "Portfolio",
            conceptsUsed: ["Exception Handling", "Software Develoment Life Cycle"],
            tags: ["React.js", "Node.js", "RESTApi"], 
            images: ["https://camo.githubusercontent.com/0d82889190f2cd08022b28be57575c617bed73464dd949a09b6fa962cdc28c6e/68747470733a2f2f73617265656e762d70726f6a656374732e73332e616d617a6f6e6177732e636f6d2f696d616765732f666c6f6f72506c616e2e706e67"],
            isFeatured: false
        },
        {   
            github: 'https://github.com/Gurpreet240797/Pacman',
            ID: uuidv4(),
            description: "Pacman",
            featured: false,
            projectName: "Pacman",
            thumbnail: "https://user-images.githubusercontent.com/22547513/269021043-4fd640e4-87a1-4dea-8d4c-8a830c87cb34.jpg",
            configuration: [], 
            tagLine: "Portfolio",
            conceptsUsed: ["Exception Handling", "Software Develoment Life Cycle"],
            tags: ["React.js", "Node.js", "RESTApi"], 
            images: ["https://user-images.githubusercontent.com/22547513/269021043-4fd640e4-87a1-4dea-8d4c-8a830c87cb34.jpg"],
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