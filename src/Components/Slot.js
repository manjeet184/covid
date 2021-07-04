import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    Chip,
} from '@material-ui/core';
const Slot = ({ item }) => {
    return (
        <>
            <Card variant="elevation">
                <CardHeader title={item.name} subheader={item.date} />
                <CardContent>
                    {item.available_capacity === 0 ? (
                        <></>
                    ) : (
                        <Chip
                            style={{ marginRight: 20 }}
                            size="small"
                            label={`${item.min_age_limit}+ & Above`}
                        />
                    )}
                </CardContent>
                <CardContent>
                    {item.available_capacity === 0 ? (
                        <></>
                    ) : (
                        <Chip
                            style={{ marginRight: 20 }}
                            size="small"
                            label={item.vaccine}
                        />
                    )}
                    {item.available_capacity === 0 ? (
                        <></>
                    ) : (
                        <>
                            {item.fee_type === 'Free' ? (
                                <></>
                            ) : (
                                <Chip
                                    size="small"
                                    color="secondary"
                                    label={<>Paid {item.fee}</>}
                                />
                            )}
                        </>
                    )}
                </CardContent>
                <CardContent>
                    {item.available_capacity_dose1 === 0 ? (
                        <Chip
                            style={{ marginRight: 10 }}
                            size="small"
                            color="default"
                            label={<>--</>}
                        />
                    ) : (
                        <Chip
                            size="small"
                            style={{
                                marginRight: 20,
                                color: 'black',
                                backgroundColor: 'greenyellow',
                            }}
                            label={<>Dose 1 : {item.available_capacity_dose1}</>}
                        />
                    )}
                    {item.available_capacity_dose2 === 0 ? (
                        <Chip size="small" color="default" label={<>--</>} />
                    ) : (
                        <Chip
                            size="small"
                            style={{ color: 'black', backgroundColor: 'greenyellow' }}
                            label={<>Dose 2 : {item.available_capacity_dose2}</>}
                        />
                    )}
                </CardContent>
            </Card>
        </>
    )
}

export default Slot
