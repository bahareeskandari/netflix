import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import {createGlobalStyles} from '../Util/GlobalStyles'

const useStyles = makeStyles((theme) => ({
  grow: {
    display: 'flex',
    backgroundImage:
      'url(https://www.myanmore.com/wp-content/uploads/2019/05/netflix-background-9.jpg)',
  },
}))
//style={{backgroundColor: '#cfe8fc'}}  <Typography component="div" style={{backgroundColor: '#cfe8fc'}}>

export default function Home() {
  const classes = useStyles()
  const classesGlobal = createGlobalStyles()
  return (
    <div className={classesGlobal.containerImage}>
      <Container maxWidth="lg">
        <Typography component="div">
          HOME COMPONENT Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum corrupti
          provident perspiciatis quas distinctio molestias deserunt saepe libero ea repellat alias,
          optio voluptates placeat in eveniet totam esse dicta ullam.
          <br />
          sjsj
        </Typography>
      </Container>
    </div>
  )
}
