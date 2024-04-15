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
                <div className="grid gap-4 py-4">

                </div>
                <DialogFooter>
                    <Button>
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
                    <Button>
                        Join Call
                    </Button>
                </DialogFooter>
            </DialogContent>}
        </Dialog>
    )
}
