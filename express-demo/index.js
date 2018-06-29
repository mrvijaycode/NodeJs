
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [{ id: 1, name: "Blockchain" },
{ id: 2, name: "SharePoint" },
{ id: 3, name: "AI" },
{ id: 4, name: "AR" }
];

app.get('/', (req, res) => {
    res.send('Hello world!!!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('No item found');
    res.send(course);
});

app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params);
});

app.post('/api/courses', (req, res) => {

    const result = validateCourse(req.body);

    if (result.error) {
        res.status(400).send(result.error);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});

app.put('/api/courses/:id', (req, res) => {
    //Look up the course
    //if not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('No item found');

    //validate
    //if invalid, return 400 - Bad request

    const result = validateCourse(req.body);

    if (result.error) {
        res.status(400).send(result.error);
        return;
    }

    //Update course
    course.name = req.body.name;

    //Return the updated course
    res.send(courses);
});


app.delete('/api/courses/:id', (req, res) => {
    //Look up the course
    //Not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('No item found');

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //Return the same course
    res.send(courses);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}...`); });