const express = require("express")
const paintRouter = express.Router()
const Paint = require("../models/paintJob.js")

//get all jobs
paintRouter.get("/", (req, res, next) => {
    Paint.find((err, jobs) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(jobs)
    })
})
// post job
paintRouter.post("/", (req, res, next) => {
    const newJob = new Paint(req.body)
    newJob.save((err, savedJob) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedJob)
    })
})
module.exports = paintRouter