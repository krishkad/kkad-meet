import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image";


interface MeetingDialog {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    type: string | undefined;
}

export default function MeetingDialog({ open, onClose, type }: MeetingDialog) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            {type === 'instantCall' && <DialogContent className="w-[320px] sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Start Instant Call</DialogTitle>
                    <DialogDescription>
                        Click on start call and share the link with your family/friend
                    </DialogDescription>
                </DialogHeader>
                <div className="h-[200px] w-full py-4">
                    <div className="relative h-full w-full">
                        <Image src={'/start-call.svg'} fill className="object-contain" sizes="height:100%,width:100%" alt="start call" />
                    </div>
                </div>
                <DialogFooter>
                    <Button className="w-full">
                        Start Call
                    </Button>
                </DialogFooter>
            </DialogContent>}
            {type === 'joinCall' && <DialogContent className="w-[320px] sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Join Call</DialogTitle>
                    <DialogDescription>
                        Paste link and join your Call
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="relative w-full h-[180px]">
                        <Image src={'/join-call.svg'} fill sizes="height:100%,width:100%" className="object-contain" alt="join call" />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <Label htmlFor="join-call-link" className="font-semibold">
                            Enter call link
                        </Label>
                        <Input
                            id="join-call-link"
                            className="col-span-3"
                            placeholder="Enter Link"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button className="w-full">
                        Join Call
                    </Button>
                </DialogFooter>
            </DialogContent>}
        </Dialog>
    )
}
