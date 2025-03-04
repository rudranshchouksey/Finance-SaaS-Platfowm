import { 
    Sheet,
    SheetHeader,
    SheetDescription,
    SheetContent,
    SheetTitle
 } from "../../../components/ui/sheet"
import { useCreateAccount } from "../hooks/use-create-account";
import { useNewAccount } from "../hooks/use-new-account"
import { AccountForm } from "./account-form";
import { insertAccountSchema } from '@/db/schema';
import { z } from 'zod';

const formSchema = insertAccountSchema.pick({
    name: true,
 })

 type FormValues = z.input<typeof formSchema>;


export const NewAccountSheet = () => {
    const { isOpen, onClose } = useNewAccount(); // Ensure hook is called correctly

    const mutation = useCreateAccount()

    const onSubmit = (values: FormValues) => {
        mutation.mutate(values)
    }

    return (
        <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>New Account</SheetTitle>
                    <SheetDescription>
                        Create a new account to track your transactions.
                    </SheetDescription>
                </SheetHeader>
                <AccountForm 
                    onSubmit={onSubmit} 
                    disabled={false}
                    defaultValues={{
                        name: ''
                    }}
                />
            </SheetContent>
        </Sheet>
    )
}
