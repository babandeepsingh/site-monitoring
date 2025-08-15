"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useUserData } from "@/context/UserContext";
import { useUser } from "@clerk/nextjs";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import React, { useEffect } from "react";


const Dashboard = () => {

    const { isSignedIn, user } = useUser();

    const { userData, setUserData } = useUserData();

    user && console.log("User:", user.emailAddresses[0]?.emailAddress, user.id);

    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [sites, setSites] = React.useState<{ [key: string]: any }>({});
    const [selectedChart, setSelectedChart] = React.useState<{ checkcreatedat: any; status: any }[]>([]);
    useEffect(() => {
        user && initiateSignIn(user)


    }, [isSignedIn, user]);

    const initiateSignIn = async (users: any) => {
        if (isSignedIn) {

            const result = await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: user.id, email: user.emailAddresses[0]?.emailAddress, fullName: user.fullName, user: user }),
            });

            const data = await result.json(); // ✅ parse JSON response

            setUserData(data.user);
            console.log("POST:userMessage", userData, data.user);
        }
    }

    useEffect(() => {
        if (userData?.id) {
            fetch('/api/check/' + userData.id)
                .then((response) => response.json())
                .then((data) => {
                    setSites(data.sites);
                    console.log("Fetched sites:", data.sites);
                })

            const results = fetch('/api/check/' + userData.id + '/1'); // Example siteId, replace with actual siteId if needed

            // const data = await result.json(); // ✅ parse JSON response
        }
    }, [userData?.id])

    const handleRefresh = () =>{
        if(userData?.id){
            fetch('/api/cron').then(resp=>resp.json()).then(data=>console.log(data))
        }
    }

    const handleSiteClick = (vals: []) => {
        setSelectedChart([])
        console.log(vals, "vals::::")
        setSelectedChart(vals)
    }

    return (
        <>
            {userData ? <h1>Welcome {userData?.fullname}</h1> : <div>Loading....</div>}
            <div className="grid grid-cols-3 gap-4">
                {Object.keys(sites).length > 0 && Object.keys(sites).map(site => (
                    <Card key={site} className="w-full max-w-sm card-custom" onClick={e => handleSiteClick(sites[site])}><CardHeader><CardTitle className="p-8 p12">{site}</CardTitle></CardHeader></Card>
                ))}

                {selectedChart.length > 0 && selectedChart.map(chart => <>

                    {chart?.checkcreatedat}
                    {chart?.status}
                </>)}
                <Button onClick={handleRefresh}>Refresh</Button>
            </div>


        </>
    )
}

export default Dashboard;