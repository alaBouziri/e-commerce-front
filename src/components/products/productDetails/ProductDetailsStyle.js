import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({

  details: {
    // maxWidth: 345, original width style
    display: "flex",
    justifyContent: "space-between",
    alignItems : "flex-start",
    flexWrap : 'wrap',
   
  },
  detailsImage : {
    flex : '2 1 50rem',
    
    maxWidth : '50%',
    width : '100%'
  },
  img :  {
    flex : '2 1 60rem',
    maxWidth : '60rem',
    width : '50%'
  },
  detailsInfo : {
    flex : '1 1 30rem'
  },
  detailsAction: {
    flex : '1 1 30rem'
  },

  card : {
    padding : 0,
    flex : '1 1 30rem'
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  cardContent: {
    
    justifyContent: 'space-between',
  },
  
 
  
 
}));