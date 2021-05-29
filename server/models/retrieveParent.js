const { Parents } = require('../database/schema.js');
const { Children } = require('../database/schema.js');
const { Forms } = require('../database/schema.js');
const { Counselors } = require('../database/schema.js');

const retrieveParent = (email, res) => {
  Parents.find({ email }, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      let childrenData = {};
      console.log('data is ', data);
      console.log('data 0 email is ', data[0]['email']);
      Children.find({ parent: data[0]['email'] }, (err, dataChildren) => {
        console.log('dataChildren is', dataChildren);
        if (err) {
          res.status(400).send(err);
        } else {
          childrenData = {
            firstName: dataChildren[0].firstName,
            lastName: dataChildren[0].lastName,
            profileImageURL: dataChildren[0].profileImageURL,
            allergies: dataChildren[0].allergies,
            counselor: dataChildren[0].counselor,
            forms: []
          };

          let formData = {};
          Forms.find({child: dataChildren[0].email}, (err, dataForm) => {
            if (err) {
              res.status(400).send(err);
            } else {
                formData = {
                  type: dataForm[0].type,
                  file: dataForm[0].file
                }

                Counselors.find({email: dataChildren[0].counselor}, (err, dataCounselor) => {
                  if (err) {
                    res.status(400).send(err);
                  } else {
                    let parentsData = {};
                    data.forEach((aParent) => {

                      parentsData['campCode'] = aParent.campCode;
                      parentsData['parents'] = [];
                      let parentInfo = {};
                      parentInfo['firstName'] = aParent.firstName;
                      parentInfo['lastName'] = aParent.lastName;
                      parentInfo['profileImageURL'] = aParent.profileImageURL;
                      parentInfo['email'] = aParent.email;
                      parentInfo['children'] = [];
                      parentsData['parents'].push(parentInfo);
                    });
                    console.log('parentsData 0 is ', parentsData['parents'][0]['children']);
                    console.log('childrenData is', childrenData);
                    parentsData['parents'][0]['children'].push(childrenData);
                    parentsData['parents'][0]['children'][0]['forms'] = [formData];
                    console.log('formData is', formData);
                    console.log('parentsData finally is, ', parentsData);
                    parentsData['campCode'] = dataCounselor[0].campCode;
                    res.status(200).send(parentsData);
                  }
                })

            }
          });


    }
  });


    }
  });

  // Children.find({ parent }, (err, data) => {
  //   if (err) {
  //     res.status(400).send(err);
  //   } else {
  //     let childrenData = {};
  //     childrenData['campCode']
  //   }
  // })
};

module.exports = retrieveParent;
