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
import { ReactNode, useState } from "react";
import { PiCircleNotchBold } from "react-icons/pi";


interface MeetingDialog {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    type?: string | undefined;
    buttonText?: string;
    image: string;
    children?: ReactNode;
    onClick?: () => void;
}


export default function MeetingDialog({ open, onClose, title, description, buttonText, image, children, onClick }: MeetingDialog) {

    const [isClick, setIsClick] = useState(true);

    const handleOnClick = () => {
        if (onClick) {
            onClick();
        }
        setIsClick(false)
    }


    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="w-[320px] sm:max-w-[425px]" onOpenAutoFocus={(e:any) => e.preventDefault()} >
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <div className="h-max w-full">
                    <div className="h-[200px] w-full py-4">
                        <div className="relative h-full w-full">
                            <Image src={image} fill priority className="object-contain" sizes="height:100%,width:100%" alt="call" />
                        </div>
                    </div>
                    {children}
                </div>
                <DialogFooter>
                    <Button className="w-full" onClick={handleOnClick} disabled={isClick ? false : true}>
                        {isClick ? buttonText : <PiCircleNotchBold className="w-max h-full rotate-[360] repeat-infinite animate-spin" />}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
