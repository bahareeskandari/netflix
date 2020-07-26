import React, {useContext} from 'react'
import {imageFirstPart} from '../Util/Constants'

import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import {Link} from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import {UserContext} from '../components/UserContext'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 80,
  },
  root: {
    maxWidth: 245,
    margin: 30,
    maxHeight: 520,
    minHeight: 420,
    backgroundColor: '#fff',
    borderRadius: '0.25rem',
    border: '0 solid transparent',
    fontFamily: 'Inter !important',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 6px rgba(0, 0, 0, 0.12)',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
    cursor: 'pointer',
  },
  heart: {
    cursor: 'pointer',
    fontSize: '25px',
    margin: '70',
    textDecoration: 'none',
    transition: '0.4s',
    color: '#5f6368',
    '&:hover': {
      color: '#222',
    },
  },
  youtube: {
    cursor: 'pointer',
    fontSize: '25px',
    margin: '0 90px 0 0',
    transition: '0.4s',
    textDecoration: 'none',
    color: '#5f6368',
    '&:hover': {
      color: '#222',
    },
  },
  links: {
    color: '#5f6368',
    textDecoration: 'none',
    transition: '0.4s',
    '&:hover': {
      color: '#222',
    },
  },
  p: {
    fontSize: '14px',
    color: '#5f6368',
    textDecoration: 'none',
    transition: '0.4s',
    '&:hover': {
      color: '#222',
    },
  },
}))

const Media = ({product, handleOpen, idx}) => {
  const classes = useStyles()
  const {movies, setMovies, myList, tvShows, setMyList} = useContext(UserContext)

  const AddToMyList = (product) => {
    if (myList.find((movi) => movi.id === product)) {
      // important to use find method and not some or include since we're looking for an object inside array
      setMyList(myList.filter((movi) => movi.id !== product))
    } else {
      const together = movies.concat(tvShows)
      const obj = together.find((mo) => mo.id === product)
      setMyList([...myList, obj])
    }
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.img}
          component="img"
          alt="Contemplative Reptile"
          height="340"
          image={imageFirstPart + product.poster_path}
          title="Contemplative Reptile"
          onClick={() => handleOpen(product)}
        />
        <Typography className={classes.p}>{product.original_title}</Typography>

        <CardActions className={classes.links}>
          <Link className={classes.youtube} to={`/Movies/${product.id}`}>
            Trailer
            <i className="fab fa-youtube" />
          </Link>
          <Typography
            className={classes.heart}
            variant="h6"
            component="h6"
            onClick={() => AddToMyList(product.id)}
          >
            {myList.find((movi) => movi.id === product.id) ? (
              <i className="fas fa-heart" />
            ) : (
              <i className="far fa-heart" />
            )}
          </Typography>
        </CardActions>

        <CardActions className={classes.links} />
      </Card>
    </div>
  )
}
export default Media

/**

  // const { match: { params } } = this.props
  // const id = params.id
    // const id = req.params.id // undefined req?

<Route path="/users/:id" render={(props) => <UserPage {...props} />}/>
this.props.match.params.id
 */
