import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { useEffect, useState } from "react"

export function ListaUsuarios() {

    const [users, setUsers] = useState([])
    const [name, setName] = useState("")

    const APIURL = import.meta.env.VITE_API_URL;


    function handleClick(){
        alert("Clicou")
    }

    useEffect(()=>{
        fetch(`${APIURL}/Users`)
        .then(response => response.json())
        .then(data => setUsers(data))
    },[])

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>AVATAR</TableHead>
          <TableHead>NAME</TableHead>
          <TableHead>EMAIL</TableHead>
          <TableHead className="text-right">AÇÕES</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((pegaItem) => (
          <TableRow key={pegaItem.id}>
            <TableCell className="font-medium">{pegaItem.id}</TableCell>
            <TableCell><img src={pegaItem.avatar} alt="avatar" className="w-[32px]"/></TableCell>
            <TableCell>{pegaItem.name}</TableCell>
            <TableCell>{pegaItem.email}</TableCell>
            <TableCell className="flex gap-2">
            <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Editar</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                    Make changes to your profile here. Click save when you&apos;re done.
                </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-name">Name</Label>
                    <Input id="sheet-demo-name" defaultValue={pegaItem.name} />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-username">Username</Label>
                    <Input id="sheet-demo-username" 
                     defaultValue={pegaItem.username} 
                     value={name}
                     onChange={(e) => {
                        setName(e.target.value)
                        console.log(name)
                    }}
                     />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="sheet-demo-username">Email</Label>
                    <Input id="sheet-demo-username" defaultValue={pegaItem.email} />
                </div>
                </div>
                <SheetFooter>
                <Button onClick={handleClick} type="submit">Save changes</Button>
                <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                </SheetClose>
                </SheetFooter>
            </SheetContent>
            </Sheet>
            <button>Apagar</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
