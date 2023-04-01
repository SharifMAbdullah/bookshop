const express = require('express');
const router = express.Router();
const Book = require('../../models/Book');

router.get('/test', (req,res) => {
    res.send('book route testing');
})


//get all books
router.get('/',(req,res) => {
    Book.find().then(books => {
        res.json(books)
    })
    .catch(err => {
        res.status(404).json({noBooksFound : "No Books Found!"});
    })

//get a speicific book by id
router.get('/:id',(req,res) => {
    Book.findByID(req.params.id)
        .then(book => {
            res.json(book);
        })
        .catch(err => res.status(404).json({noBookFound : "No Book Found by this ID!"}))
})
});

//update description of book by id
router.put(':/id', (req,res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => {
            res.json({msg: "Book description updated successfully!"});
        })
        .catch(err => {
            res.status(404).json({error: "Update hoy na to :'("});
        })
});

//delete book by id
router.delete(':/id', (req,res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => {
            res.json({msg: 'Book deleted successfully!'})
        })
        .catch(err => {
            res.status(404).json({error: "Delete hoy na to :'("});
        })
});

module.exports = router;