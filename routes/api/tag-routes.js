const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Finds all tags and includes Product
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets one tag by its id and includes Product
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    // If there is no tag with that id, an error message is sent
    if (!tagData) {
      res.status(404).json({message: "No tag found with this id!"});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Creates a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body, {
      where: {
        id: req.params.id,
      }
    });
    // If there is no tag with that id, an error message is sent
    if (!tagData) {
      res.status(404).json({message: "No tag found with this id!"});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Updates a tag by its id
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id, 
      }
    });
    // If there is no tag with that id, an error message is sent
    if (!tagData) {
      res.status(404).json({message: "No tag found with this id!"});
      return;
    };
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Deletes a tag by its id
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    // If there is no tag with that id, an error message is sent
    if (!tagData) {
      res.status(404).json({message: "No tag found with this id!"});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
