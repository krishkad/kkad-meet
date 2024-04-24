"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import Image from "next/image";
import { ReactNode } from "react";


interface MeetingDialog {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    type?: string | undefined;
    buttonText?: string;
    image: string;
    children?: ReactNode
}


export default function MeetingDialog({ open, onClose, title, description, buttonText, image, children }: MeetingDialog) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="w-[320px] sm:max-w-[425px]" onOpenAutoFocus={(e)=> e.preventDefault()} >
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="h-max w-full">
                    <div className="h-[200px] w-full py-4">
                        <div className="relative h-full w-full">
                            <Image src={image} fill className="object-contain" sizes="height:100%,width:100%" alt="call" />
                        </div>
                    </div>
                    {children}
                </div>
                <DialogFooter>
                    <Button className="w-full">
                        {buttonText}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
