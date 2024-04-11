"use client";
import { addNewProductService } from "@/app/_services/addNewProductService";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X } from "lucide-react";

export default function CreatedProductTable() {
  const { subCategory, showTable, result, reset } = addNewProductService();

  return showTable ? (
    <div className="my-8 bg-white rounded-3xl p-4 w-full md:w-3/5 lg:w-1/2 mx-auto">
      <div className="w-full flex justify-between items-center p-3 font-medium text-2xl">
        <h2>Product details</h2>
        <Button type="button" variant="default" onClick={() => reset()}>
          <X />
        </Button>
      </div>
      <Table className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/4">Label</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Category</TableCell>
            <TableCell>Paid</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Sub Category</TableCell>
            <TableCell>{subCategory.label}</TableCell>
          </TableRow>
          {result.map(({ label, value }, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{label}</TableCell>
              <TableCell>{value || "N/A"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ) : null;
}
