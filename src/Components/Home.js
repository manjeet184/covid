import { Box, Button, Grid, TextField, Container, Toolbar } from '@material-ui/core'
import { useEffect, useState } from 'react';
import Slot from './Slot';


const Home = () => {
    const [data, setData] = useState([]);
    const [pin, setPin] = useState("000000");
    let dat = "04-07-2021";


    const getDetail = async () => {
        await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${dat}`).then((result) => {
            result.json().then((resp) => {
                console.log(resp.sessions)
                setData(resp.sessions)
            })
        })
    }
    const savePin = () => {
        getDetail();
    }
    useEffect(() => {
        getDetail();
    }, [])
    // data.map((item) => console.log(item.name))
    return (
        <>
            <Container style={{ marginTop: "120px", marginBottom: "60px" }}>
                <Toolbar>
                    <Box m={2} p={3}>
                        <TextField
                            label="Enter Pin Code"
                            variant="standard"
                            // type=""
                            onChange={(e) => { setPin(e.target.value) }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={savePin}
                            style={{ marginLeft: 8 }}
                        >click</Button>
                    </Box>
                </Toolbar>
            </Container>
            <Container>
                <Grid container spacing={3}>
                    {data.map((item) => (
                        <Grid item key={item.session_id} xs={12} sm={6} md={4} lg={3}>
                            <Slot item={item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Home
