import React from 'react'
import { Text, Box, Input, Button, Container, Select } from '@chakra-ui/core'
import './App.css'

function App() {
  const [values, setValues] = React.useState({
    file: {},
    from: '',
    to: '',
    code: '',
    select: '',
  })
  const onChange = (e, type) => {
    if (type === 'file') {
      setValues({
        ...values,
        file: e.target.files[0],
      })
    } else {
      if (type === 'to' || type === 'from') {
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

  const submit = () => {
    console.log(values)
  }

  return (
    <Container>
      <Box display="flex" mb="10px" alignItems="center">
        <Input type="file" accept=".xml,.csv" onChange={(e) => onChange(e, 'file')} />
        <Button ml="10px">import</Button>
      </Box>
      <Box mb="10px">
        <Input type="text" placehilder="Код валюты" onChange={(e) => onChange(e, 'code')} />
      </Box>
      <Box mb="10px">
        <Select onChange={(e) => onChange(e, 'select')}>
          <option value="1">Approved</option>
          <option value="2">Failed</option>
          <option value="3">Rejected</option>
          <option value="4">Finished</option>
          <option value="5">Done</option>
        </Select>
      </Box>
      <Box mb="10px" display="flex">
        <Text mr="5px" fontWeight="bold">
          from
        </Text>
        <Input type="date" onChange={(e) => onChange(e, 'from')} />
      </Box>
      <Box mb="10px" display="flex">
        <Text mr="5px" fontWeight="bold">
          to
        </Text>
        <Input type="date" onChange={(e) => onChange(e, 'to')} />
      </Box>
      <Box>
        <Button onClick={submit}>Get</Button>
      </Box>
    </Container>
  )
}

export default App
