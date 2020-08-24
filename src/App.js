import React from 'react'
import { Text, Box, Button, Container, Select } from '@chakra-ui/core'
import { Table, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { sendFile, getFields } from './requests'

import './App.css'

function App() {
  const [values, setValues] = React.useState({
    file: {},
    timeFrom: '',
    timeTo: '',
    currencyCode: '',
    status: '',
  })
  const onChange = (e, type) => {
    if (type === 'file') {
      setValues({
        ...values,
        file: e.target.files[0],
      })
    } else {
      if (type === 'timeTo' || type === 'timeFrom') {
        setValues({
          ...values,
          [type]: Math.round(new Date(e.target.value).getTime() / 1000),
        })
      } else {
        setValues({
          ...values,
          [type]: e.target.value,
        })
      }
    }
  }

  const post = async () => {
    const res = await sendFile({ file: values.file })
  }

  const get = async () => {
    const res = await getFields(values)
  }

  return (
    <Container mt="30px">
      <Box display="flex" mb="10px" alignItems="center">
        <Input type="file" accept=".xml,.csv" onChange={(e) => onChange(e, 'file')} />
        <Button ml="10px" onClick={post}>
          import
        </Button>
      </Box>
      <Box mb="10px">
        <Input type="text" placeholder="Код валюты" onChange={(e) => onChange(e, 'currencyCode')} />
      </Box>
      <Box mb="10px" display="flex" justifyContent="space-between" alignItems="center">
        <Text mr="5px" fontWeight="bold">
          Статус
        </Text>
        <Select onChange={(e) => onChange(e, 'status')}>
          <option value="">Не выбрано</option>
          <option value="1">Approved</option>
          <option value="2">Failed</option>
          <option value="3">Rejected</option>
          <option value="4">Finished</option>
          <option value="5">Done</option>
        </Select>
      </Box>
      <Box mb="10px" display="flex" justifyContent="space-between" alignItems="center">
        <Text mr="5px" fontWeight="bold">
          from
        </Text>
        <Input type="date" onChange={(e) => onChange(e, 'timeFrom')} style={{ maxWidth: '300px' }} />
      </Box>
      <Box mb="10px" display="flex" justifyContent="space-between" alignItems="center">
        <Text mr="5px" fontWeight="bold">
          to
        </Text>
        <Input type="date" onChange={(e) => onChange(e, 'timeTo')} style={{ maxWidth: '300px' }} />
      </Box>
      <Box mb="10px">
        <Button onClick={get} width="100%">
          Get
        </Button>
      </Box>
      <Table>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default App
