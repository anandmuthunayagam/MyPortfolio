import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, List, ListItem, ListItemIcon,ListItemText } from '@mui/material'
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import '../src/portfolio.css'
import CollapsibleTable from './portfolio'
import MyLogo from '../src/ANAND.JPG'
import fLogo from '../src/facebook.png'
import gLogo from '../src/gmail.png'
import lLogo from '../src/Linkedin.png'
import yLogo from '../src/yahoo.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
      <div class="container" style={{backgroundColor:"#141425"}}>
      <div class="left-section"style={{backgroundColor:"#141425"}}>
        <div style={{backgroundColor:"#141425"}}>
          <img src={MyLogo} alt="" height="100px" width="100px"/>
          <h2 color='White'> Anand Muthunayagam</h2>
          <h3> Test Automation/Full Stack Development</h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          </div>
          <div style={{display:"flex", flexDirection:"column"}}>
          <span>
          <Button variant ="contained" href="#aboutme" fullWidth={true}>About Me</Button>
          </span>
          <br></br>
          <span>
          <Button variant ="contained" href="#Experience" fullWidth={true}>Experience </Button>
          </span>
          <br></br>
          <span>
          <Button variant ="contained" href="#Projects" fullWidth={true}>Projects</Button>
          </span>
        </div>
        <br></br>
        <br></br>
        <div>
          <img src={fLogo} alt="https://www.facebook.com/anand.muthunayagam/" href="https://www.facebook.com/anand.muthunayagam/" height="25px" width="25px" style={{margin:"10px"}}/>
          <img src={gLogo} alt="" height="25px" width="25px" style={{margin:"10px"}}/>
          <img src={lLogo} alt="" height="25px" width="25px" style={{margin:"10px"}}/>
          <img src={yLogo} alt="" height="25px" width="25px" style={{margin:"10px"}}/>
        </div>
      </div>
      <div class="right-section" style={{backgroundColor:"#141425",color:"white"}}>
        <div class="long-content" style={{backgroundColor:"#141425",color:"white"}}>
        
            <Box component="section"  id="aboutme" class="page" sx={{ p: 2, border: '1px dashed grey',bgcolor:'#1976d2'}}>
            <h2>About Me</h2>
            <p>
              <List color="white">
                <ListItemIcon><ListItem><ListItemText primary="Automation Lead with over 16 years of Software Testing & Quality Assurance experience" primaryTypographyProps={{ style: { color: 'white',align:'left'} }}></ListItemText></ListItem></ListItemIcon>
                <Divider />
                <ListItemIcon><ListItem><ListItemText primary="Specialized in testing/automating BPM applications such as Pega and IBM BPM" primaryTypographyProps={{ style: { color: 'white',align:'left'} }}></ListItemText></ListItem></ListItemIcon>
                <Divider />
               <ListItemIcon><ListItem><ListItemText primary="Experienced in setting up the roadmap for automation, automation strategy preparation" primaryTypographyProps={{ style: { color: 'white',align:'left'} }}></ListItemText></ListItem></ListItemIcon>
                <Divider />
                <ListItemIcon><ListItem><ListItemText primary="Experience in Banking & Financial Services, Telecom, Insurance and Healthcare domains." primaryTypographyProps={{ style: { color: 'white',align:'left'} }}></ListItemText></ListItem></ListItemIcon>
                <Divider />
        </List>
              {/*}
              <ul>
                <li>Automation Lead/Consultant with over 16 years of total Software Testing & Quality Assurance experience</li>
                <li>Possess strong experience in Requirement Analysis, Test Planning, Test Case Design & Execution and Test Automation.</li> 
                <li>Specialized in testing/automating BPM applications such as Pega and IBM BPM</li>
                <li>Experienced in setting up the roadmap for automation, automation planning/strategy preparation</li>
                <li>Has good Understanding/Hands-on experience with Selenium Webdriver/Java, Cucumber BDD, Specflow BDD, Ranorex, UFT, TestNG</li>
                <li>Experience in Banking & Financial Services, Telecom, Insurance and Healthcare domains.</li>
                <li>An effective leader with people skills and proven ability to build long term relationships with internal and external customers by establishing high levels of confidence and trust.</li>
              </ul> */}
            </p>
            </Box>
        

        <section id="Experience" class="page">
            <h2>Experience</h2>
            {/*}
              <table>
                    <thead>
                       <tr>
                          <th>Company</th>
                          <th>Role</th>
                          <th>Period</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cognizant</td>
                            <td>Automation Lead</td>
                            <td>Mar '11 - Aug '22</td>
                        </tr>
                        <tr>
                            <td>IBM</td>
                            <td>Automation Engineer</td>
                            <td>Jan '10 - Feb '11</td>
                        </tr>
                        <tr>
                            <td>Mahindra Satyam</td>
                            <td>Automation Engineer</td>
                            <td>Jan '05 - Jan '10</td>
                        </tr>
                    </tbody>
              </table> */}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                      <TableCell>Company</TableCell>
                      <TableCell align="center">Role</TableCell>
                      <TableCell align="center">Period</TableCell>
                    </TableRow>
                </TableHead>
                  <TableRow>
                    <TableCell>Cognizant</TableCell>
                    <TableCell align="center">Automation Lead</TableCell>
                    <TableCell align="center">Mar 2011 - Aug 2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>IBM</TableCell>
                    <TableCell align="center">Automation Engineer</TableCell>
                    <TableCell align="center">Jan 2010 - Feb 2011</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Satyam</TableCell>
                    <TableCell align="center">Automation Engineer</TableCell>
                    <TableCell align="center">Jan 2005 - Jan 2010</TableCell>
                  </TableRow>
                </Table>
            </TableContainer>
        </section>

        <section id="Projects" class="page">
            <h2>Projects</h2>
            
            <CollapsibleTable></CollapsibleTable>
            
        </section>
  
      </div>
      </div>
      </div>
      
      
    </>
    

  )
  
}

export default App
