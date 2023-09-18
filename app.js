const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

const projects = [
	{   
        github: 'https://github.com/Gurpreet240797/e-resume',
        ID: uuidv4(),
        description: "Test E-Resume",
        featured: true,
        projectName: "Gurpreet E-Resume",
        thumbnail: "https://pbs.twimg.com/profile_images/1100705569898283009/UspwSgcg_400x400.jpg",
        configuration: [], 
        tagLine: "Portfolio",
        conceptsUsed: ["Exception Handling", "Software Develoment Life Cycle"],
        tags: ["React.js", "Node.js", "RESTApi"], 
        isFeatured: true
    }
]

app.get('/api/Projects', (req, res) => {
    try {
        res.status(200).json(projects)
    } catch (error) {
        app.response.status(400).send({error})
    }
})

app.get('/api/Projects/:pid', (req, res) => {
    const id = req.params.pid
    try {
        const project = projects.find(project => project.ID === id);
        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: "Project not found" });
        }
    } catch (error) {
        res.status(400).send({ error });
    }
})

app.listen(8000)