import { Box, Button, Dialog, TextField, Typography } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateRangePicker, LocalizationProvider } from '@mui/x-date-pickers-pro'
import { useCounter } from './hooks/useCounter'
import { useVisible } from './hooks/useVisible'
import { useEffect, useState } from 'react'
import { produce } from 'immer'
import { useForm } from 'react-hook-form'
import Chart from './components/NavBar/Chart'

import { io } from 'socket.io-client'

const AppWithMUI = () => {
  const { count, add, substract } = useCounter(15)

  const { visible, show, close } = useVisible()

  const [message, setMessage] = useState('')

  const [socket, setSocket] = useState(null)

  const [messages, setMessages] = useState([])

  //   const [form, setForm] = useState({
  //     username: { value: '', error: false, errorText: '' },
  //     password: { value: '', error: false, errorText: '' },
  //   })

  const { register, formState, handleSubmit } = useForm({
    mode: 'onChange',
  })

  const onChangeField = (ev) => {
    // setForm((curr) => ({
    //   ...curr,
    //   [ev.target.name]: { ...curr[ev.target.name], value: ev.target.value },
    // }))
    // setForm(
    //   produce((draft) => {
    //     draft[ev.target.name].value = ev.target.value
    //   })
    // )
  }

  const onSave = () => {
    // if (!form.username.value) {
    //   //   setForm((curr) => ({
    //   //     ...curr,
    //   //     username: { ...curr.username, error: true, errorText: 'Required' },
    //   //   }))
    //   setForm(
    //     produce((draft) => {
    //       draft.username.error = true
    //       draft.username.errorText = 'Required'
    //     })
    //   )
    // }
    // if (!form.password.value) {
    //   setForm((curr) => ({
    //     ...curr,
    //     password: { ...curr.password, error: true, errorText: 'Required' },
    //   }))
    // }
    // Object.entries(form).map(([key, field]) => {
    //   if (!field.value) {
    //     setForm(
    //       produce((draft) => {
    //         draft[key].error = true
    //         draft[key].errorText = 'Required'
    //       })
    //     )
    //   }
    // })
  }

  useEffect(() => {
    const newSocket = io('http://localhost:4500', {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
    })
    setSocket(newSocket)
  }, [])

  useEffect(() => {
    if (socket) {
      socket.on('message', (msg) => {
        setMessages((curr) => [...curr, msg])
      })
    }
  }, [socket])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        height='100vh'
      >
        <Typography>Counter</Typography>
        <Typography variant='h5'>{count}</Typography>
        <Box display='flex' gap={2} marginTop={1} justifyContent='center'>
          <Button variant='contained' onClick={substract}>
            -
          </Button>
          <Button variant='outlined' onClick={add}>
            +
          </Button>
        </Box>
        <Button onClick={show}>Open modal</Button>
        <Dialog open={visible} onClose={close}>
          <Box
            width={200}
            padding={2}
            display='flex'
            flexDirection='column'
            gap={2}
          >
            <TextField
              // value={form.username.value}
              // error={form.username.error}
              // helperText={form.username.errorText}
              // name='username'
              // onChange={onChangeField}

              {...register('username', {
                required: { value: true, message: 'required' },
                minLength: { value: 20, message: 'invalid length' },
              })}
              error={formState.errors.username}
              helperText={formState.errors.username?.message}
              label='Username'
              placeholder='Username'
            />
            <TextField
              // value={form.password.value}
              // error={form.password.error}
              // helperText={form.password.errorText}
              // name='password'
              label='Password'
              placeholder='Password'
              {...register('password', {
                required: { value: true, message: 'required' },
                minLength: { value: 10, message: 'invalid length' },
              })}
              error={formState.errors.password}
              helperText={formState.errors.password?.message}
              // onChange={onChangeField}
            />
            <DateRangePicker
              onChange={(value) => {
                console.log(value)
              }}
            />
            <Button
              variant='contained'
              onClick={handleSubmit(() => {
                console.log(first)
              })}
            >
              Save
            </Button>
          </Box>
        </Dialog>
        <Chart />
        <Typography>Chat example</Typography>
        <Box display='flex' alignItems='center'>
          <TextField
            placeholder='messsage'
            value={message}
            onChange={(ev) => {
              setMessage(ev.target.value)
            }}
          />
          <Button
            onClick={() => {
              socket.emit('message', message)
              setMessages((curr) => [...curr, message])
              setMessage('')
            }}
          >
            Send
          </Button>
        </Box>
        <Box display='flex' flexDirection='column' marginTop={2} gap={1}>
          {messages.map((msg) => {
            return <Typography>{msg}</Typography>
          })}
        </Box>
      </Box>
    </LocalizationProvider>
  )
}

export default AppWithMUI
