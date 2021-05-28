import React, { useState, useEffect } from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import axios from 'axios';
import Card from "../DashboardResources/components/Card/Card.js";
import CardBody from "../DashboardResources/components/Card/CardBody.js";
import CardHeader from "../DashboardResources/components/Card/CardHeader.js";
import Table from "../DashboardResources/components/Table/Table.js";
import styles from "../DashboardResources/assets/jss/material-dashboard-react/views/dashboardStyle.js";

const Header = styled.div`
  text-align: left;
  margin: 15px;
  font-weight: 900;
  letter-spacing: .2rem;
  font-size: clamp(1rem, 5vw, 2rem);
  line-height: 1.3;
`;

const Header2 = styled.div`
  text-align: left;
  margin: 15px;
  font-weight: 900;
  letter-spacing: .2rem;
  font-size: clamp(1rem, 4vw, 1.5rem);
  line-height: 1.3;
`;

const Header3 = styled.div`
  text-align: left;
  margin: 15px;
  font-weight: 400;
  letter-spacing: .2rem;
  font-size: clamp(.5rem, 1rem);
  line-height: 1.3;
`;

const Text = styled.div`
  text-align: justify;
  margin: 15px;
`;

const Forms = () => {

  const [selectedFile, setSelectedFile] = useState('');
  const [readyToRender, setReadyToRender] = useState(false);
  const [fileTable, setFileTable] = useState([]);
  const [change, induceChange] = useState(0);

  const uploadFile = (e) => {

    e.preventDefault();

    if (selectedFile === '') { alert('No files selected!')
    } else {

      const fdata = new FormData();
      fdata.append('file', selectedFile)

      axios({ method: 'POST', url: '/upload', data: fdata })
      .then(() => setFileTable([]))
      .then(() => induceChange(change + 1))
    }
  }

  const changeFile = (e) => {

    setSelectedFile(e.target.files[0])
  }

  useEffect(() => {

    axios({ method: 'get', url: '/files' })
    .then((res) => {

      res.data.map((item) => {

        setFileTable((fileTable) => [...fileTable, [(<span>{item.url}</span>), (<a href={`/files/${item.url}`} target="_blank">Download Here</a>)]]);
      })
    })
    .then(() => setReadyToRender(true))
    
  }, [change])

  let returnRender = readyToRender ? (

  <>
    <Grid container spacing={4}>
      {/* <Grid item xs={1}>
        <Avatar>A</Avatar>
      </Grid> */}
      <Grid item xs={11}>
        <Header>Forms</Header>
      </Grid>
      <Grid item xs={12}>
        <Header2>Your Forms</Header2>
        <Header3>Upload your completed forms</Header3>
      </Grid>
      <Grid item xs={11}>
        <input type="file" onChange={changeFile}/>
        <input type="submit" onClick={uploadFile}/>
      </Grid>
      <Grid item xs={12}>
        <Header2>Forms and Instructions</Header2>
        <Header3>Download and complete your forms</Header3>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning"><span>Files</span></CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["Document", "Download"]}
                tableData={fileTable}
              />
            </CardBody>
          </Card>
      </Grid>
    </Grid>
  </>
  ) : (<div></div>);

  return returnRender;
}

export default Forms;