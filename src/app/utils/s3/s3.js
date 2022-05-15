require("dotenv").config();
const AWS = require('aws-sdk')
const multer = require("multer");
const multerS3 = require('multer-s3');
const crypto = require('crypto');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKey = process.env.AWS_ACCESS_KEY;
const secreatAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

AWS.config.update({
  region: region,
  aws_access_key_id: accessKey,
  aws_secret_access_key: secreatAccessKey,
});

const s3 = new AWS.S3({
  region,
  accessKey,
  secreatAccessKey
})

// Uploads a file to s3
const uploadFile = multer({
  storage: multerS3({
    s3: s3,
    bucket: bucketName,
    metadata: (_, file, cb) => cb(null, { fieldName: `${crypto.randomUUID()}-${Date.now()}-${file.originalname}` }),
    key: (_, file, cb) => cb(null, `${crypto.randomUUID()}-${Date.now()}-${file.originalname}`)
  }),
});

module.exports = uploadFile;
