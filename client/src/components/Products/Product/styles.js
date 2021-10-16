import {makeStyles} from '@material-ui/styles';

export default makeStyles(() => ({
    root: {
        
        

        maxWidth: '100%',
        borderRadius: '20px',
        background: 'linear-gradient(#43cea2 , #185a9d)',
        
        margin: 'auto',
   
        color: '#69ca62',
       
        boxShadow: '0 15px 15px 7px #43A6C6', 
        marginLeft : '40px',
        justifyContent: 'center'

    },
    
    media: {
        height:0,
        paddingTop: '56.25%',
        
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent:{
        display: 'flex',
        justifyContent: 'space-between',
        
    }
}));