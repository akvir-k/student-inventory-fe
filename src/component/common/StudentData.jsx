import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Axios from 'axios';
import Admin from '../Navigation/AdminNav';


const StudentData = ({ history }) => {

    const [Sdata, Setdata] = useState([]);
    useEffect(() => {
          async function fetchData() {
            await Axios.get('http://localhost:4000/getShuffuleData')
                .then(result => {
                    Setdata(result.data)
                    console.log(result)
                })
        }
        fetchData();
    }, []);

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });
    const classes = useStyles();
    return (
        <>
            <Admin />
            {Sdata.map((value, index) => {
                return (
                    <div key={index}className="data_card">

                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    id="userImage"
                                    image={value.image_link}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" >
                                        {value.firstName} {value.lastName}
                                    </Typography>

                                    <Typography variant="body2" color="textSecondary" component="p" />
                                    <label>Current Bed:</label> {value.Currunt_bed}

                                    <Typography variant="body2" color="textSecondary" component="p" />
                                    <label> Current Bed Side:</label> {value.CurruntBedside}
                                    <Typography variant="body2" color="textSecondary" component="p" />
                                    <label> Current Room:</label> {value.Currunt_roomNo}
                                    <Typography variant="body2" color="textSecondary" component="p" />
                                    <label> Previous Bed:</label> {value.Previous_Bed}
                                    <Typography variant="body2" color="textSecondary" component="p" />
                                    <label> Previous Bed Side:</label> {value.PreviousSide}
                                    <Typography variant="body2" color="textSecondary" component="p" />
                                    <label> Previous Room:</label> {value.Previous_roomNo}


                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </div>
                )
            })}

        </>
    );
}

export default StudentData;