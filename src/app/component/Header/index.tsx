"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Dialog, DialogHeader } from "@/components/ui/dialog";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/nextjs";
// import { Dialog } from "radix-ui";
// import { DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";


const Header = () => {
    const [dialogOpen, setDialogOpen] = React.useState(false);

    return (
        <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedIn>
                <UserButton />
            </SignedIn>
            <SignedOut>
                {/* <SignIn routing="hash" /> */}
                <Button variant="outline" onClick={() => setDialogOpen(true)}>Sign In</Button>

                <Dialog open={dialogOpen} onOpenChange={setDialogOpen} modal={true}>
                    {/* <DialogTrigger>Open</DialogTrigger> */}
                    <DialogContent className="w-auto" style={{padding: '20px'}} showCloseButton={false}>
                        <DialogHeader>
                            <DialogTitle>Sign In</DialogTitle>
                            <DialogDescription>
                                <div className="flex flex-col items-center justify-center" >

                                    <SignIn routing="hash" />
                                </div>

                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

            </SignedOut>
        </header>
    )
}

export default Header;