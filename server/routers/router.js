const express = require('express');
const multer = require('multer');
const Photo = require('../models/Photo');
const Router = express();

const upload = multer({
    limits: {
        fileSize: 2000000 // max file 2mb = 2000000 bytes
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(jpeg|jpg|png)$/)){
            cb(new Error('only update files with jpeg or jpeg or png format .'));
        }
        cb(undefined, true) // Continue with upload
    }
});

Router.post('/photos',
    upload.single('photo'),
async (req, res) => {
    try {
        const photo = new Photo(req.body);
        const file = req.file.buffer;
        photo.photo = file;
        await photo.save();
        res.status(201).send({ _id: photo._id });
    }
    catch(error){
        res.status(400).send({ 
            upload_error: 'Error while uploading file try again later'
         });
    }
},
(error, req, res, next) => {
    if(error) {
        res.status(500).send({
            upload_error: error.message
        })
    }
}
)

Router.get('/photos', async (req, res) => {
    try{
        const photos = await Photo.find({});
        res.send(photos);
    }
    catch(error){
        res.status(500).send({ get_error: 'Error while getting list of photos' })
    }
})

Router.get('/photos/:id', async (req, res) => {
    try {
        const result = await Photo.findById(req.params.id);
        res.set('Content-Type', 'image/jpeg');
        res.send(result.photo)
    }
    catch(error){
        res.status(400).send({ get_error: 'Error while uploading try again later ...' })
    }
})

module.exports = Router;
