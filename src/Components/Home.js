import { Box, Button, Grid, TextField, Container, Toolbar } from '@material-ui/core'
import { useEffect, useState } from 'react';
import Slot from './Slot';


const Home = () => {
    const [data, setData] = useState([]);
    const [pin, setPin] = useState("000000");
    let [date, setdate] = useState("dd-mm-yyyy")
    const [filt, setFilt] = useState([]);

    const getDetail = async () => {
        await fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`).then((result) => {
            result.json().then((resp) => {
                // console.log(resp.sessions)
                setData(resp.sessions);
                setFilt(data);
            })
        })
    }
    useEffect(() => {
        getDetail();
    }, [])
    const getAvl = () => {
        let fil = data.filter((e) => e.available_capacity !== 0)
        setFilt(fil)
    }


    const getFree = () => {
        let free = data.filter((e) => e.fee_type === "Free")
        setFilt(free)
    }
    const getPaid = () => {
        let paid = data.filter((e) => e.fee_type === "Paid")
        setFilt(paid)
    }

    date = date.split("-").reverse().join("-");

    const savePin = () => {
        getDetail()
    }

    // data.map((item) => console.log(item.name))
    return (
        <>
            <Container style={{ marginTop: "120px", marginBottom: "60px" }}>
                <Toolbar>
                    <Box m={2} p={3}>
                        <TextField
                            label="Enter Pin Code"
                            variant="standard"
                            type="number"
                            onChange={(e) => { setPin(e.target.value) }}
                        />
                        <label style={{ marginInline: "50px" }}>
                            Date : <input type="date" onChange={(e) => { setdate(e.target.value) }}></input>
                        </label>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={savePin}
                            style={{ marginLeft: 8 }}
                        >click</Button>
                    </Box>
                </Toolbar>
            </Container>
            <Container style={{ flexGrow: 1, marginInline: 70, marginBottom: 25 }}>
                <Button variant="outlined" color="primary" onClick={getAvl}>Only available</Button>
                <Button style={{ marginInline: 15 }} variant="outlined" color="primary" onClick={getFree}>Free</Button>
                <Button variant="outlined" color="primary" onClick={getPaid}>Paid</Button>
            </Container>
            <Container>
                <Grid container spacing={3}>
                    {filt.map((item) => (
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
