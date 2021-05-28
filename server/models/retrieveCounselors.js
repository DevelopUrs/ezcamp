const { Counselors } = require('../database/schema.js');

// module.exports = {
//   retrieveCounselors: (email, res) => {
//     Counselors.find({ email }, (err, data) => {
//       if(err) {
//         res.status(400).send(err);
//       } else {
//         res.status(200).send(data[0]);
//       }
//     })
//   },
// }

module.exports = {
  retrieveCounselors: (campCode, res) => {
    Counselors.find({ campCode }, (err, data) => {
      if(err) {
        res.status(400).send(err);
      } else {
        let counselorsData = {};
        counselorsData['campCode'] = campCode;
        counselorsData['counselors'] = [];
        data.forEach((aCounselor) => {
          let counselorInfo = {};
          counselorInfo['firstName'] = aCounselor.firstName;
          counselorInfo['lastName'] = aCounselor.lastName;
          counselorInfo['profileImageURL'] = aCounselor.profileImageURL;
          counselorInfo['bio'] = aCounselor.bio;
          counselorInfo['email'] = aCounselor.email;
          counselorsData['counselors'].push(counselorInfo);
        })
        res.status(200).send(counselorsData);
      }
    })
  },
}