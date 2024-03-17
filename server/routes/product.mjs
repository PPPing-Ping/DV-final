import express from 'express'
const router = express.Router()

import db from '../db.mjs'
import 'dotenv/config.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//商品列表
router.get('/', async (req, res) => {
  let product, error
  await getProduct(req)
    .then((result) => {
      product = result
    })
    .catch((err) => {
      error = err
    })
  if (error) {
    res.status(400).json(error)
  }
  if (product) {
    res.status(200).json(product)
  }
})

//商品細節
router.get('/id', async (req, res) => {
  const pid = req.query.pid;
  let product, error
  await getProductID(pid)
    .then((result) => {
      product = result
    })
    .catch((err) => {
      error = err
    })
  if (error) {
    res.status(400).json(error)
  }
  if (product) {
    res.status(200).json(product)
  }
})


router.post('/comment', async (req, res) => {
  try {
    const payload = {
      score: req.body.score,
      comment: req.body.comment,
      product_id: req.body.product_id,
      user_id: req.body.user_id
    };

    // Step1. 身份驗證，檢查 user_id 是否存在
    const [userExists] = await db.execute('SELECT * FROM `users` WHERE id = ?', [payload.user_id]);
    if (!userExists) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Step2. 檢查 user 是否有購買 product_id 的產品
    const [hasPurchased] = await db.execute('SELECT * FROM `order` JOIN `order_detail` ON `order_detail`.order_id = `order`.id WHERE `order_detail`.product_id= ? AND `order`.user_id=?;', [payload.product_id, payload.user_id]);
    if (!hasPurchased || hasPurchased.length === 0) {
      return res.status(400).json({ error: 'User has not purchased this product' });
    }

    // Step3. 寫入資料庫
    await insertComment(payload);
    res.status(200).json({ message: 'Success' });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// get 打印評論
router.get('/comment', async (req, res) => {
  const pid = req.query.pid;
  let comment, error
  await getComment(pid)
    .then((result) => {
      comment = result
    })
    .catch((err) => {
      error = err
    })
  if (error) {
    res.status(400).json(error)
  }
  if (comment) {
    res.status(200).json(comment)
  }
})

// 收藏功能
//post 傳送到資料庫
router.post('/collect', async (req, res) => {
  try {
    const { product_id, user_id } = req.body;
    
    // Step1. 身份驗證 -> user_id 是否存在 ?
    const [result] = await db.execute('SELECT * FROM `users` WHERE id = ?', [user_id]);
    
    if (!result || result.length === 0) {
      return res.status(404).json({ status: 'error', msg: 'User not found' });
    }
    // Step2. 寫入資料庫
    await insertCollect({ product_id, user_id });
    
    res.status(200).json({ message: 'Success' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', msg: 'Internal server error' });
  }
});

router.get('/collect', async (req, res) => {
  const mid = req.query.mid;
  let comment, error
  await getCollect(mid)
    .then((result) => {
      comment = result
    })
    .catch((err) => {
      error = err
    })
  if (error) {
    res.status(400).json(error)
  }
  if (comment) {
    res.status(200).json(comment)
  }
})

//取得資料庫資料
function getProduct(req) {
  return new Promise(async (resolve, reject) => {
    const [result] = await db.execute('SELECT * FROM `product`')
    if (result) {
      resolve(result)
    } else {
      reject({ status: 'error', msg: 'err' })
    }
  })
}

//取得評論資料
function getComment(pid) {
  return new Promise(async (resolve, reject) => {
    const [result] = await db.execute('SELECT * FROM `star` WHERE product_id = ?' ,[pid])
    if (result) {
      resolve(result)
    } else {
      reject({ status: 'error', msg: 'err' })
    }
  })
}

//新增評論
function insertComment(data) {
  return new Promise(async (resolve, reject) => {
    const [result] = await db.execute('INSERT INTO star (user_id, product_id, score, comment) VALUES (?, ?, ?, ?);', [data.user_id, data.product_id, data.score, data.comment])
    if (result) {
      resolve({message: 'Success'})
    } else {
      reject({ status: 'error', msg: 'err' })
    }
  })
}

function getProductID(pid) {
  return new Promise(async (resolve, reject) => {
    const [result] = await db.execute('SELECT * FROM `product` WHERE product.id = ?' ,[pid])
    if (result) {
      resolve(result)
    } else {
      reject({ status: 'error', msg: 'err' })
    }
  })
}

//收藏
function getCollect(mid) {
  return new Promise(async (resolve, reject) => {
    const [result] = await db.execute('SELECT * FROM `collect` WHERE user_id = ?' ,[mid])
    if (result) {
      resolve(result)
    } else {
      reject({ status: 'error', msg: 'err' })
    }
  })
}
function insertCollect(data) {
  return new Promise(async (resolve, reject) => {
    const [result] = await db.execute('INSERT INTO collect (user_id, product_id) VALUES (?, ?);', [data.user_id, data.product_id])
    if (result) {
      resolve({message: 'Success'})
    } else {
      reject({ status: 'error', msg: 'err' })
    }
  })
}

export default router
