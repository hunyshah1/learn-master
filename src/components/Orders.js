import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, ) {
  return { id, date, name, shipTo, paymentMethod  };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'ALi ASaD',
    'LAST VOTE PMLN',
    'Village 193gb',
    
  ),
  createData(
    1,
    '11 Mar, 2019',
    'RAZA Haider',
    'LAST VOTE PPP',
    'Village 193ck',
  
  ),
  createData(2, '16 Mar, 2019', 'ALi Haider', 'LAST VOTE PTI', 'Village 59ck'),
  createData(
    3,
    '16 Mar, 2019',
    'Rasheed mughal',
    'LAST VOTE PPP',
    'Village 193ck',
    
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Zain Khan',
    'LAST VOTE PPP',
    'Village 193ck',
    
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent details</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>LAST VOTE</TableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
             
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more Details
      </Link>
    </React.Fragment>
  );
}